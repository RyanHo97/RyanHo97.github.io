# HTML 表格

表格由 **table** 标签来定义。每个表格均有若干行（由 **tr** 标签定义），每行被分割为若干单元格（由 **td** 标签定义）。字母 td 指表格数据（table data），即数据单元格的内容。

数据单元格可以包含文本、图片、列表、段落、表单、水平线、表格等等。

### HTML 表格实例:

```html
<h4>一列:</h4>
<table border="1">
  <tr>
    <td>100</td>
  </tr>
</table>
 
<h4>一行三列:</h4>
<table border="1">
  <tr>
    <td>100</td>
    <td>200</td>
    <td>300</td>
  </tr>
</table>
 
<h4>两行三列:</h4>
<table border="1">
  <tr>
    <td>100</td>
    <td>200</td>
    <td>300</td>
  </tr>
  <tr>
    <td>400</td>
    <td>500</td>
    <td>600</td>
  </tr>
</table>
```



## HTML 表格和边框属性

如果不定义边框属性，表格将不显示边框。有时这很有用，但是大多数时候，我们希望显示边框。

使用边框属性来显示一个带有边框的表格：

```html
<table border="1">
    <tr>
        <td>Row 1, cell 1</td>
        <td>Row 1, cell 2</td>
    </tr>
</table>
```



## HTML 表格表头

表格的表头使用 ```<th>``` 标签进行定义。

大多数浏览器会把表头显示为粗体居中的文本：

```html
<table border="1">
    <tr>
        <th>Header 1</th>
        <th>Header 2</th>
    </tr>
    <tr>
        <td>row 1, cell 1</td>
        <td>row 1, cell 2</td>
    </tr>
    <tr>
        <td>row 2, cell 1</td>
        <td>row 2, cell 2</td>
    </tr>
</table>
```



## HTML ```<colgroup>``` 标签

```<colgroup>``` 和``` <col>``` 标签为表格中的三个列设置了背景色：

```html
<table border="1">
  <colgroup>
    <col span="2" style="background-color:red">
    <col style="background-color:yellow">
  </colgroup>
  <tr>
    <th>ISBN</th>
    <th>Title</th>
    <th>Price</th>
  </tr>
  <tr>
    <td>3476896</td>
    <td>My first HTML</td>
    <td>$53</td>
  </tr>
</table>
```

**标签定义及使用说明**

```<colgroup>``` 标签用于对表格中的列进行组合，以便对其进行格式化。

通过使用 ```<colgroup>``` 标签，可以向整个列应用样式，而不需要重复为每个单元格或每一行设置样式。