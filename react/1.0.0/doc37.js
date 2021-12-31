import{e as a,o as n,y as t}from"./vendor.js";const l={class:"markdown-body"},e=t(`<h1>Signature \u7B7E\u540D</h1><h3>\u4ECB\u7ECD</h3><p>\u57FA\u4E8E Canvas \u7684\u7B7E\u540D\u7EC4\u4EF6</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Signature } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-react&#39;</span>
</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-tsx"><span class="hljs-keyword">const</span> confirm = <span class="hljs-function">(<span class="hljs-params">canvas: HTMLCanvasElement, data: <span class="hljs-built_in">string</span></span>) =&gt;</span> {
  <span class="hljs-keyword">let</span> img = <span class="hljs-built_in">document</span>.createElement(<span class="hljs-string">&#39;img&#39;</span>)
  img.src = data
  <span class="hljs-keyword">const</span> demo = <span class="hljs-built_in">document</span>.querySelector(<span class="hljs-string">&#39;.demo1&#39;</span>) <span class="hljs-keyword">as</span> HTMLElement
  demo.appendChild(img)
}
<span class="hljs-keyword">const</span> clear = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">let</span> img = <span class="hljs-built_in">document</span>.querySelector(<span class="hljs-string">&#39;.demo1 img&#39;</span>)
  <span class="hljs-keyword">if</span> (img) {
    img.remove()
  }
}
&lt;Signature confirm={confirm} clear={clear}&gt;&lt;/Signature&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;demo-tips demo1&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{demoStyles}</span>&gt;</span>
    Tips: \u70B9\u51FB\u786E\u8BA4\u6309\u94AE,\u4E0B\u65B9\u663E\u793A\u7B7E\u540D\u56FE\u7247
<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></span>
</code></pre><h3>\u4FEE\u6539\u989C\u8272\u548C\u7B7E\u5B57\u7C97\u7EC6</h3><pre><code class="language-tsx"><span class="hljs-keyword">const</span> confirm = <span class="hljs-function">(<span class="hljs-params">canvas: HTMLCanvasElement, data: <span class="hljs-built_in">string</span></span>) =&gt;</span> {
  <span class="hljs-keyword">let</span> img = <span class="hljs-built_in">document</span>.createElement(<span class="hljs-string">&#39;img&#39;</span>)
  img.src = data
  <span class="hljs-keyword">const</span> demo = <span class="hljs-built_in">document</span>.querySelector(<span class="hljs-string">&#39;.demo1&#39;</span>) <span class="hljs-keyword">as</span> HTMLElement
  demo.appendChild(img)
}
<span class="hljs-keyword">const</span> clear = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">let</span> img = <span class="hljs-built_in">document</span>.querySelector(<span class="hljs-string">&#39;.demo1 img&#39;</span>)
  <span class="hljs-keyword">if</span> (img) {
    img.remove()
  }
}
&lt;Signature
    lineWidth={<span class="hljs-number">4</span>}
    strokeStyle={<span class="hljs-string">&#39;green&#39;</span>}
    confirm={confirm1}
    clear={clear1}
&gt;&lt;/Signature&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;demo-tips demo2&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{demoStyles}</span>&gt;</span>
    Tips: \u70B9\u51FB\u786E\u8BA4\u6309\u94AE,\u4E0B\u65B9\u663E\u793A\u7B7E\u540D\u56FE\u7247
<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span></span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>custom-class</td><td>\u81EA\u5B9A\u4E49 class</td><td>String</td><td>-</td></tr><tr><td>line-width</td><td>\u7EBF\u6761\u7684\u5BBD\u5EA6</td><td>Number</td><td>3</td></tr><tr><td>stroke-style</td><td>\u7ED8\u56FE\u7B14\u89E6\u989C\u8272</td><td>String</td><td>\u2018#000\u2019</td></tr><tr><td>type</td><td>\u56FE\u7247\u683C\u5F0F</td><td>String</td><td>\u2018png\u2019</td></tr><tr><td>un-support-tpl</td><td>\u4E0D\u652F\u6301 Canvas \u60C5\u51B5\u4E0B\u7684\u5C55\u793A\u6587\u6848</td><td>String</td><td>\u2018\u5BF9\u4E0D\u8D77\uFF0C\u5F53\u524D\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 Canvas\uFF0C\u65E0\u6CD5\u4F7F\u7528\u672C\u63A7\u4EF6\uFF01\u2019</td></tr></tbody></table><h2>Event</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>confirm</td><td>\u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u89E6\u53D1\u4E8B\u4EF6\u56DE\u8C03\u51FD\u6570</td><td>canvas \u548C\u7B7E\u540D\u56FE\u7247\u5C55\u793A\u7684 data URI</td></tr><tr><td>clear</td><td>\u70B9\u51FB\u91CD\u7B7E\u6309\u94AE\u89E6\u53D1\u4E8B\u4EF6\u56DE\u8C03\u51FD\u6570</td><td>\u65E0</td></tr></tbody></table>`,15),p=[e],i={setup(c,{expose:s}){return s({frontmatter:{}}),(d,o)=>(n(),a("div",l,p))}};export{i as default};
