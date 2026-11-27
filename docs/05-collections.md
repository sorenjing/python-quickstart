---
layout: default
title: 05 列表、元组、字典与集合
description: 按位置取值、排序、去重，按键统计和汇总。
kind: lesson
---

# 05｜列表、元组、字典与集合

## 四种容器怎么读

| 类型 | 例子 | 怎么找数据 |
| --- | --- | --- |
| 列表 `list` | `[5, 8]` | 用位置取值，可改 |
| 元组 `tuple` | `(5, 8)` | 用位置取值，元素位置上的值不能直接替换 |
| 字典 `dict` | `{"A": 5}` | 用键 `"A"` 查值，可改 |
| 集合 `set` | `{5, 8}` | 用 `in` 判断成员，自带去重 |

空字典写 `{}` 或 `dict()`。空集合写 `set()`。集合不能按索引取值，打印顺序也不能用来推断考题输出。

## 列表的加、删、改

~~~python
values = [3, 1, 2]
values.append(4)
values.extend([5, 6])
values.insert(0, 9)
values.remove(1)
last = values.pop()
print(values, last)  # [9, 3, 2, 4, 5] 6
~~~

| 写法 | 读题时要留意 |
| --- | --- |
| `a.append([5, 6])` | 加一个元素，这个元素本身是列表 |
| `a.extend([5, 6])` | 把 5 和 6 分别追加 |
| `a.remove(2)` | 删除第一次出现的值 2，找不到时报错 |
| `a.pop(2)` | 删除索引 2 处的元素并返回它 |
| `del a[1:3]` | 删除索引 1、2 的元素 |
| `a.count(2)`、`a.index(2)` | 统计值 2 出现次数，或查它第一次出现的索引 |
| `a.clear()` | 清空原列表 |

`a + b` 拼成新列表，`a * 2` 重复内容。`a[1:3] = [9]` 可替换一段，列表长度可能变化。遍历列表时删除元素会让后面的元素向前挪，直接边遍历边删可能漏检查。筛选题可以把要保留的元素追加到新列表。

## 排序、复制和二维列表

~~~python
original = [3, 1, 2]
alias = original
copy = original[:]
alias.sort()
print(original, copy)           # [1, 2, 3] [3, 1, 2]
print(sorted(copy, reverse=True))  # [3, 2, 1]
~~~

`alias = original` 让两个名字指向同一份列表，`id(alias) == id(original)` 为真。`a[:]` 拷贝外层列表，里面若还放着列表，内层仍可能共享。`a.sort()` 和 `a.reverse()` 都改原列表并返回 `None`。`sorted(a)` 返回新列表。给 `a` 重新赋值会让该名字指向别处。

~~~python
grid = [[4, 7], [1, 8]]
print(grid[1][0], len(grid))  # 1 2
numbers = [int(part) for part in "3 6 9".split()]
print(numbers)                # [3, 6, 9]
~~~

二维列表可看成表格，先取一行再取这一行里的元素。`len(grid)` 数的是外层有几个元素。`[表达式 for 名字 in 容器]` 每取一个元素就算一次表达式，结果组成新列表。简单转型也可以写成 `list(map(int, "3 6 9".split()))`。

## 元组与解包

~~~python
point = (3, 5)
x, y = point
x, y = y, x
print(x, y)  # 5 3
~~~

`(5,)` 是一个元素的元组，`(5)` 仍是整数。把一组值依次交给几个变量叫**解包**，普通解包要求数量一致。字符串也能按字符解包，如 `a, b = "XY"`。

## 字典查值和计数

~~~python
counts = {}
for name in ["甲", "乙", "甲"]:
    counts[name] = counts.get(name, 0) + 1
print(counts)           # {'甲': 2, '乙': 1}
print("甲" in counts)    # True
print(counts.get("丙"))  # None
for name, count in counts.items():
    print(name, count)
~~~

`d[key]` 按键查值，键不存在时抛出 `KeyError`。`get(key, 默认值)` 可以给缺失项一个值。`in` 查字典的**键**。`keys()`、`values()`、`items()` 分别用于遍历键、值、键值对。`d.pop(key)` 取出并删除该键对应的值，`d.clear()` 清空字典。同一个键再次赋值会覆盖旧值。字典会保留键的插入顺序。

~~~python
names = ["A", "B"]
scores = [80, 90]
by_name = dict(zip(names, scores))
by_score = {score: name for name, score in by_name.items()}
print(by_name, by_score)  # {'A': 80, 'B': 90} {80: 'A', 90: 'B'}
~~~

`zip()` 把两组元素逐个配对。`dict()` 能把二元组的序列或生成器表达式变成字典。例如 `dict((v, k) for k, v in by_name.items())` 也可交换键和值。交换后遇到重复的键，后来的值会覆盖先前的值。字符串和整数可以作键，列表不能作键。

## 去重和统计

~~~python
values = [3, 1, 3, 2]
print(sorted(set(values)))             # [1, 2, 3]
print(len(values), sum(values), max(values), min(values))  # 4 9 3 1
~~~

`set(values)` 去重，`sorted()` 让输出顺序确定。判断两个集合的并集、交集和差集，分别用 `|`、`&`、`-`。求平均分时用 `sum(values) / len(values)`，先确定列表里有数据。

<h2 id="self-check">快练</h2>

预测下面两行的输出。想想 `same` 和 `copied` 各指向哪份列表。

~~~python
a = [5, 2, 5]
same = a
copied = a[:]
a.remove(5)
print(same)
print(copied)
~~~

<details>
<summary>查看答案</summary>
<p>第一行是 <code>[2, 5]</code>，第二行是 <code>[5, 2, 5]</code>。<code>remove()</code> 只删掉第一次出现的 5。</p>
</details>

---

[上一课](04-strings.md) · [下一课：函数与递归](06-functions-recursion.md)
