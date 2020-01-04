# ubuntu18.04创建启动器

### 1.首先进入 /usr/share/applications

```
cd  /usr/share/applications
```

### 2.创建一个 扩展名.desktop

```
sudo vim *.desktop
```

### 3.填入一下信息并修改成自己的路径   icon一定要用png

````
[Desktop Entry]
Encoding = UTF-8
Name = WebStorm   
Comment = MindMaster IDE 
Exec=/home/yin/下载/WebStorm-193.5662.54/bin/webstorm.sh
Icon[en_US]=/home/yin/下载/WebStorm-193.5662.54/bin/webstorm.png
Terminal = false         
Type = Application
````

