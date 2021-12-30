import{e as a,o as t,y as n}from"./vendor.js";const e={class:"markdown-body"},l=n(`<h1>Pagination \u5206\u9875</h1><h3>\u4ECB\u7ECD</h3><p>\u5F53\u6570\u636E\u91CF\u8F83\u591A\u65F6\uFF0C\u91C7\u7528\u5206\u9875\u7684\u5F62\u5F0F\u5206\u9694\u957F\u5217\u8868\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Pagination } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-react&#39;</span>;
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><p>\u901A\u8FC7modelValue\u6765\u7ED1\u5B9A\u5F53\u524D\u9875\u7801\u65F6\uFF0C\u7EC4\u4EF6\u4E3A\u53D7\u63A7\u72B6\u6001\uFF0C\u5206\u9875\u663E\u793A\u53D6\u51B3\u4E8E\u4F20\u5165\u7684modelValue\uFF0C\u4E00\u822C\u642D\u914DonChange\u4F7F\u7528\u3002 \u4E0D\u9700\u8981\u53D7\u63A7\u65F6\uFF0C\u53EF\u901A\u8FC7defaultCurrentPage\u6307\u5B9A\u5F53\u524D\u9875\u7801</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Pagination</span>
  <span class="hljs-attr">modelValue</span>=<span class="hljs-string">{currentPage1}</span>
  <span class="hljs-attr">totalItems</span>=<span class="hljs-string">&quot;25&quot;</span>
  <span class="hljs-attr">itemsPerPage</span>=<span class="hljs-string">&quot;5&quot;</span>
  <span class="hljs-attr">onChange</span>=<span class="hljs-string">{pageChange1}</span>
/&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> React, { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;react&#39;</span>
<span class="hljs-keyword">import</span> { Pagination,Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-react&#39;</span>;

<span class="hljs-keyword">const</span> PaginationDemo = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> [currentPage1, setCurrent1] = useState(<span class="hljs-number">1</span>)
  <span class="hljs-keyword">const</span> pageChange1 = <span class="hljs-function">(<span class="hljs-params">v: any</span>) =&gt;</span> {
    <span class="hljs-keyword">let</span> c = v
    setCurrent1(c)
  }
}
</code></pre><h3>\u7B80\u5355\u6A21\u5F0F</h3><p>\b\u5C06 mode \u8BBE\u7F6E\u4E3A \u201Csimple\u201D \u6765\u5207\u6362\u5230\u7B80\u5355\u6A21\u5F0F\uFF0C\u6B64\u65F6\u5206\u9875\u5668\u4E0D\u4F1A\u5C55\u793A\u5177\u4F53\u7684\u9875\u7801\u6309\u94AE\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Pagination</span> 
  <span class="hljs-attr">modelValue</span>=<span class="hljs-string">{currentPage2}</span> 
  <span class="hljs-attr">pageCount</span>=<span class="hljs-string">{12}</span> 
  <span class="hljs-attr">mode</span>=<span class="hljs-string">&quot;simple&quot;</span> 
  <span class="hljs-attr">onChange</span>=<span class="hljs-string">{pageChange2}</span> 
/&gt;</span>

</code></pre><h3>\u663E\u793A\u7701\u7565\u53F7</h3><p>\u8BBE\u7F6E force-ellipses \u540E\u4F1A\u5C55\u793A\u7701\u7565\u53F7\u6309\u94AE\uFF0C\u70B9\u51FB\u540E\u53EF\u4EE5\u5FEB\u901F\u8DF3\u8F6C\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Pagination</span>
  <span class="hljs-attr">modelValue</span>=<span class="hljs-string">{currentPage3}</span>
  <span class="hljs-attr">totalItems</span>=<span class="hljs-string">&quot;125&quot;</span>
  <span class="hljs-attr">showPageSize</span>=<span class="hljs-string">&quot;3&quot;</span>
  <span class="hljs-attr">forceEllipses</span>
  <span class="hljs-attr">onChange</span>=<span class="hljs-string">{pageChange3}</span>
/&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u6309\u94AE</h3><p>\u901A\u8FC7pageNodeRender\u4F20\u5165\u81EA\u5B9A\u4E49\u65B9\u6CD5\uFF0C\u5165\u53C2\u6570\u4E3Apage:{ number:\u9875\u6570, text:\u201C\u6587\u672C\u201D, active:\u201C\u9009\u4E2D\u72B6\u6001\u201D }</p><pre><code class="language-html">&lt;Pagination
  modelValue={currentPage4}
  totalItems=&quot;500&quot;
  showPageSize=&quot;5&quot;
  onChange={pageChange4}
  pageNodeRender={pageNodeRender} 
  prevText={&lt;Icon name=&quot;left&quot;/&gt;} 
  nextText={&lt;Icon name=&quot;right&quot;/&gt;}
/&gt;
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">import</span> React, { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;react&#39;</span>
<span class="hljs-keyword">import</span> { Pagination, Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-react&#39;</span>;

<span class="hljs-keyword">const</span> PaginationDemo = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> [currentPage4, setCurrent4] = useState(<span class="hljs-number">1</span>)
  <span class="hljs-keyword">const</span> pageChange4 = <span class="hljs-function">(<span class="hljs-params">v: any</span>) =&gt;</span> {
    <span class="hljs-keyword">let</span> c = v
    setCurrent4(c)
  }
  <span class="hljs-keyword">const</span> pageNodeRender = <span class="hljs-function">(<span class="hljs-params">page: any</span>) =&gt;</span> {
    <span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>{page.number == 3 ? &#39;hot&#39; : page.text}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
  }
}
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>modelValue</td><td>\u5F53\u524D\u9875\u7801</td><td>Number</td><td>-</td></tr><tr><td>defaultValue</td><td>\u5F53\u524D\u9875\u7801</td><td>Number</td><td>1</td></tr><tr><td>mode</td><td>\u663E\u793A\u6A21\u5F0F,\u53EF\u9009\u503C\u4E3A\uFF1Amulti\uFF0Csimple</td><td>String</td><td>multi</td></tr><tr><td>prevText</td><td>\u81EA\u5B9A\u4E49\u4E0A\u4E00\u9875\u6309\u94AE\u5185\u5BB9</td><td>String | React.ReactNode</td><td>\u4E0A\u4E00\u9875</td></tr><tr><td>nextText</td><td>\u81EA\u5B9A\u4E49\u4E0B\u4E00\u9875\u6309\u94AE\u5185\u5BB9</td><td>String | React.ReactNode</td><td>\u4E0B\u4E00\u9875</td></tr><tr><td>pageCount</td><td>\u603B\u9875\u6570</td><td>String | Number</td><td>\u4F20\u5165/\u6839\u636E\u9875\u6570\u8BA1\u7B97</td></tr><tr><td>totalItems</td><td>\u603B\u8BB0\u5F55\u6570</td><td>String | Number</td><td>0</td></tr><tr><td>itemsPerPage</td><td>\u6BCF\u9875\u8BB0\u5F55\u6570</td><td>String | Number</td><td>10</td></tr><tr><td>showPageSize</td><td>\u663E\u793A\u7684\u9875\u7801\u4E2A\u6570</td><td>String | Number</td><td>5</td></tr><tr><td>forceEllipses</td><td>\u662F\u5426\u663E\u793A\u7701\u7565\u53F7</td><td>Boolean</td><td>false</td></tr><tr><td>pageNodeRender</td><td>\u7528\u4E8E\u81EA\u5B9A\u4E49\u9875\u7801\u7684\u7ED3\u6784</td><td>(page) =&gt; React.ReactNode</td><td>-</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>onChange</td><td>\u9875\u7801\u6539\u53D8\u65F6\u89E6\u53D1</td><td>value</td></tr></tbody></table>`,24),p=[l],g={setup(r,{expose:s}){return s({frontmatter:{}}),(o,c)=>(t(),a("div",e,p))}};export{g as default};
