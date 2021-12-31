import{e as n,o as a,y as l}from"./vendor.js";const t={class:"markdown-body"},p=l(`<h1>Elevator \u7535\u68AF\u697C\u5C42</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u5217\u8868\u5FEB\u901F\u5B9A\u4F4D\u4EE5\u53CA\u7D22\u5F15\u7684\u663E\u793A</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Elevator } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-react&#39;</span>
</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-tsx"><span class="hljs-keyword">const</span> dataList = [
  {
    <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;A&#39;</span>,
    <span class="hljs-attr">list</span>: [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5B89\u5FBD&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,
      },
    ],
  },
  {
    <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;B&#39;</span>,
    <span class="hljs-attr">list</span>: [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5317\u4EAC&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,
      },
    ],
  },
  {
    <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;G&#39;</span>,
    <span class="hljs-attr">list</span>: [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5E7F\u897F&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5E7F\u4E1C&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>,
      },
    ],
  },
  {
    <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;H&#39;</span>,
    <span class="hljs-attr">list</span>: [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u6E56\u5357&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">5</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u6E56\u5317&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">6</span>,
      },
      ,
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u7425\u73C0&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">7</span>,
      },
    ],
  },
]
<span class="hljs-keyword">const</span> clickItem = <span class="hljs-function">(<span class="hljs-params">key: <span class="hljs-built_in">string</span>, item: <span class="hljs-built_in">any</span></span>) =&gt;</span> {
  <span class="hljs-built_in">console</span>.log(key, <span class="hljs-built_in">JSON</span>.stringify(item))
}

<span class="hljs-keyword">const</span> clickIndex = <span class="hljs-function">(<span class="hljs-params">key: <span class="hljs-built_in">string</span></span>) =&gt;</span> {
  <span class="hljs-built_in">console</span>.log(key)
}

&lt;Elevator
  indexList={dataList}
  height=<span class="hljs-string">&quot;260&quot;</span>
  clickItem={<span class="hljs-function">(<span class="hljs-params">key: <span class="hljs-built_in">string</span>, item: <span class="hljs-built_in">any</span></span>) =&gt;</span> clickItem(key, item)}
  clickIndex={<span class="hljs-function">(<span class="hljs-params">key: <span class="hljs-built_in">string</span></span>) =&gt;</span> clickIndex(key)}
&gt;&lt;/Elevator&gt;
</code></pre><h3>\u81EA\u5B9A\u4E49\u7D22\u5F15</h3><h2>API</h2><pre><code class="language-tsx"><span class="hljs-keyword">const</span> dataList = [
  {
    <span class="hljs-attr">num</span>: <span class="hljs-string">&#39;\u4E00&#39;</span>,
    <span class="hljs-attr">list</span>: [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5317\u4EAC&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u4E0A\u6D77&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u6DF1\u5733&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5E7F\u5DDE&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u676D\u5DDE&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">5</span>,
      },
    ],
  },
  {
    <span class="hljs-attr">num</span>: <span class="hljs-string">&#39;\u4E8C&#39;</span>,
    <span class="hljs-attr">list</span>: [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u6210\u90FD&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">6</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u897F\u5B89&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">7</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5929\u6D25&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">8</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u6B66\u6C49&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">9</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u957F\u6C99&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">10</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u91CD\u5E86&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">11</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u82CF\u5DDE&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">12</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5357\u4EAC&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">13</span>,
      },
    ],
  },
  {
    <span class="hljs-attr">num</span>: <span class="hljs-string">&#39;\u4E09&#39;</span>,
    <span class="hljs-attr">list</span>: [
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u897F\u5B81&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">14</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5170\u5DDE&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">15</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u77F3\u5BB6\u5E84&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">16</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u79E6\u7687\u5C9B&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">17</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5927\u8FDE&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">18</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u54C8\u5C14\u6EE8&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">19</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u957F\u6625&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">20</span>,
      },
      {
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u592A\u539F&#39;</span>,
        <span class="hljs-attr">id</span>: <span class="hljs-number">21</span>,
      },
    ],
  },
]
<span class="hljs-keyword">const</span> clickItem = <span class="hljs-function">(<span class="hljs-params">key: <span class="hljs-built_in">string</span>, item: <span class="hljs-built_in">any</span></span>) =&gt;</span> {
  <span class="hljs-built_in">console</span>.log(key, <span class="hljs-built_in">JSON</span>.stringify(item))
}

<span class="hljs-keyword">const</span> clickIndex = <span class="hljs-function">(<span class="hljs-params">key: <span class="hljs-built_in">string</span></span>) =&gt;</span> {
  <span class="hljs-built_in">console</span>.log(key)
}

&lt;Elevator
  indexList={dataList2}
  height=<span class="hljs-string">&quot;220&quot;</span>
  acceptKey=<span class="hljs-string">&quot;num&quot;</span>
  clickItem={<span class="hljs-function">(<span class="hljs-params">key: <span class="hljs-built_in">string</span>, item: <span class="hljs-built_in">any</span></span>) =&gt;</span> clickItem(key, item)}
  clickIndex={<span class="hljs-function">(<span class="hljs-params">key: <span class="hljs-built_in">string</span></span>) =&gt;</span> clickIndex(key)}
&gt;&lt;/Elevator&gt;
</code></pre><h3>Props</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>height</td><td>\u7535\u68AF\u533A\u57DF\u7684\u9AD8\u5EA6</td><td>Number\u3001String</td><td><code>200px</code></td></tr><tr><td>acceptKey</td><td>\u7D22\u5F15 key \u503C</td><td>String</td><td><code>title</code></td></tr><tr><td>indexList</td><td>\u7D22\u5F15\u5217\u8868</td><td>Array\uFF08item \u9700\u5305\u542B id\u3001name \u5C5E\u6027, name \u652F\u6301\u4F20\u5165 html \u7ED3\u6784\uFF09</td><td><code>[{id: 0, name: &#39;&#39;}]</code></td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>clickItem</td><td>\u70B9\u51FB\u5185\u5BB9</td><td>key: string, item: { id: 0, name: \u2018\u2019 }</td></tr><tr><td>clickIndex</td><td>\u70B9\u51FB\u7D22\u5F15</td><td>key: string</td></tr></tbody></table>`,15),c=[p],d={setup(h,{expose:s}){return s({frontmatter:{}}),(i,e)=>(a(),n("div",t,c))}};export{d as default};
