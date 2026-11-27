---
layout: default
title: 08 文件与 CSV
description: 理解文件模式、编码和读取位置，完成筛选、汇总和排序。
kind: lesson
---

# 08｜文件与 CSV

## 打开文件

文件路径可以是文件名，也可以包含目录。相对路径从程序的当前工作目录开始找。Windows 路径可以用 `"D:/data/notes.txt"`，也可以用原始字符串 `r"D:\data\notes.txt"`。普通字符串里的反斜杠要写成两个，比如 `"D:\\data\\notes.txt"`。

| 模式 | 行为 |
| --- | --- |
| `r` | 读取，文件不存在时报错。省略模式时默认使用它 |
| `w` | 写入，文件不存在时创建，已有内容会被清空 |
| `a` | 追加，文件不存在时创建，写入放在末尾 |
| `x` | 新建，目标已存在时出错 |
| `t`、`b` | 文本模式默认使用 `t`，如 `rb` 表示以字节读取 |
| `+` | 增加读写能力，如 `r+` 可读写已有文件，`w+` 会先清空已有内容 |

编码规定文字怎样保存成字节。文本模式显式写 `encoding="utf-8"`。若题目说明源文件采用 GBK，读取时改用 `encoding="gbk"`。二进制模式读到的是 `bytes`，不传 `encoding`。

用 `with open(...) as file:` 打开，缩进块结束会自动关闭文件。手动打开时要记得调用 `file.close()`。下面示例请在一个空目录运行，会创建 `notes.txt`。

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

- `read()` 读取当前位置之后的内容，`read(n)` 在文本模式下最多读取 `n` 个字符。
- `readline()` 读取一行，`readlines()` 返回剩余各行组成的列表，文件里的换行符会保留。到结尾后 `read()`、`readline()` 返回空字符串，`readlines()` 返回空列表。
- 读取会推动位置。`seek(0)` 回到开头。也可以用 `for line in file:` 一行行读取。
- `write()` 和 `writelines()` 都依输入内容写入。需要换行时把 `\n` 写进字符串。`"\n".join(字符串列表)` 可以把各项用换行符连接。

## 按行和列理解 CSV

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

下面只保留金额在 8 到 20 元之间的记录，按类别汇总，再按总额取前两名。

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
