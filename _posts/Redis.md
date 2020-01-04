# Redis

### 1.字符串

```
127.0.0.1:6379> get name 
"xiaozhu"
127.0.0.1:6379> incr 1
(integer) 1
127.0.0.1:6379> get 1
"1"
127.0.0.1:6379> incr num 
(integer) 1
127.0.0.1:6379> get num 
"1"
127.0.0.1:6379> incr num 
(integer) 2
127.0.0.1:6379> incr num 
(integer) 3
127.0.0.1:6379> get num 
"3"
127.0.0.1:6379> incrby height 10
(integer) 10
127.0.0.1:6379> incr height
(integer) 11
127.0.0.1:6379> incrby height 10
(integer) 21
127.0.0.1:6379> get height
"21"
127.0.0.1:6379> decr height 10
(error) ERR wrong number of arguments for 'decr' command
127.0.0.1:6379> decr height
(integer) 20
127.0.0.1:6379> decrby height 5
(integer) 15
127.0.0.1:6379> get height 127.0.0.1:6379> hset person name xiaoyin 
(integer) 1
127.0.0.1:6379> hget person
(error) ERR wrong number of arguments for 'hget' command
127.0.0.1:6379> hget person name 
"xiaoyin"
127.0.0.1:6379> hdel person name 
(integer) 1
127.0.0.1:6379> hget person name 
(nil)
127.0.0.1:6379> hexists person name 
(integer) 0
127.0.0.1:6379> hset person name xiaoyin 
(integer) 1
127.0.0.1:6379> hset person age 25
(integer) 1
127.0.0.1:6379> hset person weight 65kg
(integer) 1
127.0.0.1:6379> hexists person age 
(integer) 1
127.0.0.1:6379> hexists person weight 
(integer) 1
127.0.0.1:6379> hexists person weigh
(integer) 0
127.0.0.1:6379> hgetall person 
1) "name"
2) "xiaoyin"
3) "age"
4) "25"
5) "weight"
6) "65kg"
127.0.0.1:6379> hkeys person 
1) "name"
2) "age"
3) "weight"
127.0.0.1:6379> hval person 
(error) ERR unknown command `hval`, with args beginning with: `person`, 
127.0.0.1:6379> hval person  
(error) ERR unknown command `hval`, with args beginning with: `person`, 
127.0.0.1:6379> hvals person  
1) "xiaoyin"
2) "25"
3) "65kg"
127.0.0.1:6379> hmset person waimao shauaige  pifu  chaojibai diao  feichangda 
OK
127.0.0.1:6379> getall person 
(error) ERR unknown command `getall`, with args beginning with: `person`, 
127.0.0.1:6379> hgetall person 
 1) "name"
 2) "xiaoyin"
 3) "age"
 4) "25"
 5) "weight"
 6) "65kg"
 7) "waimao"
 8) "shauaige"
 9) "pifu"
10) "chaojibai"
11) "diao"
12) "feichangda"
127.0.0.1:6379> hmget person 
(error) ERR wrong number of arguments for 'hmget' command
127.0.0.1:6379> hmget person person  name  age weight diao 
1) (nil)
2) "xiaoyin"
3) "25"
4) "65kg"
5) "feichangda"
127.0.0.1:6379> 

"15"
127.0.0.1:6379> setex height 5 helloworld
OK
127.0.0.1:6379> get height 
"helloworld"
127.0.0.1:6379> get height 
(nil)
127.0.0.1:6379> strlen height 
(integer) 0
127.0.0.1:6379> strlen num 
(integer) 1
127.0.0.1:6379> strlen name 
(integer) 7
127.0.0.1:6379> get name 
"xiaozhu"
127.0.0.1:6379> setbit 5 1
(error) ERR wrong number of arguments for 'setbit' command
127.0.0.1:6379> setbit chidao 5 1
(integer) 0
127.0.0.1:6379> setbit chidao 6 1
(integer) 0
127.0.0.1:6379> git chidao 1
(error) ERR unknown command `git`, with args beginning with: `chidao`, `1`, 
127.0.0.1:6379> get chidao 1
(error) ERR wrong number of arguments for 'get' command
127.0.0.1:6379> getbit  chidao 1
(integer) 0
127.0.0.1:6379> getbit chidao 5
(integer) 1
127.0.0.1:6379> getbit chidao 6
(integer) 1
127.0.0.1:6379> bitcount 1 
(integer) 3
127.0.0.1:6379> bitcount chidao 1
(error) ERR syntax error
127.0.0.1:6379> bitcount chidao 
(integer) 2
127.0.0.1:6379> setnx  name xiaofei 
(integer) 0
127.0.0.1:6379> get name 
"xiaozhu"
127.0.0.1:6379> setnx name xiaogang 
(integer) 0
127.0.0.1:6379> get name 
"xiaozhu"
127.0.0.1:6379> append name hahaha 
(integer) 13
127.0.0.1:6379> get name 
"xiaozhuhahaha"
127.0.0.1:6379> getrange  name 1 5
"iaozh"
127.0.0.1:6379> getrange  name 0 6
"xiaozhu"

```

### 2.哈希

```
127.0.0.1:6379> hset person name xiaoyin 
(integer) 1
127.0.0.1:6379> hget person
(error) ERR wrong number of arguments for 'hget' command
127.0.0.1:6379> hget person name 
"xiaoyin"
127.0.0.1:6379> hdel person name 
(integer) 1
127.0.0.1:6379> hget person name 
(nil)
127.0.0.1:6379> hexists person name 
(integer) 0
127.0.0.1:6379> hset person name xiaoyin 
(integer) 1
127.0.0.1:6379> hset person age 25
(integer) 1
127.0.0.1:6379> hset person weight 65kg
(integer) 1
127.0.0.1:6379> hexists person age 
(integer) 1
127.0.0.1:6379> hexists person weight 
(integer) 1
127.0.0.1:6379> hexists person weigh
(integer) 0
127.0.0.1:6379> hgetall person 
1) "name"
2) "xiaoyin"
3) "age"
4) "25"
5) "weight"
6) "65kg"
127.0.0.1:6379> hkeys person 
1) "name"
2) "age"
3) "weight"
127.0.0.1:6379> hval person 
(error) ERR unknown command `hval`, with args beginning with: `person`, 
127.0.0.1:6379> hval person  
(error) ERR unknown command `hval`, with args beginning with: `person`, 
127.0.0.1:6379> hvals person  
1) "xiaoyin"
2) "25"
3) "65kg"
127.0.0.1:6379> hmset person waimao shauaige  pifu  chaojibai diao  feichangda 
OK
127.0.0.1:6379> getall person 
(error) ERR unknown command `getall`, with args beginning with: `person`, 
127.0.0.1:6379> hgetall person 
 1) "name"
 2) "xiaoyin"
 3) "age"
 4) "25"
 5) "weight"
 6) "65kg"
 7) "waimao"
 8) "shauaige"
 9) "pifu"
10) "chaojibai"
11) "diao"
12) "feichangda"
127.0.0.1:6379> hmget person 
(error) ERR wrong number of arguments for 'hmget' command
127.0.0.1:6379> hmget person person  name  age weight diao 
1) (nil)
2) "xiaoyin"
3) "25"
4) "65kg"
5) "feichangda"
127.0.0.1:6379> 

```

### 3.集合

````
127.0.0.1:6379> sadd personinfo xiaoyin 
(integer) 1
127.0.0.1:6379> sad  personinfo xiaowang 
(error) ERR unknown command `sad`, with args beginning with: `personinfo`, `xiaowang`, 
127.0.0.1:6379> sdad  personinfo xiaowang 
(error) ERR unknown command `sdad`, with args beginning with: `personinfo`, `xiaowang`, 
127.0.0.1:6379> sadd  personinfo xiaowang 
(integer) 1
127.0.0.1:6379> sadd  personinfo xiaohei 
(integer) 1
127.0.0.1:6379> scard personinfo 
(integer) 3
127.0.0.1:6379> sadd englist tom xiaozhang  xiaoyin jack
(integer) 4
127.0.0.1:6379> sdiff personinfo chinese
1) "xiaowang"
2) "xiaohei"
3) "xiaoyin"
127.0.0.1:6379> sdiff personinfo englist 
1) "xiaowang"
2) "xiaohei"
127.0.0.1:6379> sadd num1  1 2 3 4 5 6
(integer) 6
127.0.0.1:6379> sadd num2 2 3 4 5 6  7
(integer) 6
127.0.0.1:6379> sdiff num1 num2 
1) "1"
127.0.0.1:6379> sdiff num2 num1 
1) "7"
127.0.0.1:6379> sdiffstore total num1 num2 
(integer) 1
127.0.0.1:6379> sinter num1 num2 
1) "2"
2) "3"
3) "4"
4) "5"
5) "6"
127.0.0.1:6379> sinterstore total num1 num2 
(integer) 5
127.0.0.1:6379> sismember total 7
(integer) 0
127.0.0.1:6379> sismember total 1
(integer) 0
127.0.0.1:6379> sismember total 2
(integer) 1
127.0.0.1:6379> scard total
(integer) 5
127.0.0.1:6379> sdiffstore total num1 num2 
(integer) 1
127.0.0.1:6379> scard total 
(integer) 1
127.0.0.1:6379> sismember total 1
(integer) 1
127.0.0.1:6379> sdiffstore total num2 num1 
(integer) 1
127.0.0.1:6379> scard total 1
(error) ERR wrong number of arguments for 'scard' command
127.0.0.1:6379> sismember total 1
(integer) 0
127.0.0.1:6379> sismember total 7
(integer) 1
127.0.0.1:6379> smembers total 
1) "7"
127.0.0.1:6379> smove num1 1 num2 
(integer) 0
127.0.0.1:6379> smove num1 num2 1
(integer) 1
127.0.0.1:6379> smembers num2
1) "1"
2) "2"
3) "3"
4) "4"
5) "5"
6) "6"
7) "7"
127.0.0.1:6379> spop num2 2
1) "1"
2) "7"
127.0.0.1:6379> srandmember num2 2
1) "3"
2) "4"
127.0.0.1:6379> smembers num2 
1) "2"
2) "3"
3) "4"
4) "5"
5) "6"
127.0.0.1:6379> srem num2 2
(integer) 1
127.0.0.1:6379> smembers 
(error) ERR wrong number of arguments for 'smembers' command
127.0.0.1:6379> smembers num2 
1) "3"
2) "4"
3) "5"
4) "6"
127.0.0.1:6379> sunion num1 num2 
1) "2"
2) "3"
3) "4"
4) "5"
5) "6"
127.0.0.1:6379> sunionstore num num1 num2 
(integer) 5
127.0.0.1:6379> smemebers num 
(error) ERR unknown command `smemebers`, with args beginning with: `num`, 
127.0.0.1:6379> smembers num 
1) "2"
2) "3"
3) "4"
4) "5"
5) "6"
127.0.0.1:6379> 

````

### 4.有序集合

```
127.0.0.1:6379> sadd personinfo xiaoyin 
(integer) 1
127.0.0.1:6379> sad  personinfo xiaowang 
(error) ERR unknown command `sad`, with args beginning with: `personinfo`, `xiaowang`, 
127.0.0.1:6379> sdad  personinfo xiaowang 
(error) ERR unknown command `sdad`, with args beginning with: `personinfo`, `xiaowang`, 
127.0.0.1:6379> sadd  personinfo xiaowang 
(integer) 1
127.0.0.1:6379> sadd  personinfo xiaohei 
(integer) 1
127.0.0.1:6379> scard personinfo 
(integer) 3
127.0.0.1:6379> sadd englist tom xiaozhang  xiaoyin jack
(integer) 4
127.0.0.1:6379> sdiff personinfo chinese
1) "xiaowang"
2) "xiaohei"
3) "xiaoyin"
127.0.0.1:6379> sdiff personinfo englist 
1) "xiaowang"
2) "xiaohei"
127.0.0.1:6379> sadd num1  1 2 3 4 5 6
(integer) 6
127.0.0.1:6379> sadd num2 2 3 4 5 6  7
(integer) 6
127.0.0.1:6379> sdiff num1 num2 
1) "1"
127.0.0.1:6379> sdiff num2 num1 
1) "7"
127.0.0.1:6379> sdiffstore total num1 num2 
(integer) 1
127.0.0.1:6379> sinter num1 num2 
1) "2"
2) "3"
3) "4"
4) "5"
5) "6"
127.0.0.1:6379> sinterstore total num1 num2 
(integer) 5
127.0.0.1:6379> sismember total 7
(integer) 0
127.0.0.1:6379> sismember total 1
(integer) 0
127.0.0.1:6379> sismember total 2
(integer) 1
127.0.0.1:6379> scard total
(integer) 5
127.0.0.1:6379> sdiffstore total num1 num2 
(integer) 1
127.0.0.1:6379> scard total 
(integer) 1
127.0.0.1:6379> sismember total 1
(integer) 1
127.0.0.1:6379> sdiffstore total num2 num1 
(integer) 1
127.0.0.1:6379> scard total 1
(error) ERR wrong number of arguments for 'scard' command
127.0.0.1:6379> sismember total 1
(integer) 0
127.0.0.1:6379> sismember total 7
(integer) 1
127.0.0.1:6379> smembers total 
1) "7"
127.0.0.1:6379> smove num1 1 num2 
(integer) 0
127.0.0.1:6379> smove num1 num2 1
(integer) 1
127.0.0.1:6379> smembers num2
1) "1"
2) "2"
3) "3"
4) "4"
5) "5"
6) "6"
7) "7"
127.0.0.1:6379> spop num2 2
1) "1"
2) "7"
127.0.0.1:6379> srandmember num2 2
1) "3"
2) "4"
127.0.0.1:6379> smembers num2 
1) "2"
2) "3"
3) "4"
4) "5"
5) "6"
127.0.0.1:6379> srem num2 2
(integer) 1
127.0.0.1:6379> smembers 
(error) ERR wrong number of arguments for 'smembers' command
127.0.0.1:6379> smembers num2 
1) "3"
2) "4"
3) "5"
4) "6"
127.0.0.1:6379> sunion num1 num2 
1) "2"
2) "3"
3) "4"
4) "5"
5) "6"
127.0.0.1:6379> sunionstore num num1 num2 
(integer) 5
127.0.0.1:6379> smemebers num 
(error) ERR unknown command `smemebers`, with args beginning with: `num`, 
127.0.0.1:6379> smembers num 
1) "2"
2) "3"
3) "4"
4) "5"
5) "6"
127.0.0.1:6379> 

```

