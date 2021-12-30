import{e as a,o as n,y as l}from"./vendor.js";const t={class:"markdown-body"},p=l(`<h1>Picker\u9009\u62E9\u5668</h1><h3>\u4ECB\u7ECD</h3><p>\u63D0\u4F9B\u591A\u4E2A\u9009\u9879\u96C6\u5408\u4F9B\u7528\u6237\u9009\u62E9\u5176\u4E2D\u4E00\u9879\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Picker } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-react&#39;</span>;
</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-tsx">&lt;Cell isLink={<span class="hljs-literal">true</span>} onClick={<span class="hljs-function">() =&gt;</span> setIsVisible1(!isVisible1)}&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>\u57FA\u7840\u7528\u6CD5<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span></span>
&lt;/Cell&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Picker</span>
  <span class="hljs-attr">isVisible</span>=<span class="hljs-string">{isVisible1}</span>
  <span class="hljs-attr">listData</span>=<span class="hljs-string">{listData1}</span>
  <span class="hljs-attr">onClose</span>=<span class="hljs-string">{()</span> =&gt;</span> setIsVisible1(false)}
  defaultValueData={[]}
  ref={pickerRef1}
&gt;<span class="hljs-tag">&lt;/<span class="hljs-name">Picker</span>&gt;</span></span>
</code></pre><h3>\u591A\u5217\u7528\u6CD5</h3><pre><code class="language-tsx">&lt;Cell isLink={<span class="hljs-literal">true</span>} onClick={<span class="hljs-function">() =&gt;</span> setIsVisible2(!isVisible2)}&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>\u591A\u5217\u7528\u6CD5<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span></span>
&lt;/Cell&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Picker</span>
  <span class="hljs-attr">isVisible</span>=<span class="hljs-string">{isVisible2}</span>
  <span class="hljs-attr">listData</span>=<span class="hljs-string">{listData2}</span>
  <span class="hljs-attr">onClose</span>=<span class="hljs-string">{()</span> =&gt;</span> setIsVisible2(false)}
  defaultValueData={[&#39;\u5468\u56DB&#39;, &#39;\u4E0B\u5348&#39;]}
  onConfirm={(list: any[]) =&gt; console.log(&#39;\u591A\u5217\u7528\u6CD5\u9009\u4E2D\u9879\uFF1A&#39;, list)}
  ref={pickerRef2}
&gt;<span class="hljs-tag">&lt;/<span class="hljs-name">Picker</span>&gt;</span></span>
</code></pre><h3>\u591A\u7EA7\u8054\u52A8</h3><pre><code class="language-tsx">&lt;Cell isLink={<span class="hljs-literal">true</span>} onClick={<span class="hljs-function">() =&gt;</span> setIsVisible3(!isVisible3)}&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>
      \u591A\u7EA7\u8054\u52A8
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>{cityCustmer}<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span></span>
&lt;/Cell&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Picker</span>
  <span class="hljs-attr">isVisible</span>=<span class="hljs-string">{isVisible3}</span>
  <span class="hljs-attr">listData</span>=<span class="hljs-string">{custmerCityData}</span>
  <span class="hljs-attr">onClose</span>=<span class="hljs-string">{()</span> =&gt;</span> setIsVisible3(false)}
  defaultValueData={[]}
  onConfirm={(list: any[]) =&gt; setChooseValueCustmer(list)}
  onChoose={(index: number, value: IResValue, list: any[]) =&gt;
    updateChooseValueCustmer(index, value, list)
  }
  onCloseUpdate={(list: any[]) =&gt; closeUpdateChooseValueCustmer(list, pickerRef3)}
  ref={pickerRef3}
&gt;<span class="hljs-tag">&lt;/<span class="hljs-name">Picker</span>&gt;</span></span>
</code></pre><pre><code class="language-javascript">  <span class="hljs-keyword">const</span> [isVisible1, setIsVisible1] = useState(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> [isVisible2, setIsVisible2] = useState(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> [isVisible3, setIsVisible3] = useState(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> [cityCustmer, setCityCustmer] = useState(<span class="hljs-string">&#39;&#39;</span>)
  <span class="hljs-keyword">const</span> pickerRef1 = useRef&lt;pickerRefState&gt;(<span class="hljs-literal">null</span>)
  <span class="hljs-keyword">const</span> pickerRef2 = useRef&lt;pickerRefState&gt;(<span class="hljs-literal">null</span>)
  <span class="hljs-keyword">const</span> pickerRef3 = useRef&lt;pickerRefState&gt;(<span class="hljs-literal">null</span>)
  <span class="hljs-keyword">const</span> APIData = [
    {
      <span class="hljs-attr">label</span>: <span class="hljs-number">1</span>,
      <span class="hljs-attr">array</span>: [
        {
          <span class="hljs-attr">label</span>: <span class="hljs-number">1</span>,
          <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u671D\u9633\u533A&#39;</span>,
        },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-number">2</span>,
          <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u6D77\u6DC0\u533A&#39;</span>,
        },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-number">3</span>,
          <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u5927\u5174\u533A&#39;</span>,
        },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-number">4</span>,
          <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u4E1C\u57CE\u533A&#39;</span>,
        },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-number">5</span>,
          <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u897F\u57CE\u533A&#39;</span>,
        },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-number">6</span>,
          <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u4E30\u53F0\u533A&#39;</span>,
        },
      ],
    },
    {
      <span class="hljs-attr">label</span>: <span class="hljs-number">2</span>,
      <span class="hljs-attr">array</span>: [
        {
          <span class="hljs-attr">label</span>: <span class="hljs-number">1</span>,
          <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u9EC4\u6D66\u533A&#39;</span>,
        },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-number">2</span>,
          <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u957F\u5B81\u533A&#39;</span>,
        },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-number">3</span>,
          <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u666E\u9640\u533A&#39;</span>,
        },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-number">4</span>,
          <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u6768\u6D66\u533A&#39;</span>,
        },
        {
          <span class="hljs-attr">label</span>: <span class="hljs-number">5</span>,
          <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u6D66\u4E1C\u65B0\u533A&#39;</span>,
        },
      ],
    },
  ]
  <span class="hljs-keyword">const</span> listData1 = [
    [
      {
        <span class="hljs-attr">label</span>: <span class="hljs-number">1</span>,
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u5357\u4EAC\u5E02&#39;</span>,
      },
      {
        <span class="hljs-attr">label</span>: <span class="hljs-number">2</span>,
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u65E0\u9521\u5E02&#39;</span>,
      },
      {
        <span class="hljs-attr">label</span>: <span class="hljs-number">3</span>,
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u6D77\u5317\u85CF\u65CF\u81EA\u6CBB\u533A&#39;</span>,
      },
      {
        <span class="hljs-attr">label</span>: <span class="hljs-number">4</span>,
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u5317\u4EAC\u5E02&#39;</span>,
      },
      {
        <span class="hljs-attr">label</span>: <span class="hljs-number">5</span>,
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u8FDE\u4E91\u6E2F\u5E02&#39;</span>,
      },
      {
        <span class="hljs-attr">label</span>: <span class="hljs-number">6</span>,
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u6D59\u6C5F\u5E02&#39;</span>,
      },
      {
        <span class="hljs-attr">label</span>: <span class="hljs-number">7</span>,
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u6C5F\u82CF\u5E02&#39;</span>,
      },
      {
        <span class="hljs-attr">label</span>: <span class="hljs-number">8</span>,
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u5927\u5E86\u5E02&#39;</span>,
      },
      {
        <span class="hljs-attr">label</span>: <span class="hljs-number">9</span>,
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u7EE5\u5316\u5E02&#39;</span>,
      },
      {
        <span class="hljs-attr">label</span>: <span class="hljs-number">10</span>,
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u6F4D\u574A\u5E02&#39;</span>,
      },
      {
        <span class="hljs-attr">label</span>: <span class="hljs-number">11</span>,
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u8BF7\u6309\u5E02&#39;</span>,
      },
      {
        <span class="hljs-attr">label</span>: <span class="hljs-number">12</span>,
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u4E4C\u9C81\u6728\u9F50\u5E02&#39;</span>,
      },
    ],
  ]
  <span class="hljs-keyword">const</span> listData2 = [
    [<span class="hljs-string">&#39;\u5468\u4E00&#39;</span>, <span class="hljs-string">&#39;\u5468\u4E8C&#39;</span>, <span class="hljs-string">&#39;\u5468\u4E09&#39;</span>, <span class="hljs-string">&#39;\u5468\u56DB&#39;</span>, <span class="hljs-string">&#39;\u5468\u4E94&#39;</span>, <span class="hljs-string">&#39;\u5468\u516D&#39;</span>, <span class="hljs-string">&#39;\u5468\u65E5&#39;</span>],
    [<span class="hljs-string">&#39;\u4E0A\u5348&#39;</span>, <span class="hljs-string">&#39;\u4E0B\u5348&#39;</span>, <span class="hljs-string">&#39;\u665A\u4E0A&#39;</span>],
  ]

  <span class="hljs-keyword">const</span> [custmerCityData, setCustmerCityData] = useState([
    [
      {
        <span class="hljs-attr">label</span>: <span class="hljs-number">1</span>,
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u5317\u4EAC&#39;</span>,
      },
      {
        <span class="hljs-attr">label</span>: <span class="hljs-number">2</span>,
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u4E0A\u6D77&#39;</span>,
      },
    ],
  ])

  <span class="hljs-keyword">const</span> setChooseValueCustmer = <span class="hljs-function">(<span class="hljs-params">chooseData: any[]</span>) =&gt;</span> {
    <span class="hljs-keyword">var</span> str = chooseData.map(<span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> item.value).join(<span class="hljs-string">&#39;-&#39;</span>)
    setCityCustmer(str)
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;\u591A\u7EA7\u8054\u52A8\u7528\u6CD5\u9009\u4E2D\u9879\uFF1A&#39;</span>, str)
  }

  <span class="hljs-keyword">const</span> closeUpdateChooseValueCustmer = <span class="hljs-function">(<span class="hljs-params">chooseData: any[], ref</span>) =&gt;</span> {
    <span class="hljs-comment">//\u6B64\u5904\u6A21\u62DF\u67E5\u8BE2API\uFF0C\u5982\u679C\u6570\u636E\u7F13\u5B58\u4E86\u4E0D\u9700\u8981\u518D\u91CD\u65B0\u8BF7\u6C42</span>
    <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
      <span class="hljs-keyword">let</span> { label, value } = chooseData[<span class="hljs-number">0</span>]
      <span class="hljs-keyword">var</span> resItems = APIData.find(<span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> item.label == label)
      <span class="hljs-keyword">if</span> (resItems &amp;&amp; resItems.array.length) {
        setCustmerCityData(<span class="hljs-function">(<span class="hljs-params">data</span>) =&gt;</span> {
          <span class="hljs-keyword">const</span> result = [...data]
          result[<span class="hljs-number">1</span>] = resItems?.array || []
          <span class="hljs-keyword">return</span> result
        })

        <span class="hljs-comment">// \u590D\u539F\u4F4D\u7F6E</span>
        ref.current?.updateChooseValue(<span class="hljs-number">0</span>, chooseData[<span class="hljs-number">0</span>])
        ref.current?.updateChooseValue(<span class="hljs-number">1</span>, chooseData[<span class="hljs-number">1</span>])
      }
    }, <span class="hljs-number">100</span>)
  }

  <span class="hljs-keyword">const</span> updateChooseValueCustmer = <span class="hljs-function">(<span class="hljs-params">index: number, resValue: IResValue, cacheValueData: any[]</span>) =&gt;</span> {
    <span class="hljs-comment">// \u672Cdemo\u4E3A\u4E8C\u7EA7\u8054\u52A8\uFF0C\u6240\u4EE5\u9650\u5236\u53EA\u6709\u9996\u5217\u53D8\u52A8\u7684\u65F6\u5019\u89E6\u53D1\u4E8B\u4EF6</span>
    <span class="hljs-keyword">if</span> (index === <span class="hljs-number">0</span>) {
      <span class="hljs-comment">//\u6B64\u5904\u6A21\u62DF\u67E5\u8BE2API\uFF0C\u5982\u679C\u6570\u636E\u7F13\u5B58\u4E86\u4E0D\u9700\u8981\u518D\u91CD\u65B0\u8BF7\u6C42</span>
      <span class="hljs-keyword">let</span> { label, value } = resValue
      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        <span class="hljs-keyword">var</span> resItems = APIData.find(<span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> item.label == label)
        <span class="hljs-keyword">if</span> (resItems &amp;&amp; resItems.array.length) {
          <span class="hljs-keyword">let</span> cityData: any[] = []
          setCustmerCityData(<span class="hljs-function">(<span class="hljs-params">data</span>) =&gt;</span> {
            <span class="hljs-keyword">const</span> result = [...data]
            result[<span class="hljs-number">1</span>] = resItems?.array || []
            cityData = [...result]
            <span class="hljs-keyword">return</span> result
          })
          <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
            <span class="hljs-comment">// \u66F4\u65B0\u7B2C\u4E8C\u5217\u4F4D\u7F6E</span>
            pickerRef3.current?.updateChooseValue(index + <span class="hljs-number">1</span>, cityData[<span class="hljs-number">1</span>]?.[<span class="hljs-number">0</span>], cacheValueData)
          }, <span class="hljs-number">200</span>)
        }
      }, <span class="hljs-number">100</span>)
    }
  }
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>isVisible</td><td>\u662F\u5426\u53EF\u89C1</td><td>Boolean</td><td>false</td></tr><tr><td>title</td><td>\u8BBE\u7F6E\u6807\u9898</td><td>String</td><td>null</td></tr><tr><td>listData</td><td>\u5217\u8868\u6570\u636E</td><td>Array</td><td>[]</td></tr><tr><td>defaultValueData</td><td>\u9ED8\u8BA4\u9009\u4E2D</td><td>Array</td><td>[]</td></tr></tbody></table><h2>Events</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>onConfirm</td><td>\u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u65F6\u5019\u56DE\u8C03</td><td>\u8FD4\u56DE\u9009\u4E2D\u503C</td></tr><tr><td>onChoose</td><td>\u6BCF\u4E00\u5217\u503C\u53D8\u66F4\u65F6\u8C03\u7528</td><td>\u4F9D\u6B21\u8FD4\u56DEthis\u3001\u6539\u53D8\u7684\u5217\u6570\uFF0C\u6539\u53D8\u503C\uFF0C\u5F53\u524D\u9009\u4E2D\u503C</td></tr><tr><td>onCloseUpdate</td><td>\u8054\u52A8\u65F6\uFF0C\u5173\u95ED\u65F6\u56DE\u8C03</td><td>\u4F9D\u6B21\u8FD4\u56DEthis\u3001\u5F53\u524D\u9009\u4E2D\u503C</td></tr><tr><td>onClose</td><td>\u5173\u95ED\u65F6\u89E6\u53D1</td><td>-</td></tr></tbody></table>`,18),e=[p],u={setup(c,{expose:s}){return s({frontmatter:{}}),(h,j)=>(n(),a("div",t,e))}};export{u as default};
