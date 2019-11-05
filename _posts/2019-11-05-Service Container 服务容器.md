# Service Container 服务容器

一个项目中肯定会有不同的服务，比如微信登录，短信登录，而provide就是注册这些服务，

并放到Service Container中，Service Container就可以管理这些服务，比如说

```
我声明了一个 person 类
Class Person
{
	echo  ' i am person';
}
我声明了一个 tv 类
Class TV
{
	echo  ' i am TV';
}
我声明了一个family 类
Class family
{
        public $person;
        public $tv;
        public __construct($person ,$tv){
            $this->person = $person;
            $this->tv = $tv;
            echo 'i am family';
		}
 }
 
 我们调用family的时候就必须以来 person 和 tv类，这样做每次调用family就 太麻烦了
 所以service Container可以自动的帮助我们 注入需要依赖的对象，简化我们的操作。
 我们只需要给每个对象 声明好 类型就可以 
 Route::get('/',function(Family $family){
 		//这样 Service Container 可以自动的帮助我们创建好依赖的对象
 })
```

