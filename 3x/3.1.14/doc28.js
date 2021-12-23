import{e as a,o as n,y as t}from"./vendor.js";const l={class:"markdown-body"},p=t(`<h1>Indicator \u6307\u793A\u5668</h1><h3>\u4ECB\u7ECD</h3><p>\u663E\u793A\u4E00\u4E2A\u4EFB\u52A1\u6216\u6D41\u7A0B\u7684\u8FDB\u5EA6\uFF0C\u5E38\u7528\u8BED\u5F00\u901A\u6D41\u7A0B\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">// vue</span>
<span class="hljs-keyword">import</span> { Indicator } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>
<span class="hljs-comment">// taro</span>
<span class="hljs-keyword">import</span> { Indicator } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>

<span class="hljs-keyword">const</span> app = createApp();

app.use(Indicator);

</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html">  <span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-indicator</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">:current</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>step1<span class="hljs-tag">&lt;/<span class="hljs-name">nut-indicator</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-row</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;12&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nut-button</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;small&quot;</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>&gt;</span>\u4E3B\u8981\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">nut-button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">nut-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">&quot;12&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">nut-indicator</span> <span class="hljs-attr">:block</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">align</span>=<span class="hljs-string">&quot;right&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;6&quot;</span> <span class="hljs-attr">:current</span>=<span class="hljs-string">&quot;5&quot;</span>&gt;</span>step1<span class="hljs-tag">&lt;/<span class="hljs-name">nut-indicator</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">nut-col</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-row</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
</code></pre><h3>block\u7528\u6CD5</h3><pre><code class="language-html">    <span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">nut-indicator</span> <span class="hljs-attr">:block</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">algin</span>=<span class="hljs-string">&quot;center&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;6&quot;</span> <span class="hljs-attr">:current</span>=<span class="hljs-string">&quot;5&quot;</span>&gt;</span>step1<span class="hljs-tag">&lt;/<span class="hljs-name">nut-indicator</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">nut-indicator</span> <span class="hljs-attr">:block</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">align</span>=<span class="hljs-string">&quot;left&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;6&quot;</span> <span class="hljs-attr">:current</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>step1<span class="hljs-tag">&lt;/<span class="hljs-name">nut-indicator</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">nut-indicator</span> <span class="hljs-attr">:block</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">align</span>=<span class="hljs-string">&quot;right&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;6&quot;</span> <span class="hljs-attr">:current</span>=<span class="hljs-string">&quot;5&quot;</span>&gt;</span>step1<span class="hljs-tag">&lt;/<span class="hljs-name">nut-indicator</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
</code></pre><h3>\u4E0D\u88650</h3><pre><code class="language-html">    <span class="hljs-tag">&lt;<span class="hljs-name">nut-cell</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">nut-indicator</span> <span class="hljs-attr">:fill-zero</span>=<span class="hljs-string">&quot;false&quot;</span> <span class="hljs-attr">:size</span>=<span class="hljs-string">&quot;6&quot;</span> <span class="hljs-attr">:current</span>=<span class="hljs-string">&quot;5&quot;</span>&gt;</span>step1<span class="hljs-tag">&lt;/<span class="hljs-name">nut-indicator</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">nut-cell</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>current</td><td>\u5F53\u524D\u6B65\u9AA4</td><td>Number</td><td>1</td></tr><tr><td>size</td><td>\u6B65\u9AA4\u957F\u5EA6</td><td>Number</td><td>3</td></tr><tr><td>block</td><td>\u662F\u5426\u542F\u7528\u5757\u7EA7\u5E03\u5C40</td><td>Boolean</td><td>false</td></tr><tr><td>align</td><td>\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u4EC5\u5728block\u4E3Atrue\u65F6\u751F\u6548, \u53EF\u9009\u503C \u2018left\u2019, \u2018right\u2019, \u2018center\u2019</td><td>String</td><td>left</td></tr><tr><td>fill-zero</td><td>\u5355\u6570\u524D\u9762\u662F\u5426\u88650</td><td>Boolean</td><td>true</td></tr></tbody></table>`,14),c=[p],u={setup(h,{expose:s}){return s({frontmatter:{}}),(e,o)=>(n(),a("div",l,c))}};export{u as default};
