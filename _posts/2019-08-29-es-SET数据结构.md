# SET 数据结构
### 定义
* 类似于数组，但是其成员是唯一的
* 实现了Interator接口
* set结构只有值，没有索引

### Set构造函数
* 可以接收一个数组
* 可以接受所有实现了 Interator接口的数据结构

### 属性
* size

### 方法
* add(value) 添加成员
* delete(value) 删除成员
* has(value) 判断是否存在某个值
* clear()  清空所有成员
* forEach()
* keys() 等同于values
* values()
* entries()

# WeakSet
### 定义
* 与Set类型，成员唯一， 成员必须是对象
* WeakSet中的对象都是弱引用
* 不能遍历，也没有size属性
* 没有实现Interator接口

### 方法
* add()
* delete()
* has()



# Map
### 定义
* Map跟对象类似，键值对组成集合，键的类型可以是任意类型
* Map实现了Interator接口

### 构造函数
* 构造函数的参数可以是数组，数组是二维数组，元素数组两个元素，key value

### 属性
* size

### 方法
* get(key)
* set(key, value) 修改/添加
* has(key)
* clear() 清空
* forEach()
* values()
* keys()
* entires()


# WeakMap
### 定义
* 键必须是对象
* 键所执行的对象是弱引用
* 不可遍历 没有实现Interator接口

### 方法
* set()
* get()
* has()
* delete()
