# 05｜组合数据类型

> 学完本章：知道列表、元组、字典、集合分别用于什么场景，会执行最基本的增删改查。

## 1. 先记住四种类型的区别

| 类型 | 示例 | 有顺序吗？ | 能修改吗？ | 主要用途 |
| --- | --- | --- | --- | --- |
| 列表 `list` | `[80, 90, 70]` | 有 | 能 | 保存一组可修改的数据 |
| 元组 `tuple` | `(80, 90, 70)` | 有 | 不能修改元素引用 | 保存固定顺序的数据 |
| 字典 `dict` | `{"小王": 80}` | 有插入顺序 | 能 | 按键查找对应值 |
| 集合 `set` | `{80, 90}` | 不保证顺序 | 能增删元素 | 去重、集合运算 |

> 字典保留插入顺序，但不是靠数字位置访问；集合无序且不能靠索引访问。元组不可修改元素引用，但其内部若包含可变对象，该对象本身仍可能发生变化。

## 2. 列表 list

~~~python
scores = [85, 90, 76, 95]
print(scores[0])    # 85
print(scores[-1])   # 95
print(scores[1:3])  # [90, 76]
scores[1] = 88
scores.append(100)
print(len(scores))  # 5
~~~

| 索引 | 0 | 1 | 2 | 3 |
| --- | --- | --- | --- | --- |
| 初始元素 | 85 | 90 | 76 | 95 |

常用方法：

~~~python
nums = [3, 1, 2]
nums.append(4)      # 末尾添加
nums.insert(0, 9)   # 指定位置插入
nums.remove(1)      # 删除第一个值为 1 的元素
last = nums.pop()   # 删除并返回最后一个元素
nums.sort()         # 原地升序排序
print(nums)         # [2, 3, 9]
print(last)         # 4
~~~

`sort()` 会直接修改原列表且返回 `None`；`sorted(nums)` 返回一个排序后的新列表。

## 3. 元组 tuple

~~~python
point = (10, 20)
print(point[0])  # 10

single = (5,)    # 只有一个元素时，必须有逗号
not_tuple = (5)  # 这是 int，不是 tuple
~~~

元组支持索引、切片和遍历，但不能执行 `point[0] = 99`。

## 4. 字典 dict

字典保存 **键 → 值** 对应关系：

~~~python
student = {"name": "小王", "score": 85}
print(student["name"])            # 小王
print(student.get("age", "未知"))  # 未知
student["score"] = 90
student["age"] = 19

for key, value in student.items():
    print(key, value)
~~~

要点：

- 键不能重复；相同键再次赋值会覆盖对应的值。
- 键必须可哈希，例如字符串、整数、合适的元组；列表不能作为键。
- `student["不存在的键"]` 会报 `KeyError`，`get()` 可以提供默认值。

## 5. 集合 set

~~~python
numbers = {1, 2, 2, 3}
print(numbers == {1, 2, 3})  # True：自动去重
numbers.add(4)
numbers.discard(2)            # 没有该元素也不报错
~~~

~~~python
a = {1, 2, 3}
b = {3, 4}
print(a | b)  # 并集 {1, 2, 3, 4}
print(a & b)  # 交集 {3}
print(a - b)  # 差集 {1, 2}
~~~

集合打印的元素顺序不应作为考题判断依据。**空集合用 `set()`，空花括号 `{}` 是字典。**

## 6. 遍历与常用内置函数

~~~python
scores = [80, 90, 70]
print(len(scores))  # 3
print(sum(scores))  # 240
print(max(scores))  # 90
print(min(scores))  # 70

for score in scores:
    print(score)
~~~

后续学习函数时还会继续用到这些内置函数。

## 考前记住

- `list`：`[]`，可变，有索引。
- `tuple`：`()`，通常不可变，单元素写成 `(1,)`。
- `dict`：`{key: value}`，通过键查值。
- `set`：`{1, 2}`，自动去重，无位置索引；空集合必须写 `set()`。
- 列表、元组支持切片；字典、集合不支持位置切片。

## 练习

1. `a = [10, 20, 30]`，执行 `a.append(40)` 后，`len(a)` 是多少？
2. 判断 `(5)` 和 `(5,)` 的数据类型。
3. 用集合将 `[1, 2, 2, 3, 3]` 去重（结果的顺序不做要求）。
4. 有成绩字典 `{"小王": 80, "小李": 95}`，输出小李的成绩，并将小王的成绩改为 85。

答案见 [练习汇总](../exercises/README.md)。

[上一章](04-strings.md) · [返回目录](../README.md)
