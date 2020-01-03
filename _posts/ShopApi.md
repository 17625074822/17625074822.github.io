# ShopApi 

修改.env

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=shop
DB_USERNAME=root
DB_PASSWORD=123456
```



创建apiResource

```
Route::apiResource('/nav','NavController');
Route::apiResource('/category','CategoryController');
Route::apiResource('/product','ProductController');
Route::apiResource('/tag','TagController');
Route::apiResource('/sku','SkuController');
```

创建表

```
php artisan  make:model Nav -a
php artisan  make:model Category -a
php artisan  make:model Product -a
php artisan  make:model Tag -a
php artisan  make:model Sku -a
```

设计表

navs

```
$table->bigIncrements('id');
$table->tinyInteger('position_id');
$table->string('title', 50);
$table->string('picture', 255);
$table->tinyInteger('link_type');
$table->Integer('link_type');
$table->char('status', 1);
$table->timestamps();
```

categories

```
$table->bigIncrements('id');
$table->string('name', 50);
$table->string('property', 500);
$table->integer('sort');
$table->char('status', 1);
$table->timestamps();
```

products

```
$table->bigIncrements('id');
$table->unsignedBigInteger('category_id');
$table->string('name',50);
$table->integer('sale_num');
$table->longText('content');
$table->integer('sort');
$table->char('status',1);
$table->timestamps();
$table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
```

tags

```
$table->bigIncrements('id');
$table->unsignedBigInteger('product_id');
$table->tinyInteger('type');
$table->string('value', 255);
$table->char('status', 1);
$table->timestamps();
$table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
```

skus

```
$table->bigIncrements('id');
$table->unsignedBigInteger('product_id');
$table->unsignedDecimal('original_price', 10, 2);
$table->unsignedDecimal('price', 10, 2);
$table->string('attr1', 50);
$table->string('attr2', 50);
$table->string('attr3', 50);
$table->integer('quantity');
$table->integer('sort');
$table->char('status', 1);
$table->timestamps();
$table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
```

