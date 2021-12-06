import{e as s,o as a,y as n}from"./vendor.js";const l={class:"markdown-body"},r=n(`<h1>Navbar \u5934\u90E8\u5BFC\u822A</h1><h3>\u4ECB\u7ECD</h3><p>\u63D0\u4F9B\u5BFC\u822A\u529F\u80FD\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { NavBar } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-react&#39;</span>;
</code></pre><h3>\u4EE3\u7801\u793A\u4F8B</h3><h3>\u57FA\u672C\u7528\u6CD5</h3><pre><code class="language-tsx">   &lt;NavBar
      title=<span class="hljs-string">&quot;\u8BA2\u5355\u8BE6\u60C5&quot;</span>
      icon=<span class="hljs-string">&quot;share&quot;</span>
      leftShow={<span class="hljs-literal">true</span>}
      onClickTitle={<span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> alert(<span class="hljs-string">&#39;\u6807\u9898&#39;</span>)}
      onClickBack={<span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> alert(<span class="hljs-string">&#39;\u8FD4\u56DE&#39;</span>)}
      onClickIcon={<span class="hljs-function">(<span class="hljs-params">e</span>) =&gt;</span> alert(<span class="hljs-string">&#39;icon&#39;</span>)}
    &gt;&lt;/NavBar&gt;
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">NavBar</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6D4F\u89C8\u8BB0\u5F55&quot;</span>
      <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;\u6E05\u7A7A&quot;</span>
      <span class="hljs-attr">leftShow</span>=<span class="hljs-string">{true}</span>
      <span class="hljs-attr">onClickTitle</span>=<span class="hljs-string">{(e)</span> =&gt;</span> alert(&#39;\u6807\u9898&#39;)}
      onClickBack={(e) =&gt; alert(&#39;\u8FD4\u56DE&#39;)}
      onClickClear={(e) =&gt; alert(&#39;\u6E05\u7A7A&#39;)}
    &gt;<span class="hljs-tag">&lt;/<span class="hljs-name">NavBar</span>&gt;</span></span>
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">NavBar</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8D2D\u7269\u8F66&quot;</span>
      <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;more&quot;</span>
      <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;\u7F16\u8F91&quot;</span>
      <span class="hljs-attr">titIcon</span>=<span class="hljs-string">&quot;locationg3&quot;</span>
      <span class="hljs-attr">onClickTitle</span>=<span class="hljs-string">{(e)</span> =&gt;</span> alert(&#39;\u6807\u9898&#39;)}
      onClickBack={(e) =&gt; alert(&#39;\u8FD4\u56DE&#39;)}
      onClickClear={(e) =&gt; alert(&#39;\u7F16\u8F91&#39;)}
      onClickIcon={(e) =&gt; alert(&#39;icon&#39;)}
    &gt;<span class="hljs-tag">&lt;/<span class="hljs-name">NavBar</span>&gt;</span></span>

</code></pre><h3>Prop</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898\u540D\u79F0</td><td>String</td><td>-</td></tr><tr><td>desc</td><td>\u53F3\u4FA7\u63CF\u8FF0</td><td>String</td><td>-</td></tr><tr><td>left-show</td><td>\u662F\u5426\u5C55\u793A\u5DE6\u4FA7\u7BAD\u5934</td><td>Boolean</td><td>false</td></tr><tr><td>icon</td><td>\u5DE6\u4FA7 <a href="#/icon">\u56FE\u6807\u540D\u79F0</a> \u6216\u56FE\u7247\u94FE\u63A5</td><td>String</td><td>-</td></tr><tr><td>tit-icon</td><td>\u6807\u9898\u5E26icon</td><td>String</td><td>-</td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>onClickTitle</td><td>\u70B9\u51FB\u9875\u9762\u6807\u9898\u4E8B\u4EF6</td><td>event:Event</td></tr><tr><td>onClickClear</td><td>\u70B9\u51FB\u53F3\u4FA7\u6587\u6848\u4E8B\u4EF6</td><td>event:Event</td></tr><tr><td>onClickBack</td><td>\u70B9\u51FB\u8FD4\u56DE\u4E0A\u4E00\u9875\u4E8B\u4EF6</td><td>event:Event</td></tr><tr><td>onClickIcon</td><td>\u70B9\u51FB\u53F3\u4FA7icon\u4E8B\u4EF6</td><td>event:Event</td></tr></tbody></table>`,12),c=[r],i={setup(e,{expose:t}){return t({frontmatter:{}}),(d,o)=>(a(),s("div",l,c))}};export{i as default};
