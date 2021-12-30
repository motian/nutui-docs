import{e as n,o as t,y as a}from"./vendor.js";const e={class:"markdown-body"},l=a(`<h1>AnimatingNumbers \u6570\u5B57\u52A8\u753B</h1><h3>\u4ECB\u7ECD</h3><p>\u6570\u5B57\u52A8\u753B\u96C6\u5408</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { AnimatingNumbers } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-react&#39;</span>
</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>AnimatingNumbers.CountUp-\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-jsx">&lt;AnimatingNumbers.CountUp endNumber=<span class="hljs-string">&quot;678.94&quot;</span> /&gt;
</code></pre><h3>AnimatingNumbers.CountUp-\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u52A8\u6001\u4FEE\u6539\u6570\u636E\uFF08\u9700\u8981\u6307\u5B9A\u6700\u5927\u4F4D\u6570\uFF09</h3><pre><code class="language-jsx"><span class="hljs-keyword">const</span> AnimatingNumbersDemo = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> [endNumber, setEndNumer] = useState(<span class="hljs-string">&#39;1570.99&#39;</span>)
  useEffect(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-built_in">setInterval</span>(<span class="hljs-function">() =&gt;</span> {
      setEndNumer(<span class="hljs-string">\`<span class="hljs-subst">\${<span class="hljs-built_in">Math</span>.floor(<span class="hljs-built_in">Math</span>.random() * <span class="hljs-number">999999</span>)}</span>.<span class="hljs-subst">\${<span class="hljs-built_in">Math</span>.floor(<span class="hljs-built_in">Math</span>.random() * <span class="hljs-number">89</span> + <span class="hljs-number">10</span>)}</span>\`</span>)
    }, <span class="hljs-number">30000</span>)
  }, [])
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">AnimatingNumbers.CountUp</span>
      <span class="hljs-attr">endNumer</span>=<span class="hljs-string">{endNumber}</span>
      <span class="hljs-attr">easeSpeed</span>=<span class="hljs-string">{1.2}</span>
      <span class="hljs-attr">maxLen</span>=<span class="hljs-string">{6}</span>
      <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;custom-coutup&quot;</span>
    /&gt;</span></span>
  )
}
</code></pre><h2>API</h2><h3>AnimatingNumbers.CountUp Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>maxLen</td><td>\u8BBE\u7F6E\u6700\u5927\u5C55\u793A\u957F\u5EA6\uFF0C\u957F\u5EA6\u4E0D\u591F\u6309\u4F4D\u8865 0</td><td>Number</td><td>0</td></tr><tr><td>endNumer</td><td>\u7ED3\u675F\u503C,\u5FC5\u586B\u9879</td><td>String</td><td>\u2018\u2019</td></tr><tr><td>delaySpeed</td><td>\u7B49\u5F85\u52A8\u753B\u6267\u884C\u65F6\u95F4\uFF0C\u5355\u4F4D ms</td><td>Number</td><td>300</td></tr><tr><td>easeSpeed</td><td>\u52A8\u753B\u6267\u884C\u65F6\u95F4\uFF0C\u5355\u4F4D s</td><td>Number</td><td>1</td></tr><tr><td>thousands</td><td>\u662F\u5426\u6709\u5343\u4F4D\u5206\u9694\u7B26</td><td>Boolean</td><td>false</td></tr></tbody></table>`,13),p=[l],u={setup(r,{expose:s}){return s({frontmatter:{}}),(c,h)=>(t(),n("div",e,p))}};export{u as default};
