import{e as a,o as n,y as t}from"./vendor.js";const l={class:"markdown-body"},p=t(`<h1>ActionSheet \u52A8\u4F5C\u9762\u677F</h1><h3>\u4ECB\u7ECD</h3><p>\u4ECE\u5E95\u90E8\u5F39\u51FA\u7684\u52A8\u4F5C\u83DC\u5355\u9762\u677F\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { ActionSheet } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-react&#39;</span>;
</code></pre><h2>\u4EE3\u7801\u793A\u4F8B</h2><h3>\u57FA\u672C\u7528\u6CD5</h3><p>\u9ED8\u8BA4</p><pre><code class="language-tsx">&lt;Cell isLink={<span class="hljs-literal">true</span>} onClick={<span class="hljs-function">() =&gt;</span> setIsVisible1(!isVisible1)}&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>\u57FA\u7840\u7528\u6CD5<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span></span>
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;selected-option&quot;</span>&gt;</span>{val1}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/Cell&gt;
        
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">ActionSheet</span>
  <span class="hljs-attr">visible</span>=<span class="hljs-string">{isVisible1}</span>
  <span class="hljs-attr">menuItems</span>=<span class="hljs-string">{menuItemsOne}</span>
  <span class="hljs-attr">choose</span>=<span class="hljs-string">{chooseItem}</span>
  <span class="hljs-attr">cancel</span>=<span class="hljs-string">{()</span> =&gt;</span> setIsVisible1(false)}
&gt;<span class="hljs-tag">&lt;/<span class="hljs-name">ActionSheet</span>&gt;</span></span>\xE5
</code></pre><h3>\u5C55\u793A\u53D6\u6D88\u6309\u94AE</h3><pre><code class="language-tsx">&lt;Cell isLink={<span class="hljs-literal">true</span>} onClick={<span class="hljs-function">() =&gt;</span> setIsVisible2(!isVisible2)}&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>\u5C55\u793A\u53D6\u6D88\u6309\u94AE<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span></span>
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;selected-option&quot;</span>&gt;</span>{val2}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/Cell&gt;
        
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">ActionSheet</span>
  <span class="hljs-attr">visible</span>=<span class="hljs-string">{isVisible2}</span>
  <span class="hljs-attr">cancelTxt</span>=<span class="hljs-string">&quot;\u53D6\u6D88&quot;</span>
  <span class="hljs-attr">menuItems</span>=<span class="hljs-string">{menuItemsOne}</span>
  <span class="hljs-attr">choose</span>=<span class="hljs-string">{chooseItemTwo}</span>
  <span class="hljs-attr">cancel</span>=<span class="hljs-string">{()</span> =&gt;</span> setIsVisible2(false)}
&gt;<span class="hljs-tag">&lt;/<span class="hljs-name">ActionSheet</span>&gt;</span></span>
</code></pre><h3>\u5C55\u793A\u63CF\u8FF0\u4FE1\u606F</h3><pre><code class="language-tsx">&lt;Cell isLink={<span class="hljs-literal">true</span>} onClick={<span class="hljs-function">() =&gt;</span> setIsVisible3(!isVisible3)}&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>\u5C55\u793A\u63CF\u8FF0\u4FE1\u606F<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span></span>
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;selected-option&quot;</span>&gt;</span>{val3}<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/Cell&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">ActionSheet</span>
  <span class="hljs-attr">visible</span>=<span class="hljs-string">{isVisible3}</span>
  <span class="hljs-attr">description</span>=<span class="hljs-string">&quot;\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u4FE1\u606F&quot;</span>
  <span class="hljs-attr">menuItems</span>=<span class="hljs-string">{menuItemsTwo}</span>
  <span class="hljs-attr">choose</span>=<span class="hljs-string">{chooseItemThree}</span>
  <span class="hljs-attr">cancelTxt</span>=<span class="hljs-string">&quot;\u53D6\u6D88&quot;</span>
  <span class="hljs-attr">cancel</span>=<span class="hljs-string">{()</span> =&gt;</span> setIsVisible3(false)}
&gt;<span class="hljs-tag">&lt;/<span class="hljs-name">ActionSheet</span>&gt;</span></span>
</code></pre><h3>\u9009\u9879\u72B6\u6001</h3><pre><code class="language-tsx">&lt;Cell isLink={<span class="hljs-literal">true</span>} onClick={<span class="hljs-function">() =&gt;</span> setIsVisible4(!isVisible4)}&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">label</span>&gt;</span>\u9009\u9879\u72B6\u6001<span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span></span>
&lt;/Cell&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">ActionSheet</span>
  <span class="hljs-attr">visible</span>=<span class="hljs-string">{isVisible4}</span>
  <span class="hljs-attr">cancelTxt</span>=<span class="hljs-string">&quot;\u53D6\u6D88&quot;</span>
  <span class="hljs-attr">cancel</span>=<span class="hljs-string">{()</span> =&gt;</span> setIsVisible4(false)}
  menuItems={menuItemsThree}
  chooseTagValue=&quot;\u7740\u8272\u9009\u9879&quot;
  choose={() =&gt; {
    setIsVisible4(false)
  }}
&gt;<span class="hljs-tag">&lt;/<span class="hljs-name">ActionSheet</span>&gt;</span></span>
</code></pre><pre><code class="language-javascript">  <span class="hljs-keyword">const</span> [isVisible1, setIsVisible1] = useState(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> [isVisible2, setIsVisible2] = useState(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> [isVisible3, setIsVisible3] = useState(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> [isVisible4, setIsVisible4] = useState(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> [val1, setVal1] = useState(<span class="hljs-string">&#39;&#39;</span>)
  <span class="hljs-keyword">const</span> [val2, setVal2] = useState(<span class="hljs-string">&#39;&#39;</span>)
  <span class="hljs-keyword">const</span> [val3, setVal3] = useState(<span class="hljs-string">&#39;&#39;</span>)
  <span class="hljs-keyword">const</span> menuItemsOne: ItemType&lt;string&gt;[] = [
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E00&#39;</span>,
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E8C&#39;</span>,
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E09&#39;</span>,
    },
  ]
  <span class="hljs-keyword">const</span> menuItemsTwo: ItemType&lt;string&gt;[] = [
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E00&#39;</span>,
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E8C&#39;</span>,
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E09&#39;</span>,
      <span class="hljs-attr">subname</span>: <span class="hljs-string">&#39;\u63CF\u8FF0\u4FE1\u606F&#39;</span>,
    },
  ]
  <span class="hljs-keyword">const</span> menuItemsThree: ItemType&lt;string | boolean&gt;[] = [
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u7740\u8272\u9009\u9879&#39;</span>,
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u7981\u7528\u9009\u9879&#39;</span>,
      <span class="hljs-attr">disable</span>: <span class="hljs-literal">true</span>,
    },
  ]

  <span class="hljs-keyword">const</span> chooseItem = <span class="hljs-function">(<span class="hljs-params">itemParams: any</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(itemParams.name, <span class="hljs-string">&#39;itemParams&#39;</span>)
    setVal1(itemParams.name)
    setIsVisible1(<span class="hljs-literal">false</span>)
  }

  <span class="hljs-keyword">const</span> chooseItemTwo = <span class="hljs-function">(<span class="hljs-params">itemParams: Item</span>) =&gt;</span> {
    setVal2(itemParams.name)
    setIsVisible2(<span class="hljs-literal">false</span>)
  }
  <span class="hljs-keyword">const</span> chooseItemThree = <span class="hljs-function">(<span class="hljs-params">itemParams: Item</span>) =&gt;</span> {
    setVal3(itemParams.name)
    setIsVisible3(<span class="hljs-literal">false</span>)
  }

</code></pre><h2>Prop</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>cancelTxt</td><td>\u53D6\u6D88\u6587\u6848</td><td>String</td><td>\u2018\u53D6\u6D88\u2019</td></tr><tr><td>menuItems</td><td>\u5217\u8868\u9879</td><td>Array</td><td>[ ]</td></tr><tr><td>optionTag</td><td>\u8BBE\u7F6E\u5217\u8868\u9879\u5C55\u793A\u4F7F\u7528\u53C2\u6570</td><td>String</td><td>\u2018name\u2019</td></tr><tr><td>visible</td><td>\u906E\u7F69\u5C42\u53EF\u89C1</td><td>Boolean</td><td>false</td></tr><tr><td>optionSubTag</td><td>\u8BBE\u7F6E\u5217\u8868\u9879\u63CF\u8FF0\u5C55\u793A\u4F7F\u7528\u53C2\u6570</td><td>String</td><td>\u2018subname\u2019</td></tr><tr><td>chooseTagValue</td><td>\u8BBE\u7F6E\u9009\u4E2D\u9879\u7684\u503C\uFF0C\u548C\u2019option-tag\u2019\u7684\u503C\u5BF9\u5E94</td><td>String</td><td>\u2018\u2019</td></tr><tr><td>title</td><td>\u8BBE\u7F6E\u5217\u8868\u9879\u6807\u9898</td><td>String</td><td>\u2018\u2019</td></tr><tr><td>description</td><td>\u8BBE\u7F6E\u5217\u8868\u9879\u526F\u6807\u9898/\u63CF\u8FF0</td><td>String</td><td>\u2018\u2019</td></tr><tr><td>color</td><td>\u9AD8\u4EAE\u989C\u8272</td><td>String</td><td>\u2018#ee0a24\u2019</td></tr></tbody></table><h2>Event</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>choose</td><td>\u9009\u62E9\u4E4B\u540E\u89E6\u53D1</td><td>\u9009\u4E2D\u5217\u8868\u9879item, \u9009\u4E2D\u7684\u7D22\u5F15\u503Cindex</td></tr><tr><td>cancel</td><td>\u70B9\u51FB\u53D6\u6D88\u6587\u6848\u65F6\u89E6\u53D1</td><td>\u65E0</td></tr></tbody></table>`,20),e=[p],o={setup(c,{expose:s}){return s({frontmatter:{}}),(i,r)=>(n(),a("div",l,e))}};export{o as default};
