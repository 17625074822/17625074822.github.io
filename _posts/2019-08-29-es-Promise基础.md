# Promise 基础
### js中的异步操作
* ajax请求
* 浏览器事件
* 定时

### 回调函数

### 回调地狱
* 回调函数嵌套回调函数

### Promise
* 解决回调地狱
* 向同步操作那样去执行异步的操作

### Promise的构造函数
* 构造函数必须接受一个函数作为参数，函数可以接口参数


# Promise的原理
### 原理
* 一个promise实例（对象） 代表一个异步操作
* promise通过状态去管理 异步操作

### 状态
* pendding （进行中）
* fulfilled  (已完成)  resolve()函数执行
* rejected （已经失败） reject() 函数执行



# Promise的实例


# Promise对象的方法
* then()
* catch() 参数一个回调函数， promsie转台为 rejected时调用
* all() 参数是数组，数组成员都是promise对象 所有promise对象状态改变，才执行then
* race() 参数也是数组，数组成员都是promise对象。 最快的promise状态改变，其他的promise停止


# jQuery 使用Promise