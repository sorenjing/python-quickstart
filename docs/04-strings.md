# 04｜字符串

> 学完本章：会访问字符、使用切片、判断字符串内容并格式化输出。

## 1. 字符串是什么？

`str` 类型表示文本，可以使用单引号或双引号：

~~~python
a = "Python"
b = '期末复习'
print(len(a))  # 6
~~~

字符串中的字符按顺序排列，**索引从 0 开始**。

## 2. 索引和切片

~~~python
s = "Python"
print(s[0])     # P
print(s[-1])    # n
print(s[1:4])   # yth
print(s[:2])    # Py
print(s[2:])    # thon
print(s[::-1])  # nohtyP
~~~

| 字符 | P | y | t | h | o | n |
| --- | --- | --- | --- | --- | --- | --- |
| 正向索引 | 0 | 1 | 2 | 3 | 4 | 5 |
| 负向索引 | -6 | -5 | -4 | -3 | -2 | -1 |

切片 `s[start:stop:step]`，**取 start，不取 stop**，step 是步长。超出范围的普通索引会报错；切片通常会截取可用范围，不会因此报索引越界错误。

## 3. 字符串不可修改

~~~python
s = "cat"
# s[0] = "b"  # 错误：字符串不可变
s = "b" + s[1:]
print(s)  # bat
~~~

给变量重新赋值可以获得新字符串，但不能直接修改原字符串的某个字符。

## 4. 常见字符串操作

~~~python
text = "  Hello Python  "
print(text.strip())             # Hello Python（去掉首尾空白）
print(text.lower())             # 转小写
print("a,b,c".split(","))       # ['a', 'b', 'c']
print("-".join(["a", "b"]))    # a-b
print("hello".replace("l", "L")) # heLLo
print("Python".find("th"))     # 2
print("Py" in "Python")        # True
~~~

`find()` 找不到时返回 `-1`；`split()` 返回列表；`join()` 把多个字符串连接起来。

## 5. 格式化与转义字符

推荐使用 `f-string`：

~~~python
name = "小李"
score = 93.456
print(f"{name}的成绩是{score:.1f}分")  # 小李的成绩是93.5分
~~~

常见转义字符：

- `\n`：换行。
- `\t`：制表符。
- `\\`：反斜杠本身。

## 考前记住

- 正向索引从 0 开始，负索引从 -1 开始。
- 切片**包含起点、不包含终点**。
- 字符串不可变；`replace()` 等方法返回新字符串。
- `len()` 求长度，`in` 检查是否包含，`split()` 拆分。

## 练习

1. 对 `s = "abcdef"`，写出 `s[1:5:2]`、`s[-2:]`、`s[::-1]` 的结果。
2. 输入一个字符串，判断是否为回文（从左往右和从右往左相同）。
3. 把 `"  86,92,75  "` 去掉首尾空格，再按照逗号拆分。

答案见 [练习汇总](../exercises/README.md)。

[上一章](03-control-flow.md) · [下一章：组合数据类型 →](05-collections.md)
