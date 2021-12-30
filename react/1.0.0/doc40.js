import{e as s,o as a,y as e}from"./vendor.js";const n={class:"markdown-body"},c=e(`<h1>Switch\u7EC4\u4EF6</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u6765\u6253\u5F00\u6216\u5173\u95ED\u9009\u9879\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Switch } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-react&#39;</span>;
</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-tsx">&lt;Switch checked={<span class="hljs-literal">true</span>}&gt;&lt;/Switch&gt;
</code></pre><h3>\u7981\u7528\u72B6\u6001</h3><pre><code class="language-tsx">&lt;Switch checked={<span class="hljs-literal">true</span>} disable&gt;&lt;/Switch&gt;
</code></pre><h3>change\u4E8B\u4EF6</h3><pre><code class="language-tsx">&lt;Switch change={<span class="hljs-function">() =&gt;</span> change}&gt;&lt;/Switch&gt;
</code></pre><pre><code class="language-javascript"><span class="hljs-keyword">const</span> change = <span class="hljs-function">(<span class="hljs-params">value: boolean, event: Event</span>) =&gt;</span> {
    alert(<span class="hljs-string">\`\u89E6\u53D1\u4E86change\u4E8B\u4EF6\uFF0C\u5F00\u5173\u72B6\u6001\uFF1A<span class="hljs-subst">\${value}</span>\`</span>)
  }
</code></pre><h3>\u5F02\u6B65\u63A7\u5236</h3><pre><code class="language-tsx">&lt;Switch
  checked={checkedAsync}
  change={<span class="hljs-function">(<span class="hljs-params">value, event</span>) =&gt;</span> changeAsync(value, event)}
&gt;&lt;/Switch&gt;
</code></pre><pre><code class="language-javascript">  <span class="hljs-keyword">const</span> [checkedAsync, setCheckedAsync] = useState(<span class="hljs-literal">true</span>)
  
  <span class="hljs-keyword">const</span> changeAsync = <span class="hljs-function">(<span class="hljs-params">value: boolean, event: Event</span>) =&gt;</span> {
    alert(<span class="hljs-string">\`2\u79D2\u540E\u5F02\u6B65\u89E6\u53D1 <span class="hljs-subst">\${value}</span>\`</span>)
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      setCheckedAsync(value)
    }, <span class="hljs-number">2000</span>)
  }
</code></pre><h3>\u81EA\u5B9A\u4E49\u989C\u8272</h3><pre><code class="language-tsx">&lt;Switch activeColor=<span class="hljs-string">&quot;blue&quot;</span>&gt;&lt;/Switch&gt;
</code></pre><h3>\u652F\u6301\u6587\u5B57</h3><pre><code class="language-tsx">&lt;Switch activeText=<span class="hljs-string">&quot;\u5F00&quot;</span> inactiveText=<span class="hljs-string">&quot;\u5173&quot;</span>&gt;&lt;/Switch&gt;
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>checked</td><td>\u5F00\u5173\u72B6\u6001</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>disable</td><td>\u7981\u7528\u72B6\u6001</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>activeColor</td><td>\u6253\u5F00\u65F6\u7684\u80CC\u666F\u989C\u8272</td><td>String</td><td><code>#fa2c19</code></td></tr><tr><td>inactiveColor</td><td>\u5173\u95ED\u65F6\u7684\u80CC\u666F\u989C\u8272</td><td>String</td><td><code>#ebebeb</code></td></tr><tr><td>activeText</td><td>\u6253\u5F00\u65F6\u6587\u5B57\u63CF\u8FF0</td><td>String</td><td>-</td></tr><tr><td>inactiveText</td><td>\u5173\u95ED\u65F6\u6587\u5B57\u63CF\u8FF0</td><td>String</td><td>-</td></tr><tr><td>isAsync</td><td>\u5F00\u5173\u72B6\u6001\u662F\u5426\u5F02\u6B65\u4FEE\u6539</td><td>Boolean</td><td><code>false</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5207\u6362\u5F00\u5173\u65F6\u89E6\u53D1</td><td>(value: boolean,event: Event)</td></tr></tbody></table>`,25),l=[c],i={setup(d,{expose:t}){return t({frontmatter:{}}),(o,r)=>(a(),s("div",n,l))}};export{i as default};
