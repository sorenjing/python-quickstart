# Python 基础语法快速入门

面向大学非计算机专业学生和零基础学习者，**用尽可能少的内容学会 Python 3 基础语法**。可用于课程预习、复习和期末前查漏补缺。免费阅读，无需购买配套课程。

> **范围说明**：本项目聚焦通用 Python 基础语法与入门编程题，不保证覆盖某所高校的完整期末考试。请以任课教师的教学大纲和复习范围为准。

## 如何学习

1. 没接触过编程：按 00 → 05 顺序阅读，边看边运行示例。
2. 时间有限：先看每章「考前记住」和「练习」，不会再回到对应知识点。
3. 建议先独立完成题目，再核对参考答案；**看懂示例不等于自己能写出来**。

## 课程目录

| 章节 | 学习内容 | 状态 |
| --- | --- | --- |
| [00 Python 入门](docs/00-introduction.md) | 安装运行、语言特点、必要常识 | 已完成 |
| [01 基础语法](docs/01-basics.md) | 注释、缩进、变量、输入输出 | 已完成 |
| [02 数据类型与运算符](docs/02-types-operators.md) | 类型、类型转换、常见运算 | 已完成 |
| [03 条件与循环](docs/03-control-flow.md) | if、for、while、break、continue | 已完成 |
| [04 字符串](docs/04-strings.md) | 索引、切片、格式化、常用方法 | 已完成 |
| [05 组合数据类型](docs/05-collections.md) | list、tuple、dict、set | 已完成 |
| 06 函数 | 定义、参数、返回值、作用域 | 待编写 |
| 07 模块、文件与异常 | import、文件读写、try/except | 待编写 |
| 08 面向对象基础 | 类、对象、属性与方法 | 待编写 |
| 09 期末专题 | 输出题、填空题、编程题 | 待编写 |

- [第一批练习及参考答案](exercises/README.md)
- [可运行代码](examples/)：按章节配套的 `.py` 文件

## 运行 Python

安装 [Python 3](https://www.python.org/downloads/) 后，打开终端检查版本：

~~~bash
python --version
~~~

某些 Windows 环境可以使用 `py --version`，macOS / Linux 上也常用 `python3 --version`。**以能够正常输出 Python 3 版本的命令为准**。

将代码保存为 `hello.py`，执行 `python hello.py`（或你的系统对应命令）。基础部分仅使用 Python 标准功能，不需要安装第三方库。

## 编写原则

- 先讲清「是什么、怎么用」，再给最小示例和练习。
- 只在能明显帮助理解时使用表格或图解；不堆砌历史故事与底层原理。
- 先掌握核心语法，再补文件、函数、类等课程常见知识；暂不涉及 Agent、Web 后端、爬虫、框架。
- 所有讲解、例题与代码独立编写；**参考知识范围，不复制第三方教程原文、插图或习题**。

## 参考资料

- [菜鸟教程：Python 3 教程](https://www.runoob.com/python3/python3-tutorial.html)（用于核对知识目录）
- [Python 官方教程](https://docs.python.org/3/tutorial/)（用于核对语法行为）
- [Python 官方下载](https://www.python.org/downloads/)

## 许可

仓库现有 [MIT License](LICENSE)。第三方教程及其素材不包含在此许可之内。
