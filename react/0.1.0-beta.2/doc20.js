import{e as n,o as a,y as t}from"./vendor.js";const l={class:"markdown-body"},e=t(`<h1>Infiniteloading \u6EDA\u52A8\u52A0\u8F7D</h1><h3>\u4ECB\u7ECD</h3><p>\u5217\u8868\u6EDA\u52A8\u5230\u5E95\u90E8\u81EA\u52A8\u52A0\u8F7D\u66F4\u591A\u6570\u636E\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript">  <span class="hljs-keyword">import</span> { InfiniteLoading } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-react&#39;</span>;
</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-tsx">&lt;ul className=<span class="hljs-string">&quot;infiniteUl&quot;</span> id=<span class="hljs-string">&quot;scroll&quot;</span>&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Infiniteloading</span>
    <span class="hljs-attr">containerId</span>=<span class="hljs-string">&quot;scroll&quot;</span>
    <span class="hljs-attr">useWindow</span>=<span class="hljs-string">{false}</span>
    <span class="hljs-attr">hasMore</span>=<span class="hljs-string">{hasMore}</span>
    <span class="hljs-attr">loadMore</span>=<span class="hljs-string">{loadMore}</span>
  &gt;</span>
    {defultList.map((item, index) =&gt; {
      return (
        <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;infiniteLi&quot;</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{index}</span>&gt;</span>
          {item}
        <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      )
    })}
  <span class="hljs-tag">&lt;/<span class="hljs-name">Infiniteloading</span>&gt;</span></span>
&lt;/ul&gt;
</code></pre><pre><code class="language-tsx"><span class="hljs-keyword">const</span> [defultList, setDefultList] = useState&lt;<span class="hljs-built_in">string</span>[]&gt;([])
<span class="hljs-keyword">const</span> [hasMore, setHasMore] = useState(<span class="hljs-literal">true</span>)

useEffect(<span class="hljs-function">() =&gt;</span> {
  init()
}, [])

<span class="hljs-keyword">const</span> loadMore = <span class="hljs-function">(<span class="hljs-params">done: () =&gt; <span class="hljs-built_in">void</span></span>) =&gt;</span> {
  <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> curLen = defultList.length
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = curLen; i &lt; curLen + <span class="hljs-number">10</span>; i++) {
      defultList.push(<span class="hljs-string">\`<span class="hljs-subst">\${i}</span>\`</span>)
    }
    <span class="hljs-keyword">if</span> (defultList.length &gt;= <span class="hljs-number">30</span>) {
      setHasMore(<span class="hljs-literal">false</span>)
    } <span class="hljs-keyword">else</span> {
      setDefultList([...defultList])
    }
    done()
  }, <span class="hljs-number">500</span>)
}

<span class="hljs-keyword">const</span> init = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++) {
    defultList.push(<span class="hljs-string">\`<span class="hljs-subst">\${i}</span>\`</span>)
  }
  setDefultList([...defultList])
}
</code></pre><h3>\u4E0B\u62C9\u5237\u65B0</h3><pre><code class="language-tsx">&lt;ul className=<span class="hljs-string">&quot;infiniteUl&quot;</span> id=<span class="hljs-string">&quot;refreshScroll&quot;</span>&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Infiniteloading</span>
    <span class="hljs-attr">pullIcon</span>=<span class="hljs-string">&quot;JD&quot;</span>
    <span class="hljs-attr">containerId</span>=<span class="hljs-string">&quot;refreshScroll&quot;</span>
    <span class="hljs-attr">useWindow</span>=<span class="hljs-string">{false}</span>
    <span class="hljs-attr">isOpenRefresh</span>=<span class="hljs-string">{true}</span>
    <span class="hljs-attr">hasMore</span>=<span class="hljs-string">{refreshHasMore}</span>
    <span class="hljs-attr">loadMore</span>=<span class="hljs-string">{refreshLoadMore}</span>
    <span class="hljs-attr">refresh</span>=<span class="hljs-string">{refresh}</span>
  &gt;</span>
    {refreshList.map((item, index) =&gt; {
      return (
        <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;infiniteLi&quot;</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{index}</span>&gt;</span>
          {item}
        <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      )
    })}
  <span class="hljs-tag">&lt;/<span class="hljs-name">Infiniteloading</span>&gt;</span></span>
&lt;/ul&gt;
</code></pre><pre><code class="language-tsx"><span class="hljs-keyword">const</span> [refreshList, setRefreshList] = useState&lt;<span class="hljs-built_in">string</span>[]&gt;([])
<span class="hljs-keyword">const</span> [refreshHasMore, setRefreshHasMore] = useState(<span class="hljs-literal">true</span>)

useEffect(<span class="hljs-function">() =&gt;</span> {
  init()
}, [])

<span class="hljs-keyword">const</span> refreshLoadMore = <span class="hljs-function">(<span class="hljs-params">done: () =&gt; <span class="hljs-built_in">void</span></span>) =&gt;</span> {
  <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> curLen = refreshList.length
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = curLen; i &lt; curLen + <span class="hljs-number">10</span>; i++) {
      refreshList.push(<span class="hljs-string">\`<span class="hljs-subst">\${i}</span>\`</span>)
    }
    <span class="hljs-keyword">if</span> (refreshList.length &gt;= <span class="hljs-number">30</span>) {
      setRefreshHasMore(<span class="hljs-literal">false</span>)
    } <span class="hljs-keyword">else</span> {
      setRefreshList([...refreshList])
    }
    done()
  }, <span class="hljs-number">500</span>)
}

<span class="hljs-keyword">const</span> init = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++) {
    refreshList.push(<span class="hljs-string">\`<span class="hljs-subst">\${i}</span>\`</span>)
  }
  setRefreshList([...refreshList])
}
</code></pre><h3>\u81EA\u5B9A\u4E49\u52A0\u8F7D\u6587\u6848</h3><pre><code class="language-tsx">&lt;ul className=<span class="hljs-string">&quot;infiniteUl&quot;</span> id=<span class="hljs-string">&quot;scroll&quot;</span>&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Infiniteloading</span>
    <span class="hljs-attr">containerId</span>=<span class="hljs-string">&quot;customScroll&quot;</span>
    <span class="hljs-attr">useWindow</span>=<span class="hljs-string">{false}</span>
    <span class="hljs-attr">loadTxt</span>=<span class="hljs-string">&quot;loading&quot;</span>
    <span class="hljs-attr">loadMoreTxt</span>=<span class="hljs-string">&quot;\u6CA1\u6709\u5566\uFF5E&quot;</span>
    <span class="hljs-attr">hasMore</span>=<span class="hljs-string">{customHasMore}</span>
    <span class="hljs-attr">loadMore</span>=<span class="hljs-string">{customLoadMore}</span>
  &gt;</span>
    {customList.map((item, index) =&gt; {
      return (
        <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;infiniteLi&quot;</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{index}</span>&gt;</span>
          {item}
        <span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
      )
    })}
  <span class="hljs-tag">&lt;/<span class="hljs-name">Infiniteloading</span>&gt;</span></span>
&lt;/ul&gt;
</code></pre><pre><code class="language-tsx"><span class="hljs-keyword">const</span> [customList, setCustomList] = useState&lt;<span class="hljs-built_in">string</span>[]&gt;([])
<span class="hljs-keyword">const</span> [customHasMore, setCustomHasMore] = useState(<span class="hljs-literal">true</span>)

useEffect(<span class="hljs-function">() =&gt;</span> {
  init()
}, [])

<span class="hljs-keyword">const</span> customLoadMore = <span class="hljs-function">(<span class="hljs-params">done: () =&gt; <span class="hljs-built_in">void</span></span>) =&gt;</span> {
  <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> curLen = customList.length
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = curLen; i &lt; curLen + <span class="hljs-number">10</span>; i++) {
      customList.push(<span class="hljs-string">\`<span class="hljs-subst">\${i}</span>\`</span>)
    }
    <span class="hljs-keyword">if</span> (customList.length &gt;= <span class="hljs-number">30</span>) {
      setCustomHasMore(<span class="hljs-literal">false</span>)
    } <span class="hljs-keyword">else</span> {
      setCustomList([...customList])
    }
    done()
  }, <span class="hljs-number">500</span>)
}

<span class="hljs-keyword">const</span> init = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">10</span>; i++) {
    customList.push(<span class="hljs-string">\`<span class="hljs-subst">\${i}</span>\`</span>)
  }
  setCustomList([...customList])
}
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>hasMore</td><td>\u662F\u5426\u8FD8\u6709\u66F4\u591A\u6570\u636E</td><td>Boolean</td><td><code>true</code></td></tr><tr><td>threshold</td><td>\u8DDD\u79BB\u5E95\u90E8\u591A\u8FDC\u52A0\u8F7D</td><td>Number</td><td><code>200</code></td></tr><tr><td>useWindow</td><td>\u5C06\u6EDA\u52A8\u4FA6\u542C\u5668\u6DFB\u52A0\u5230 window \u5426\u5219\u4FA6\u542C\u7EC4\u4EF6\u7684\u7236\u8282\u70B9</td><td>Boolean</td><td><code>true</code></td></tr><tr><td>useCapture</td><td>\u662F\u5426\u4F7F\u7528\u6355\u83B7\u6A21\u5F0F true \u6355\u83B7 false \u5192\u6CE1</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>containerId</td><td>\u5728 useWindow \u5C5E\u6027\u4E3A false \u7684\u65F6\u5019\uFF0C\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u8282\u70B9ID</td><td>String</td><td><code>&#39;&#39;</code></td></tr><tr><td>loadMoreTxt</td><td>\u201C\u6CA1\u6709\u66F4\u591A\u6570\u201D\u636E\u5C55\u793A\u6587\u6848</td><td>String</td><td><code>&#39;\u54CE\u5440\uFF0C\u8FD9\u91CC\u662F\u5E95\u90E8\u4E86\u5566&#39;</code></td></tr><tr><td>isOpenRefresh</td><td>\u662F\u5426\u5F00\u542F\u4E0B\u62C9\u5237\u65B0</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>pullIcon</td><td>\u4E0B\u62C9\u5237\u65B0<a href="#/icon">\u56FE\u6807\u540D\u79F0</a></td><td>String</td><td><img src="https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png" width="40/"></td></tr><tr><td>pullTxt</td><td>\u4E0B\u62C9\u5237\u65B0\u63D0\u793A\u6587\u6848</td><td>String</td><td><code>\u677E\u624B\u5237\u65B0</code></td></tr><tr><td>loadIcon</td><td>\u4E0A\u62C9\u52A0\u8F7D<a href="#/icon">\u56FE\u6807\u540D\u79F0</a></td><td>Boolean</td><td><img src="https://img10.360buyimg.com/imagetools/jfs/t1/169863/6/4565/6306/60125948E7e92774e/40b3a0cf42852bcb.png" width="40"></td></tr><tr><td>loadTxt</td><td>\u4E0A\u62C9\u52A0\u8F7D\u63D0\u793A\u6587\u6848</td><td>String</td><td><code>\u52A0\u8F7D\u4E2D...</code></td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>loadMore</td><td>\u7EE7\u7EED\u52A0\u8F7D\u7684\u56DE\u8C03\u51FD\u6570</td><td>done \u51FD\u6570\uFF0C\u7528\u4E8E\u5173\u95ED\u52A0\u8F7D\u4E2D\u72B6\u6001</td></tr><tr><td>scrollChange</td><td>\u5B9E\u65F6\u76D1\u542C\u6EDA\u52A8\u9AD8\u5EA6</td><td>\u6EDA\u52A8\u9AD8\u5EA6</td></tr><tr><td>refresh</td><td>\u4E0B\u62C9\u5237\u65B0\u4E8B\u4EF6\u56DE\u8C03</td><td>done \u51FD\u6570\uFF0C\u7528\u4E8E\u5173\u95ED\u52A0\u8F7D\u4E2D\u72B6\u6001</td></tr></tbody></table>`,20),p=[e],d={setup(c,{expose:s}){return s({frontmatter:{}}),(o,h)=>(a(),n("div",l,p))}};export{d as default};
