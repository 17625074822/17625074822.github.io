#  resource 路由和 resource Gate 结合在一起进行权限判断

为resource路由进行路由权限的判断

首先创建policy(以post表为例)

```
php artisan make:policy PostPolicy --model=Post
```

再创建post的资源控制器

```
php artisan make:controller PostController --resource
```

进入PostPolicy 写相关判断的逻辑 

```
//以view层为例  对应控制器的show  
   public function view(User $user, Post $post)
    {
        if ($user->id == $post->user_id) {
            return true;
        }
        return false;
    }
```

进入 `AuthServiceProvider`在$policies属性中进行绑定

```
    protected $policies = [
        Post::class => PostPolicy::class
    ];
```

最后去post控制器中 创建构造函数

```
    public function __construct()
    {
        $this->authorizeResource(Post::class);  //进行验证  这段在文档中没有
    }
```

