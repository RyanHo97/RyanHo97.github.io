# CSS 轮廓（outline）

轮廓（outline）是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用。

轮廓（outline）属性指定元素轮廓的样式、颜色和宽度。



## 轮廓（outline）实例

在元素周围画线

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"> 
<title>菜鸟教程(runoob.com)</title> 
<style>
p 
{
	border:1px solid red;
	outline:green dotted thick;
}
</style>
</head>

<body>
<p><b>注意:</b> 如果只有一个 !DOCTYP E指定 IE8 支持 outline 属性。</p>
</body>
</html>
```

本例演示使用outline属性在元素周围画一条线。



## CSS 轮廓（outline）

轮廓（outline）是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用。

CSS outline 属性规定元素轮廓的样式、颜色和宽度。



## 所有CSS 轮廓（outline）属性

"CSS" 列中的数字表示哪个CSS版本定义了该属性(CSS1 或者CSS2)。

| 属性          | 说明                           | 值                                                           | CSS  |
| :------------ | :----------------------------- | :----------------------------------------------------------- | :--- |
| outline       | 在一个声明中设置所有的轮廓属性 | *outline-color outline-style outline-width *inherit          | 2    |
| outline-color | 设置轮廓的颜色                 | *color-name hex-number rgb-number *invert inherit            | 2    |
| outline-style | 设置轮廓的样式                 | none dotted dashed solid double groove ridge inset outset inherit | 2    |
| outline-width | 设置轮廓的宽度                 | thin medium thick *length *inherit                           | 2    |
