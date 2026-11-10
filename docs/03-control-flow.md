# 03｜条件与循环

> 学完本章：会根据条件做选择，会用循环处理重复任务，并能判断程序的输出结果。

## 1. if 条件判断

~~~python
score = 75

if score >= 90:
    print("优秀")
elif score >= 60:
    print("及格")
else:
    print("不及格")
~~~

输出：`及格`。

- `if`：先检查条件。
- `elif`：前面的条件不满足时，继续检查。
- `else`：前面都没命中时执行。
- **整组分支只会选择其中一个执行**。注意冒号 `:` 和一致的缩进。

~~~mermaid
flowchart TD
    A["读取成绩"] --> B{"score >= 90?"}
    B -->|是| C["输出 优秀"]
    B -->|否| D{"score >= 60?"}
    D -->|是| E["输出 及格"]
    D -->|否| F["输出 不及格"]
~~~

## 2. for 循环与 range()

`for` 常用于遍历一组值。`range(开始, 结束, 步长)` 生成整数序列，**包含开始，不包含结束**。

~~~python
for i in range(3):
    print(i)
# 依次输出 0、1、2

for i in range(1, 6, 2):
    print(i)
# 依次输出 1、3、5
~~~

三种常见写法：

| 写法 | 实际遍历 |
| --- | --- |
| `range(4)` | 0、1、2、3 |
| `range(2, 5)` | 2、3、4 |
| `range(5, 0, -2)` | 5、3、1 |

循环累加：

~~~python
total = 0
for n in range(1, 6):
    total += n
print(total)  # 15
~~~

## 3. while 循环

`while` 在条件为真时不断执行。**需要让条件有机会变成假**，否则可能一直循环。

~~~python
count = 1
while count <= 3:
    print(count)
    count += 1
# 依次输出 1、2、3
~~~

`for` 更适合遍历指定范围或集合；`while` 更适合根据条件决定何时停止。

## 4. break、continue、pass

~~~python
for n in range(1, 6):
    if n == 3:
        continue
    print(n)
# 1、2、4、5（跳过当前这一轮）
~~~

~~~python
for n in range(1, 6):
    if n == 3:
        break
    print(n)
# 1、2（直接退出这一层循环）
~~~

`pass` 表示暂时不做操作，常作为占位语句：

~~~python
if True:
    pass
~~~

## 5. 循环嵌套

~~~python
for i in range(2):
    for j in range(3):
        print(i, j)
~~~

外层循环运行 2 次，每次内层运行 3 次，所以总共输出 **6 行**。

## 考前记住

- `if`、`for`、`while` 后面通常有冒号，循环体要缩进。
- `range()` 是左闭右开：结束值不包含。
- `break` 结束当前所在的那一层循环；`continue` 跳到下一轮。
- 分析输出题时，逐轮记录变量值，不要凭直觉跳步骤。

## 练习

1. 求 1 到 100 的整数和。
2. 输出 1 到 10 中的所有偶数。
3. 判断以下代码输出什么？

~~~python
x = 0
for i in range(1, 5):
    if i == 3:
        continue
    x += i
print(x)
~~~

答案见 [练习汇总](../exercises/README.md)。

[上一章](02-types-operators.md) · [下一章：字符串 →](04-strings.md)
