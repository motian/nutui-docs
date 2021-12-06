import{e as n,o as t,y as a}from"./vendor.js";const e={class:"markdown-body"},r=a(`<h1>CricleProgress \u8FDB\u5EA6\u6761</h1><h3>\u4ECB\u7ECD</h3><p>\u5C55\u793A\u64CD\u4F5C\u6216\u4EFB\u52A1\u7684\u5F53\u524D\u8FDB\u5EA6\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { CirecleProgress } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-react&#39;</span>;
</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-tsx">&lt;CircleProgress progress={<span class="hljs-number">10</span>}&gt;&lt;/CircleProgress&gt;
</code></pre><h3>\u73AF\u5F62\u8FDB\u5EA6\u6761\u81EA\u5B9A\u4E49\u6837\u5F0F</h3><pre><code class="language-tsx">&lt;CircleProgress progress={<span class="hljs-number">50</span>} progressOption={progressOption}&gt;&lt;/CircleProgress&gt;
</code></pre><h3>\u73AF\u5F62\u8FDB\u5EA6\u6761\u81EA\u5B9A\u4E49\u5185\u5BB9</h3><pre><code class="language-tsx">&lt;CircleProgress progress={<span class="hljs-number">50</span>} isAuto={<span class="hljs-literal">true</span>}&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u81EA\u5B9A\u4E49<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/CircleProgress&gt;
</code></pre><h3>\u52A8\u6001\u6539\u53D8\u73AF\u5F62\u8FDB\u5EA6\u6761\u7684\u8FDB\u5EA6</h3><pre><code class="language-tsx">&lt;CircleProgress
  progress={percent}
  progressOption={progressOption}
  strokeInnerWidth={strokeInnerWidth}
&gt;&lt;/CircleProgress&gt;
</code></pre><pre><code class="language-tsx"><span class="hljs-keyword">const</span> [percent, setPercent] = useState(<span class="hljs-number">50</span>)
<span class="hljs-keyword">const</span> [strokeInnerWidth, setStrokeInnerWidth] = useState(<span class="hljs-number">10</span>)
<span class="hljs-keyword">const</span> progressOption = {
  <span class="hljs-attr">radius</span>: <span class="hljs-number">50</span>,
  <span class="hljs-attr">strokeOutWidth</span>: <span class="hljs-number">10</span>,
  <span class="hljs-attr">backColor</span>: <span class="hljs-string">&#39;#d9d9d9&#39;</span>,
  <span class="hljs-attr">progressColor</span>: <span class="hljs-string">&#39;red&#39;</span>,
}
<span class="hljs-keyword">const</span> setReduceVal = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">if</span> (percent - <span class="hljs-number">10</span> &lt;= <span class="hljs-number">0</span>) {
    setStrokeInnerWidth(<span class="hljs-number">0</span>)
    setPercent(<span class="hljs-number">0</span>)
    <span class="hljs-keyword">return</span>
  }
  setPercent(percent - <span class="hljs-number">10</span>)
}
<span class="hljs-keyword">const</span> setAddVal = <span class="hljs-function">() =&gt;</span> {
  setStrokeInnerWidth(<span class="hljs-number">10</span>)
  <span class="hljs-keyword">if</span> (percent &gt;= <span class="hljs-number">100</span>) {
    <span class="hljs-keyword">return</span>
  }
  setPercent(percent + <span class="hljs-number">10</span>)
}
</code></pre><h2>Prop</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>progress</td><td>\u767E\u5206\u6BD4</td><td>Number,String</td><td>\u5FC5\u4F20\u9879\uFF0C\u65E0\u9ED8\u8BA4\u503C</td></tr><tr><td>strokeInnerWidth</td><td>\u5706\u5F27\u7684\u5BBD\u5EA6</td><td>Number,String</td><td>10</td></tr><tr><td>isAuto</td><td>\u662F\u5426\u81EA\u5B9A\u4E49\u5185\u5BB9\u663E\u793A\uFF08taro\u6682\u4E0D\u652F\u6301\uFF09</td><td>Boolean</td><td>false</td></tr><tr><td>progressOption</td><td>\u5916\u5706\u76F8\u5173\u53C2\u6570\u5BF9\u8C61,\u5176\u4E2D\u5305\u62EC\u534A\u5F84\uFF0C\u5BBD\u5EA6\uFF0C\u80CC\u666F\u989C\u8272\uFF0C\u8FDB\u5EA6\u8272\u503C</td><td>Object</td><td>{radius: 50,strokeOutWidth: 10, backColor: \u2018#d9d9d9\u2019,progressColor: \u2018red\u2019}</td></tr></tbody></table>`,17),l=[r],g={setup(p,{expose:s}){return s({frontmatter:{}}),(c,d)=>(t(),n("div",e,l))}};export{g as default};
