---
layout: default
title: 08 文件与 CSV
description: 理解文件模式、编码和读取位置，完成筛选、汇总和排序。
kind: lesson
---

# 08｜文件与 CSV

<h2 id="file-modes">打开文件</h2>

**路径**告诉 Python 去哪里找文件。像 `notes.txt` 这样只写文件名，程序通常会从你在终端里运行命令的目录开始找，这叫相对路径。也可以写出包含目录的完整位置。Windows 路径可以用 `"D:/data/notes.txt"`，也可以用原始字符串 `r"D:\data\notes.txt"`。普通字符串里的反斜杠要写成两个，比如 `"D:\\data\\notes.txt"`。

| 模式 | 行为 |
| --- | --- |
| `r` | 读取，文件不存在时报错。省略模式时默认使用它 |
| `w` | 写入，文件不存在时创建，已有内容会被清空 |
| `a` | 追加，文件不存在时创建，写入放在末尾 |
| `x` | 新建，目标已存在时出错 |
| `t`、`b` | 文本模式默认使用 `t`，如 `rb` 表示以字节读取 |
| `+` | 增加读写能力，如 `r+` 可读写已有文件，`w+` 会先清空已有内容 |

编码规定文字怎样保存成字节。文本模式显式写 `encoding="utf-8"`。若题目说明源文件采用 GBK，读取时改用 `encoding="gbk"`。二进制模式读到的是 `bytes`，不传 `encoding`。

`open("notes.txt", "w", encoding="utf-8")` 依次指定文件名、打开用途和编码。`as file` 把打开的文件交给名字 `file`，缩进里就能用 `file.write(...)` 写入。`with` 会在缩进结束时关闭文件。手动打开的文件用完要调用 `file.close()`。

下面示例先写、再重新打开来读。请在空目录运行，会创建 `notes.txt`。`repr()` 把值显示成能看见引号和 `\n` 的文字，方便判断究竟读到了什么。

~~~python
with open("notes.txt", "w", encoding="utf-8") as file:
    file.write("甲\n乙\n")
    file.writelines(["丙\n", "丁\n"])

with open("notes.txt", "r", encoding="utf-8") as file:
    print(file.readline().strip())
    print(file.readlines())
    print(repr(file.read()))
    file.seek(0)
    print(repr(file.read(2)))
~~~

~~~text
甲
['乙\n', '丙\n', '丁\n']
''
'甲\n'
~~~

<h2 id="file-position">读写内容后，位置在哪里</h2>

- `read()` 读取当前位置之后的内容，`read(n)` 在文本模式下最多读取 `n` 个字符。
- `readline()` 读取一行，`readlines()` 返回剩余各行组成的列表，文件里的换行符会保留。到结尾后 `read()`、`readline()` 返回空字符串，`readlines()` 返回空列表。
- 读取会推动位置。`seek(0)` 回到开头。也可以用 `for line in file:` 一行行读取。
- `write()` 和 `writelines()` 都依输入内容写入。需要换行时把 `\n` 写进字符串。`"\n".join(字符串列表)` 可以把各项用换行符连接。

`seek(偏移量, 从哪算)` 用来移动位置。第二个参数可写 0（开头）、1（当前位置）或 2（末尾），省略时为 0。文本文件适合用 `seek(0)` 回到开头，或用 `tell()` 记录位置再回去。二进制模式按字节移动，`seek(-1, 2)` 表示移到末尾前一个字节。判断某次调用是否合法时，要看文件的打开方式和偏移从哪算。

<h2 id="csv-rows">按行和列理解 CSV</h2>

一行有多列的数据可以用 CSV 保存。简单的逗号分隔行可以用 `line.strip().split(",")` 拆开。遇到带引号、字段中有逗号的 CSV，使用标准库中的 `csv.reader`，它会正确识别字段。打开 CSV 文件时可以传 `newline=""` 交给模块处理换行。每一行读出的是字符串列表，做数值比较和加法前先转换。

把以下内容保存为 UTF-8 编码的 `sales.csv`，放到运行目录。

~~~csv
类别,名称,金额
文具,铅笔,12
食品,苹果,21
文具,夹子,5
食品,"饼干, 原味",8
饮品,茶,16
~~~

第一行的「类别、名称、金额」是列名，也叫**表头**。先跑一小段看看读到的内容。`csv.reader(file)` 把文件准备成可以一行行读取的记录，`next(rows)` 每执行一次取一行。

~~~python
import csv

with open("sales.csv", "r", encoding="utf-8", newline="") as file:
    rows = csv.reader(file)
    print(next(rows))
    print(next(rows))
~~~

~~~text
['类别', '名称', '金额']
['文具', '铅笔', '12']
~~~

现在可以把第二行的三列交给三个名字。`for category, name, text in rows:` 每轮把一行的第 1、2、3 列分别交给这三个名字。金额 `'12'` 带引号，还是文字，要用 `int(text)` 才能拿去比较。

下面只保留金额在 8 到 20 元之间的记录。每遇到一条符合条件的记录，找到该类别之前的总额，没有就从 0 开始，再加上这笔金额。读完才排序。`totals.items()` 这类写法会逐对提供类别和总额。下面的 `key=lambda pair: pair[1]` 指定按每对的第 2 项，也就是总额排名，`reverse=True` 表示从大到小。最后 `[:2]` 取前两项。

~~~python
import csv

totals = {}
with open("sales.csv", "r", encoding="utf-8", newline="") as file:
    rows = csv.reader(file)
    next(rows, None)
    for category, name, text in rows:
        amount = int(text)
        if 8 <= amount <= 20:
            totals[category] = totals.get(category, 0) + amount

ranked = sorted(totals.items(), key=lambda pair: pair[1], reverse=True)
for category, total in ranked[:2]:
    print(category, total)
~~~

~~~text
饮品 16
文具 12
~~~

`next(rows, None)` 读取并跳过表头。空文件会得到 `None`。排序写在循环外，等数据读完再排，一次就能得到最终总额。相同总额会保留类别的首次加入顺序。题目若要求同分按类别升序，可改为 `key=lambda pair: (-pair[1], pair[0])` 并省略 `reverse=True`。表头之后没有记录时，程序不会输出排名。

<h2 id="self-check">随堂练习</h2>

改为统计金额大于等于 12 元的记录，只输出总额最高的类别。再预测只有表头时的输出。

<details>
<summary>查看思路与答案</summary>
<p>把条件改成 <code>amount &gt;= 12</code>，把切片改成 <code>ranked[:1]</code>。结果是 <code>食品 21</code>。只有表头时，字典和排序结果都是空的，循环不会输出。</p>
</details>

[上一课：模块、随机数与异常](07-modules-random-exceptions.md) · [下一课：考前自测](09-review.md)
