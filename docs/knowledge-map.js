const KNOWLEDGE_MAPS = {
  "从第一行代码读起": [
    {
      "question": "5",
      "label": "输入与输出",
      "code": "name = input()",
      "note": "读一行文字，存到 name。用 print(name) 显示。"
    },
    {
      "question": "7",
      "label": "给变量赋值",
      "code": "x = 10",
      "note": "先看等号右边，再给这个值起名 x。"
    },
    {
      "question": "6",
      "label": "给变量起名",
      "code": "score_1 = 90",
      "note": "可以用字母、数字和下划线，开头不能是数字。"
    },
    {
      "question": "10",
      "label": "查看类型",
      "code": "type(12.34)",
      "note": "小数通常是 float，整数是 int，引号括起来的是 str。"
    },
    {
      "question": "1",
      "label": "写注释",
      "code": "# 这行用来说明代码",
      "note": "字符串外的 # 和后面的内容不会执行。"
    }
  ],
  "数字和运算": [
    {
      "question": "8",
      "label": "除法与整除",
      "code": "10 / 4；10 // 4",
      "note": "普通除法得 2.5，整除向下取整得 2。"
    },
    {
      "question": "88",
      "label": "余数与乘方",
      "code": "10 % 3；10 ** 3",
      "note": "除以 3 的余数是 1，10 的三次方是 1000。"
    },
    {
      "question": "132",
      "label": "先算什么",
      "code": "2 * 2 ** 3",
      "note": "先乘方再乘法，得 16。括号可以改变计算顺序。"
    },
    {
      "question": "91",
      "label": "小数舍入",
      "code": "round(3.14159, 2)",
      "note": "舍入到小数点后两位，得 3.14。"
    },
    {
      "question": "15",
      "label": "读懂数字写法",
      "code": "0x10；3 + 4j",
      "note": "0x 开头是十六进制，j 标出复数的虚部。"
    }
  ],
  "字符串、下标和文字处理": [
    {
      "question": "128",
      "label": "读取文字",
      "code": "\"Python\"",
      "note": "引号标出文字范围。用 print 显示文字时，外侧引号不显示。"
    },
    {
      "question": "122",
      "label": "取一段字符",
      "code": "\"012345\"[0:4]",
      "note": "位置从 0 开始，取到 4 之前，得到 \"0123\"。"
    },
    {
      "question": "126",
      "label": "清理首尾",
      "code": "\"@hi@\".strip(\"@\")",
      "note": "去掉两端的 @，中间的字符保留。结果是 \"hi\"。"
    },
    {
      "question": "135",
      "label": "重复文字",
      "code": "\"ha\" * 2",
      "note": "把相同的文字接起来两次，得到 \"haha\"。"
    },
    {
      "question": "129",
      "label": "填入模板",
      "code": "\"你好，{}\".format(\"小雨\")",
      "note": "把参数填进花括号，得到“你好，小雨”。"
    }
  ],
  "列表、元组、集合和字典": [
    {
      "question": "202",
      "label": "列表按位置存",
      "code": "items.append(x)",
      "note": "整个 x 作为一项接到末尾，下标从 0 开始。"
    },
    {
      "question": "125",
      "label": "把一组值拆开",
      "code": "a, b = (10, 20)",
      "note": "元组可以把几个值装在一起，再按顺序交给几个名字。"
    },
    {
      "question": "198",
      "label": "集合去掉重复",
      "code": "set(\"1223\")",
      "note": "只留下 1、2、3 三个字符，顺序不固定。"
    },
    {
      "question": "255",
      "label": "字典按键找值",
      "code": "d[\"gold\"]",
      "note": "用键 \"gold\" 取对应的值，键不是位置编号。"
    },
    {
      "question": "263",
      "label": "缺键时给默认值",
      "code": "d.get(\"name\", \"未知\")",
      "note": "有 name 就给已有的值，没有才用“未知”。"
    }
  ],
  "比较、真假和条件分支": [
    {
      "question": "64",
      "label": "比较大小",
      "code": "24 <= 28 < 25",
      "note": "两个比较都要成立。28 < 25 不成立，整个结果是假。"
    },
    {
      "question": "69",
      "label": "判断真假",
      "code": "if x:",
      "note": "x 是 0 或空字符串时视为假，非零数通常视为真。"
    },
    {
      "question": "62",
      "label": "选择一条路",
      "code": "if；elif；else",
      "note": "依次检查条件，执行第一条成立的分支。"
    },
    {
      "question": "68",
      "label": "组合条件",
      "code": "a or b",
      "note": "左边已经为真时，不再算右边。and 在左边为假时也会停。"
    },
    {
      "question": "58",
      "label": "按条件取值",
      "code": "a if 条件 else b",
      "note": "条件成立就用 a，否则用 b。"
    }
  ],
  "循环、累加和循环控制": [
    {
      "question": "77",
      "label": "按顺序取值",
      "code": "for i in range(1, 6):",
      "note": "i 依次是 1 到 5。冒号后缩进的代码重复执行。"
    },
    {
      "question": "47",
      "label": "条件成立就重复",
      "code": "while i <= n:",
      "note": "每轮先检查条件，通常要在循环里更新 i。"
    },
    {
      "question": "38",
      "label": "每轮累计",
      "code": "total += i",
      "note": "把 i 加进旧的 total，再保存结果。把 print 写在循环外，最后只输出一次。"
    },
    {
      "question": "42",
      "label": "停循环或跳过本轮",
      "code": "break；continue",
      "note": "break 退出当前循环。continue 跳过本轮剩下的代码。"
    },
    {
      "question": "136",
      "label": "两层循环",
      "code": "外层 i，内层 j",
      "note": "外层每轮处理一行，内层处理这一行的每一项。"
    }
  ],
  "函数、参数和返回值": [
    {
      "question": "209",
      "label": "定义与调用",
      "code": "def f(x):",
      "note": "定义给一段代码起名 f。写 f(3) 才会运行函数体。"
    },
    {
      "question": "21",
      "label": "位置参数与默认值",
      "code": "f(1, z=3)",
      "note": "先按位置填 1，再按名字给 z。剩下有默认值的参数可省略。"
    },
    {
      "question": "205",
      "label": "返回结果",
      "code": "return a * b",
      "note": "把积交给函数外面的调用者。用 print 才显示出来。"
    },
    {
      "question": "137",
      "label": "收集多余的参数",
      "code": "def f(a, *args):",
      "note": "a 先接第一项，剩下的位置参数一起放进 args。"
    }
  ],
  "函数内外的变量和递归": [
    {
      "question": "18",
      "label": "函数里的名字",
      "code": "def f(a):",
      "note": "a 是这次调用的局部名字，给它换值不会改外面的名字。"
    },
    {
      "question": "163",
      "label": "改列表的内容",
      "code": "items.append(x)",
      "note": "函数内外指向同一张列表时，两边都能看到追加的项。"
    },
    {
      "question": "150",
      "label": "改外面的名字",
      "code": "global x",
      "note": "声明后，在函数里给 x 重新赋值会改外面的 x。"
    },
    {
      "question": "17",
      "label": "递归会何时停",
      "code": "fact(n - 1)",
      "note": "先处理更小的 n，到已知答案的 n = 0 时停止向下调用。"
    }
  ],
  "模块与随机数": [
    {
      "question": "80",
      "label": "导入模块",
      "code": "import random",
      "note": "引入一组现成的工具，再用 random.函数名(...) 调用。"
    },
    {
      "question": "101",
      "label": "抽一个整数",
      "code": "random.randint(10, 99)",
      "note": "10 和 99 都可能抽到。"
    },
    {
      "question": "109",
      "label": "抽一个小数",
      "code": "random.random()",
      "note": "结果大于等于 0 且小于 1。uniform(a, b) 改用指定区间。"
    },
    {
      "question": "106",
      "label": "重现一串数",
      "code": "random.seed(42)",
      "note": "重新设置起点，再按相同顺序取值，就能得到同一串结果。"
    },
    {
      "question": "108",
      "label": "随机挑一项",
      "code": "random.choice(items)",
      "note": "从一组值里返回其中一个元素。"
    }
  ],
  "异常和报错": [
    {
      "question": "120",
      "label": "尝试与处理",
      "code": "try；except",
      "note": "先试 try 里的代码。出错后找能处理这类错误的 except。"
    },
    {
      "question": "115",
      "label": "认出常见报错",
      "code": "NameError；ZeroDivisionError",
      "note": "前者表示找不到名字，后者表示除数等于零。"
    },
    {
      "question": "117",
      "label": "看清处理范围",
      "code": "try:",
      "note": "只有缩进在 try 里面的错误能被它后面的 except 接住。"
    },
    {
      "question": "111",
      "label": "方法用错类型",
      "code": "(1, 2, 3).reverse()",
      "note": "元组没有 reverse 方法，执行到这一行会报错。"
    }
  ],
  "文件、CSV 和数据组织": [
    {
      "question": "223",
      "label": "选择打开方式",
      "code": "open(path, \"r\")",
      "note": "r 读，w 覆盖写，a 追加。加 b 按字节读写，加 + 可读写。"
    },
    {
      "question": "241",
      "label": "逐行读取",
      "code": "for line in file:",
      "note": "每轮拿到一行。readlines() 则把所有行放进列表。"
    },
    {
      "question": "229",
      "label": "写完再从头读",
      "code": "file.seek(0)",
      "note": "写完后位置通常在末尾，先移到开头才能读到刚写的内容。"
    },
    {
      "question": "220",
      "label": "读懂 CSV 的行和列",
      "code": "姓名,成绩",
      "note": "一行是一条记录，英文逗号隔开字段。第一行可以是表头。"
    },
    {
      "question": "242",
      "label": "拆开、拼回字段",
      "code": "split(\",\")；\",\".join(items)",
      "note": "简单 CSV 可以按逗号拆分或拼接。含引号的字段要按 CSV 规则处理。"
    }
  ],
  "输入、输出和数字": [
    {
      "question": "474",
      "label": "读一行并填进句子",
      "code": "name = input()",
      "note": "读到的是文字。用 format 把名字填进欢迎语，再用 print 显示。"
    },
    {
      "question": "891",
      "label": "读入数字再计算",
      "code": "n = int(input())",
      "note": "从最里面开始，先读一行，再转成整数。"
    },
    {
      "question": "488",
      "label": "按位数显示小数",
      "code": "\"{:.2f}\".format(area)",
      "note": "固定显示两位小数，整数结果也会显示为 6.00 这样的形式。"
    },
    {
      "question": "894",
      "label": "拆个位和十位",
      "code": "n % 10；n // 10",
      "note": "先取余数得到个位，整除 10 后可以继续取十位。"
    },
    {
      "question": "478",
      "label": "按倍率重复变化",
      "code": "total = p * (1 + r) ** n",
      "note": "变化 n 次就把倍率乘 n 次。最后按题意输出金额或利息。"
    }
  ],
  "条件和异常": [
    {
      "question": "501",
      "label": "两个条件同时成立",
      "code": "if a == b and c == d:",
      "note": "两个等式都成立才执行缩进的代码。"
    },
    {
      "question": "899",
      "label": "按顺序判断",
      "code": "if；elif；else",
      "note": "先查特殊例外，再查一般规则。闰年先查能否被 400 整除。"
    },
    {
      "question": "902",
      "label": "拆输入再分级",
      "code": "text.split(\",\")",
      "note": "得到的还是文字。转成数、算完公式，再和分界值比较。"
    },
    {
      "question": "919",
      "label": "处理无效输入",
      "code": "except ValueError:",
      "note": "转数字失败时，执行缩进的提示语。"
    }
  ],
  "循环和图形": [
    {
      "question": "904",
      "label": "按范围加一遍",
      "code": "for i in range(1, n + 1):",
      "note": "范围右端不取，所以想加到 n，右端写 n + 1。"
    },
    {
      "question": "910",
      "label": "条件成立就重复",
      "code": "while i <= m:",
      "note": "每轮先累加，再把 i 加 1。印出总和要等循环结束。"
    },
    {
      "question": "913",
      "label": "试一个数能否整除",
      "code": "n % d == 0",
      "note": "余数为 0 就找到了因子。找不到因子才判素数，1 要先排除。"
    },
    {
      "question": "914",
      "label": "按行和列输出",
      "code": "print(x, end=\" \")",
      "note": "内层循环先在同一行打印各列，走完一行再换行。"
    }
  ],
  "文字和列表": [
    {
      "question": "888",
      "label": "按位置拆文字",
      "code": "s[0]；s[1:]",
      "note": "先取单位字符，再把后面的部分转成数。"
    },
    {
      "question": "943",
      "label": "插入和追加",
      "code": "ls.insert(i, x)；ls.append(x)",
      "note": "insert 放到指定位置前，append 始终加在最后。"
    },
    {
      "question": "946",
      "label": "合并后排序",
      "code": "ls.sort(reverse=True)",
      "note": "把输入转成整数再排序，才能按数值比较 2 和 10。"
    },
    {
      "question": "948",
      "label": "去重与统计",
      "code": "sorted(set(ls))",
      "note": "先得到各不相同的值，再用 ls.count(x) 数次数。"
    },
    {
      "question": "955",
      "label": "取中间的一段",
      "code": "sorted(ls)[1:-1]",
      "note": "排序后去掉最前和最后各一项，再用剩下的分数求平均。"
    }
  ],
  "函数和递归": [
    {
      "question": "933",
      "label": "写好后要调用",
      "code": "def hello():",
      "note": "缩进写函数要做的事，再在函数外用 hello() 调用。"
    },
    {
      "question": "934",
      "label": "拿回函数结果",
      "code": "print(hello())",
      "note": "先算里面的调用，让 return 给出结果，再把结果显示出来。"
    },
    {
      "question": "937",
      "label": "参数可以省略",
      "code": "def f(name, title=\"同学\"):",
      "note": "不给 title 时才用默认值，给了就用实际传入的值。"
    },
    {
      "question": "928",
      "label": "循环结束再返回",
      "code": "return total",
      "note": "将 return 对齐到循环外，等总和算完再交回去。"
    },
    {
      "question": "932",
      "label": "把任务变小",
      "code": "fact(n - 1)",
      "note": "递归先求更小的情况。碰到 n = 0 就直接返回 1。"
    }
  ],
  "随机数": [
    {
      "question": "918",
      "label": "抽样后数命中",
      "code": "x * x + y * y <= 1",
      "note": "在单位正方形随机取点，命中比例乘 4，近似圆周率。"
    },
    {
      "question": "925",
      "label": "曲线下的面积",
      "code": "y <= f(x)",
      "note": "用点的高度和曲线高度比较，命中比例乘抽样矩形的面积。"
    }
  ],
  "字典和文件": [
    {
      "question": "950",
      "label": "按键新增或查找",
      "code": "key in d",
      "note": "先查键是否存在，避免把已有记录覆盖掉。"
    },
    {
      "question": "953",
      "label": "统计次数",
      "code": "counts.get(x, 0) + 1",
      "note": "先读取原来的次数，没有就从 0 开始，再加 1 并存回。"
    },
    {
      "question": "957",
      "label": "按指定编码读取",
      "code": "open(path, encoding=\"gbk\")",
      "note": "文件读取方式由题目指定。拆成字段后再转换和比较数值。"
    },
    {
      "question": "958",
      "label": "汇总后排序",
      "code": "totals[name] = totals.get(name, 0) + n",
      "note": "同一产品的销量先合计，再对总量排序，最后取前五。"
    }
  ]
};
