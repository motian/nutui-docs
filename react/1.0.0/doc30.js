import{e as a,o as n,y as t}from"./vendor.js";const l={class:"markdown-body"},p=t(`<h1>Popover \u6C14\u6CE1\u5F39\u51FA\u6846</h1><h3>\u4ECB\u7ECD</h3><p>\u70B9\u51FB\u6216\u5728\u5143\u7D20\u4E0A\u60AC\u505C\u9F20\u6807\uFF0C\u5F39\u51FA\u6C14\u6CE1\u5361\u7247\u6D6E\u5C42\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Popover } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-react&#39;</span>;
</code></pre><h3>\u4EE3\u7801\u5B9E\u4F8B</h3><h3>\u57FA\u672C\u7528\u6CD5</h3><p>Popover \u652F\u6301\u660E\u6717\u548C\u6697\u9ED1\u4E24\u79CD\u98CE\u683C\uFF0C\u9ED8\u8BA4\u4E3A\u660E\u6717\u98CE\u683C\uFF0C\u5C06 theme \u5C5E\u6027\u8BBE\u7F6E\u4E3A dark \u53EF\u5207\u6362\u4E3A\u6697\u9ED1\u98CE\u683C\u3002</p><pre><code class="language-tsx">&lt;Popover 
  visible={lightTheme} 
  onClick={<span class="hljs-function">()=&gt;</span>{lightTheme ? setLightTheme(<span class="hljs-literal">false</span>) : setLightTheme(<span class="hljs-literal">true</span>)}} 
  list={itemList}&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>\u660E\u6717\u98CE\u683C<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>
&lt;/Popover&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Popover</span> 
  <span class="hljs-attr">visible</span>=<span class="hljs-string">{darkTheme}</span> 
  <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;dark&quot;</span> 
  <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span>=&gt;</span>{darkTheme ? setDarkTheme(false) : setDarkTheme(true)}} 
  list={itemList}&gt;
  <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>\u6697\u9ED1\u98CE\u683C<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Popover</span>&gt;</span></span>
</code></pre><pre><code class="language-javascript">
  <span class="hljs-keyword">const</span> [lightTheme, setLightTheme] = useState(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> [darkTheme, setDarkTheme] = useState(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> itemList = [
    {<span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E00&#39;</span>},
    {<span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E8C&#39;</span>},
    {<span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E09&#39;</span>}];

</code></pre><h3>\u9009\u9879\u914D\u7F6E</h3><pre><code class="language-tsx">&lt;Popover
  visible={showIcon} 
  theme=<span class="hljs-string">&quot;dark&quot;</span> 
  onClick={<span class="hljs-function">()=&gt;</span>{showIcon ? setShowIcon(<span class="hljs-literal">false</span>) : setShowIcon(<span class="hljs-literal">true</span>)}} 
  list={iconItemList}&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>\u5C55\u793A\u56FE\u6807<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>
&lt;/Popover&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Popover</span> 
  <span class="hljs-attr">visible</span>=<span class="hljs-string">{disableAction}</span> 
  <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span>=&gt;</span>{disableAction ? setDisableAction(false) : setDisableAction(true)}} 
  list={itemListDisabled}&gt;
  <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>\u7981\u7528\u9009\u9879<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Popover</span>&gt;</span></span>
</code></pre><pre><code class="language-javascript">
  <span class="hljs-keyword">const</span> [showIcon, setShowIcon] = useState(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> [disableAction, setDisableAction] = useState(<span class="hljs-literal">false</span>)
 <span class="hljs-keyword">const</span> iconItemList= [
    {<span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E00&#39;</span>,<span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;my2&#39;</span>},
    {<span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E8C&#39;</span>,<span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;cart2&#39;</span>},
    {<span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E09&#39;</span>,<span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;location2&#39;</span>}
  ];
  <span class="hljs-keyword">const</span> itemListDisabled=[
    {<span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E00&#39;</span>,<span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>},
    {<span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E8C&#39;</span>, <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>},
    {<span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E09&#39;</span>}
  ];

</code></pre><h3>\u81EA\u5B9A\u4E49\u5185\u5BB9</h3><pre><code class="language-tsx"> &lt;Popover 
  visible={customized} 
  onClick={<span class="hljs-function">()=&gt;</span>{customized ? setCustomized(<span class="hljs-literal">false</span>) : setCustomized(<span class="hljs-literal">true</span>)}}&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>\u81EA\u5B9A\u4E49\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>
  {
    customized ? 
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;self-content&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{selfContentStyle}</span>&gt;</span>
    {
      selfContent.map((item: any)=&gt;{
        return <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;self-content-item&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{selfContentItem}</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{item.name}</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">Icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">{item.name}</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;15&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Icon</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;self-content-desc&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">{selfContentDesc}</span>&gt;</span>{ item.desc }<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      })
    }
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span> : <span class="hljs-string">&#39;&#39;</span>
  }
&lt;/Popover&gt;
</code></pre><pre><code class="language-javascript">
  <span class="hljs-keyword">const</span> [customized, setCustomized] = useState(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> selfContent= [
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;service&#39;</span>,
      <span class="hljs-attr">desc</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E00&#39;</span>
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;notice&#39;</span>,
      <span class="hljs-attr">desc</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E8C&#39;</span>
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;location&#39;</span>,
      <span class="hljs-attr">desc</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E09&#39;</span>
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;category&#39;</span>,
      <span class="hljs-attr">desc</span>: <span class="hljs-string">&#39;\u9009\u9879\u56DB&#39;</span>
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;scan2&#39;</span>,
      <span class="hljs-attr">desc</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E94&#39;</span>
    },
    {
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;message&#39;</span>,
      <span class="hljs-attr">desc</span>: <span class="hljs-string">&#39;\u9009\u9879\u516D&#39;</span>
    }
  ];

</code></pre><h3>\u4F4D\u7F6E\u81EA\u5B9A\u4E49</h3><pre><code class="language-tsx">&lt;Popover  
  visible={topLocation} 
  location=<span class="hljs-string">&quot;top&quot;</span> 
  theme=<span class="hljs-string">&quot;dark&quot;</span> 
  onClick={<span class="hljs-function">()=&gt;</span>{topLocation ? setTopLocation(<span class="hljs-literal">false</span>) : setTopLocation(<span class="hljs-literal">true</span>)}} 
  list={iconItemList}&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>\u5411\u4E0A\u5F39\u51FA<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span></span>
&lt;/Popover&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Popover</span> 
  <span class="hljs-attr">visible</span>=<span class="hljs-string">{rightLocation}</span> 
  <span class="hljs-attr">location</span>=<span class="hljs-string">&quot;right&quot;</span> 
  <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;dark&quot;</span> 
  <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span>=&gt;</span>{rightLocation ? setRightLocation(false) : setRightLocation(true)}} 
  list={iconItemList}&gt;
  <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>\u5411\u53F3\u5F39\u51FA<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Popover</span>&gt;</span></span>
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Popover</span>  
  <span class="hljs-attr">visible</span>=<span class="hljs-string">{leftLocation}</span> 
  <span class="hljs-attr">location</span>=<span class="hljs-string">&quot;left&quot;</span> 
  <span class="hljs-attr">theme</span>=<span class="hljs-string">&quot;dark&quot;</span> 
  <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span>=&gt;</span>{leftLocation ? setLeftLocation(false) : setLeftLocation(true)}} 
  list={iconItemList}&gt;
  <span class="hljs-tag">&lt;<span class="hljs-name">Button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span> <span class="hljs-attr">shape</span>=<span class="hljs-string">&quot;square&quot;</span>&gt;</span>\u5411\u5DE6\u5F39\u51FA<span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Popover</span>&gt;</span></span>
</code></pre><pre><code class="language-javascript">
  <span class="hljs-keyword">const</span> [topLocation, setTopLocation] = useState(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> [rightLocation, setRightLocation] = useState(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> [leftLocation, setLeftLocation] = useState(<span class="hljs-literal">false</span>)
  <span class="hljs-keyword">const</span> iconItemList= [
    {<span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E00&#39;</span>,<span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;my2&#39;</span>},
    {<span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E8C&#39;</span>,<span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;cart2&#39;</span>},
    {<span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u9009\u9879\u4E09&#39;</span>,<span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;location2&#39;</span>}
  ];

</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>list</td><td>\u9009\u9879\u5217\u8868</td><td>List[]</td><td>[]</td></tr><tr><td>visible</td><td>\u662F\u5426\u5C55\u793A\u6C14\u6CE1\u5F39\u51FA\u5C42</td><td>boolean</td><td>false</td></tr><tr><td>theme</td><td>\u4E3B\u9898\u98CE\u683C\uFF0C\u53EF\u9009\u503C\u4E3A dark</td><td>string</td><td><code>light</code></td></tr><tr><td>location</td><td>\u5F39\u51FA\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\u4E3A top,left,right</td><td>string</td><td><code>bottom</code></td></tr></tbody></table><h3>List \u6570\u636E\u7ED3\u6784</h3><p>List \u5C5E\u6027\u662F\u4E00\u4E2A\u7531\u5BF9\u8C61\u6784\u6210\u7684\u6570\u7EC4\uFF0C\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5BF9\u8C61\u914D\u7F6E\u4E00\u5217\uFF0C\u5BF9\u8C61\u53EF\u4EE5\u5305\u542B\u4EE5\u4E0B\u503C\uFF1A</p><table><thead><tr><th>\u952E\u540D</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>name</td><td>\u9009\u9879\u6587\u5B57</td><td>string</td><td>-</td></tr><tr><td>icon</td><td>nut-icon \u56FE\u6807\u540D\u79F0</td><td>string</td><td>-</td></tr><tr><td>disabled</td><td>\u662F\u5426\u4E3A\u7981\u7528\u72B6\u6001</td><td>boolean</td><td>false</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>onClick</td><td>\u6253\u5F00\uFF08\u5173\u95ED\uFF09\u83DC\u5355\u65F6\u89E6\u53D1</td></tr></tbody></table>`,27),e=[p],j={setup(c,{expose:s}){return s({frontmatter:{}}),(r,o)=>(n(),a("div",l,e))}};export{j as default};
