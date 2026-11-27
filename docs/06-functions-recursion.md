---
layout: default
title: 06 函数与递归
description: 把一段代码交给函数运行，分清返回值、作用域和递归停止条件。
kind: lesson
---

# 06｜函数与递归

## 先看函数怎么执行

`def` 定义函数，调用时函数体才执行。参数是函数接收的数据，`return` 把结果交给调用处。

~~~python
def total(price, count=1):
    return price * count

print(total(6))
print(total(count=3, price=6))
~~~

输出依次是 `6`、`18`。`price`、`count` 是形参，调用时传入的值是实参。按位置传入时看参数顺序，写成 `count=3` 时按名字对应。带默认值的参数放在普通必填参数后面，位置实参放在关键字实参前面。

| 写法 | 结果 |
| --- | --- |
| `return a, b` | 返回元组，可用 `x, y = 函数()` 接收 |
| `return` 或执行到函数末尾 | 返回 `None` |
| `print(x)` | 把 `x` 显示在屏幕上，调用结果是 `None` |
| `def add(*numbers)` | 多个位置实参打包成元组 |
| `def show(**options)` | 额外的关键字实参打包成字典 |
| `add(*values)` | 把可迭代对象的元素逐个传入 |
| `lambda x: x * 2` | 创建一个只有单个表达式的函数，结果自动返回 |

~~~python
def add(*numbers):
    return sum(numbers)

double = lambda x: x * 2
print(add(2, 3, 4))
print(double(5))
~~~

输出依次是 `9`、`10`。遇到更新规则或多行逻辑时，用 `def` 更容易读。

## 函数里改变量，外面会怎样

~~~python
score = 10

def update(numbers):
    score = 20
    numbers.append(score)
    numbers = [30]
    return score

values = [1]
print(update(values))
print(score, values)
~~~

输出是 `20` 和 `10 [1, 20]`。函数内部用 `score = 20` 创建局部变量，外面的 `score` 仍是 `10`。参数 `numbers` 起初与 `values` 指向同一个列表，`append` 修改了该列表，`numbers = [30]` 只把局部名字指向另一个列表。

- 函数里可以读取外层变量。要在函数里给模块层同名变量重新赋值，先声明 `global 变量名`。练习优先用参数和返回值传递结果。
- 函数可以定义在另一个函数里面。内层函数可以读取外层函数的局部变量，在外面通常通过外层函数调用它。
- 默认值只在执行 `def` 时创建一次。若每次调用都需要新的列表，默认值可写 `None`，然后在函数体内初始化。
- 一个函数完成一件明确的任务，叫做内聚。函数之间尽量通过参数和返回值配合，可以降低相互依赖，也就是降低耦合。

## 先把判断封装，再处理一组数据

~~~python
def is_prime(number):
    if number < 2:
        return False
    for divisor in range(2, number):
        if number % divisor == 0:
            return False
    return True

for number in range(8, 12):
    if is_prime(number):
        print(number)
~~~

输出 `11`。先排除小于 2 的整数，再检查是否存在因子。只有整轮循环都找不到因子时，才返回 `True`。类似地，可以把闰年判断、分段计费、筛选条件各自放进函数，在主程序里输入、调用、输出。

## 递归凭什么停下来

递归就是函数调用自己。先写能直接返回的停止条件，再让下一次调用更接近它。

~~~python
def factorial(number):
    if number <= 1:
        return 1
    return number * factorial(number - 1)

print(factorial(4))
~~~

输出 `24`。本例约定输入为非负整数。`factorial(4)` 展开为 `4 × 3 × 2 × 1`，到 `factorial(1)` 返回后再逐层乘回来。循环版可以从 `result = 1` 开始，把 `2` 到 `number` 依次乘进去。

### 最大公约数

若 `b > 0`，`a`、`b` 的最大公约数等于 `b`、`a % b` 的最大公约数。余数变为 0 时，当前的 `a` 就是结果。

~~~python
def gcd_loop(a, b):
    while b != 0:
        a, b = b, a % b
    return a

def gcd_recursive(a, b):
    if b == 0:
        return a
    return gcd_recursive(b, a % b)

print(gcd_loop(20, 12), gcd_recursive(20, 12))
~~~

输出 `4 4`。参数依次变为 `(20, 12)`、`(12, 8)`、`(8, 4)`、`(4, 0)`。

### 十进制转其他进制

除以目标进制，余数给出最右一位，商继续转换。循环版每次把新余数加到结果左边。递归版先转换商，再在末尾写下余数。下面接受非负整数和 2 到 16 的进制。

~~~python
def to_base(number, base):
    digits = "0123456789ABCDEF"
    if number < base:
        return digits[number]
    return to_base(number // base, base) + digits[number % base]

print(to_base(13, 2), to_base(31, 16))
~~~

输出 `1101 1F`。循环版要单独处理输入为 0 的情况。转回十进制可以用 `int("1101", 2)`。

下面用循环完成同样的转换，由右到左逐位添加。

~~~python
def to_base_loop(number, base):
    digits = "0123456789ABCDEF"
    if number == 0:
        return "0"
    result = ""
    while number > 0:
        number, remainder = divmod(number, base)
        result = digits[remainder] + result
    return result

print(to_base_loop(13, 2), to_base_loop(0, 16))
~~~

输出 `1101 0`。

### 汉诺塔

有三根柱子。每次移动一个盘子，大盘不能压在小盘上。把 `n` 个盘从起点移到终点时，先借助终点把上面 `n-1` 个盘移到辅助柱，再把大盘移到终点，最后借助起点把小盘从辅助柱移到终点。

~~~python
def move(number, start, spare, end):
    if number == 0:
        return
    move(number - 1, start, end, spare)
    print(start, "->", end)
    move(number - 1, spare, start, end)

move(2, "A", "B", "C")
~~~

~~~text
A -> B
A -> C
B -> C
~~~

<h2 id="self-check">随堂练习</h2>

写函数判断公历闰年，然后分别测试 `1900`、`2000`、`2028`。再用循环计算 `5!`。

<details>
<summary>查看思路与答案</summary>
<p>能被 400 整除，或者能被 4 整除且不能被 100 整除，就是闰年。阶乘从 1 开始依次累乘。</p>
<pre><code>def is_leap(year):
    return year % 400 == 0 or (year % 4 == 0 and year % 100 != 0)

for year in (1900, 2000, 2028):
    print(is_leap(year))

result = 1
for number in range(2, 6):
    result *= number
print(result)</code></pre>
<p>依次输出 <code>False</code>、<code>True</code>、<code>True</code>、<code>120</code>。</p>
</details>

[上一课：列表、元组、字典和集合](05-collections.md) · [下一课：模块、随机数与异常](07-modules-random-exceptions.md)
