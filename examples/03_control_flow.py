"""第 03 章：条件、循环、break 与 continue。"""

score = 75
if score >= 90:
    print("优秀")
elif score >= 60:
    print("及格")
else:
    print("不及格")

total = 0
for number in range(1, 6):
    total += number
print("1~5 的和：", total)  # 15

count = 1
while count <= 3:
    print("while:", count)
    count += 1

for number in range(1, 6):
    if number == 3:
        continue
    print("continue 示例:", number)

for number in range(1, 6):
    if number == 3:
        break
    print("break 示例:", number)
