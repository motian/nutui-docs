import{e as a,o as n,y as t}from"./vendor.js";const l={class:"markdown-body"},p=t(`<h1>Address \u5730\u5740</h1><h3>\u4ECB\u7ECD</h3><p>\u5730\u5740\u9009\u62E9</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { Address } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-react&#39;</span>;
</code></pre><h2>\u4EE3\u7801\u793A\u4F8B</h2><h3>\u9009\u62E9\u81EA\u5B9A\u4E49\u5730\u5740</h3><pre><code class="language-tsx"><span class="hljs-keyword">const</span> [normal,setNormal] = useState(<span class="hljs-literal">false</span>)
<span class="hljs-keyword">const</span> [province, setProvince] = useState([
    { <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5317\u4EAC&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;B&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5E7F\u897F&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;G&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u6C5F\u897F&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;J&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u56DB\u5DDD&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;S&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">5</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u6D59\u6C5F&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;Z&#39;</span> },
])

<span class="hljs-keyword">const</span> [city, setCity] = useState([
    { <span class="hljs-attr">id</span>: <span class="hljs-number">7</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u671D\u9633\u533A&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;C&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">8</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5D07\u6587\u533A&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;C&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">9</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u660C\u5E73\u533A&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;C&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">6</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u77F3\u666F\u5C71\u533A&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;S&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u516B\u91CC\u5E84\u8857\u9053&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;B&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">9</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5317\u82D1&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;B&#39;</span> },
])

<span class="hljs-keyword">const</span> [country, setCountry] = useState([
    { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u516B\u91CC\u5E84\u8857\u9053&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;B&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">9</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5317\u82D1&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;B&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5E38\u8425\u4E61&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;C&#39;</span> },
])

<span class="hljs-keyword">const</span> onChange = <span class="hljs-function">(<span class="hljs-params">cal</span>) =&gt;</span> {
    <span class="hljs-keyword">const</span> name = address[cal.next]
    <span class="hljs-keyword">if</span> (name.length &lt; <span class="hljs-number">1</span>) {
      setNormal(<span class="hljs-literal">false</span>)
    }
}
<span class="hljs-keyword">const</span> close = <span class="hljs-function">(<span class="hljs-params">val</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(val)
    setNormal(<span class="hljs-literal">false</span>)
}
</code></pre><pre><code class="language-tsx">&lt;Address
    modelValue={normal}
    province={province}
    city={city}
    country={country}
    town={town}
    customAddressTitle=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A&quot;</span>
    onChange={onChange}
    close={close}
&gt;&lt;/Address&gt;
</code></pre><h3>\u9009\u62E9\u81EA\u5B9A\u4E49\u5730\u57402</h3><pre><code class="language-tsx"><span class="hljs-keyword">const</span> [normal2,setNormal2] = useState(<span class="hljs-literal">false</span>)
<span class="hljs-keyword">const</span> [province, setProvince] = useState([
    { <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5317\u4EAC&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;B&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5E7F\u897F&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;G&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u6C5F\u897F&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;J&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u56DB\u5DDD&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;S&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">5</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u6D59\u6C5F&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;Z&#39;</span> },
])

<span class="hljs-keyword">const</span> [city, setCity] = useState([
    { <span class="hljs-attr">id</span>: <span class="hljs-number">7</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u671D\u9633\u533A&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;C&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">8</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5D07\u6587\u533A&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;C&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">9</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u660C\u5E73\u533A&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;C&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">6</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u77F3\u666F\u5C71\u533A&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;S&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u516B\u91CC\u5E84\u8857\u9053&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;B&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">9</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5317\u82D1&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;B&#39;</span> },
])

<span class="hljs-keyword">const</span> [country, setCountry] = useState([
    { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u516B\u91CC\u5E84\u8857\u9053&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;B&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">9</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5317\u82D1&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;B&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5E38\u8425\u4E61&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;C&#39;</span> },
])

<span class="hljs-keyword">const</span> onChange = <span class="hljs-function">(<span class="hljs-params">cal</span>) =&gt;</span> {
    <span class="hljs-keyword">const</span> name = address[cal.next]
    <span class="hljs-keyword">if</span> (name.length &lt; <span class="hljs-number">1</span>) {
      setNormal2(<span class="hljs-literal">false</span>)
    }
}
<span class="hljs-keyword">const</span> close = <span class="hljs-function">(<span class="hljs-params">val</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(val)
    setNormal2(<span class="hljs-literal">false</span>)
}
</code></pre><pre><code class="language-tsx">&lt;Address
    modelValue={normal2}
    <span class="hljs-keyword">type</span>=<span class="hljs-string">&quot;custom2&quot;</span>
    province={province}
    city={city}
    country={country}
    town={town}
    height=<span class="hljs-string">&quot;270px&quot;</span>
    onChange={onChange}
    close={close}
    customAddressTitle=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A&quot;</span>
&gt;&lt;/Address&gt;
</code></pre><h3>\u9009\u62E9\u5DF2\u6709\u5730\u5740</h3><pre><code class="language-tsx"><span class="hljs-keyword">const</span> [exist,setExist] = useState(<span class="hljs-literal">false</span>)
<span class="hljs-keyword">const</span> [existAddress, setExistAddress] = useState([
    {
      <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,
      <span class="hljs-attr">addressDetail</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;\u6B21\u6E20\u9547&#39;</span>,
      <span class="hljs-attr">countyName</span>: <span class="hljs-string">&#39;\u901A\u5DDE\u533A&#39;</span>,
      <span class="hljs-attr">provinceName</span>: <span class="hljs-string">&#39;\u5317\u4EAC\u5E02&#39;</span>,
      <span class="hljs-attr">selectedAddress</span>: <span class="hljs-literal">true</span>,
      <span class="hljs-attr">townName</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u63A2\u63A2\u9C7C&#39;</span>,
      <span class="hljs-attr">phone</span>: <span class="hljs-string">&#39;182****1718&#39;</span>,
    },
    {
      <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,
      <span class="hljs-attr">addressDetail</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;\u9493\u9C7C\u5C9B\u5168\u533A&#39;</span>,
      <span class="hljs-attr">countyName</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">provinceName</span>: <span class="hljs-string">&#39;\u9493\u9C7C\u5C9B&#39;</span>,
      <span class="hljs-attr">selectedAddress</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">townName</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u63A2\u63A2\u9C7C&#39;</span>,
      <span class="hljs-attr">phone</span>: <span class="hljs-string">&#39;182****1718&#39;</span>,
    },
    {
      <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>,
      <span class="hljs-attr">addressDetail</span>: <span class="hljs-string">&#39;\u4EAC\u4E1C\u5927\u53A6&#39;</span>,
      <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;\u5927\u5174\u533A&#39;</span>,
      <span class="hljs-attr">countyName</span>: <span class="hljs-string">&#39;\u79D1\u521B\u5341\u4E00\u885718\u53F7\u9662&#39;</span>,
      <span class="hljs-attr">provinceName</span>: <span class="hljs-string">&#39;\u5317\u4EAC\u5E02&#39;</span>,
      <span class="hljs-attr">selectedAddress</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">townName</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u63A2\u63A2\u9C7C&#39;</span>,
      <span class="hljs-attr">phone</span>: <span class="hljs-string">&#39;182****1718&#39;</span>,
    },
  ])

<span class="hljs-keyword">const</span> selected = <span class="hljs-function">(<span class="hljs-params">prevExistAdd: AddressList, nowExistAdd: RegionData, arr: AddressList[]</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(prevExistAdd,nowExistAdd)
}

<span class="hljs-keyword">const</span> onChange = <span class="hljs-function">(<span class="hljs-params">cal</span>) =&gt;</span> {
    <span class="hljs-keyword">const</span> name = address[cal.next]
    <span class="hljs-keyword">if</span> (name.length &lt; <span class="hljs-number">1</span>) {
      setExist(<span class="hljs-literal">false</span>)
    }
}
<span class="hljs-keyword">const</span> close = <span class="hljs-function">(<span class="hljs-params">val</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(val)
    setExist(<span class="hljs-literal">false</span>)
}
</code></pre><pre><code class="language-tsx">&lt;Address
    modelValue={exist}
    <span class="hljs-keyword">type</span>=<span class="hljs-string">&quot;exist&quot;</span>
    existAddress={existAddress}
    onChange={onChange}
    close={close}
    isShowCustomAddress={<span class="hljs-literal">false</span>}
    selected={selected}
    existAddressTitle=<span class="hljs-string">&quot;\u914D\u9001\u81F3&quot;</span>
&gt;&lt;/Address&gt;
</code></pre><h3>\u81EA\u5B9A\u4E49\u56FE\u6807</h3><pre><code class="language-tsx"><span class="hljs-keyword">const</span> [customImg,setCustomImg] = useState(<span class="hljs-literal">false</span>)
<span class="hljs-keyword">const</span> [icon, setIcon] = useState({
    <span class="hljs-attr">selectedIcon</span>: <span class="hljs-string">&#39;heart-fill&#39;</span>,
    <span class="hljs-attr">defaultIcon</span>: <span class="hljs-string">&#39;heart1&#39;</span>,
    <span class="hljs-attr">closeBtnIcon</span>: <span class="hljs-string">&#39;close&#39;</span>,
    <span class="hljs-attr">backBtnIcon</span>: <span class="hljs-string">&#39;left&#39;</span>,
})

<span class="hljs-keyword">const</span> [existAddress, setExistAddress] = useState([
    {
      <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,
      <span class="hljs-attr">addressDetail</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;\u6B21\u6E20\u9547&#39;</span>,
      <span class="hljs-attr">countyName</span>: <span class="hljs-string">&#39;\u901A\u5DDE\u533A&#39;</span>,
      <span class="hljs-attr">provinceName</span>: <span class="hljs-string">&#39;\u5317\u4EAC\u5E02&#39;</span>,
      <span class="hljs-attr">selectedAddress</span>: <span class="hljs-literal">true</span>,
      <span class="hljs-attr">townName</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u63A2\u63A2\u9C7C&#39;</span>,
      <span class="hljs-attr">phone</span>: <span class="hljs-string">&#39;182****1718&#39;</span>,
    },
    {
      <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,
      <span class="hljs-attr">addressDetail</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;\u9493\u9C7C\u5C9B\u5168\u533A&#39;</span>,
      <span class="hljs-attr">countyName</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">provinceName</span>: <span class="hljs-string">&#39;\u9493\u9C7C\u5C9B&#39;</span>,
      <span class="hljs-attr">selectedAddress</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">townName</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u63A2\u63A2\u9C7C&#39;</span>,
      <span class="hljs-attr">phone</span>: <span class="hljs-string">&#39;182****1718&#39;</span>,
    },
    {
      <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>,
      <span class="hljs-attr">addressDetail</span>: <span class="hljs-string">&#39;\u4EAC\u4E1C\u5927\u53A6&#39;</span>,
      <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;\u5927\u5174\u533A&#39;</span>,
      <span class="hljs-attr">countyName</span>: <span class="hljs-string">&#39;\u79D1\u521B\u5341\u4E00\u885718\u53F7\u9662&#39;</span>,
      <span class="hljs-attr">provinceName</span>: <span class="hljs-string">&#39;\u5317\u4EAC\u5E02&#39;</span>,
      <span class="hljs-attr">selectedAddress</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">townName</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u63A2\u63A2\u9C7C&#39;</span>,
      <span class="hljs-attr">phone</span>: <span class="hljs-string">&#39;182****1718&#39;</span>,
    },
  ])

<span class="hljs-keyword">const</span> selected = <span class="hljs-function">(<span class="hljs-params">prevExistAdd: AddressList, nowExistAdd: RegionData, arr: AddressList[]</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(prevExistAdd,nowExistAdd)
}

<span class="hljs-keyword">const</span> onChange = <span class="hljs-function">(<span class="hljs-params">cal</span>) =&gt;</span> {
    <span class="hljs-keyword">const</span> name = address[cal.next]
    <span class="hljs-keyword">if</span> (name.length &lt; <span class="hljs-number">1</span>) {
      setCustomImg(<span class="hljs-literal">false</span>)
    }
}
<span class="hljs-keyword">const</span> close = <span class="hljs-function">(<span class="hljs-params">val</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(val)
    setCustomImg(<span class="hljs-literal">false</span>)
}
</code></pre><pre><code class="language-tsx">&lt;Address
    modelValue={customImg}
    <span class="hljs-keyword">type</span>=<span class="hljs-string">&quot;exist&quot;</span>
    existAddress={existAddress}
    onChange={onChange}
    close={close}
    isShowCustomAddress={<span class="hljs-literal">false</span>}
    selected={selected}
    defaultIcon={icon.defaultIcon}
    selectedIcon={icon.selectedIcon}
    closeBtnIcon={icon.closeBtnIcon}
&gt;&lt;/Address&gt;
</code></pre><h3>\u81EA\u5B9A\u4E49\u5730\u5740\u4E0E\u5DF2\u6709\u5730\u5740\u5207\u6362</h3><pre><code class="language-tsx"><span class="hljs-keyword">const</span> [other,setOther] = useState(<span class="hljs-literal">false</span>)
<span class="hljs-keyword">const</span> [icon, setIcon] = useState({
    <span class="hljs-attr">selectedIcon</span>: <span class="hljs-string">&#39;heart-fill&#39;</span>,
    <span class="hljs-attr">defaultIcon</span>: <span class="hljs-string">&#39;heart1&#39;</span>,
    <span class="hljs-attr">closeBtnIcon</span>: <span class="hljs-string">&#39;close&#39;</span>,
    <span class="hljs-attr">backBtnIcon</span>: <span class="hljs-string">&#39;left&#39;</span>,
})
<span class="hljs-keyword">const</span> [province, setProvince] = useState([
    { <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5317\u4EAC&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;B&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5E7F\u897F&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;G&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u6C5F\u897F&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;J&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u56DB\u5DDD&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;S&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">5</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u6D59\u6C5F&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;Z&#39;</span> },
])

<span class="hljs-keyword">const</span> [city, setCity] = useState([
    { <span class="hljs-attr">id</span>: <span class="hljs-number">7</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u671D\u9633\u533A&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;C&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">8</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5D07\u6587\u533A&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;C&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">9</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u660C\u5E73\u533A&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;C&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">6</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u77F3\u666F\u5C71\u533A&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;S&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u516B\u91CC\u5E84\u8857\u9053&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;B&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">9</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5317\u82D1&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;B&#39;</span> },
])

<span class="hljs-keyword">const</span> [country, setCountry] = useState([
    { <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u516B\u91CC\u5E84\u8857\u9053&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;B&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">9</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5317\u82D1&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;B&#39;</span> },
    { <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>, <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u5E38\u8425\u4E61&#39;</span>, <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;C&#39;</span> },
])
<span class="hljs-keyword">const</span> [existAddress, setExistAddress] = useState([
    {
      <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,
      <span class="hljs-attr">addressDetail</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;\u6B21\u6E20\u9547&#39;</span>,
      <span class="hljs-attr">countyName</span>: <span class="hljs-string">&#39;\u901A\u5DDE\u533A&#39;</span>,
      <span class="hljs-attr">provinceName</span>: <span class="hljs-string">&#39;\u5317\u4EAC\u5E02&#39;</span>,
      <span class="hljs-attr">selectedAddress</span>: <span class="hljs-literal">true</span>,
      <span class="hljs-attr">townName</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u63A2\u63A2\u9C7C&#39;</span>,
      <span class="hljs-attr">phone</span>: <span class="hljs-string">&#39;182****1718&#39;</span>,
    },
    {
      <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,
      <span class="hljs-attr">addressDetail</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;\u9493\u9C7C\u5C9B\u5168\u533A&#39;</span>,
      <span class="hljs-attr">countyName</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">provinceName</span>: <span class="hljs-string">&#39;\u9493\u9C7C\u5C9B&#39;</span>,
      <span class="hljs-attr">selectedAddress</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">townName</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u63A2\u63A2\u9C7C&#39;</span>,
      <span class="hljs-attr">phone</span>: <span class="hljs-string">&#39;182****1718&#39;</span>,
    },
    {
      <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>,
      <span class="hljs-attr">addressDetail</span>: <span class="hljs-string">&#39;\u4EAC\u4E1C\u5927\u53A6&#39;</span>,
      <span class="hljs-attr">cityName</span>: <span class="hljs-string">&#39;\u5927\u5174\u533A&#39;</span>,
      <span class="hljs-attr">countyName</span>: <span class="hljs-string">&#39;\u79D1\u521B\u5341\u4E00\u885718\u53F7\u9662&#39;</span>,
      <span class="hljs-attr">provinceName</span>: <span class="hljs-string">&#39;\u5317\u4EAC\u5E02&#39;</span>,
      <span class="hljs-attr">selectedAddress</span>: <span class="hljs-literal">false</span>,
      <span class="hljs-attr">townName</span>: <span class="hljs-string">&#39;&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;\u63A2\u63A2\u9C7C&#39;</span>,
      <span class="hljs-attr">phone</span>: <span class="hljs-string">&#39;182****1718&#39;</span>,
    },
  ])

<span class="hljs-keyword">const</span> selected = <span class="hljs-function">(<span class="hljs-params">prevExistAdd: AddressList, nowExistAdd: RegionData, arr: AddressList[]</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(prevExistAdd,nowExistAdd)
}

<span class="hljs-keyword">const</span> onChange = <span class="hljs-function">(<span class="hljs-params">cal</span>) =&gt;</span> {
    <span class="hljs-keyword">const</span> name = address[cal.next]
    <span class="hljs-keyword">if</span> (name.length &lt; <span class="hljs-number">1</span>) {
      setOther(<span class="hljs-literal">false</span>)
    }
}
<span class="hljs-keyword">const</span> close = <span class="hljs-function">(<span class="hljs-params">val</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(val)
    setOther(<span class="hljs-literal">false</span>)
}
<span class="hljs-keyword">const</span> switchModule = <span class="hljs-function">(<span class="hljs-params">val</span>) =&gt;</span> {
    <span class="hljs-keyword">if</span> (val.type == <span class="hljs-string">&#39;custom&#39;</span>) {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;\u70B9\u51FB\u4E86\u201C\u9009\u62E9\u5176\u4ED6\u5730\u5740\u201D\u6309\u94AE&#39;</span>)
    } <span class="hljs-keyword">else</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;\u70B9\u51FB\u4E86\u81EA\u5B9A\u4E49\u5730\u5740\u5DE6\u4E0A\u89D2\u7684\u8FD4\u56DE\u6309\u94AE&#39;</span>)
    }
}

<span class="hljs-keyword">const</span> closeMask = <span class="hljs-function">(<span class="hljs-params">val</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;\u5173\u95ED\u5F39\u5C42&#39;</span>, val)
}
</code></pre><pre><code class="language-tsx">&lt;Address
    modelValue={other}
    <span class="hljs-keyword">type</span>=<span class="hljs-string">&quot;exist&quot;</span>
    existAddress={existAddress}
    province={province}
    city={city}
    country={country}
    town={town}
    backBtnIcon={icon.backBtnIcon}
    onChange={onChange}
    close={close}
    selected={selected}
    customAndExistTitle=<span class="hljs-string">&quot;\u9009\u62E9\u5176\u4ED6\u5730\u5740&quot;</span>
    switchModule={switchModule}
    closeMask={closeMask}
&gt;&lt;/Address&gt;
</code></pre><h1>API</h1><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>modelValue</td><td>\u662F\u5426\u6253\u5F00\u5730\u5740\u9009\u62E9</td><td>String</td><td>\u2018\u2019</td></tr><tr><td>type</td><td>\u5730\u5740\u9009\u62E9\u7C7B\u578B exist/custom/custom2</td><td>String</td><td>\u2018custom\u2019</td></tr><tr><td>province</td><td>\u7701\uFF0C\u6BCF\u4E2A\u7701\u7684\u5BF9\u8C61\u4E2D\uFF0C\u5FC5\u987B\u6709 name \u5B57\u6BB5\uFF0C\u5982\u679C\u7C7B\u578B\u9009\u62E9 custom2\uFF0C\u5FC5\u987B\u6307\u5B9A title \u5B57\u6BB5\u4E3A\u9996\u5B57\u6BCD</td><td>Array</td><td>[]</td></tr><tr><td>city</td><td>\u5E02\uFF0C\u6BCF\u4E2A\u5E02\u7684\u5BF9\u8C61\u4E2D\uFF0C\u5FC5\u987B\u6709 name \u5B57\u6BB5\uFF0C\u5982\u679C\u7C7B\u578B\u9009\u62E9 custom2\uFF0C\u5FC5\u987B\u6307\u5B9A title \u5B57\u6BB5\u4E3A\u9996\u5B57\u6BCD</td><td>Array</td><td>[]</td></tr><tr><td>country</td><td>\u53BF\uFF0C\u6BCF\u4E2A\u53BF\u7684\u5BF9\u8C61\u4E2D\uFF0C\u5FC5\u987B\u6709 name \u5B57\u6BB5\uFF0C\u5982\u679C\u7C7B\u578B\u9009\u62E9 custom2\uFF0C\u5FC5\u987B\u6307\u5B9A title \u5B57\u6BB5\u4E3A\u9996\u5B57\u6BCD</td><td>Array</td><td>[]</td></tr><tr><td>town</td><td>\u4E61/\u9547\uFF0C\u6BCF\u4E2A\u4E61/\u9547\u7684\u5BF9\u8C61\u4E2D\uFF0C\u5FC5\u987B\u6709 name \u5B57\u6BB5\uFF0C\u5982\u679C\u7C7B\u578B\u9009\u62E9 custom2\uFF0C\u5FC5\u987B\u6307\u5B9A title \u5B57\u6BB5\u4E3A\u9996\u5B57\u6BCD</td><td>Array</td><td>[]</td></tr><tr><td>height</td><td>\u5F39\u5C42\u4E2D\u5185\u5BB9\u5BB9\u5668\u7684\u9AD8\u5EA6\uFF0C\u4EC5\u5728type=&quot;custom2&quot;\u65F6\u6709\u6548</td><td>String\u3001Number</td><td>\u2018200px\u2019</td></tr><tr><td>existAddress</td><td>\u5DF2\u5B58\u5728\u5730\u5740\u5217\u8868\uFF0C\u6BCF\u4E2A\u5730\u5740\u5BF9\u8C61\u4E2D\uFF0C\u5FC5\u4F20\u503CprovinceName\u3001cityName\u3001countyName\u3001townName\u3001addressDetail\u3001selectedAddress\uFF08\u5B57\u6BB5\u89E3\u91CA\u89C1\u4E0B\uFF09</td><td>Array</td><td>[]</td></tr><tr><td>defaultIcon</td><td>\u5DF2\u6709\u5730\u5740\u5217\u8868\u9ED8\u8BA4\u56FE\u6807\uFF0Ctype=\u2018exist\u2019 \u65F6\u751F\u6548</td><td>String</td><td>\u2018\u2019</td></tr><tr><td>selectedIcon</td><td>\u5DF2\u6709\u5730\u5740\u5217\u8868\u9009\u4E2D\u56FE\u6807\uFF0Ctype=\u2018exist\u2019 \u65F6\u751F\u6548</td><td>String</td><td>\u2018\u2019</td></tr><tr><td>closeBtnIcon</td><td>\u81EA\u5B9A\u4E49\u5173\u95ED\u5F39\u6846\u6309\u94AE\u56FE\u6807</td><td>string</td><td>-</td></tr><tr><td>backBtnIcon</td><td>\u81EA\u5B9A\u4E49\u5730\u5740\u4E0E\u5DF2\u6709\u5730\u5740\u5207\u6362\u65F6\uFF0C\u81EA\u5B9A\u4E49\u8FD4\u56DE\u7684\u6309\u94AE\u56FE\u6807</td><td>String</td><td>-</td></tr><tr><td>isShowCustomAddress</td><td>\u662F\u5426\u53EF\u4EE5\u5207\u6362\u81EA\u5B9A\u4E49\u5730\u5740\u9009\u62E9\uFF0Ctype=\u2018exist\u2019 \u65F6\u751F\u6548</td><td>Boolean</td><td>true</td></tr><tr><td>customAddressTitle</td><td>\u81EA\u5B9A\u4E49\u5730\u5740\u9009\u62E9\u6587\u6848\uFF0Ctype=\u2018custom\u2019 \u65F6\u751F\u6548</td><td>String</td><td>\u2018\u8BF7\u9009\u62E9\u6240\u5728\u5730\u533A\u2019</td></tr><tr><td>existAddressTitle</td><td>\u5DF2\u6709\u5730\u5740\u6587\u6848 \uFF0Ctype=\u2018exist\u2019 \u65F6\u751F\u6548</td><td>String</td><td>\u2018\u914D\u9001\u81F3\u2019</td></tr><tr><td>customAndExistTitle</td><td>\u81EA\u5B9A\u4E49\u5730\u5740\u4E0E\u5DF2\u6709\u5730\u5740\u5207\u6362\u6309\u94AE\u6587\u6848 \uFF0Ctype=\u2018exist\u2019 \u65F6\u751F\u6548</td><td>String</td><td>\u2018\u9009\u62E9\u5176\u4ED6\u5730\u5740\u2019</td></tr></tbody></table><ul><li>provinceName \u7701\u7684\u540D\u5B57</li><li>cityName \u5E02\u7684\u540D\u5B57</li><li>countyName \u53BF\u7684\u540D\u5B57</li><li>townName \u4E61/\u9547\u7684\u540D\u5B57</li><li>addressDetail \u5177\u4F53\u5730\u5740</li><li>selectedAddress \u5B57\u6BB5\u7528\u4E8E\u5224\u65AD\u5F53\u524D\u5730\u5740\u5217\u8868\u7684\u9009\u4E2D\u9879\u3002</li></ul><h2>Event</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>onChange</td><td>\u81EA\u5B9A\u4E49\u9009\u62E9\u5730\u5740\u65F6\uFF0C\u9009\u62E9\u5730\u533A\u65F6\u89E6\u53D1</td><td>\u53C2\u8003 onChange</td></tr><tr><td>onSelected</td><td>\u9009\u62E9\u5DF2\u6709\u5730\u5740\u5217\u8868\u65F6\u89E6\u53D1</td><td>\u53C2\u8003 selected</td></tr><tr><td>onClose</td><td>\u5730\u5740\u9009\u62E9\u5F39\u6846\u5173\u95ED\u65F6\u89E6\u53D1</td><td>\u53C2\u8003 close</td></tr><tr><td>closeMask</td><td>\u70B9\u51FB\u906E\u7F69\u5C42\u6216\u70B9\u51FB\u53F3\u4E0A\u89D2\u53C9\u53F7\u5173\u95ED\u65F6\u89E6\u53D1</td><td>{closeWay:\u2018mask\u2019/\u2018cross\u2019}</td></tr><tr><td>switchModule</td><td>\u70B9\u51FB\u2018\u9009\u62E9\u5176\u4ED6\u5730\u5740\u2019\u6216\u81EA\u5B9A\u4E49\u5730\u5740\u9009\u62E9\u5DE6\u4E0A\u89D2\u8FD4\u56DE\u6309\u94AE\u89E6\u53D1</td><td>{type:\u2018exist\u2019/\u2018custom\u2019/\u2018custom2\u2019}</td></tr></tbody></table><h2>change \u56DE\u8C03\u53C2\u6570</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u53EF\u80FD\u503C</th></tr></thead><tbody><tr><td>custom</td><td>\u5F53\u524D\u70B9\u51FB\u7684\u884C\u653F\u533A\u57DF</td><td>province(\u7701) / city(\u5E02) / country(\u53BF) / town(\u4E61)</td></tr><tr><td>next</td><td>\u5F53\u524D\u70B9\u51FB\u7684\u884C\u653F\u533A\u57DF\u7684\u4E0B\u4E00\u7EA7</td><td>province(\u7701) / city(\u5E02) / country(\u53BF) / town(\u4E61)</td></tr><tr><td>value</td><td>\u5F53\u524D\u70B9\u51FB\u7684\u884C\u653F\u533A\u57DF\u7684\u503C\uFF08\u8FD4\u56DE\u4F20\u5165\u7684\u503C\uFF09</td><td>{}</td></tr></tbody></table><h2>selected \u56DE\u8C03\u53C2\u6570</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u53EF\u80FD\u503C</th></tr></thead><tbody><tr><td>\u7B2C\u4E00\u4E2A\u53C2\u6570\uFF08prevExistAdd\uFF09</td><td>\u9009\u62E9\u524D\u9009\u4E2D\u7684\u5730\u5740</td><td>{}</td></tr><tr><td>\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF08nowExistAdd\uFF09</td><td>\u5F53\u524D\u9009\u4E2D\u7684\u5730\u5740</td><td>{}</td></tr><tr><td>\u7B2C\u4E09\u4E2A\u53C2\u6570\uFF08arr\uFF09</td><td>\u9009\u62E9\u5B8C\u4E4B\u540E\u7684\u5DF2\u6709\u5730\u5740\u5217\u8868\uFF08selectedAddress \u503C\u53D1\u751F\u6539\u53D8\uFF09</td><td>{}</td></tr></tbody></table><h2>close \u56DE\u8C03\u53C2\u6570</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u53EF\u80FD\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u5730\u5740\u9009\u62E9\u7C7B\u578B exist/custom/custom2</td><td>exist/custom/custom2</td></tr><tr><td>data</td><td>\u9009\u62E9\u5730\u5740\u7684\u503C,custom \u65F6\uFF0CaddressStr \u4E3A\u9009\u62E9\u7684\u5730\u5740\u7EC4\u5408</td><td>{}</td></tr></tbody></table>`,32),c=[p],i={setup(e,{expose:s}){return s({frontmatter:{}}),(h,d)=>(n(),a("div",l,c))}};export{i as default};
