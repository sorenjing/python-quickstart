---
layout: default
title: 00 运行第一段 Python
description: 运行第一个 Python 文件，预测带引号和不带引号的输出。
kind: lesson
---

# 00｜运行第一段 Python

<h2 id="run">运行第一行</h2>

1. 从 [Python 官网](https://www.python.org/downloads/) 安装 Python 3。
2. 用编辑器新建 `hello.py`，写入下面这行并保存。`.py` 是 Python 文件常用的后缀。引号和括号用英文符号。

~~~python
print("期末加油")
~~~

3. 在 `hello.py` 所在的文件夹打开终端，运行下面这条命令。在 VS Code 中，可以打开该文件夹后点「终端 → 新建终端」。

~~~console
python hello.py
~~~

屏幕会显示 `期末加油`。这行显示出来的文字叫**输出**。把引号里的文字改掉，再运行一次，看看输出怎么变。

<details>
<summary>命令找不到或文件打不开</summary>
<p>终端找不到 <code>python</code> 时，Windows 可以试 <code>py hello.py</code>，macOS 或 Linux 可以试 <code>python3 hello.py</code>。</p>
<p>如果提示找不到文件，检查文件是不是叫 <code>hello.py</code>，以及终端是否开在保存文件的目录。</p>
</details>

## 认识 Python

- Python 由 Guido van Rossum 创建，1991 年首次公开发布。
- Python 是开源的高级通用编程语言，通常通过解释器运行，支持过程式和面向对象等写法。
- Python 采用动态类型，变量无需事先声明类型，类型由实际的值决定。同一名字可以先后指向不同类型的值。
- 源码区分大小写，用缩进划分代码块。常见书写约定是每层缩进 4 个空格，变量和函数名常用小写字母加下划线。

<h2 id="self-check">先猜结果，再运行</h2>

把文件内容换成下面两行。先写下每行会输出什么，再运行核对。`*` 表示乘法。

~~~python
print(2 * 3)
print("2 * 3")
~~~

<details>
<summary>查看参考答案</summary>
<p>第一行输出 <code>6</code>，因为 Python 先计算乘法。第二行输出 <code>2 * 3</code>，因为引号里的内容是文字。</p>
</details>

---

[下一课：变量与输入输出](01-basics.md)
