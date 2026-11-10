"""第 05 章：列表、元组、字典和集合。"""

scores = [85, 90, 76, 95]
scores[1] = 88
scores.append(100)
print("列表:", scores)
print("平均分:", sum(scores) / len(scores))

point = (10, 20)
print("元组:", point)

student = {"name": "小王", "score": 85}
student["score"] = 90
print("字典:", student)
print("姓名:", student["name"])

unique_numbers = set([1, 2, 2, 3])
print("去重后有几个不同数字:", len(unique_numbers))  # 3
