---
layout: default
title: 09 考前自测
description: 用识记、程序输出、填空、改错和编程题检查自己能否独立解题。
kind: lesson
---

# 09｜考前自测

写完再展开答案。读程序时，把变量的初值、每轮变化和真正执行到的 `print()` 分开记录。

## 考前速查

| 如果卡在这里 | 先检查 |
| --- | --- |
| 输出或类型不对 | `input()` 得到字符串，`/`、`//`、`%` 分别是除法、向下取商、取余 |
| 循环次数不对 | `range` 的终点排除，从表格里写出头两轮和最后一轮 |
| 累计结果不对 | 累加器、计数器写在循环外初始化，先决定何时更新 |
| 取不到元素 | 索引从 0 开始，切片右端排除，字典用键查找 |
| 函数调用结果不对 | 先对齐实参和形参，看执行到的 `return`，检查是否修改了共享的列表 |
| 递归停不下来 | 写出最小一两个输入，检查每次调用是否更接近停止条件 |
| 文件统计不对 | 看模式、编码、是否跳过表头，先转数字，再筛选、累计、最终排序 |

<h2 id="self-check">识记、选择与判断</h2>

1. Python 的创始人是谁？Python 源文件通常使用什么后缀？
2. 下面哪个可以作为变量名？A. `2score`，B. `class`，C. `total_score`。
3. 判断正误。 `randint(2, 5)` 可能得到 5。 `range(2, 5)` 会产生 5。
4. 想追加文本又保留旧内容，选择 `r`、`w`、`a` 中的哪一个？

<details>
<summary>展开答案</summary>
<p>1. Guido van Rossum，通常为 <code>.py</code>。2. C。变量名不能以数字开头，<code>class</code> 是关键字。3. 第一条正确，第二条错误。4. <code>a</code>。</p>
</details>

## 程序输出

~~~python
values = [2, 4, 6]
copy = values[:]
values[1] = 7
total = 0

for number in values:
    if number % 2 == 0:
        total += number

print(copy[-1], total)
~~~

<details>
<summary>展开答案</summary>
<p>切片生成独立的外层列表，<code>copy[-1]</code> 是 6。<code>values</code> 变成 <code>[2, 7, 6]</code>，偶数为 2、6。输出 <code>6 8</code>。</p>
</details>

## 填空和改错

1. 填空。求从 2 到 8（含两端）的偶数之和。原作者写了 `total = 0` 和 `print(total)`，请补中间两行。
2. 改错。以下程序想判断输入是否至少为 60。说明错误原因，并让它能正确处理整数输入。

~~~text
score = input()
if score >= 60
print("通过")
~~~

<details>
<summary>展开答案</summary>
<pre><code>total = 0
for number in range(2, 9, 2):
    total += number
print(total)</code></pre>
<p>偶数依次是 2、4、6、8，输出 <code>20</code>。</p>
<pre><code>score = int(input())
if score &gt;= 60:
    print("通过")</code></pre>
<p><code>input()</code> 返回字符串，需要转换后再比较。条件末尾写冒号，块里的语句缩进。</p>
</details>

<h2 id="statistics">编程一｜统计一组分数</h2>

以 `[4, 1, 7, 4]` 为例，求平均数、中位数和用总体公式计算的方差。再去掉一个最高分和一个最低分，计算剩下分数的平均数。假设至少有三条记录。

<details>
<summary>查看思路与答案</summary>
<p>先排序求中位数。长度为奇数时取中间一项，偶数时取中间两项的平均数。方差把每个数与平均数的差平方，再对这些平方求平均。</p>
<pre><code>scores = [4, 1, 7, 4]
ordered = sorted(scores)
size = len(scores)
middle = size // 2
average = sum(scores) / size
if size % 2 == 0:
    median = (ordered[middle - 1] + ordered[middle]) / 2
else:
    median = ordered[middle]

squares = 0
for score in scores:
    squares += (score - average) ** 2
variance = squares / size

trimmed = ordered[1:-1]
print(average, median, variance, sum(trimmed) / len(trimmed))</code></pre>
<p>输出 <code>4.0 4.0 4.5 4.0</code>。</p>
</details>

## 编程二｜统计名称并保留顺序

输入记录用 `"茶,水,茶,果汁,水,茶"` 表示。按首次出现的顺序，每行输出一种饮品及它的数量，再输出购买最多的饮品。

<details>
<summary>查看思路与答案</summary>
<p>先拆分字符串，再用字典累计。Python 3.7 起，字典保留插入顺序。<code>max</code> 的 <code>key</code> 指定拿计数比较，若并列，返回首先遇到的名称。</p>
<pre><code>orders = "茶,水,茶,果汁,水,茶"
counts = {}
for name in orders.split(","):
    counts[name] = counts.get(name, 0) + 1

for name, count in counts.items():
    print(name, count)
print(max(counts, key=counts.get))</code></pre>
<p>依次输出 <code>茶 3</code>、<code>水 2</code>、<code>果汁 1</code>、<code>茶</code>。</p>
</details>

## 编程三｜生成组合并筛选

写程序输出 10 到 39 之间，十位和个位之和等于 5 的所有整数。使用嵌套循环按从小到大的顺序生成候选。

<details>
<summary>查看思路与答案</summary>
<p>外层取十位 1、2、3，内层取个位 0 到 9。命中条件时用 <code>十位 * 10 + 个位</code> 还原整数。</p>
<pre><code>for tens in range(1, 4):
    for ones in range(10):
        if tens + ones == 5:
            print(tens * 10 + ones)</code></pre>
<p>依次输出 <code>14</code>、<code>23</code>、<code>32</code>。</p>
</details>

[上一课：文件与 CSV](08-files-csv.md) · [下一课：程序题同类练习](10-programming-practice.md)
