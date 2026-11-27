---
layout: default
title: 04 字符串
description: 从索引和切片学到拆分、替换与固定格式输出。
kind: lesson
---

# 04｜字符串

<h2 id="string-slice">从一个位置取出字符</h2>

一段文字里的字母、汉字、空格和标点各算一个字符。方括号里写位置编号，就能拿到那个位置的字符。这个编号叫**索引**。从左边数，第一个位置是 0。从右边数，最后一个位置是 -1。

~~~python
text = "code"
print(text[0])   # c
print(text[-1])  # e
~~~

| 字符 | c | o | d | e |
| --- | --- | --- | --- | --- |
| 正向索引 | 0 | 1 | 2 | 3 |
| 负向索引 | -4 | -3 | -2 | -1 |

要取一段字符，可以在方括号里写 `开始:结束`，这叫**切片**。`text[1:3]` 从下标 1 的 `o` 开始，走到下标 3 前停止，所以只取 `o` 和 `d`。再加一个冒号和数字，可以指定每次走几格。

~~~python
text = "code"
print(text[1:3])   # od，取下标 1、2
print(text[::2])   # cd，取下标 0、2
print(text[::-1])  # edoc，从末尾每次向左走一格
~~~

步长是正数时向右走，负数时向左走。省略起点或终点时用当前方向的边界。索引越界会报错，切片会截到有字符的范围。`len("你好")` 得到 2，因为它数的是字符个数。

字符串的单个字符无法直接改写。要把开头换成其他字符，可以拼接出一个新字符串。

~~~python
text = "cat"
text = "b" + text[1:]
print(text, "ha" * 2)  # bat haha
~~~

<h2 id="string-methods">拆分、清理和查找</h2>

`text.strip("@")` 的点号前是要处理的文字，点号后写要做的操作。这种跟在某个值后面的操作叫**方法**。可以先接住上一步的结果，再做下一步。

~~~python
text = "@@red,blue@@"
cleaned = text.strip("@")
print(cleaned)                      # red,blue
parts = cleaned.split(",")
print(parts)                        # ['red', 'blue']
print("-".join(parts))              # red-blue
print(text.replace("red", "green")) # @@green,blue@@
~~~

`strip()` 去掉首尾空白，`strip("@")` 只去首尾的 `@`。`strip("ab")` 会从两端反复删掉 `a` 或 `b`。`split(",")` 遇到一个逗号就拆开，方括号里的结果表示一组文字，叫**列表**。`"-".join(parts)` 则把这组文字接起来，在相邻两项之间放一个短横线。连续写作 `text.strip("@").split(",")` 也是先清理，再对清理后的结果拆分。

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

也能先把列表中每个数字转为字符串，再一起拼接。例如 `",".join(str(n) for n in [4, 7])` 得到 `"4,7"`。括号里的 `for` 逐个提供转换后的字符串。

<h2 id="string-format">按题目格式打印</h2>

第 01 课用 `{}` 留了一个空格子。现在把格子写成 `{:.2f}`，冒号后的 `.2f` 指定该值显示为带两位小数的形式，末尾不够的位补 0。在引号前加 `f` 的写法可以把变量名直接放到花括号里，比如 `f"{value:.2f}"`。

~~~python
value = 7.2
print("{:.2f}".format(value))   # 7.20
print(f"{value:.2f}")           # 7.20
print("%s: %.2f" % ("价钱", value))
print("{:=>8}".format("OK"))    # ======OK
~~~

`%s` 留一个位置给文字，`%.2f` 留一个位置给数字并显示两位小数。百分号右侧的两项按顺序填进去。`=>8` 表示用 `=` 填充、向右对齐、总宽度至少 8。`{1}` 会选 `.format()` 第 2 个参数，例如 `"{1}-{0}".format("甲", "乙")` 得到 `乙-甲`。遇到 `"{0:{1}{2}{3}}".format("OK", "=", ">", 8)`，先把里层看成 `=>8`，再对位置 0 的值应用格式。

`\n` 表示换行，`\t` 表示制表符，`\\` 表示一个反斜杠。程序题要求按行输出时，额外写出的空格或换行也算输出的一部分。

<h2 id="unit-input">用切片拆开带单位的输入</h2>

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
