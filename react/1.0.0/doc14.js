import{e as t,o as a,y as n}from"./vendor.js";const l={class:"markdown-body"},e=n(`<h1>FixedNav \u60AC\u6D6E\u5BFC\u822A</h1><h3>\u4ECB\u7ECD</h3><p>\u60AC\u6D6E\u6536\u9F50\u4F53\u9A8C\u4EA4\u4E92\uFF0C\u7528\u4E8E\u5FEB\u6377\u5BFC\u822A</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { FixedNav } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-react&#39;</span>;
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-tsx">&lt;FixedNav
  navList={navList}
  activeText=<span class="hljs-string">&quot;\u57FA\u7840\u7528\u6CD5&quot;</span>
  overlay={<span class="hljs-literal">true</span>}
  position={{ <span class="hljs-attr">top</span>: <span class="hljs-string">&#39;70px&#39;</span> }}
  change={change}
  visible={visible}
  selected={selected}
&gt;
</code></pre><pre><code class="language-tsx"><span class="hljs-keyword">const</span> navList = [
  {
    <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,
    <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u9996\u9875&#39;</span>,
    <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png&#39;</span>
  },
  {
    <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,
    <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5206\u7C7B&#39;</span>,
    <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png&#39;</span>
  },
  {
    <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>,
    <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u8D2D\u7269\u8F66&#39;</span>,
    <span class="hljs-attr">num</span>: <span class="hljs-number">2</span>,
    <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png&#39;</span>
  },
  {
    <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>,
    <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6211\u7684&#39;</span>,
    <span class="hljs-attr">icon</span>: <span class="hljs-string">&#39;https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png&#39;</span>
  }
];
<span class="hljs-keyword">const</span> [visible, setVisible] = useState(<span class="hljs-literal">false</span>);
<span class="hljs-keyword">const</span> change = <span class="hljs-function">(<span class="hljs-params">value: <span class="hljs-built_in">boolean</span></span>) =&gt;</span> {
  setVisible(value);
};
<span class="hljs-keyword">const</span> selected = <span class="hljs-function">(<span class="hljs-params">item: <span class="hljs-built_in">any</span>, event: MouseEvent</span>) =&gt;</span> {
  <span class="hljs-built_in">console</span>.log(item, event);
};
</code></pre><h3>\u5DE6\u4FA7\u6548\u679C</h3><pre><code class="language-tsx">&lt;FixedNav
  navList={navList}
  <span class="hljs-keyword">type</span>={<span class="hljs-string">&quot;left&quot;</span>}
  position={{ <span class="hljs-attr">top</span>: <span class="hljs-string">&#39;140px&#39;</span> }}
  visible={visible}
  activeText={<span class="hljs-string">&quot;\u5DE6\u4FA7\u6536\u8D77&quot;</span>}
  unActiveText={<span class="hljs-string">&quot;\u5DE6\u4FA7\u5C55\u5F00&quot;</span>}
  change={change}
  selected={selected}
/&gt;
</code></pre><h3>\u53D6\u6D88\u80CC\u666F\u906E\u7F69</h3><pre><code class="language-tsx">&lt;FixedNav
  navList={navList}
  position={{ <span class="hljs-attr">top</span>: <span class="hljs-string">&#39;210px&#39;</span> }}
  overlay={<span class="hljs-literal">false</span>}
  visible={visible}
  change={change}
  selected={selected}
/&gt;
</code></pre><h3>\u81EA\u5B9A\u4E49\u4F7F\u7528</h3><pre><code class="language-tsx">&lt;FixedNav
  position={{ <span class="hljs-attr">top</span>: <span class="hljs-string">&#39;280px&#39;</span> }}
  <span class="hljs-keyword">type</span>={<span class="hljs-string">&quot;left&quot;</span>}
  visible={visible}
  change={change}
  selected={selected}
  slotList={
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">ul</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;nut-fixednav__list&quot;</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">{</span>&quot;<span class="hljs-attr">list</span>&quot;}&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;nut-fixednav__list-item&quot;</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;nut-fixednav__list-item&quot;</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;nut-fixednav__list-item&quot;</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;nut-fixednav__list-item&quot;</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;nut-fixednav__list-item&quot;</span>&gt;</span>5<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span></span>
  }
  slotBtn={
    <span class="xml"><span class="hljs-tag">&lt;&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;retweet&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#fff&quot;</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">Icon</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;text&quot;</span>&gt;</span>{ visible ? &#39;\u81EA\u5B9A\u4E49\u5F00&#39; : &#39;\u81EA\u5B9A\u4E49\u5173&#39; }<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  }
/&gt;
</code></pre><h3>\u652F\u6301\u62D6\u62FD</h3><pre><code class="language-tsx"><span class="hljs-comment">// \u914D\u5408 Drag \u652F\u6301\u62D6\u62FD \uFF0C\u5C0F\u7A0B\u5E8F\u6682\u4E0D\u652F\u6301</span>
&lt;Drag direction={<span class="hljs-string">&quot;y&quot;</span>} style={{ <span class="hljs-attr">right</span>: <span class="hljs-string">&#39;0px&#39;</span>, <span class="hljs-attr">bottom</span>: <span class="hljs-string">&#39;240px&#39;</span> }}&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">FixedNav</span>
    <span class="hljs-attr">navList</span>=<span class="hljs-string">{navList}</span>
    <span class="hljs-attr">unActiveText</span>=<span class="hljs-string">&quot;\u652F\u6301\u62D6\u62FD&quot;</span>
    <span class="hljs-attr">visible</span>=<span class="hljs-string">{visible}</span> 
    <span class="hljs-attr">change</span>=<span class="hljs-string">{change}</span>
    <span class="hljs-attr">selected</span>=<span class="hljs-string">{selected}</span> /&gt;</span></span>
&lt;/Drag&gt;
</code></pre><h3>Prop</h3><table><thead><tr><th style="text-align:left;">\u5B57\u6BB5</th><th style="text-align:left;">\u8BF4\u660E</th><th style="text-align:left;">\u7C7B\u578B</th><th style="text-align:left;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td style="text-align:left;">visible</td><td style="text-align:left;">\u662F\u5426\u6253\u5F00</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">false</td></tr><tr><td style="text-align:left;">navList</td><td style="text-align:left;">\u60AC\u6D6E\u5217\u8868\u5185\u5BB9\u6570\u636E</td><td style="text-align:left;">Array</td><td style="text-align:left;">[]</td></tr><tr><td style="text-align:left;">activeText</td><td style="text-align:left;">\u6536\u8D77\u5217\u8868\u6309\u94AE\u6587\u6848</td><td style="text-align:left;">String</td><td style="text-align:left;">\u6536\u8D77\u5BFC\u822A</td></tr><tr><td style="text-align:left;">unActiveText</td><td style="text-align:left;">\u5C55\u5F00\u5217\u8868\u6309\u94AE\u6587\u6848</td><td style="text-align:left;">String</td><td style="text-align:left;">\u5FEB\u901F\u5BFC\u822A</td></tr><tr><td style="text-align:left;">type</td><td style="text-align:left;">\u5BFC\u822A\u65B9\u5411,\u53EF\u9009\u503C left right</td><td style="text-align:left;">String</td><td style="text-align:left;">right</td></tr><tr><td style="text-align:left;">overlay</td><td style="text-align:left;">\u5C55\u5F00\u65F6\u662F\u5426\u663E\u793A\u906E\u7F69</td><td style="text-align:left;">Boolean</td><td style="text-align:left;">true</td></tr><tr><td style="text-align:left;">position</td><td style="text-align:left;">fixed \u5782\u76F4\u4F4D\u7F6E</td><td style="text-align:left;">Object</td><td style="text-align:left;">{top: \u2018auto\u2019,bottom: \u2018auto\u2019}</td></tr><tr><td style="text-align:left;">slotList</td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u5C55\u5F00\u5217\u8868\u5185\u5BB9</td><td style="text-align:left;">HTMLElement</td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;">slotBtn</td><td style="text-align:left;">\u81EA\u5B9A\u4E49\u6309\u94AE</td><td style="text-align:left;">HTMLElement</td><td style="text-align:left;">-</td></tr></tbody></table><h3>Event</h3><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5C55\u5F00\u6536\u8D77\u6309\u94AE\u56DE\u8C03</td><td>{value:boolean}</td></tr><tr><td>selected</td><td>\u9009\u62E9\u4E4B\u540E\u89E6\u53D1</td><td>{item:item, event:MouseEvent}</td></tr></tbody></table>`,20),p=[e],d={setup(c,{expose:s}){return s({frontmatter:{}}),(h,g)=>(a(),t("div",l,p))}};export{d as default};
