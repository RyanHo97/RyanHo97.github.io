# C语言考试

## 一、选择结构

#### 1.if

设整形变量a为5，判断此变量是否大于10，大于的话输出大于10，小于等于的话，输出小于等于10并输出值。

```c
#include <stdio.h>

int main()
{
	int a=5;
	
	if(a>10){
		printf("大于10\n");	
	}else{
		printf("小于等于10，值为：%d\n",a);
	}

	return 0;
}
```

运行结果：

```bash
小于等于10，值为：5
```

拓展else if

```c
#include <stdio.h>

int main()
{
	int a=10;
	
	if(a>10){
		printf("大于10\n");	
	}else if(a=10){
		printf("等于10，值为：%d\n",a);
	}else{
		printf("小于10，值为：%d\n",a);
	}

	return 0;
}
```

运行结果：

```bash
等于10，值为：10
```



#### 2.switch

如果现在输入一个整形变量a，用switch分别按照以下规则输出：

当a=1，输出我爱萌宝；

当a=2，输出萌宝爱我；

当a=3，输出萌宝最好看了；

当a等于其他值时，输出字符串为：0。



```c
#include <stdio.h>

int main(){
	
	int a;  //定义整型变量a。

	printf("请输入数字：");
	scanf("%d",&a);	//scanf是接受键盘输入的值，只能写变量不能写其他字符串。

	switch(a){
	
		case 1:
			printf("我爱萌宝\n");
			break;
		case 2:
			printf("萌宝爱我\n");
			break;
		case 3:
			printf("萌宝最好看了\n");
			break;
		default :
			printf("0\n");
	}
	
	return 0;

}
```



## 二、循环结构

#### 1.for

现在有个数组arr，里面有6个元素1、2、3、4、5、6，现在遍历到控制台，该怎么写？



```c
#include <stdio.h>

int main(){
	
	//现在有个数组arr,里面有6个元素1、2、3、4、5、6
	int arr[] = {1,2,3,4,5,6};

	//arr[0];  arr[0]相当于取数组中第一个元素	arr[index] 下标 ，从零开始数

	//for(循环条件){循环内的执行语句}  
	//int i=0;设置循环条件i初始值; i<6为循环的结束条件; i++ 同理：i=i+1
	for(int i=0;i<6;i++){
		printf("%d\n",arr[i]);
	}

	//printf("%d\n",arr[0]); -- 1
	//printf("%d\n",arr[1]); -- 2
	//printf("%d\n",arr[2]); -- 3
	//printf("%d\n",arr[3]); -- 4
	//printf("%d\n",arr[4]); -- 5
	//printf("%d\n",arr[5]); -- 6
	return 0;

}
```



#### 2.while（先判断再执行）

设整型变量a为10，使用while语句，循环条件为a<20，每次循环输出a值并加1。

```c
#include <stdio.h>
 
int main ()
{
   /* 局部变量定义 */
   int a = 10;

   /* while 循环执行 */
   while( a < 20 )  //循环到了a=20结束while循环
   {
      printf("a 的值： %d\n", a);
      a++;//每次循环+1
   }
 
   return 0;
}
```



#### 3.do-while（先执行再判断）

设整型变量a为10，使用do-while语句，循环条件为a<20，每次循环输出a值并加1。

```c
#include <stdio.h>
 
int main ()
{
   /* 局部变量定义 */
   int a = 10;

   /* do...while 循环执行 */
   do
   {
      printf("a 的值： %d\n", a);
      a++;
   }while( a < 20 );
 
   return 0;
}
```



极端例子：

```c
#include <stdio.h>
 
int main ()
{
   /* 局部变量定义 */
   int a = 10;

   /* do...while 循环执行 */
   do
   {
      printf("a 的值： %d\n", a);
      a++;
   }while( a < 10 );
 
   return 0;
}
```

仍然执行输出：

```bash
a 的值： 10
```





## 三、实际问题

#### 1.能够对一维数组进行定义、赋值和输入输出，并能够利用数组编写求和、求最大值/最小值、查找、插入、删除、排序等经典实际问题；

**3.1.1能够对一维数组进行定义、赋值和输入输出**

```c
#include <stdio.h>

int main(){
	//现在定义一个数组arr，数组内有三个元素，分别是5，8，9，请用代码定义出来：
	int arr[] = {5,8,9};

	//现在把第二个元素赋值成6，怎么写：
	//int arr[2] = 6; //错误
	arr[1] = 6;

	//现在需要用键盘输入一个数，来改变数组中第三个元素：
	printf("请在键盘输入数字：");
	scanf("%d",&arr[2]);  //不可以加中文

	//现在按顺序一个一个输出数组所有元素出来：
	for(int i=0;i<3;i++){
		printf("%d\n",arr[i]);
	}

	return 0;

}
```

**3.1.2并能够利用数组编写求和、求最大值/最小值**

**求和：**

```c
#include <stdio.h>

int main(){
	//现在定义一个数组arr，数组内有三个元素，分别是5，8，9，请用代码定义出来：
	int arr[] = {5,8,9};
	int sum=0; //初始化一个变量sum接收值

	for(int i=0;i<3;i++){
		sum=sum+arr[i];  //循环三次，每次sum等sum本身加数组对应循环次数的元素arr[i]
	}

	printf("%d\n\n",sum);

	return 0;

}
```



**输出数组中最大值和最小值：**

```c
#include <stdio.h>

int main(){
	//现在定义一个数组arr，数组内有八个元素，分别是5,8,9,12,16,20,36,46，请用代码定义出来：
	int arr[] = {12,16,20,5,8,9,36,46};

	int max,min = arr[0]; //同时定义两个变量并赋值为arr[0],取到第一个值

	//最大值
	for(int i=0;i<8;i++){
		if(max<arr[i]){
			max = arr[i];  //赋新的最大值
		}
	}

	printf("最大值为：%d\n\n",max);

	//最小值
	for(int j=0;j<8;j++){
		if(min>arr[j]){
			min = arr[j];  //赋新的最小值
		}
	}

	printf("最小值为：%d\n\n",min);

	return 0;

}
```



**3.1.3查找、插入、删除、排序**

**查找**

```c
#include <stdio.h>

int main(){

	int arr[] = {5,8,9};

	//查找一下数组元素值为8在哪个位置
	for(int i=0;i<3;i++){
		if(arr[i]==8){   //单个=是赋值，两个=是判断
			printf("在数组中第：%d的位置\n\n",i+1);
		}
	}

	return 0;
}
```

**插入**

```c
#include <stdio.h>

int main(){

	int arr[] = {5,8,9};

	//从数组中插入一个元素6

	arr[3] = 6;  //数组本身长度为3，也就是arr[2]，插入一个新的值需要arr[3]，在长度上加1；

	for(int i=0;i<4;i++){
		printf("%d\n",arr[i]);
	}

	return 0;

}
```

**删除**

```c
#include <stdio.h>

int main() {
    int arr[] = {5, 8, 9};
    int n = sizeof(arr) / sizeof(int);  //求了数组有多少值
    int i, j;  //初始化了循环用到的值

    for (i = 0; i < n; i++) {
        if (arr[i] == 8) {
            for (j = i; j < n - 1; j++) {
                arr[j] = arr[j + 1];  //赋值arr[j] = 9
            }
            n--;  //n=n-1 数组长度-1
            break;  //跳出
        }
    }

    for (i = 0; i < n; i++) {  //以n为长度输出数组元素  {5,9,9}
        printf("%d ", arr[i]);
    }

	//这个程序从数组arr中删除了第一个值为8的元素。但是，它实际上只是将该元素后面的所有元素向前移动一位，并没有从数组中真正删除该元素。因此，虽然它在某些情况下可能会产生预期的结果，但它并不是一个完整和正确的删除数组元素的实现。

    printf("\n");

    return 0;
}
```

**排序**

冒泡排序：

```c
#include <stdio.h>

//定义方法 sort-方法名 （参数）
void sort(int arr[], int n) {
    int i, j;  //循环用的变量
    for (i = 0; i < n-1; i++) {       //循环嵌套
        for (j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                // 交换位置
                int temp = arr[j];  //新增临时变量，存放前面的较大值
                arr[j] = arr[j+1];  //把后面小的值，放到前面去了
                arr[j+1] = temp;    //把前面临时变量的值，赋给后面的值
            }
        }
    }
}

//64, 34, 25, 12, 22, 11, 90  原数组
//34, 25, 12, 22, 11, 64, 90  第一次循环后
//25, 12, 22, 11, 34, 64, 90  第二次循环后
//12, 22, 11, 25, 34, 64, 90  第三次循环后
//......


int main() {
	//定义了个数组，里面有7个元素
    int arr[] = {64, 34, 25, 12, 22, 11, 90};
	//求了数组长度（元素数量）
    int n = sizeof(arr)/sizeof(arr[0]);
	//原数组：
    printf("Original array: ");
    for (int i=0; i<n; i++){
        printf("%d ", arr[i]);
	}
    printf("\n");

    sort(arr, n);  //调用自己写的排序方法：bubbleSort，里面需要两个参数arr数组，n数组长度
    printf("Sorted array: ");
    for (int j=0; j<n; j++){
        printf("%d ", arr[j]);
	}
    printf("\n");
    
    return 0;
}
```



**拓展知识**

```txt
以下是printf函数能够使用的%形式：

%c：输出一个字符。
%s：输出一个字符串。
%d或%i：输出一个有符号整数，十进制表示法。
%u：输出一个无符号整数，十进制表示法。
%o：输出一个无符号整数，八进制表示法。
%x或%X：输出一个无符号整数，十六进制表示法（小写或大写）。
%f或%F：输出一个浮点数，十进制表示法。这个占位符可以接受一个可选的精度参数，例如%.2f将只显示小数点后两位。
%e或%E：输出一个浮点数，指数表示法（小写或大写）。
%g或%G：输出一个浮点数，自动选择十进制表示法或指数表示法（小写或大写）。
%p：输出一个指针。
%%：输出一个百分号（%字符本身）。
```



#### 2.能够进行函数形参、实参的定义，以及参数的传递，能够使用函数的嵌套调用和递归调用方法，编写常见的函数，如求和、阶乘、计算平均分、排序等问题；



#### 3.能够利用指针实现对一维数组的编程:能够定义和使用结构体类型变量；



#### 4.能够利用文件打开、关闭、读取等函数实现文本文件的创建、复制等操作。



## 四、逻辑运算符

**&&**

```c
#include <stdio.h>

int main(){

	int a,b,c = 0;

	printf("请输入三个数：");
	scanf("%d%d%d",&a,&b,&c);

	//称为逻辑与运算符。如果两个操作数都非零，则条件为真 true
	if(a>b && a>c){
		printf("a是最大值!");
	}
	if(b>a && b>c){
		printf("b是最大值!");
	}
	if(c>a && c>b){
		printf("c是最大值!");
	}

	return 0;

}
```



**||**

```c
#include <stdio.h>

int main(){

	int a,b,c = 0;

	printf("请输入三个数：");
	scanf("%d%d%d",&a,&b,&c);
	
	//||称为逻辑或运算符。如果两个操作数中有任意一个非零，则条件为真 true 1 5 2
	if(a>b || a>c){
		printf("a是最大值!");
	}
	if(b>a || b>c){
		printf("b是最大值!");
	}
	if(c>a || c>b){
		printf("c是最大值!");
	}

	return 0;

}
```



**!**

```c
#include <stdio.h>

int main(){

	int a,b,c = 0;

	printf("请输入三个数：");  //1,5,2 成功
	scanf("%d%d%d",&a,&b,&c);

	//称为逻辑与运算符。如果两个操作数都非零，则条件为真 true
	if( !(a>b && a>c) ){  //判断条件是a不是最大值
		printf("成功");
	}
	return 0;

}
```





## 实战演练

**1.例题:从键盘输入一个大写字母，在显示屏上显示对应的小写字母**

键盘输入一个字母：scanf

计算ascii码，通过printf显示

```c
#include <stdio.h>

int main(){

	char oneChar;  //定义char型的变量
	
	printf("请输入一个大写字母：");  //提示信息
	scanf("%c",&oneChar);  //接收输入大写字母

	printf("转换结果：%c\n",oneChar+32);  //输出转换后的小写字母  ascii码的间隔32

	return 0;
}
```

**2.输入两个整数，求它们的差。**

```c
//输入两个整数，求它们的差。
#include <stdio.h>

int main(){

	int a,b=0;  //定义两个变量a,b并初始化

	//接收键盘输入的值
	scanf("%d%d",&a,&b);

	printf("%d\n",a-b);

	return 0;

}
```

**3.从键盘输入一个正数，要求输出它的平方根(如果平方根不是整数，则输出其整数部分)。**

```c
#include <stdio.h>
#include <math.h>  //添加带数学函数头文件

int main(){

	int a;
	int b;  //result int
	double c;  //result double

	printf("请输入一个正整数：");
	scanf("%d",&a);

	if(a>0){   //如果变量a是个正数
		b = sqrt(a);  //这块使用了求平方根的函数，依赖于math.h头文件内
		c = sqrt(a);
		
		printf("取整：%d\n",b);  //直接%d强制转还取整		
		printf("完整取值：%f\n",c);  //完整取值
	}else{
		printf("输入的是负数或非数字！请重新打开程序后输入正数！");
	}

	return 0;

}
```

**4.设圆半径r=1.5，圆柱高 h=3，求圆周长、圆面积、圆球表面积，圆球体积、圆柱体积。**

**用 scanf输入数据，输出计算结果，输出时要求有文字说明，取小数点后2位数字**

```c
#include <stdio.h>

int main(){
	
	double r,h;

	double l,S,QM,QT,ZT;//周长、面积、圆球表面积、圆球体体积、圆柱体积

	printf("请分别输入半径和圆柱高：");
	scanf("%lf%lf",&r,&h);  //接收double型需要%lf，输出用%lf
	//%f代表单精度浮点型数据（float），%lf代表双精度浮点型数据（double）

	l = 2*r*3.141592;
	S = r*r*3.141592;
	QM = 4*r*r*3.141592;
	QT = 4*r*r*r*3.141592/3;
	ZT = S*h;

	printf("周长：%.4lf\n面积：%.4lf\n圆球表面积：%lf\n圆球体体积：%lf\n圆柱体积：%lf\n",l,S,QM,QT,ZT);

	return 0;
}
```

**5.输入三角形的一条边长和这条边上的高，求三角形面积**

```c
#include <stdio.h>

int main(){

	double l,h; //边，高
	double s;

	printf("输入三角形的一条边长和这条边上的高：");
	scanf("%lf%lf",&l,&h);

	s=(l*h)/2;

	printf("%.2lf\n",s);

	return 0;

}
```

**6.给出三角形三边长，求三角形面积**

```c
#include <stdio.h>
#include <math.h>

int main()
{
    float a, b, c, p, area;

    printf("请输入三角形的三条边长：");
    scanf("%f%f%f", &a, &b, &c);

    p = (a + b + c) / 2;    // 计算半周长
    area = sqrt(p * (p - a) * (p - b) * (p - c));  // 利用海伦公式计算面积

    printf("三角形的面积为：%.2f", area);

    return 0;
}
```
