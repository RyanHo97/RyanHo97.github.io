# 数据库

一、数据库的好处

1.可以持久化数据到本地

2.结构化查询



二、数据库的常见概念⭐

1、DB：数据库，存储数据的容器

2、DBMS：数据库管理系统，有称为数据库软件或数据库产品，用于创建或管理DB

3、SQL：结构化查询语言，用于和数据库通信的语言，不是某个数据库软件特有的，而是几乎所有的主流数据库软件通用的语言



三、数据库存储数据的特点

1、数据存放到表中，然后表在放到库中

2、一个库可以有多张表，每张表具有唯一的表明用来标识自己

3、表中有一个或多个列，列又称为“字段“，相当于java中”属性“

4、表中的每一行数据，相当于java中”对象“



四、常见的数据库管理系统

mysql、oracle、db2、sqlserver



## Mysql

一、Mysql的背景

前身属于瑞典的一家公司，MySQL AB

08年被sun公司收购

09年被oracle收购



二、MySQL的优点

1、开源、免费、成本低

2、性能高、移植性也好

3、体积小、便于安装



三、MySQL的安装

属于c/s架构的软件，一般来讲安装服务端

企业版

社区版



5.5

5.6

5.7

8.0



四、MySQL服务的启动和停止

方式一：通过命令行

net start 服务名

net stop 服务名

方式二：计算机--右键--管理--服务



五、MySQL服务的登录和退出



登录：mysql 【-h 主机名 -P 端口号】 -u 用户名 -p明码



退出：exit或ctrl+C





## DQL语言

### 一、语法

select 查询列表

from 表名；

### 二、特点

1、查询列表可以是字段、常量、表达式、函数，也可以是多个

2、查询结果是一个虚拟表



### 三、示例

####1.先进入当前库
```sql
USE myemployees;
```

####2.查询表中单个字段
```sql
SELECT last_name FROM employees;
```

####3.查询表中多个字段
```sql
SELECT last_name ,salary,email FROM employees;
```

####4.查询表中所有字段,如果是*会输出默认顺序
```sql
SELECT * FROM employees;
```

####5.'`'着重号
```sql
SELECT `last_name` FROM employees;
```

####6.查询常量值
```sql
SELECT 100;
SELECT 'john';
```