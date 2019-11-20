# Laravel中Redis

### 简介

redis是非关系型数据库,它将数据存储在内存中.减少了对数据库的请求次数,是目前最主流的一种缓存技术

### Cache

1. 进入laravel官方文档,去搜索cache

2. 配置database文件

   ```
   'client' => env('REDIS_CLIENT', 'predis'),
   ```

3. 修改.env

   ```
   CACHE_DRIVER=redis
   ```

4. 使用redis

   ```
   $value = Cache::get('key');
   ```

5. 安装debug工具

   ```
   composer require barryvdh/laravel-debugbar  --dev
   ```

6. 设计表

   ```
   加一个字段
   $table->unsignedInteger('visited_counter')->default(0); 			//访问人数
   ```

7. 进入user模型

   ```
   protected $fillable  = ['visited_counter'] 
   ```

8. 创建表

   ```
   php artisan migrate ;
   ```

   ### 数据分页示例

   Controller 	

   1. 列表

   ```
    public function index()
       {
           //判断page是否为空,为空的话则设置默认值为1
           $page = request()->page ?? 1;
           $key = 'users.paginate.' . $page;
           $users = Cache::rememberForever($key, function () {
               return User::paginate(6);
           });
           return view('users.index', compact('users'));
       }
   ```

   2. 个人信息

   ```
    在闭包函数中无法直接使用$id ,需要引用进去 
    
    public function show($id)
       {
           $key = 'user.model.' . $id;
           $user = Cache::rememberForever($key, function () use ($id) {
               return User::find($id);
           });
           return view('users.show', compact('user'));
       }
   
   ```

   3. 对访问量进行缓存 (自增)

   ```
   对访问量进行自增,不要频繁访问数据库
   
   在user的model类中 新建一个方法
    public function getVisitedNumberAttribute()
       {
           $key = 'user.visited.' . $this->id;
           Cache::rememberForever($key, function () {
               return $this->visited_counter;
           });
           return Cache::increment($key);		//自增
       }
       
      在view层掉用这个方法
      <div class=" m-b-md">
          <h4>{{$user->name}}</h4>
          <p>{{$user->visited_number}}</p>    //每进一次  访问量增 1 
      </div>
   ```

   