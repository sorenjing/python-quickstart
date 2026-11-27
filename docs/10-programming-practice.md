---
layout: default
title: 10 程序题同类练习
description: 从读输入到逐步写出公式、循环、函数、统计和 CSV 程序。
kind: lesson
---

# 10｜程序题同类练习

做题前，先在纸上写三件事。**读几行、每行怎么拆、最后打印什么。** 先选没掌握的题型，独立做一次，再展开解法。

<h2 id="formula-practice">从输入读出数字，再套公式</h2>

食品包装采用正方形贴纸。输入旧贴纸和新贴纸的边长，算一张旧贴纸的面积相当于多少张新贴纸，向上取整。假定长度为正。再改成计算一段时间后剩余比例的题。

**先写中间量。** 分别平方，算面积比，最后才取整。增长、衰减这类题也一样，写出每次变化倍数，再用乘方处理重复的次数。分母可能为 0 时，在做除法前加判断。

<details>
<summary>展开解法</summary>
<pre><code>import math

old_side = float(input())
new_side = float(input())
ratio = old_side ** 2 / new_side ** 2
print(math.ceil(ratio))</code></pre>
<p>依次输入 8 和 3，输出 8。固定小数位时，用如 f"{ratio:.2f}" 的格式化。题目明确要求 round 时再写 round(ratio, 2)。</p>
</details>

<h2 id="branches-practice">分段先检查边界，再决定输出</h2>

输入一行三个逗号分隔的长度。输出“无法组成”“三边相等”“两边相等”或“三边不同”。非法输入也输出“无法组成”。

**先判有效，再分类。** 排序后，若最短边大于 0 且两条短边之和大于最长边，才进入后面的类别。做等级和分段计费题时，用同样的方法先确认输入有效，再在边界各试一次。

<details>
<summary>展开解法</summary>
<pre><code>try:
    parts = input().split(",")
    lengths = []
    for part in parts:
        lengths.append(float(part))
    a, b, c = sorted(lengths)
except ValueError:
    print("无法组成")
else:
    if a &lt;= 0 or a + b &lt;= c:
        print("无法组成")
    elif a == c:
        print("三边相等")
    elif a == b or b == c:
        print("两边相等")
    else:
        print("三边不同")</code></pre>
<p>逗号拆出来的每一项先转数字，再放进列表。排序后依次交给 a、b、c，分别是最短、居中和最长的边。输入 5,5,6 时，短边和大于最长边，且 a 等于 b，输出“两边相等”。换成 2,3,5 时，短边和恰好等于最长边，输出“无法组成”。</p>
</details>

<h2 id="loops-practice">先确定行列，再决定每格是什么</h2>

画三行居中的小旗，第一行 1 个加号，第二行 3 个，第三行 5 个。每行末尾空格省略。

**先手写每一行的数量。** 用表格列出行号、前导空格、符号个数，再找关系。矩阵题通常是每行固定列数，格子的值可以用行号与列号算。乘法表还要把每格排成指定算式。

<details>
<summary>展开解法</summary>
<pre><code>rows = 3
for row in range(1, rows + 1):
    spaces = rows - row
    signs = 2 * row - 1
    print(" " * spaces + "+" * signs)</code></pre>
<p>三行依次有 2、1、0 个前导空格，再输出 1、3、5 个加号。若题目要求累计闭区间里的奇数，可以写 range(第一个奇数, 右端点 + 1, 2)。若要把逐步变小的项相加，每轮先比较阈值，再把当前项加入总和。</p>
</details>

<h2 id="strings-practice">字符串先拆分，保留有含义的字符</h2>

输入形如 `C.007` 的编号，点前是区段，点后是流水号。输出区段和流水号，中间一个空格，保留流水号的前导零。

<details>
<summary>展开解法</summary>
<pre><code>code = input().strip()
group, number = code.split(".", 1)
print(group, number)</code></pre>
<p>输入 C.007，输出 C 007。若题目要求数值 7，才用 int(number)。如果输入从 1 开始的编号并用列表找标签，要先在有效范围内判断，再用“编号减 1”取元素。</p>
</details>

<h2 id="list-practice">读一批数据，排序和统计</h2>

逐行读入观测值，遇到 `end` 结束。输出观测值的数量、从大到小的列表和平均值。空记录只输出数量和空列表。

<details>
<summary>展开解法</summary>
<pre><code>values = []
while True:
    text = input().strip()
    if text == "end":
        break
    values.append(float(text))

print(len(values))
print(sorted(values, reverse=True))
if values:
    print(sum(values) / len(values))</code></pre>
<p>依次输入 7、1、4、end，依次输出 3、[7.0, 4.0, 1.0]、4.0。若题目改成两行空格分隔的整数，先拆行再转整型，把两份列表用 + 拼接，还能沿用排序这一步。中位数和方差可继续看第 09 课。</p>
</details>

<h2 id="functions-practice">用函数把问题拆成两步</h2>

给定 18，找出所有加起来为 18 的不同素数组合。较小数放前面，相同的一对只打印一次。

**先问小问题。** 一个函数只判断某个整数是否为素数，另一段循环决定要测哪些整数。每次选左边的数，就能算出右边的数。

<details>
<summary>展开解法</summary>
<pre><code>def is_prime(value):
    if value &lt; 2:
        return False
    for factor in range(2, value):
        if value % factor == 0:
            return False
    return True

target = 18
for left in range(2, target // 2 + 1):
    right = target - left
    if is_prime(left) and is_prime(right):
        print(left, right)</code></pre>
<p>输出 5 13 和 7 11。检查区间是否应该包含 9，以及题目是否想要重复输出左右交换后的组合。读函数题时，圈出在哪一处 print、在哪一处 return。默认参数只在该参数省略时使用。</p>
</details>

<h2 id="dictionary-practice">按键查值，再决定下一步</h2>

用字典保存展区和对应颜色。最多读入三对“展区、颜色”，每对占两行。匹配时输出“找到”并停止。当三对都不匹配时输出“未找到”。

<details>
<summary>展开解法</summary>
<pre><code>colors = {"东区": "蓝", "西区": "绿"}
found = False
for _ in range(3):
    area = input().strip()
    color = input().strip()
    if area in colors and colors[area] == color:
        found = True
        break

if found:
    print("找到")
else:
    print("未找到")</code></pre>
<p>依次输入“南区、绿、西区、绿”四行，只输出一次“找到”。先查键，键不存在时短路跳过取值。如果题目要求记录新展区，可以在键不存在时赋值。如果要数各类颜色，用 values() 遍历，再往计数字典加 1。</p>
</details>

<h2 id="file-practice">从表格逐行读取，再筛选和汇总</h2>

以下三行模拟已经从文本文件读出的数据。每行依次是货品、数量、日期。只统计第 5 至第 7 月的数量，输出总量最高的货品。文件模式与编码可沿用第 08 课。

<details>
<summary>展开解法</summary>
<pre><code>lines = ["铅笔,3,2026/5/12", "墨水,9,2026/8/01", "铅笔,2,2026/7/20"]
totals = {}
for line in lines:
    name, quantity, date = line.strip().split(",")
    month = int(date.split("/")[1])
    if 5 &lt;= month &lt;= 7:
        totals[name] = totals.get(name, 0) + int(quantity)

for name, quantity in sorted(totals.items(), key=lambda item: item[1], reverse=True)[:1]:
    print(name, quantity)</code></pre>
<p>输出“铅笔 5”。例如 <code>2026/5/12</code> 用斜杠拆开后是 <code>["2026", "5", "12"]</code>，下标 1 拿到月份文字 <code>"5"</code>。两笔铅笔记录都命中，数量从 3 累计到 5，墨水所在的 8 月没有命中。</p>
<p>处理真实文件时，先用题目指定的编码打开。如果要按条件直接打印明细，每行满足条件就打印。如果要排名，留到循环结束再排序。碰到字段中可能有逗号的 CSV，改用 csv.reader。</p>
</details>

[上一课：考前自测](09-review.md) · [返回课程目录](index.html)
