# HTML 脚本

JavaScript 使 HTML 页面具有更强的动态和交互性。



## HTML ```<script>``` 标签

```<script>``` 标签用于定义客户端脚本，比如 JavaScript。

```<script>``` 元素既可包含脚本语句，也可通过 src 属性指向外部脚本文件。

JavaScript 最常用于图片操作、表单验证以及内容动态更新。

下面的脚本会向浏览器输出"Hello World!"：

```html
<script>
document.write("Hello World!");
</script>
```



完整实例：

```
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>Javascript</title>
	</head>
	<body>
		<button onclick="alertTest()">测试</button>
	</body>

	<script>
		function alertTest(){
			alert("测试成功");
			console.log("测试成功");
		}
	</script> 
</html>

```

以上这段代码会显示一个按钮，点击按钮后触发function，页面上会显示弹窗内容：“测试成功”，控制台会输出：“测试成功”。



## HTML```<noscript>``` 标签

```<noscript>``` 标签提供无法使用脚本时的替代内容，比方在浏览器禁用脚本时，或浏览器不支持客户端脚本时。

```<noscript>```元素可包含普通 HTML 页面的 body 元素中能够找到的所有元素。

只有在浏览器不支持脚本或者禁用脚本时，才会显示 ```<noscript>``` 元素中的内容：

```html
<script>
document.write("Hello World!")
</script>
<noscript>抱歉，你的浏览器不支持 JavaScript!</noscript>
```
