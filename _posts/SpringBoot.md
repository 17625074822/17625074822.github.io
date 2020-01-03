# SpringBoot	
### springboot 入门
1. 简化配置
2. 快速创建独立运行的Spring项目以及与主流框架集成
3. 自动依赖与版本控制
4. 快速创建独立运行的spring项目以及与主流框架集成
5. 无需配置xml
6. 准生产环境的运行时应用监控
7. 与云计算的天然集成

### 微服务
1. 微服务:是一种架构风格,是一系列小型服务的组合,
    每个小型服务通过http的方式进行互通,

2. 单体应用:all in one 
    1. 测试简单
    2. 扩展简单
    3.牵一发动全身 

### 创建项目
1. 在java这个文件夹中创建com.example
2. 再创建一个Application文件,写上如下代码启动项目
    ``` 
    package com.example;
    
    import org.mybatis.spring.annotation.MapperScan;
    import org.springframework.boot.SpringApplication;
    import org.springframework.boot.autoconfigure.SpringBootApplication;
    import org.springframework.context.annotation.ComponentScan;
    
    @SpringBootApplication
    @MapperScan("com.example.mapper")
    public class Application {
    
        //spring应用启动起来
        public static void main(String[] args) {
            SpringApplication.run(Application.class, args);
        }
    
    }
    ```
3. 创建一个controller文件夹
在里面间一个HelloController文件
```  
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
public class HelloController {
    @RequestMapping("/hello")
    public String hello() {
        return "hello world";
    }
}
```
4. 去Application点击run ,然后去页面点击127.0.0.1:8080/hello
    既可以显示hello world
5. hello world探究
    1. pom文件
       1.父项目负责版本仲裁
        2. 导入的依赖(启动器) 
    2. 主程序类
    ```  
    @SpringBootApplication
    ```
   
### springboot的配置
1. application.properties配置文件