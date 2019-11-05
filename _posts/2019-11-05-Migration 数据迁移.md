# Migration 数据迁移

#### Migration是laravel的数据库版本控制

1. 可以创建数据库
2. 可以回滚数据库
3. 可以共享
4. 集成了各大数据库



生成数据库文件

```
php artisan migrate
```

回滚数据库

```
php artisan migrate:rollback --step=1  //回滚一步
```

创建数据哭

```
php artisan  make:migration  create_表名_table --create=表名
```

清空数据库

```
php artisan migrate:reset 
```

修改、刷新表字段（未上线） ，上线再刷新 数据被清空

```
php artisan migrate:refresh
```

添加表字段 （上线）

```
php artisan make:migration add_字段名_filed_into_表名(复数)_table --table=表名(复数)

//up
public function up()
{
	Schema::table('books',function(Bluerint $table){
			$table->string('字段名');  //添加的字段名
	})
}

//down
public function down()
{
	Schema::table('books',function(Bluerint $table){
			$table->dropColum('字段名');  //删除的字段名
	})
}

再执行 php artisan mirgate 执行操作
```

#### 注意：更多详情看文档