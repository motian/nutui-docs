import{e as a,o as t,y as n}from"./vendor.js";const l={class:"markdown-body"},e=n(`<h1>ShortPassword \u77ED\u5BC6\u7801</h1><h3>\u4ECB\u7ECD</h3><p>\u77ED\u5BC6\u7801\u8F93\u5165\u6846\uFF0C\u53EF\u7528\u4E8E\u8F93\u5165\u5BC6\u7801\u3001\u77ED\u4FE1\u9A8C\u8BC1\u7801\u7B49</p><h3>\u5B89\u88C5</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { Shortpassword } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-react&#39;</span>;
</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-tsx"><span class="hljs-keyword">const</span> Shortpassword = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> [visible,setVisible] = useState(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> [value,setValue] = useState(<span class="hljs-string">&#39;&#39;</span>)
  cosnt change = <span class="hljs-function">(<span class="hljs-params">value</span>)=&gt;</span>{
     setValue(value)
  }
  <span class="hljs-keyword">return</span> 
    <span class="xml"><span class="hljs-tag">&lt;&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Shortpassword</span> <span class="hljs-attr">visible</span>=<span class="hljs-string">{visible}</span> <span class="hljs-attr">modelValue</span>=<span class="hljs-string">{value}</span> <span class="hljs-attr">onClose</span>=<span class="hljs-string">{()</span>=&gt;</span>setVisible(false)} change={(value)=&gt;change(value)}&gt;<span class="hljs-tag">&lt;/<span class="hljs-name">Shortpassword</span>&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
}

</code></pre><h3>\u663E\u793A\u6309\u94AE\u7EC4</h3><pre><code class="language-tsx"><span class="hljs-keyword">const</span> Shortpassword = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> [visible,setVisible] = useState(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> [value,setValue] = useState(<span class="hljs-string">&#39;&#39;</span>)
  cosnt change = <span class="hljs-function">(<span class="hljs-params">value</span>)=&gt;</span>{
     setValue(value)
  }
  <span class="hljs-keyword">return</span>
     <span class="xml"><span class="hljs-tag">&lt;&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Shortpassword</span> <span class="hljs-attr">visible</span>=<span class="hljs-string">{visible}</span> <span class="hljs-attr">modelValue</span>=<span class="hljs-string">{value}</span> <span class="hljs-attr">onClose</span>=<span class="hljs-string">{()</span>=&gt;</span>setVisible(false)} change={(value)=&gt;change(value)} noButton={false}&gt;<span class="hljs-tag">&lt;/<span class="hljs-name">Shortpassword</span>&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
}

</code></pre><h3>\u81EA\u5B9A\u4E49\u5BC6\u7801\u957F\u5EA64</h3><pre><code class="language-tsx"><span class="hljs-keyword">const</span> Shortpassword = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> [visible,setVisible] = useState(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> [value,setValue] = useState(<span class="hljs-string">&#39;&#39;</span>)
  cosnt change = <span class="hljs-function">(<span class="hljs-params">value</span>)=&gt;</span>{
     setValue(value)
  }
  <span class="hljs-keyword">return</span> 
    <span class="xml"><span class="hljs-tag">&lt;&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Shortpassword</span> <span class="hljs-attr">visible</span>=<span class="hljs-string">{visible}</span> <span class="hljs-attr">modelValue</span>=<span class="hljs-string">{value}</span> <span class="hljs-attr">onClose</span>=<span class="hljs-string">{()</span>=&gt;</span>setVisible(false)} change={(value)=&gt;change(value)} length={4}&gt;<span class="hljs-tag">&lt;/<span class="hljs-name">Shortpassword</span>&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
}

</code></pre><h3>\u5FD8\u8BB0\u5BC6\u7801\u63D0\u793A\u8BED\u4E8B\u4EF6\u56DE\u8C03</h3><pre><code class="language-tsx"><span class="hljs-keyword">const</span> Shortpassword = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> [visible,setVisible] = useState(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> [value,setValue] = useState(<span class="hljs-string">&#39;&#39;</span>)
   <span class="hljs-keyword">const</span> onTips = <span class="hljs-function">()=&gt;</span>{
    Toast.text(<span class="hljs-string">&#39;\u6267\u884C\u5FD8\u8BB0\u5BC6\u7801\u63D0\u793A\u8BED&#39;</span>)
  }
  cosnt change = <span class="hljs-function">(<span class="hljs-params">value</span>)=&gt;</span>{
     setValue(value)
  }
  <span class="hljs-keyword">return</span> 
    <span class="xml"><span class="hljs-tag">&lt;&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">Shortpassword</span> <span class="hljs-attr">visible</span>=<span class="hljs-string">{visible}</span> <span class="hljs-attr">modelValue</span>=<span class="hljs-string">{value}</span> <span class="hljs-attr">onClose</span>=<span class="hljs-string">{()</span>=&gt;</span>setVisible(false)} change={(value)=&gt;change(value)} onTips={()=&gt;onTips()}&gt;<span class="hljs-tag">&lt;/<span class="hljs-name">Shortpassword</span>&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
}

</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>modelValue</td><td>\u5BC6\u7801\u521D\u59CB\u503C</td><td>String\uFF5CNumber</td><td>-</td></tr><tr><td>visible</td><td>\u662F\u5426\u5C55\u793A\u77ED\u5BC6\u7801\u6846</td><td>Boolean</td><td>false</td></tr><tr><td>title</td><td>\u6807\u9898</td><td>String</td><td>\u8BF7\u8F93\u5165\u5BC6\u7801</td></tr><tr><td>desc</td><td>\u5BC6\u7801\u6846\u63CF\u8FF0</td><td>String</td><td>\u60A8\u4F7F\u7528\u4E86\u865A\u62DF\u8D44\u4EA7\uFF0C\u8BF7\u8FDB\u884C\u9A8C\u8BC1</td></tr><tr><td>tips</td><td>\u63D0\u793A\u8BED</td><td>String</td><td>\u5FD8\u8BB0\u5BC6\u7801</td></tr><tr><td>closeOnClickOverlay</td><td>\u662F\u5426\u70B9\u51FB\u906E\u7F69\u5173\u95ED</td><td>Boolean</td><td>true</td></tr><tr><td>noButton</td><td>\u662F\u5426\u9690\u85CF\u5E95\u90E8\u6309\u94AE</td><td>Boolean</td><td>true</td></tr><tr><td>length</td><td>\u5BC6\u7801\u957F\u5EA6\uFF0C\u53D6\u503C\u4E3A4~6</td><td>String\uFF5CNumber</td><td>6</td></tr><tr><td>errorMsg</td><td>\u9519\u8BEF\u4FE1\u606F\u63D0\u793A</td><td>String</td><td>\u2018\u2019</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u8F93\u5165\u5BC6\u7801\u65F6\u89E6\u53D1\u4E8B\u4EF6</td><td>\u5F53\u524D\u8F93\u5165\u6846\u503Cvalue</td></tr><tr><td>onOk</td><td>\u70B9\u51FB\u786E\u5B9E\u65F6\u89E6\u53D1\u4E8B\u4EF6</td><td>\u5F53\u524D\u8F93\u5165\u6846\u503Cvalue</td></tr><tr><td>onCancel</td><td>\u70B9\u51FB\u53D6\u6D88\u65F6\u89E6\u53D1\u4E8B\u4EF6</td><td>-</td></tr><tr><td>onClose</td><td>\u70B9\u51FB\u5173\u95ED\u56FE\u6807\u548C\u906E\u7F69\u65F6\u89E6\u53D1\u4E8B\u4EF6</td><td>-</td></tr><tr><td>onTips</td><td>\u70B9\u51FB\u5FD8\u8BB0\u5BC6\u7801\u65F6\u89E6\u53D1\u4E8B\u4EF6</td><td>-</td></tr><tr><td>complete</td><td>\u8F93\u5165\u5B8C\u6210\u7684\u56DE\u8C03</td><td>\u5F53\u524D\u8F93\u5165\u6846\u503Cvalue</td></tr></tbody></table>`,19),p=[e],g={setup(d,{expose:s}){return s({frontmatter:{}}),(c,h)=>(t(),a("div",l,p))}};export{g as default};
