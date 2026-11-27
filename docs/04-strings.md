---
layout: default
title: 04 字符串
description: 从索引和切片学到拆分、替换与固定格式输出。
kind: lesson
---

# 04｜字符串

## 从一个位置取出字符

~~~python
text = "code"
print(text[0], text[-1])  # c e
print(text[1:3])          # od
print(text[::2])          # cd
print(text[::-1])         # edoc
~~~

| 字符 | c | o | d | e |
| --- | --- | --- | --- | --- |
| 正向索引 | 0 | 1 | 2 | 3 |
| 负向索引 | -4 | -3 | -2 | -1 |

`text[开始:结束:步长]` 取起点，走到终点之前停止。省略起点或终点时用对应方向的边界。索引越界会报错，切片越界会截到能取的范围。`len("你好")` 得到 2。

字符串的单个字符无法直接改写。要把开头换成其他字符，可以拼接出一个新字符串。

~~~python
text = "cat"
text = "b" + text[1:]
print(text, "ha" * 2)  # bat haha
~~~

## 拆分、清理和查找

~~~python
text = "@@red,blue@@"
parts = text.strip("@").split(",")
print(parts)                 # ['red', 'blue']
print("-".join(parts))       # red-blue
print(text.replace("red", "green"))
~~~

`strip()` 去掉首尾空白，`strip("@")` 去掉首尾的 `@`，中间字符保留。`strip("ab")` 会从两端反复删掉 `a` 或 `b`。`split(",")` 按逗号拆开，产生一组文本。`"-".join(parts)` 在每两段文本之间插入短横线，参与拼接的元素都要是字符串。

| 写法 | 从哪里看结果 |
| --- | --- |
| `"banana".count("a")` | 出现 3 次 |
| `"banana".find("na")` | 第一次出现的位置为 2，找不到时返回 `-1` |
| `"banana".index("na")` | 也是 2，找不到时抛出 `ValueError` |
| `"na" in "banana"` | `True` |
| `"heLLo world".capitalize()` | `"Hello world"` |
| `"heLLo world".title()` | `"Hello World"` |

`lower()` 和 `upper()` 转大小写，原字符串仍然保留。比较字符串时，从第一个不同的字符按编码值判断，`"Z" < "a"` 为真。`ord("a")` 得到编码值，`chr(ord("a") + 1)` 得到 `"b"`。

字母循环移位时，先用 `ord(字母) - ord("a")` 得到 0 到 25 的位置，位移后对 26 取余，最后用 `chr()` 转回字母。下面把小写字母向后移一位。

~~~python
text = "az"
result = ""
for letter in text:
    position = ord(letter) - ord("a")
    result += chr(ord("a") + (position + 1) % 26)
print(result)
~~~

输出 `ba`，因为 `z` 位移后回到 `a`。

## 按题目格式打印

~~~python
value = 7.2
print("{:.2f}".format(value))   # 7.20
print(f"{value:.2f}")           # 7.20
print("%s: %.2f" % ("价钱", value))
print("{:=>8}".format("OK"))    # ======OK
~~~

`.2f` 要求输出两位小数。`=>8` 表示用 `=` 填充、向右对齐、总宽度至少 8。`{1}` 会选 `.format()` 第 2 个参数，例如 `"{1}-{0}".format("甲", "乙")` 得到 `乙-甲`。遇到 `"{0:{1}{2}{3}}".format("OK", "=", ">", 8)`，先把里层看成 `=>8`，再对位置 0 的值应用格式。

`\n` 表示换行，`\t` 表示制表符，`\\` 表示一个反斜杠。程序题要求按行输出时，额外写出的空格或换行也算输出的一部分。

## 用切片拆开带单位的输入

~~~python
text = "F68"
unit = text[0]
value = float(text[1:])
if unit == "F":
    result = (value - 32) / 1.8
    print(f"C{result:.1f}")
else:
    result = value * 1.8 + 32
    print(f"F{result:.1f}")
~~~

输出 `C20.0`。先把单位和数值部分拆开，再用分支决定算式。月份映射题也类似，先找出日期中的月份，再根据需要做判断或查表。

<h2 id="self-check">快练</h2>

预测 `print(" ab-cd ".strip()[::-2])` 的输出，指出从哪个位置开始取。

<details>
<summary>查看答案</summary>
<p>输出 <code>d-a</code>。去掉首尾空白以后是 <code>ab-cd</code>，从末尾开始每隔一个字符取一次。</p>
</details>

---

[上一课](03-control-flow.md) · [下一课：列表、元组、字典与集合](05-collections.md)
