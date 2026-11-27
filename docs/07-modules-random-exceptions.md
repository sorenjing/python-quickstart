---
layout: default
title: 07 模块、随机数与异常
description: 学会导入标准库，判断随机数的取值范围，并处理常见运行错误。
kind: lesson
---

# 07｜模块、随机数与异常

<h2 id="imports">导入模块</h2>

模块是一份可以导入使用的 Python 代码。Python 自带的模块组成标准库，`math` 和 `random` 都在里面。

~~~python
import math
from math import sqrt

print(math.floor(3.8))
print(sqrt(81))
~~~

输出 `3` 和 `9.0`。`import math as m` 可以给模块取短名，此时写 `m.sqrt(81)`。

| 写法 | 含义 |
| --- | --- |
| `math.floor(x)`、`math.ceil(x)` | 分别向下、向上取整 |
| `math.sqrt(x)` | 求平方根，`x` 应为非负数 |
| `math.pi` | 圆周率近似值 |
| `abs(x)`、`round(x, n)` | 求绝对值、按指定小数位舍入，都是内置函数 |

`math.factorial(n)` 计算非负整数的阶乘。例如 `math.factorial(4)` 得到 24，因为从 1 乘到 4。科学计算常用到 NumPy，题库只需认出它是用于数组和矩阵计算的第三方库。

<h2 id="random-ranges">随机数的边界</h2>

| 写法 | 需要记住的范围或效果 |
| --- | --- |
| `random.random()` | 浮点数，范围 `[0.0, 1.0)` |
| `random.uniform(a, b)` | 两端之间的浮点数，浮点舍入会影响终点能否取到 |
| `random.randint(a, b)` | 整数，包含 `a` 和 `b` |
| `random.randrange(start, stop, step)` | 从对应的 `range` 取整数，右端排除 |
| `random.choice(values)` | 从非空序列选一个 |
| `random.shuffle(values)` | 在原列表上打乱 |
| `random.sample(values, k)` | 按位置无放回抽 `k` 项，返回新列表 |
| `random.seed(7)` | 设置种子，在同一 Python 环境下方便复现后续抽样 |

~~~python
import random

random.seed(7)
print(random.randrange(2, 10, 2))
~~~

本例输出 `6`。候选值是 `2, 4, 6, 8`。种子放在抽样前，同一轮的循环里连续调用随机函数。

<h3 id="random-area">用随机点估算面积</h3>

在边长为 1 的正方形产生随机点。若 `x*x + y*y <= 1`，点落在单位圆的四分之一内。命中占比乘 4 就是圆周率近似值。把条件换成例如 `y <= x`，命中占比乘以正方形面积就是对应区域的面积估计。

~~~python
import random

random.seed(7)
trials = 1000
hits = 0
for _ in range(trials):
    x = random.random()
    y = random.random()
    if x * x + y * y <= 1:
        hits += 1

estimate = 4 * hits / trials
print(round(estimate, 3))
~~~

本例输出 `3.152`。试验结果会受种子和抽样次数影响。

<h2 id="exceptions">遇到错误怎么走</h2>

运行中出错时，当前 `try` 中剩下的行会跳过。Python 从上到下寻找能处理该错误的 `except`。没有异常时执行 `else`，离开结构前执行 `finally`。

~~~python
try:
    number = int("2.5")
    print(number)
except ValueError:
    print("请输入整数")
else:
    print("转换成功")
finally:
    print("本次处理结束")
~~~

输出是 `请输入整数`、`本次处理结束`。把 `"2.5"` 换成 `"25"`，会先输出 `25`，再输出 `转换成功` 和 `本次处理结束`。

| 错误 | 常见原因 |
| --- | --- |
| `SyntaxError`、`IndentationError` | 代码语法或缩进写错 |
| `NameError` | 使用尚未定义的名字 |
| `TypeError` | 参数类型或数量不合要求，如 `"3" + 2` |
| `ValueError` | 类型合适但值无法处理，如 `int("2.5")` |
| `ZeroDivisionError` | 除数为 0 |
| `IndexError`、`KeyError` | 列表下标超界，或字典缺少键 |
| `FileNotFoundError` | 读取的文件不存在 |

捕获多种错误可写 `except (ValueError, TypeError):`。若同时写具体错误和它的上层类别（如 `Exception`），具体错误放前面。输出题要区分代码文件在开始执行前解析失败，和运行到某一句才发生错误。

题目中若出现 `eval("2 + 3")`，它计算字符串中的 Python 表达式，本例得到 `5`。普通数字输入用 `int(input())` 或 `float(input())`。`eval()` 可以执行表达式里的函数调用，实际程序不要把任意输入直接交给它。

<h2 id="self-check">随堂练习</h2>

把字符串 `"7.0"`、`"3.25"`、`"?"` 逐个转换。若数值没有小数部分，显示为整数。转换失败时显示“数据无效”。

<details>
<summary>查看思路与答案</summary>
<p>先用 <code>float()</code> 接受小数形式，再用 <code>is_integer()</code> 判断浮点数是否是整数值。</p>
<pre><code>for text in ["7.0", "3.25", "?"]:
    try:
        number = float(text)
    except ValueError:
        print("数据无效")
    else:
        if number.is_integer():
            print(int(number))
        else:
            print(number)</code></pre>
<p>依次输出 <code>7</code>、<code>3.25</code>、<code>数据无效</code>。</p>
</details>

[上一课：函数与递归](06-functions-recursion.md) · [下一课：文件与 CSV](08-files-csv.md)
