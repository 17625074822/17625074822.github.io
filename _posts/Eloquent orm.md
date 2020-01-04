# Eloquent orm 

1.什么是orm 

orm的全称是:Object Relational Mapping  

###### 							对象           关系              映射

​							对象  --------------------> 数据

​							

2. 一对一

   ```
   php  artisan make:model Post -m  ->post.php 和 migrations文件
   migrations文件设计表
               $table->bigIncrements('id');
               $table->string('title');
               $table->text('body');
               $table->unsignedBigInteger('author_id');
               $table->foreign('author_id')->references('id')->on('user');
               $table->timestamp('published_at');
    php artisan migrate 
    
    php artisan make:factory PostFactory -m Post     ----> postFActiony.php
    定义字段
            'title' => $faker->sentence,
           'body' => $faker->paragraph,
           'published_at' => \Carbon\Carbon::now(),
           'author_id' => \App\User::all()->random()->id
    
    进入命令行
    php artisan tinker 
    namespace App
    factory(Post::class,100)->create()
    
    一对一
    $users = User::all()
           
   ```

   

3. 一对多

 ```
user.php

    public function posts()
    {
        return $this->hasMany(Post::class,'author_id');
    }
   
   
   post.php
      public function author()
    {
        return $this->belongsTo(User::class, 'author_id');
    }
 ```

