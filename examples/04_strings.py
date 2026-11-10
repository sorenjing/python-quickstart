"""第 04 章：字符串索引、切片与方法。"""

text = "Python"
print(text[0])       # P
print(text[-1])      # n
print(text[1:4])     # yth
print(text[::-1])    # nohtyP

name = "小李"
score = 93.456
print(f"{name}的成绩是{score:.1f}分")

raw_scores = "  86,92,75  "
parts = raw_scores.strip().split(",")
print(parts)  # ['86', '92', '75']

word = "level"
print(word == word[::-1])  # True
