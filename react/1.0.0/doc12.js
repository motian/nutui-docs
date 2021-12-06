import{e as a,o as n,y as t}from"./vendor.js";const l={class:"markdown-body"},p=t(`<h1>Drag \u7EC4\u4EF6</h1><h3>\u4ECB\u7ECD</h3><p>\u5B9E\u73B0\u53EF\u62D6\u62FD\u7684\u4EFB\u610F\u5143\u7D20</p><h3>\u5B89\u88C5</h3><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5</h3><h2>\u57FA\u672C\u7528\u6CD5</h2><pre><code class="language-tsx">&lt;Drag&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;touch-dom&quot;</span>&gt;</span>\u89E6\u6478\u79FB\u52A8<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/Drag&gt;
</code></pre><h2>\u9650\u5236\u62D6\u62FD\u65B9\u5411</h2><pre><code class="language-tsx">&lt;Drag direction={<span class="hljs-string">&#39;x&#39;</span>}&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;touch-dom&quot;</span>&gt;</span>\u53EA\u80FD\u5728X\u8F74\u62D6\u52A8<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/Drag&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Drag</span> <span class="hljs-attr">direction</span>=<span class="hljs-string">{</span>&#39;<span class="hljs-attr">y</span>&#39;}&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;touch-dom&quot;</span>&gt;</span>\u53EA\u80FD\u5728Y\u8F74\u62D6\u52A8<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Drag</span>&gt;</span></span>
</code></pre><h2>\u81EA\u52A8\u5438\u8FB9</h2><pre><code class="language-tsx">&lt;Drag direction={<span class="hljs-string">&#39;x&#39;</span>} attract={<span class="hljs-literal">true</span>}&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;touch-dom&quot;</span>&gt;</span>\u62D6\u52A8\u6211<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/Drag&gt;
</code></pre><h2>\u9650\u5236\u62D6\u62FD\u8FB9\u754C</h2><pre><code class="language-tsx"><span class="hljs-comment">// const right = () =&gt; {</span>
<span class="hljs-comment">//   return document.documentElement.clientWidth - 300 - 9</span>
<span class="hljs-comment">// }</span>
<span class="hljs-comment">// const bottom = () =&gt; {</span>
<span class="hljs-comment">//   return document.documentElement.clientHeight - 559</span>
<span class="hljs-comment">// }</span>
&lt;Drag boundary={{ <span class="hljs-attr">top</span>: <span class="hljs-number">361</span>, <span class="hljs-attr">left</span>: <span class="hljs-number">9</span>, <span class="hljs-attr">bottom</span>: bottom(), <span class="hljs-attr">right</span>: right() }}&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;touch-dom&quot;</span>&gt;</span>\u62D6\u52A8\u6211<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/Drag&gt;
</code></pre><h2>API</h2><h3>Props</h3><p>| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | | attract | \u662F\u5426\u5F00\u542F\u81EA\u52A8\u5438\u8FB9 | Boolean | false | | direction | \u62D6\u62FD\u5143\u7D20\u7684\u62D6\u62FD\u65B9\u5411\u9650\u5236\uFF0C<strong>x</strong>/<strong>y</strong>/<strong>all</strong>\u4E09\u9009\u4E00 | String |\u2018all\u2019 | | boundary | \u62D6\u62FD\u5143\u7D20\u7684\u62D6\u62FD\u8FB9\u754C | Object | {top: 0,left: 0,right: 0,bottom: 0} |</p>`,17),c=[p],j={setup(h,{expose:s}){return s({frontmatter:{}}),(e,r)=>(n(),a("div",l,c))}};export{j as default};
