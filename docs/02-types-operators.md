---
layout: default
title: 02 数字、类型与运算
description: 看懂类型转换、进制、数字运算和布尔表达式。
kind: lesson
---

# 02｜数字、类型与运算

<h2 id="numeric-types">让输入的文字参与计算</h2>

~~~python
count = int(input())
print(count * 2)
~~~

输入 `4` 时，`input()` 先得到字符串 `"4"`。经过 `int()` 转成整数再乘 2，输出 `8`。直接计算 `"4" * 2` 则会把文字重复两遍，得到 `44`。

| 类型 | 示例 | 常用写法 |
| --- | --- | --- |
| 整数 `int` | `-3` | `int("12")` 得到 `12` |
| 浮点数 `float` | `3.14`、`1e3` | `float("3.5")` 得到 `3.5` |
| 字符串 `str` | `"12"` | `str(12)` 得到 `"12"` |
| 布尔值 `bool` | `True`、`False` | `bool(0)` 得到 `False` |
| 复数 `complex` | `2 + 3j` | `complex(2)` 得到 `(2+0j)` |

`type(3.5)` 查到 `<class 'float'>`。`int(-3.9)` 向零截断，得到 `-3`。`int("3.5")` 会抛出 `ValueError`，因为这段文字写的是小数。

~~~python
z = 2 + 3j
print(z.real, z.imag)  # 2.0 3.0
print(1.2e2)           # 120.0
~~~

`j` 或 `J` 是虚数后缀。获取某个复数的实部时，可以先加括号，比如 `(2 + 3j).real`。

想判断某个值是不是给定类型，可以用 `isinstance(值, 类型)`。它返回 `True` 或 `False`。只想查实际类型时用 `type(值)`。

~~~python
price = "18"
print(isinstance(price, int), isinstance(price, str))
~~~

输出 `False True`。引号里的 `"18"` 是字符串。还有一个容易混淆的地方，`3 + 4j.real` 等于 `3 + (4j.real)`。如果要取整个复数的虚部，写 `(3 + 4j).imag`。

<h2 id="number-bases">进制题先认前缀</h2>

| 前缀 | 写法 | 十进制值 |
| --- | --- | --- |
| `0b` | `0b1010` | 10 |
| `0o` | `0o12` | 10 |
| `0x` | `0xA` | 10 |

~~~python
print(0x21)            # 33
print(bin(10))         # 0b1010
print(oct(10))         # 0o12
print(hex(33))         # 0x21
print(int("1010", 2))  # 10
~~~

`bin()`、`oct()` 和 `hex()` 返回字符串。手算 `0x21` 时，从右向左各位的权重是 1、16、256……，所以结果是 `2 * 16 + 1`。

<h2 id="arithmetic">拆开算术表达式</h2>

| 表达式 | 结果 | 含义 |
| --- | --- | --- |
| `9 / 2` | `4.5` | 除法，整数相除也会得到浮点数 |
| `9 // 2` | `4` | 商向下取整，`-9 // 2` 是 `-5` |
| `9 % 2` | `1` | 余数，常用来判断奇偶或取个位 |
| `2 ** 3` | `8` | 乘方，`pow(2, 3)` 同样是 8 |
| `divmod(9, 2)` | `(4, 1)` | 同时取得整数商与余数 |

先算括号，再算乘方、乘除及取余、加减。比较在算术之后，逻辑运算按 `not`、`and`、`or` 依次降低。乘方从右往左结合，`2 ** 2 ** 3` 等于 `2 ** (2 ** 3)`。`x += 2` 表示把 `x + 2` 赋回 `x`。

~~~python
number = 472
print(number // 100)      # 4，百位
print(number // 10 % 10)  # 7，十位
print(number % 10)        # 2，个位
print(round(3.14159, 2))  # 3.14
~~~

浮点数会有近似误差，例如 `0.1 + 0.2` 与 `0.3` 直接比较会得到 `False`。`round()` 返回数字，遇到精确的中点时向偶数方向舍入，如 `round(2.5)` 为 `2`。题目指定「输出两位小数」时，用第 04 课的格式化。

<h2 id="truth">判断真假</h2>

`=` 给变量赋值，`==` 比较值是否相等。`is` 检查是不是同一个对象。判断数字、字符串是否相等用 `==`。比较可以连写，例如 `0 <= score < 60`。

~~~python
print(bool(-1), bool(0), bool(""))  # True False False
print(True - False)                 # 1
print(4 > 2 or 10 / 0 > 1)           # True
~~~

`0`、空字符串、空容器和 `None` 在条件中都视为假。`and` 的左侧为假时会跳过右侧，`or` 的左侧为真时会跳过右侧，这叫**短路**。对一般的值，`and` 和 `or` 返回其中一个操作数，例如 `0 or 5` 得到 `5`。

<h2 id="self-check">快练</h2>

猜 `print(hex(30), 27 // 4, 27 % 4, int(-2.8))` 的输出。

<details>
<summary>查看答案</summary>
<p><code>0x1e 6 3 -2</code>。27 可以拆成 4 × 6 + 3，<code>int()</code> 转整数时向零截断。</p>
</details>

---

[上一课](01-basics.md) · [下一课：条件与循环](03-control-flow.md)
