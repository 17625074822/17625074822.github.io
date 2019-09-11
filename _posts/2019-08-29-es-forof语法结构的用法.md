# for of 语法结构的用法

# for of 可以遍历哪些类型的数据
* Array
* 字符串
* nodeList
* 类数组对象
* arguments
* Map
* Set

# for of 与 其他遍历方式做个比较
* for..in ： 可以遍历的类型比for in 更多， for of直接遍历出值， for in便利出来的是key
* forEach方式：可以遍历更多的类型， 可以使用 break 和 continue等结束语句

# Iterator 遍历器
* ES6定义的一个接口
* Array实现了Interator的接口
* 实现遍历器接口的数据类型都可以用于 for of