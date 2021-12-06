import{e as a,o as n,y as t}from"./vendor.js";const e={class:"markdown-body"},l=t(`<h1>Range \u533A\u95F4\u9009\u62E9\u5668</h1><h3>\u4ECB\u7ECD</h3><p>\u6ED1\u52A8\u8F93\u5165\u6761\uFF0C\u7528\u4E8E\u5728\u7ED9\u5B9A\u7684\u8303\u56F4\u5185\u9009\u62E9\u4E00\u4E2A\u503C\u3002</p><h3>\u5B89\u88C5</h3><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-jsx">&lt;Range modelValue={<span class="hljs-number">40</span>}&gt;&lt;/Range&gt;
</code></pre><h3>\u53CC\u6ED1\u5757</h3><pre><code class="language-jsx">&lt;Range
  range
  modelValue={[<span class="hljs-number">30</span>, <span class="hljs-number">60</span>]}
  change={<span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> {
    change(value)
  }}
&gt;&lt;/Range&gt;
</code></pre><h3>\u6307\u5B9A\u8303\u56F4</h3><pre><code class="language-jsx">&lt;Range
  modelValue={<span class="hljs-number">0</span>}
  max={<span class="hljs-number">10</span>}
  min={-<span class="hljs-number">10</span>}
  change={<span class="hljs-function">(<span class="hljs-params">value</span>) =&gt;</span> {
    change(value)
  }}
&gt;&lt;/Range&gt;
</code></pre><h3>\u8BBE\u7F6E\u6B65\u957F</h3><pre><code class="language-jsx">&lt;Range
  modelValue={value1}
  step={<span class="hljs-number">5</span>}
  change={<span class="hljs-function">(<span class="hljs-params">value: any</span>) =&gt;</span> {
    change(value, <span class="hljs-string">&#39;value1&#39;</span>)
  }}
&gt;&lt;/Range&gt;
</code></pre><h3>\u9690\u85CF\u8303\u56F4</h3><pre><code class="language-jsx">&lt;Range
  modelValue={<span class="hljs-number">30</span>}
  hiddenRange={<span class="hljs-literal">true</span>}
  change={<span class="hljs-function">(<span class="hljs-params">value: any</span>) =&gt;</span> {
    change(value)
  }}
&gt;&lt;/Range&gt;
</code></pre><h3>\u9690\u85CF\u6807\u7B7E</h3><pre><code class="language-jsx">&lt;Range
  modelValue={<span class="hljs-number">20</span>}
  hiddenTag={<span class="hljs-literal">true</span>}
  change={<span class="hljs-function">(<span class="hljs-params">value: any</span>) =&gt;</span> {
    change(value)
  }}
&gt;&lt;/Range&gt;
</code></pre><h3>\u7981\u7528</h3><pre><code class="language-jsx">&lt;Range
  modelValue={<span class="hljs-number">50</span>}
  disabled
  change={<span class="hljs-function">(<span class="hljs-params">value: any</span>) =&gt;</span> {
    change(value)
  }}
&gt;&lt;/Range&gt;
</code></pre><h3>\u81EA\u5B9A\u4E49\u6837\u5F0F</h3><pre><code class="language-jsx">&lt;Range
  modelValue={<span class="hljs-number">40</span>}
  inactiveColor=<span class="hljs-string">&quot;rgba(163,184,255,1)&quot;</span>
  buttonColor=<span class="hljs-string">&quot;rgba(52,96,250,1)&quot;</span>
  activeColor=<span class="hljs-string">&quot;linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)&quot;</span>
  change={<span class="hljs-function">(<span class="hljs-params">value: number</span>) =&gt;</span> {
    change(value)
  }}
&gt;&lt;/Range&gt;
</code></pre><h3>\u81EA\u5B9A\u4E49\u6309\u94AE</h3><pre><code class="language-jsx">&lt;Range
  modelValue={value2}
  button={<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;custom-button&quot;</span>&gt;</span>{value2}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>}
  change={<span class="hljs-function">(<span class="hljs-params">value: number</span>) =&gt;</span> {
    change(value, <span class="hljs-string">&#39;value2&#39;</span>)
  }}
&gt;&lt;/Range&gt;
</code></pre><pre><code class="language-js"><span class="hljs-keyword">const</span> [value1, SetValue1] = useState(<span class="hljs-number">40</span>)
<span class="hljs-keyword">const</span> [value2, SetValue2] = useState(<span class="hljs-number">60</span>)
<span class="hljs-keyword">const</span> change = <span class="hljs-function">(<span class="hljs-params">value: number, name?: string</span>) =&gt;</span> {
  Toast.text(<span class="hljs-string">&#39;\u5F53\u524D\u503C\uFF1A&#39;</span> + value)
  <span class="hljs-keyword">switch</span> (name) {
    <span class="hljs-keyword">case</span> <span class="hljs-string">&#39;value1&#39;</span>:
      SetValue1(value)
      <span class="hljs-keyword">break</span>
    <span class="hljs-keyword">case</span> <span class="hljs-string">&#39;value2&#39;</span>:
      SetValue2(value)
      <span class="hljs-keyword">break</span>
    <span class="hljs-attr">default</span>:
      <span class="hljs-keyword">break</span>
  }
}
</code></pre><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
  <span class="hljs-selector-class">.custom-button</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">26px</span>;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#fff</span>;
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">10px</span>;
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">18px</span>;
    <span class="hljs-attribute">text-align</span>: center;
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#ee0a24</span>;
    <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">100px</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>modelValue</td><td>\u5F53\u524D\u8FDB\u5EA6\u767E\u5206\u6BD4</td><td>Number\u3001Number[]</td><td><code>0</code></td></tr><tr><td>range</td><td>\u662F\u5426\u5F00\u542F\u53CC\u6ED1\u5757\u6A21\u5F0F</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>max</td><td>\u6700\u5927\u503C</td><td>Number\u3001String</td><td><code>100</code></td></tr><tr><td>min</td><td>\u6700\u5C0F\u503C</td><td>Number\u3001String</td><td><code>0</code></td></tr><tr><td>step</td><td>\u6B65\u957F</td><td>Number\u3001String</td><td><code>1</code></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u6ED1\u5757</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>hiddenRange</td><td>\u662F\u5426\u9690\u85CF\u8303\u56F4\u503C</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>hiddenTag</td><td>\u662F\u5426\u9690\u85CF\u6807\u7B7E</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>activeColor</td><td>\u8FDB\u5EA6\u6761\u6FC0\u6D3B\u6001\u989C\u8272</td><td>String</td><td><code>rgba(250, 44, 25, 1)</code></td></tr><tr><td>inactiveColor</td><td>\u8FDB\u5EA6\u6761\u975E\u6FC0\u6D3B\u6001\u989C\u8272</td><td>String</td><td><code>rgba(255, 163, 154, 1)</code></td></tr><tr><td>buttonColor</td><td>\u6309\u94AE\u989C\u8272</td><td>String</td><td><code>rgba(250, 44, 25, 1)</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u8FDB\u5EA6\u53D8\u5316\u4E14\u7ED3\u675F\u62D6\u52A8\u540E\u89E6\u53D1</td><td>value: \u5F53\u524D\u8FDB\u5EA6</td></tr><tr><td>dragStart</td><td>\u5F00\u59CB\u62D6\u52A8\u65F6\u89E6\u53D1</td><td>-</td></tr><tr><td>dragEnd</td><td>\u7ED3\u675F\u62D6\u52A8\u65F6\u89E6\u53D1</td><td>-</td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>button</td><td>\u81EA\u5B9A\u4E49\u6ED1\u52A8\u6309\u94AE</td></tr></tbody></table>`,32),d=[l],g={setup(p,{expose:s}){return s({frontmatter:{}}),(r,h)=>(n(),a("div",e,d))}};export{g as default};
