# 订单api

修改.env

````
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=pre_shop
DB_USERNAME=root
DB_PASSWORD=123456
````

建表

```
php artisan make:model Express -a
php artisan make:model Product -a
php artisan make:model Sku -a
php artisan make:model Regions -a
php artisan make:model Address -a
php artisan make:model Cart -a
php artisan make:model Order -a
php artisan make:model Order_item  -a
```

设计表

expresses

```
$table->bigIncrements('id');
$table->string('name', 100)->default('')->comment('名称');
$table->unsignedDecimal('min_money', 10, 2)->default(0)->comment('包邮最低金额');
$table->integer('weight')->default(0)->comment('重量k');
$table->integer('fee')->default(0)->comment('费用');
$table->integer('status')->default(0)->comment('状态');
$table->timestamps();
```

products

```
$table->bigIncrements('id');
$table->string('name', 255)->default('')->comment('名称');
$table->unsignedBigInteger('express_id')->default(0)->comment('运费模板ID')->index();
$table->tinyInteger('status')->default(10)->comment('状态');
$table->integer('quantity')->default(0)->comment('库存');
$table->integer('sale_num')->default(0)->comment('售出数量');
$table->timestamps();
$table->foreign('express_id')->references('id')->on('expresses')->onDelete('cascade');
```

skus

```
$table->bigIncrements('id');
$table->unsignedBigInteger('product_id')->comment('商品id')->index();
$table->string('version', 100)->comment('版本');
$table->integer('quantity')->default(0)->comment('数量');
$table->unsignedDecimal('price', 10, 2)->default(0)->comment('单价');
$table->integer('weight')->default(0)->comment('重量(克)');
$table->integer('sale_num')->default(0)->comment('售出数量');
$table->unsignedInteger('status')->default(10)->comment('状态');
$table->timestamps();
$table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
```

regions

```
$table->integer('code')->primary();
$table->string('name', 50);
$table->integer('parent_code');
$table->timestamps();
```

addresses

```
$table->bigIncrements('id');
$table->unsignedBigInteger('user_id')->default(0)->comment('会员ID')->index();
$table->string('name', 50)->default('')->comment('收货人');
$table->integer('province')->default(0)->comment('省');
$table->integer('city')->default(0)->comment('市');
$table->integer('district')->default(0)->comment('区');
$table->string('detail', 255)->default('')->comment('详细地址');
$table->string('mobile', 50)->default('')->comment('手机');
$table->unsignedTinyInteger('status')->default(10)->comment('状态');
$table->timestamps();
$table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
```

carts

```
$table->bigIncrements('id');
$table->unsignedBigInteger('user_id')->default(0)->comment('会员ID')->index();
$table->unsignedBigInteger('sku_id')->default(0)->comment('SKU_ID')->index();
$table->integer('quantity')->default(0)->comment('数量');
$table->integer('status')->default(10)->comment('状态');
$table->timestamps();
$table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
$table->foreign('sku_id')->references('id')->on('skus')->onDelete('cascade');
```

orders

```
$table->bigIncrements('id');
$table->string('number', 32)->unique()->comment('订单号');
$table->unsignedBigInteger('user_id')->index()->comment('下单人');
$table->decimal('product_fee', 10, 2)->default(0)->comment('商品总额');
$table->decimal('total_fee', 10, 2)->default(0)->comment('运费');
$table->decimal('express_fee', 10, 2)->default(0)->comment('订单总额');
$table->unsignedTinyInteger('status')->default(10)->comment('订单状态');
$table->unsignedTinyInteger('delivery_status')->default(10)->comment('运输状态');
$table->unsignedTinyInteger('payment_status')->default(10)->comment('支付状态');
$table->string('receiver_name', 50)->default('')->comment('收货人');
$table->integer('receiver_province')->default(0)->comment('省');
$table->integer('receiver_city')->default(0)->comment('市');
$table->integer('receiver_district')->default(0)->comment('区');
$table->string('receiver_detail', 255)->default('')->comment('详细地址');
$table->string('receiver_mobile', 50)->default('')->comment('手机');
$table->timestamps();
$table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
```

order_items

```
$table->bigIncrements('id');
$table->unsignedBigInteger('order_id')->default(0)->comment('订单ID')->index();
$table->unsignedBigInteger('product_id')->default(0)->comment('订单ID')->index();
$table->string('product_full_name', 255)->comment('商品完整名称');
$table->unsignedBigInteger('sku_id')->default(0)->comment('SKU_ID')->index();
$table->integer('quantity')->default(0)->comment('数量');
$table->unsignedDecimal('price', 10, 2)->default(0)->comment('单价');
$table->timestamps();
$table->foreign('order_id')->references('id')->on('orders')->onDelete('cascade');
$table->foreign('product_id')->references('id')->on('products')->onDelete('cascade');
$table->foreign('sku_id')->references('id')->on('skus')->onDelete('cascade');
```

