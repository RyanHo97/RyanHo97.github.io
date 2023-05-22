import{_ as s,o as t,c as a,V as l}from"./chunks/framework.7ae304b1.js";const C=JSON.parse('{"title":"CSS 文本格式","description":"","frontmatter":{},"headers":[],"relativePath":"blog/css/06css-文本格式.md","filePath":"blog/css/06css-文本格式.md","lastUpdated":1684751288000}'),n={name:"blog/css/06css-文本格式.md"},e=l(`<h1 id="css-文本格式" tabindex="-1">CSS 文本格式 <a class="header-anchor" href="#css-文本格式" aria-label="Permalink to &quot;CSS 文本格式&quot;">​</a></h1><h2 id="文本颜色" tabindex="-1">文本颜色 <a class="header-anchor" href="#文本颜色" aria-label="Permalink to &quot;文本颜色&quot;">​</a></h2><p>颜色属性被用来设置文字的颜色。</p><p>颜色是通过CSS最经常的指定：</p><ul><li>十六进制值 - 如: <strong>＃FF0000</strong></li><li>一个RGB值 - 如: <strong>RGB(255,0,0)</strong></li><li>颜色的名称 - 如: <strong>red</strong></li></ul><p>一个网页的背景颜色是指在主体内的选择：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">body</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">red</span><span style="color:#89DDFF;">;}</span></span>
<span class="line"><span style="color:#FFCB6B;">h1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:#</span><span style="color:#A6ACCD;">00ff00</span><span style="color:#89DDFF;">;}</span></span>
<span class="line"><span style="color:#FFCB6B;">h2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">color</span><span style="color:#89DDFF;">:</span><span style="color:#82AAFF;">rgb</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">255</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">);}</span></span></code></pre></div><p>对于W3C标准的CSS：如果你定义了颜色属性，你还必须定义背景色属性。</p><h2 id="文本的对齐方式" tabindex="-1">文本的对齐方式 <a class="header-anchor" href="#文本的对齐方式" aria-label="Permalink to &quot;文本的对齐方式&quot;">​</a></h2><p>文本排列属性是用来设置文本的水平对齐方式。</p><p>文本可居中或对齐到左或右,两端对齐.</p><p>当text-align设置为&quot;justify&quot;，每一行被展开为宽度相等，左，右外边距是对齐（如杂志和报纸）。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">h1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">text-align</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">center</span><span style="color:#89DDFF;">;}</span></span>
<span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">date</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">text-align</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">;}</span></span>
<span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">main</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">text-align</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">justify</span><span style="color:#89DDFF;">;}</span></span></code></pre></div><h2 id="文本修饰" tabindex="-1">文本修饰 <a class="header-anchor" href="#文本修饰" aria-label="Permalink to &quot;文本修饰&quot;">​</a></h2><p>text-decoration 属性用来设置或删除文本的装饰。</p><p>从设计的角度看 text-decoration属性主要是用来删除链接的下划线：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">a</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">text-decoration</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">none</span><span style="color:#89DDFF;">;}</span></span></code></pre></div><p>也可以这样装饰文字：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">h1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">text-decoration</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">overline</span><span style="color:#89DDFF;">;}</span></span>
<span class="line"><span style="color:#FFCB6B;">h2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">text-decoration</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">line-through</span><span style="color:#89DDFF;">;}</span></span>
<span class="line"><span style="color:#FFCB6B;">h3</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">text-decoration</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">underline</span><span style="color:#89DDFF;">;}</span></span></code></pre></div><blockquote><p>我们不建议强调指出不是链接的文本，因为这常常混淆用户。</p></blockquote><h2 id="文本转换" tabindex="-1">文本转换 <a class="header-anchor" href="#文本转换" aria-label="Permalink to &quot;文本转换&quot;">​</a></h2><p>文本转换属性是用来指定在一个文本中的大写和小写字母。</p><p>可用于所有字句变成大写或小写字母，或每个单词的首字母大写。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">uppercase</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">text-transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">uppercase</span><span style="color:#89DDFF;">;}</span><span style="color:#A6ACCD;">     </span><span style="color:#676E95;font-style:italic;">/* 全部大写 */</span></span>
<span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">lowercase</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">text-transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">lowercase</span><span style="color:#89DDFF;">;}</span><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;">/* 全部小写 */</span></span>
<span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">capitalize</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">text-transform</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">capitalize</span><span style="color:#89DDFF;">;}</span><span style="color:#A6ACCD;">		</span><span style="color:#676E95;font-style:italic;">/* 仅首字母大写 */</span></span></code></pre></div><h2 id="文本缩进" tabindex="-1">文本缩进 <a class="header-anchor" href="#文本缩进" aria-label="Permalink to &quot;文本缩进&quot;">​</a></h2><p>文本缩进属性是用来指定文本的第一行的缩进。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">text-indent</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">50px</span><span style="color:#89DDFF;">;}</span></span></code></pre></div><h2 id="所有css文本属性" tabindex="-1">所有CSS文本属性 <a class="header-anchor" href="#所有css文本属性" aria-label="Permalink to &quot;所有CSS文本属性&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">color</td><td style="text-align:left;">设置文本颜色</td></tr><tr><td style="text-align:left;">direction</td><td style="text-align:left;">设置文本方向。</td></tr><tr><td style="text-align:left;">letter-spacing</td><td style="text-align:left;">设置字符间距</td></tr><tr><td style="text-align:left;">line-height</td><td style="text-align:left;">设置行高</td></tr><tr><td style="text-align:left;">text-align</td><td style="text-align:left;">对齐元素中的文本</td></tr><tr><td style="text-align:left;">text-decoration</td><td style="text-align:left;">向文本添加修饰</td></tr><tr><td style="text-align:left;">text-indent</td><td style="text-align:left;">缩进元素中文本的首行</td></tr><tr><td style="text-align:left;">text-shadow</td><td style="text-align:left;">设置文本阴影</td></tr><tr><td style="text-align:left;">text-transform</td><td style="text-align:left;">控制元素中的字母</td></tr><tr><td style="text-align:left;">unicode-bidi</td><td style="text-align:left;">设置或返回文本是否被重写</td></tr><tr><td style="text-align:left;">vertical-align</td><td style="text-align:left;">设置元素的垂直对齐</td></tr><tr><td style="text-align:left;">white-space</td><td style="text-align:left;">设置元素中空白的处理方式</td></tr><tr><td style="text-align:left;">word-spacing</td><td style="text-align:left;">设置字间距</td></tr></tbody></table>`,29),o=[e];function p(c,r,i,y,F,D){return t(),a("div",null,o)}const h=s(n,[["render",p]]);export{C as __pageData,h as default};
