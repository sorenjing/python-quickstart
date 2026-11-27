---
layout: default
title: 03 条件与循环
description: 学会分支、循环、计数和多重循环。
kind: lesson
---

# 03｜条件与循环

<h2 id="branches">按条件选一条路</h2>

~~~python
score = 75
if score >= 90:
    print("优秀")
elif score >= 60:
    print("及格")
else:
    print("继续练习")
~~~

输出 `及格`。Python 从上往下找第一个成立的条件。条件行以冒号结尾，同一层的代码缩进相同，通常用 4 个空格。单独的 `if` 条件为假时，可以一行也不执行。多个独立的 `if` 各自判断。

`"及格" if score >= 60 else "继续练习"` 是在两个值之间做选择的写法。题目给分段区间时，先检查边界有没有漏掉或重复。

<h2 id="for-loop">循环次数明确时用 for</h2>

~~~python
total = 0
for value in range(1, 4):
    total += value
print(total)  # 6
~~~

| 轮次 | `value` | 累加后的 `total` |
| --- | --- | --- |
| 开始 | 未取值 | 0 |
| 第 1 轮 | 1 | 1 |
| 第 2 轮 | 2 | 3 |
| 第 3 轮 | 3 | 6 |

`range(1, 4)` 取 1、2、3，包含起点，终点 4 停在外面。`range(3)` 从 0 开始，`range(5, 0, -2)` 取 5、3、1。`for char in "ABC"` 会依次取出三个字符。

累加通常从 `0` 开始，累乘从 `1` 开始。统计满足条件的个数时，可以在 `if` 的缩进里写 `count += 1`。

<h2 id="while-loop">由条件决定何时停止</h2>

~~~python
number = 20
turns = 0
while number > 3:
    number = number // 2
    turns += 1
print(number, turns)  # 2 3
~~~

每轮开始前检查条件。上例依次把 20 变成 10、5、2，共进入循环 3 次。数循环执行次数时，最后一次判断失败也要看，但此时不会再进入循环体。

<h2 id="loop-exit">跳过、退出与循环的 else</h2>

~~~python
for value in range(1, 6):
    if value == 2:
        continue
    if value == 4:
        break
    print(value, end=" ")
# 输出 1 3，后面还有一个空格
~~~

`continue` 跳到下一轮。`break` 结束所在的最内层循环。`pass` 什么都不做，执行完会继续向下。

~~~python
number = 17
for divisor in range(2, number):
    if number % divisor == 0:
        print("合数")
        break
else:
    print("素数")
~~~

`else` 与 `for` 对齐。循环走完且没执行过 `break` 才进入它，`while` 的 `else` 也遵循这个规则。判断素数时先排除小于 2 的整数。

<h2 id="nested-loops">双层循环</h2>

~~~python
for row in range(1, 4):
    for col in range(1, row + 1):
        print(row * col, end=" ")
    print()
~~~

三行分别是 `1`、`2 4`、`3 6 9`。外层每走一步，内层从头执行一遍。`print()` 与内层循环对齐，所以它在每行结束时执行。

<h2 id="two-values">用表格追踪两个变量</h2>

斐波那契数列从 1、1 开始，后面每项等于前两项之和。每轮保留两个相邻的数，再把这对数向后移一项。

~~~python
first, second = 1, 1
for _ in range(4):
    first, second = second, first + second
print(first)
~~~

| 执行到哪一步 | `first` | `second` |
| --- | --- | --- |
| 循环前 | 1 | 1 |
| 第 1 轮后 | 1 | 2 |
| 第 2 轮后 | 2 | 3 |
| 第 3 轮后 | 3 | 5 |
| 第 4 轮后 | 5 | 8 |

输出 `5`。逗号分开两项，Python 先用两个旧值算等号右边，再把结果分别交给左侧的两个名字。拆成依次更新的两行时，第二行会读到已修改的第一个值。

<h2 id="self-check">快练</h2>

预测下面代码的输出。留意最后一次执行的是哪条语句。

~~~python
total = 0
for n in range(2, 8):
    if n == 6:
        break
    if n % 2 == 1:
        continue
    total += n
print(total)
~~~

<details>
<summary>查看答案</summary>
<p>输出 <code>6</code>。先加 2，跳过 3，再加 4，跳过 5，遇到 6 时退出，所以 6 本身没有加进去。</p>
</details>

---

[上一课](02-types-operators.md) · [下一课：字符串](04-strings.md)
