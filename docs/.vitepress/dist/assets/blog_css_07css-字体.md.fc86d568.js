import{_ as s,o as a,c as l,V as n}from"./chunks/framework.7ae304b1.js";const d=JSON.parse('{"title":"CSS 字体","description":"","frontmatter":{},"headers":[],"relativePath":"blog/css/07css-字体.md","filePath":"blog/css/07css-字体.md","lastUpdated":1684751288000}'),o={name:"blog/css/07css-字体.md"},e=n(`<h1 id="css-字体" tabindex="-1">CSS 字体 <a class="header-anchor" href="#css-字体" aria-label="Permalink to &quot;CSS 字体&quot;">​</a></h1><p>CSS字体属性定义字体，加粗，大小，文字样式。</p><h2 id="serif和sans-serif字体之间的区别" tabindex="-1">serif和sans-serif字体之间的区别 <a class="header-anchor" href="#serif和sans-serif字体之间的区别" aria-label="Permalink to &quot;serif和sans-serif字体之间的区别&quot;">​</a></h2><p>在计算机屏幕上，sans-serif字体被认为是比serif字体容易阅读</p><h2 id="css字型" tabindex="-1">CSS字型 <a class="header-anchor" href="#css字型" aria-label="Permalink to &quot;CSS字型&quot;">​</a></h2><p>在CSS中，有两种类型的字体系列名称：</p><ul><li><strong>通用字体系列</strong> - 拥有相似外观的字体系统组合（如 &quot;Serif&quot; 或 &quot;Monospace&quot;）</li><li><strong>特定字体系列</strong> - 一个特定的字体系列（如 &quot;Times&quot; 或 &quot;Courier&quot;）</li></ul><table><thead><tr><th style="text-align:left;">Generic family</th><th style="text-align:left;">字体系列</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">Serif</td><td style="text-align:left;">Times New Roman Georgia</td><td style="text-align:left;">Serif字体中字符在行的末端拥有额外的装饰</td></tr><tr><td style="text-align:left;">Sans-serif</td><td style="text-align:left;">Arial Verdana</td><td style="text-align:left;">&quot;Sans&quot;是指无 - 这些字体在末端没有额外的装饰</td></tr><tr><td style="text-align:left;">Monospace</td><td style="text-align:left;">Courier New Lucida Console</td><td style="text-align:left;">所有的等宽字符具有相同的宽度</td></tr></tbody></table><h2 id="字体系列" tabindex="-1">字体系列 <a class="header-anchor" href="#字体系列" aria-label="Permalink to &quot;字体系列&quot;">​</a></h2><p>font-family 属性设置文本的字体系列。</p><p>font-family 属性应该设置几个字体名称作为一种&quot;后备&quot;机制，如果浏览器不支持第一种字体，他将尝试下一种字体。</p><p><strong>注意</strong>: 如果字体系列的名称超过一个字，它必须用引号，如Font Family：&quot;宋体&quot;。</p><p>多个字体系列是用一个逗号分隔指明：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">font-family</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Times New Roman</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> Times</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> serif</span><span style="color:#89DDFF;">;}</span></span></code></pre></div><h2 id="字体样式" tabindex="-1">字体样式 <a class="header-anchor" href="#字体样式" aria-label="Permalink to &quot;字体样式&quot;">​</a></h2><p>主要是用于指定斜体文字的字体样式属性。</p><p>这个属性有三个值：</p><ul><li>正常 - 正常显示文本</li><li>斜体 - 以斜体字显示的文字</li><li>倾斜的文字 - 文字向一边倾斜（和斜体非常类似，但不太支持）</li></ul><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">normal</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">font-style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">normal</span><span style="color:#89DDFF;">;}</span></span>
<span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">italic</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">font-style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">italic</span><span style="color:#89DDFF;">;}</span></span>
<span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">oblique</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">font-style</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">oblique</span><span style="color:#89DDFF;">;}</span></span></code></pre></div><h2 id="字体大小" tabindex="-1">字体大小 <a class="header-anchor" href="#字体大小" aria-label="Permalink to &quot;字体大小&quot;">​</a></h2><p>font-size 属性设置文本的大小。</p><p>能否管理文字的大小，在网页设计中是非常重要的。但是，你不能通过调整字体大小使段落看上去像标题，或者使标题看上去像段落。</p><p>请务必使用正确的HTML标签，就<code>&lt;h1&gt;</code> - <code>&lt;h6&gt;</code>表示标题和<code>&lt;p&gt;</code>表示段落：</p><p>字体大小的值可以是绝对或相对的大小。</p><p>绝对大小：</p><ul><li>设置一个指定大小的文本</li><li>不允许用户在所有浏览器中改变文本大小</li><li>确定了输出的物理尺寸时绝对大小很有用</li></ul><p>相对大小：</p><ul><li>相对于周围的元素来设置大小</li><li>允许用户在浏览器中改变文字大小</li></ul><blockquote><p>如果你不指定一个字体的大小，默认大小和普通文本段落一样，是16像素（16px=1em)。</p></blockquote><h2 id="设置字体大小像素" tabindex="-1">设置字体大小像素 <a class="header-anchor" href="#设置字体大小像素" aria-label="Permalink to &quot;设置字体大小像素&quot;">​</a></h2><p>设置文字的大小与像素，让您完全控制文字大小：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">h1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">40px</span><span style="color:#89DDFF;">;}</span></span>
<span class="line"><span style="color:#FFCB6B;">h2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">30px</span><span style="color:#89DDFF;">;}</span></span>
<span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">14px</span><span style="color:#89DDFF;">;}</span></span></code></pre></div><blockquote><p>上面的例子可以在 Internet Explorer 9, Firefox, Chrome, Opera, 和 Safari 中通过缩放浏览器调整文本大小。</p><p>虽然可以通过浏览器的缩放工具调整文本大小，但是，这种调整是整个页面，而不仅仅是文本</p></blockquote><h2 id="用em来设置字体大小" tabindex="-1">用em来设置字体大小 <a class="header-anchor" href="#用em来设置字体大小" aria-label="Permalink to &quot;用em来设置字体大小&quot;">​</a></h2><p>为了避免Internet Explorer 中无法调整文本的问题，许多开发者使用 em 单位代替像素。</p><p>em的尺寸单位由W3C建议。</p><p>1em和当前字体大小相等。在浏览器中默认的文字大小是16px。</p><p>因此，1em的默认大小是16px。可以通过下面这个公式将像素转换为em：<strong>px/16=em</strong></p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">h1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">2.5em</span><span style="color:#89DDFF;">;}</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 40px/16=2.5em */</span></span>
<span class="line"><span style="color:#FFCB6B;">h2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1.875em</span><span style="color:#89DDFF;">;}</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 30px/16=1.875em */</span></span>
<span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0.875em</span><span style="color:#89DDFF;">;}</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">/* 14px/16=0.875em */</span></span></code></pre></div><p>在上面的例子，em的文字大小是与前面的例子中像素一样。不过，如果使用 em 单位，则可以在所有浏览器中调整文本大小。</p><p>不幸的是，仍然是IE浏览器的问题。调整文本的大小时，会比正常的尺寸更大或更小。</p><h2 id="使用百分比和em组合" tabindex="-1">使用百分比和EM组合 <a class="header-anchor" href="#使用百分比和em组合" aria-label="Permalink to &quot;使用百分比和EM组合&quot;">​</a></h2><p>在所有浏览器的解决方案中，设置<code>&lt;body&gt;</code>元素的默认字体大小的是百分比：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">body</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">100%</span><span style="color:#89DDFF;">;}</span></span>
<span class="line"><span style="color:#FFCB6B;">h1</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">2.5em</span><span style="color:#89DDFF;">;}</span></span>
<span class="line"><span style="color:#FFCB6B;">h2</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">1.875em</span><span style="color:#89DDFF;">;}</span></span>
<span class="line"><span style="color:#FFCB6B;">p</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#B2CCD6;">font-size</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;">0.875em</span><span style="color:#89DDFF;">;}</span></span></code></pre></div><p>我们的代码非常有效。在所有浏览器中，可以显示相同的文本大小，并允许所有浏览器缩放文本的大小。</p>`,45),t=[e];function p(r,c,i,y,F,D){return a(),l("div",null,t)}const h=s(o,[["render",p]]);export{d as __pageData,h as default};
