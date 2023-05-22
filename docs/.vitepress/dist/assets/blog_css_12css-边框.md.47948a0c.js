import{_ as s,o as a,c as l,V as n}from"./chunks/framework.7ae304b1.js";const F=JSON.parse('{"title":"CSS 边框","description":"","frontmatter":{},"headers":[],"relativePath":"blog/css/12css-边框.md","filePath":"blog/css/12css-边框.md","lastUpdated":1684751288000}'),o={name:"blog/css/12css-边框.md"},e=n(`<h1 id="css-边框" tabindex="-1">CSS 边框 <a class="header-anchor" href="#css-边框" aria-label="Permalink to &quot;CSS 边框&quot;">​</a></h1><h2 id="css-边框属性" tabindex="-1">CSS 边框属性 <a class="header-anchor" href="#css-边框属性" aria-label="Permalink to &quot;CSS 边框属性&quot;">​</a></h2><p>CSS边框属性允许你指定一个元素边框的样式和颜色。</p><h2 id="边框样式" tabindex="-1">边框样式 <a class="header-anchor" href="#边框样式" aria-label="Permalink to &quot;边框样式&quot;">​</a></h2><p>边框样式属性指定要显示什么样的边界。</p><p>💡<strong>border-style</strong>属性用来定义边框的样式</p><h2 id="border-style-值" tabindex="-1">border-style 值: <a class="header-anchor" href="#border-style-值" aria-label="Permalink to &quot;border-style 值:&quot;">​</a></h2><table><thead><tr><th>代码</th><th>效果</th></tr></thead><tbody><tr><td>none</td><td>默认无边框</td></tr><tr><td>dotted</td><td>定义一个点线边框</td></tr><tr><td>dashed</td><td>定义一个虚线边框</td></tr><tr><td>solid</td><td>定义实线边框</td></tr><tr><td>double</td><td>定义两个边框。 两个边框的宽度和 border-width 的值相同</td></tr><tr><td>groove</td><td>定义3D沟槽边框。效果取决于边框的颜色值</td></tr><tr><td>ridge</td><td>定义3D脊边框。效果取决于边框的颜色值</td></tr><tr><td>inset</td><td>定义一个3D的嵌入边框。效果取决于边框的颜色值</td></tr><tr><td>outset</td><td>定义一个3D突出边框。 效果取决于边框的颜色值</td></tr></tbody></table><h2 id="边框宽度" tabindex="-1">边框宽度 <a class="header-anchor" href="#边框宽度" aria-label="Permalink to &quot;边框宽度&quot;">​</a></h2><p>您可以通过 border-width 属性为边框指定宽度。</p><p>为边框指定宽度有两种方法：可以指定长度值，比如 2px 或 0.1em(单位为 px, pt, cm, em 等)，或者使用 3 个关键字之一，它们分别是 thick 、medium（默认值） 和 thin。</p><p>**注意：**CSS 没有定义 3 个关键字的具体宽度，所以一个用户可能把 thick 、medium 和 thin 分别设置为等于 5px、3px 和 2px，而另一个用户则分别设置为 3px、2px 和 1px。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">one</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border-style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">solid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border-width</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">5px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">two</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border-style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">solid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border-width</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">medium</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="边框颜色" tabindex="-1">边框颜色 <a class="header-anchor" href="#边框颜色" aria-label="Permalink to &quot;边框颜色&quot;">​</a></h2><p>border-color属性用于设置边框的颜色。可以设置的颜色：</p><ul><li>name - 指定颜色的名称，如 &quot;red&quot;</li><li>RGB - 指定 RGB 值, 如 &quot;rgb(255,0,0)&quot;</li><li>Hex - 指定16进制值, 如 &quot;#ff0000&quot;</li></ul><p>您还可以设置边框的颜色为&quot;transparent&quot;。</p><p><strong>注意：</strong> border-color单独使用是不起作用的，必须得先使用border-style来设置边框样式。</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">one</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border-style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">solid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">red</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">two</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border-style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">solid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border-color</span><span style="color:#89DDFF;">:#</span><span style="color:#A6ACCD;">98bf21</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="边框-单独设置各边" tabindex="-1">边框-单独设置各边 <a class="header-anchor" href="#边框-单独设置各边" aria-label="Permalink to &quot;边框-单独设置各边&quot;">​</a></h2><p>在CSS中，可以指定不同的侧面不同的边框：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">p</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border-top-style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">dotted</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border-right-style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">solid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border-bottom-style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">dotted</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border-left-style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">solid</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>上面的例子也可以设置一个单一属性：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">border-style</span><span style="color:#A6ACCD;">:dotted solid;</span></span></code></pre></div><p>border-style属性可以有1-4个值：</p><ul><li>border-style:dotted solid double dashed; <ul><li>上边框是 dotted</li><li>右边框是 solid</li><li>底边框是 double</li><li>左边框是 dashed</li></ul></li><li>border-style:dotted solid double; <ul><li>上边框是 dotted</li><li>左、右边框是 solid</li><li>底边框是 double</li></ul></li><li>border-style:dotted solid; <ul><li>上、底边框是 dotted</li><li>右、左边框是 solid</li></ul></li><li>border-style:dotted; <ul><li>四面边框是 dotted</li></ul></li></ul><p>上面的例子用了border-style。然而，它也可以和border-width 、 border-color一起使用。</p><h2 id="边框-简写属性" tabindex="-1">边框-简写属性 <a class="header-anchor" href="#边框-简写属性" aria-label="Permalink to &quot;边框-简写属性&quot;">​</a></h2><p>上面的例子用了很多属性来设置边框。</p><p>你也可以在一个属性中设置边框。</p><p>你可以在&quot;border&quot;属性中设置：</p><ul><li>border-width</li><li>border-style (required)</li><li>border-color</li></ul><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">border:5px solid red;</span></span></code></pre></div>`,33),t=[e];function p(r,c,d,i,y,D){return a(),l("div",null,t)}const h=s(o,[["render",p]]);export{F as __pageData,h as default};
