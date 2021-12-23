import{e as a,o as n,y as l}from"./vendor.js";const t={class:"markdown-body"},p=l(`<h1>Cascader \u7EA7\u8054\u9009\u62E9</h1><h3>\u4ECB\u7ECD</h3><p>\u7EA7\u8054\u9009\u62E9\u5668\uFF0C\u7528\u4E8E\u591A\u5C42\u7EA7\u6570\u636E\u7684\u9009\u62E9\uFF0C\u5178\u578B\u573A\u666F\u4E3A\u7701\u5E02\u533A\u9009\u62E9\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-js"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">// vue</span>
<span class="hljs-keyword">import</span> { Cascader } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">// taro</span>
<span class="hljs-keyword">import</span> { Cascader } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Cascader);
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><p>\u4F20\u5165<code>options</code>\u5217\u8868\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-form</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u9009\u62E9\u5730\u5740&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
      <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;nut-input-text&quot;</span>
      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;state.visible = true&quot;</span>
      <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;state.value&quot;</span>
      <span class="hljs-attr">readonly</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u5730\u5740&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-cascader</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5730\u5740\u9009\u62E9&quot;</span>
      <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;state.visible&quot;</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.value&quot;</span>
      @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;events.change&quot;</span>
      @<span class="hljs-attr">path-change</span>=<span class="hljs-string">&quot;events.pathChange&quot;</span>
      <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;state.options&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cascader</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-form-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-form</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">const</span> state = reactive({
    <span class="hljs-attr">visible</span>: <span class="hljs-literal">false</span>,
    <span class="hljs-attr">value</span>: [<span class="hljs-string">&#39;\u6E56\u5357&#39;</span>],
    <span class="hljs-attr">options</span>: [
      {
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u6D59\u6C5F&#39;</span>,
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6D59\u6C5F&#39;</span>,
        <span class="hljs-attr">children</span>: [
          {
            <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u676D\u5DDE&#39;</span>,
            <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u676D\u5DDE&#39;</span>,
            <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>,
            <span class="hljs-attr">children</span>: [
              { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u897F\u6E56\u533A&#39;</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u897F\u6E56\u533A&#39;</span> },
              { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u4F59\u676D\u533A&#39;</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u4F59\u676D\u533A&#39;</span> }
            ]
          },
          {
            <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u6E29\u5DDE&#39;</span>,
            <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6E29\u5DDE&#39;</span>,
            <span class="hljs-attr">children</span>: [
              { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u9E7F\u57CE\u533A&#39;</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u9E7F\u57CE\u533A&#39;</span> },
              { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u74EF\u6D77\u533A&#39;</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u74EF\u6D77\u533A&#39;</span> }
            ]
          }
        ]
      },
      {
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u6E56\u5357&#39;</span>,
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6E56\u5357&#39;</span>,
        <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>
      },
      {
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u798F\u5EFA&#39;</span>,
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u798F\u5EFA&#39;</span>,
        <span class="hljs-attr">children</span>: [
          {
            <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u798F\u5DDE&#39;</span>,
            <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u798F\u5DDE&#39;</span>,
            <span class="hljs-attr">children</span>: [
              { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u9F13\u697C\u533A&#39;</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u9F13\u697C\u533A&#39;</span> },
              { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u53F0\u6C5F\u533A&#39;</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u53F0\u6C5F\u533A&#39;</span> }
            ]
          }
        ]
      }
    ]
  });
  <span class="hljs-keyword">const</span> events = {
    <span class="hljs-function"><span class="hljs-title">change</span>(<span class="hljs-params">...args: any</span>)</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;change&#39;</span>, ...args);
    },
    <span class="hljs-function"><span class="hljs-title">pathChange</span>(<span class="hljs-params">...args: any</span>)</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;pathChange&#39;</span>, ...args);
    },
  };

  <span class="hljs-keyword">return</span> { state, events };
}
</code></pre><h3>\u81EA\u5B9A\u4E49\u5C5E\u6027\u540D\u79F0</h3><p>\u53EF\u901A\u8FC7<code>textKey</code>\u3001<code>valueKey</code>\u3001<code>childrenKey</code>\u6307\u5B9A\u5C5E\u6027\u540D\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-form</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u9009\u62E9\u5730\u5740&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
      <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;nut-input-text&quot;</span>
      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;state.visible = true&quot;</span>
      <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;state.value&quot;</span>
      <span class="hljs-attr">readonly</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u5730\u5740&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-cascader</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5730\u5740\u9009\u62E9&quot;</span>
      <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;state.visible&quot;</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.value&quot;</span>
      <span class="hljs-attr">label-key</span>=<span class="hljs-string">&quot;text&quot;</span>
      @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;events.change&quot;</span>
      @<span class="hljs-attr">path-change</span>=<span class="hljs-string">&quot;events.pathChange&quot;</span>
      <span class="hljs-attr">value-key</span>=<span class="hljs-string">&quot;text&quot;</span>
      <span class="hljs-attr">children-key</span>=<span class="hljs-string">&quot;items&quot;</span>
      <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;state.options&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cascader</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-form-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-form</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">const</span> state = reactive({
    <span class="hljs-attr">visible</span>: <span class="hljs-literal">false</span>,
    <span class="hljs-attr">value</span>: [<span class="hljs-string">&#39;\u6D59\u6C5F&#39;</span>, <span class="hljs-string">&#39;\u676D\u5DDE&#39;</span>, <span class="hljs-string">&#39;\u897F\u6E56\u533A&#39;</span>],
    <span class="hljs-attr">options</span>: [
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6D59\u6C5F&#39;</span>,
        <span class="hljs-attr">items</span>: [
          {
            <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u676D\u5DDE&#39;</span>,
            <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>,
            <span class="hljs-attr">items</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u897F\u6E56\u533A&#39;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u4F59\u676D\u533A&#39;</span> }]
          },
          {
            <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u6E29\u5DDE&#39;</span>,
            <span class="hljs-attr">items</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u9E7F\u57CE\u533A&#39;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u74EF\u6D77\u533A&#39;</span> }]
          }
        ]
      },
      {
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u798F\u5EFA&#39;</span>,
        <span class="hljs-attr">items</span>: [
          {
            <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u798F\u5DDE&#39;</span>,
            <span class="hljs-attr">items</span>: [{ <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u9F13\u697C\u533A&#39;</span> }, { <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u53F0\u6C5F\u533A&#39;</span> }]
          }
        ]
      }
    ]
  });
  <span class="hljs-keyword">const</span> events = {
    <span class="hljs-function"><span class="hljs-title">change</span>(<span class="hljs-params">...args: any</span>)</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;change&#39;</span>, ...args);
    },
    <span class="hljs-function"><span class="hljs-title">pathChange</span>(<span class="hljs-params">...args: any</span>)</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;pathChange&#39;</span>, ...args);
    },
  };

  <span class="hljs-keyword">return</span> { state, events };
}
</code></pre><h3>\u52A8\u6001\u52A0\u8F7D</h3><p>\u4F7F\u7528<code>lazy</code>\u6807\u8BC6\u662F\u5426\u9700\u8981\u52A8\u6001\u83B7\u53D6\u6570\u636E\uFF0C\u6B64\u65F6\u4E0D\u4F20<code>options</code>\u4EE3\u8868\u6240\u6709\u6570\u636E\u90FD\u9700\u8981\u901A\u8FC7<code>lazyLoad</code>\u52A0\u8F7D\uFF0C\u9996\u6B21\u52A0\u8F7D\u901A\u8FC7<code>root</code>\u5C5E\u6027\u533A\u5206\uFF0C\u5F53\u9047\u5230\u975E\u53F6\u5B50\u8282\u70B9\u65F6\u4F1A\u8C03\u7528<code>lazyLoad</code>\u65B9\u6CD5\uFF0C\u53C2\u6570\u4E3A\u5F53\u524D\u8282\u70B9\u548C<code>resolve</code>\u65B9\u6CD5\uFF0C\u6CE8\u610F<code>resolve</code>\u65B9\u6CD5\u5FC5\u987B\u8C03\u7528\uFF0C\u4E0D\u4F20\u5B50\u8282\u70B9\u65F6\u4F1A\u88AB\u5F53\u505A\u53F6\u5B50\u8282\u70B9\u5904\u7406\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-form</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u9009\u62E9\u5730\u5740&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
      <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;nut-input-text&quot;</span>
      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;state.visible = true&quot;</span>
      <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;state.value&quot;</span>
      <span class="hljs-attr">readonly</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u5730\u5740&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-cascader</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5730\u5740\u9009\u62E9&quot;</span>
      <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;state.visible&quot;</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.value&quot;</span>
      @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;events.change&quot;</span>
      @<span class="hljs-attr">path-change</span>=<span class="hljs-string">&quot;events.pathChange&quot;</span>
      <span class="hljs-attr">lazy</span>
      <span class="hljs-attr">:lazy-load</span>=<span class="hljs-string">&quot;state.lazyLoad&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cascader</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-form-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-form</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">const</span> state = reactive({
    <span class="hljs-attr">visible</span>: <span class="hljs-literal">false</span>,
    <span class="hljs-attr">value</span>: [<span class="hljs-string">&#39;A0&#39;</span>, <span class="hljs-string">&#39;A12&#39;</span>, <span class="hljs-string">&#39;A23&#39;</span>, <span class="hljs-string">&#39;A32&#39;</span>],
    <span class="hljs-function"><span class="hljs-title">lazyLoad</span>(<span class="hljs-params">node: any, resolve: (children: any) =&gt; <span class="hljs-keyword">void</span></span>)</span> {
      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        <span class="hljs-comment">// root\u8868\u793A\u7B2C\u4E00\u5C42\u6570\u636E</span>
        <span class="hljs-keyword">if</span> (node.root) {
          resolve([
            { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;A0&#39;</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;A0&#39;</span> },
            { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;B0&#39;</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;B0&#39;</span> },
            { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;C0&#39;</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;C0&#39;</span> }
          ]);
        } <span class="hljs-keyword">else</span> {
          <span class="hljs-keyword">const</span> { value, level } = node;
          <span class="hljs-keyword">const</span> text = value.substring(<span class="hljs-number">0</span>, <span class="hljs-number">1</span>);
          <span class="hljs-keyword">const</span> value1 = <span class="hljs-string">\`<span class="hljs-subst">\${text}</span><span class="hljs-subst">\${level + <span class="hljs-number">1</span>}</span>1\`</span>;
          <span class="hljs-keyword">const</span> value2 = <span class="hljs-string">\`<span class="hljs-subst">\${text}</span><span class="hljs-subst">\${level + <span class="hljs-number">1</span>}</span>2\`</span>;
          <span class="hljs-keyword">const</span> value3 = <span class="hljs-string">\`<span class="hljs-subst">\${text}</span><span class="hljs-subst">\${level + <span class="hljs-number">1</span>}</span>3\`</span>;
          resolve([
            { <span class="hljs-attr">value</span>: value1, <span class="hljs-attr">text</span>: value1, <span class="hljs-attr">leaf</span>: level &gt;= <span class="hljs-number">6</span> },
            { <span class="hljs-attr">value</span>: value2, <span class="hljs-attr">text</span>: value2, <span class="hljs-attr">leaf</span>: level &gt;= <span class="hljs-number">6</span> },
            { <span class="hljs-attr">value</span>: value3, <span class="hljs-attr">text</span>: value3, <span class="hljs-attr">leaf</span>: level &gt;= <span class="hljs-number">6</span> }
          ]);
        }
      }, <span class="hljs-number">300</span>);
    }
  });
  <span class="hljs-keyword">const</span> events = {
    <span class="hljs-function"><span class="hljs-title">change</span>(<span class="hljs-params">...args: any</span>)</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;change&#39;</span>, ...args);
    },
    <span class="hljs-function"><span class="hljs-title">pathChange</span>(<span class="hljs-params">...args: any</span>)</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;pathChange&#39;</span>, ...args);
    },
  };

  <span class="hljs-keyword">return</span> { state, events };
}
</code></pre><h3>\u90E8\u5206\u6570\u636E\u52A8\u6001\u52A0\u8F7D</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-form</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u9009\u62E9\u5730\u5740&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
      <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;nut-input-text&quot;</span>
      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;state.visible = true&quot;</span>
      <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;state.value&quot;</span>
      <span class="hljs-attr">readonly</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u5730\u5740&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-cascader</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5730\u5740\u9009\u62E9&quot;</span>
      <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;state.visible&quot;</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.value&quot;</span>
      @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;events.change&quot;</span>
      @<span class="hljs-attr">path-change</span>=<span class="hljs-string">&quot;events.pathChange&quot;</span>
      <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;state.options&quot;</span>
      <span class="hljs-attr">lazy</span>
      <span class="hljs-attr">:lazy-load</span>=<span class="hljs-string">&quot;state.lazyLoad&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cascader</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-form-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-form</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">const</span> state = reactive({
    <span class="hljs-attr">visible</span>: <span class="hljs-literal">false</span>,
    <span class="hljs-attr">value</span>: [],
    <span class="hljs-attr">options</span>: [
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;A0&#39;</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;A0&#39;</span> },
      {
        <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;B0&#39;</span>,
        <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;B0&#39;</span>,
        <span class="hljs-attr">children</span>: [
          { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;B11&#39;</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;B11&#39;</span>, <span class="hljs-attr">leaf</span>: <span class="hljs-literal">true</span> },
          { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;B12&#39;</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;B12&#39;</span> }
        ]
      },
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;C0&#39;</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;C0&#39;</span> }
    ],
    <span class="hljs-function"><span class="hljs-title">lazyLoad</span>(<span class="hljs-params">node: any, resolve: (children: any) =&gt; <span class="hljs-keyword">void</span></span>)</span> {
      <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
        <span class="hljs-keyword">const</span> { value, level } = node;
        <span class="hljs-keyword">const</span> text = value.substring(<span class="hljs-number">0</span>, <span class="hljs-number">1</span>);
        <span class="hljs-keyword">const</span> value1 = <span class="hljs-string">\`<span class="hljs-subst">\${text}</span><span class="hljs-subst">\${level + <span class="hljs-number">1</span>}</span>1\`</span>;
        <span class="hljs-keyword">const</span> value2 = <span class="hljs-string">\`<span class="hljs-subst">\${text}</span><span class="hljs-subst">\${level + <span class="hljs-number">1</span>}</span>2\`</span>;
        resolve([
          { <span class="hljs-attr">value</span>: value1, <span class="hljs-attr">text</span>: value1, <span class="hljs-attr">leaf</span>: level &gt;= <span class="hljs-number">2</span> },
          { <span class="hljs-attr">value</span>: value2, <span class="hljs-attr">text</span>: value2, <span class="hljs-attr">leaf</span>: level &gt;= <span class="hljs-number">1</span> }
        ]);
      }, <span class="hljs-number">500</span>);
    }
  });
  <span class="hljs-keyword">const</span> events = {
    <span class="hljs-function"><span class="hljs-title">change</span>(<span class="hljs-params">...args: any</span>)</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;change&#39;</span>, ...args);
    },
    <span class="hljs-function"><span class="hljs-title">pathChange</span>(<span class="hljs-params">...args: any</span>)</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;pathChange&#39;</span>, ...args);
    },
  };

  <span class="hljs-keyword">return</span> { state, events };
}
</code></pre><h3>\u81EA\u52A8\u8F6C\u6362</h3><p>\u5982\u679C\u4F60\u7684\u6570\u636E\u4E3A\u53EF\u8F6C\u6362\u4E3A\u6811\u5F62\u7ED3\u6784\u7684\u6241\u5E73\u7ED3\u6784\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7<code>convertConfig</code>\u544A\u8BC9\u7EC4\u4EF6\u9700\u8981\u8FDB\u884C\u81EA\u52A8\u8F6C\u6362\uFF0C<code>convertConfig</code>\u63A5\u53D74\u4E2A\u53C2\u6570\uFF0C<code>topId</code>\u4E3A\u9876\u5C42\u8282\u70B9\u7684\u7236\u7EA7id\uFF0C<code>idKey</code>\u4E3A\u8282\u70B9\u552F\u4E00id\uFF0C<code>pidKey</code>\u4E3A\u6307\u5411\u7236\u8282\u70B9id\u7684\u5C5E\u6027\u540D\uFF0C\u5B58\u5728<code>sortKey</code>\u5C06\u6839\u636E\u6307\u5B9A\u5B57\u6BB5\u8C03\u7528Array.prototype.sort()\u8FDB\u884C\u540C\u5C42\u6392\u5E8F\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-form</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">nut-form-item</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;\u9009\u62E9\u5730\u5740&quot;</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;state.visible = true&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">input</span>
      <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;nut-input-text&quot;</span>
      @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;state.visible = true&quot;</span>
      <span class="hljs-attr">:value</span>=<span class="hljs-string">&quot;state.value&quot;</span>
      <span class="hljs-attr">readonly</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">&quot;\u8BF7\u9009\u62E9\u5730\u5740&quot;</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;text&quot;</span>
    /&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">nut-cascader</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5730\u5740\u9009\u62E9&quot;</span>
      <span class="hljs-attr">v-model:visible</span>=<span class="hljs-string">&quot;state.visible&quot;</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;state.value&quot;</span>
      @<span class="hljs-attr">change</span>=<span class="hljs-string">&quot;events.change&quot;</span>
      @<span class="hljs-attr">path-change</span>=<span class="hljs-string">&quot;events.pathChange&quot;</span>
      <span class="hljs-attr">:options</span>=<span class="hljs-string">&quot;state.options&quot;</span>
      <span class="hljs-attr">:convertConfig</span>=<span class="hljs-string">&quot;state.convertConfig&quot;</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-cascader</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">nut-form-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-form</span>&gt;</span>
</code></pre><pre><code class="language-javascript"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-keyword">const</span> state = reactive({
    <span class="hljs-attr">visible</span>: <span class="hljs-literal">false</span>,
    <span class="hljs-attr">value</span>: [<span class="hljs-string">&#39;\u5E7F\u4E1C\u7701&#39;</span>, <span class="hljs-string">&#39;\u5E7F\u5DDE\u5E02&#39;</span>],
    <span class="hljs-attr">convertConfig</span>: {
      <span class="hljs-attr">topId</span>: <span class="hljs-literal">null</span>,
      <span class="hljs-attr">idKey</span>: <span class="hljs-string">&#39;id&#39;</span>,
      <span class="hljs-attr">pidKey</span>: <span class="hljs-string">&#39;pid&#39;</span>,
      <span class="hljs-attr">sortKey</span>: <span class="hljs-string">&#39;&#39;</span>
    },
    <span class="hljs-attr">options</span>: [
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u5317\u4EAC&#39;</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5317\u4EAC&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>, <span class="hljs-attr">pid</span>: <span class="hljs-literal">null</span> },
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u671D\u9633\u533A&#39;</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u671D\u9633\u533A&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">11</span>, <span class="hljs-attr">pid</span>: <span class="hljs-number">1</span> },
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u4EA6\u5E84&#39;</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u4EA6\u5E84&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">111</span>, <span class="hljs-attr">pid</span>: <span class="hljs-number">11</span> },
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u5E7F\u4E1C\u7701&#39;</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5E7F\u4E1C\u7701&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>, <span class="hljs-attr">pid</span>: <span class="hljs-literal">null</span> },
      { <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u5E7F\u5DDE\u5E02&#39;</span>, <span class="hljs-attr">text</span>: <span class="hljs-string">&#39;\u5E7F\u5DDE\u5E02&#39;</span>, <span class="hljs-attr">id</span>: <span class="hljs-number">21</span>, <span class="hljs-attr">pid</span>: <span class="hljs-number">2</span> }
    ]
  });
  <span class="hljs-keyword">const</span> events = {
    <span class="hljs-function"><span class="hljs-title">change</span>(<span class="hljs-params">...args: any</span>)</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;change&#39;</span>, ...args);
    },
    <span class="hljs-function"><span class="hljs-title">pathChange</span>(<span class="hljs-params">...args: any</span>)</span> {
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;pathChange&#39;</span>, ...args);
    },
  };

  <span class="hljs-keyword">return</span> { state, events };
}
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u9009\u4E2D\u503C\uFF0C\u53CC\u5411\u7ED1\u5B9A</td><td>Array</td><td>-</td></tr><tr><td>options</td><td>\u7EA7\u8054\u6570\u636E</td><td>Array</td><td>-</td></tr><tr><td>lazy</td><td>\u662F\u5426\u5F00\u542F\u52A8\u6001\u52A0\u8F7D</td><td>Boolean</td><td>-</td></tr><tr><td>lazy-load</td><td>\u52A8\u6001\u52A0\u8F7D\u56DE\u8C03\uFF0C\u5F00\u542F\u52A8\u6001\u52A0\u8F7D\u65F6\u751F\u6548</td><td>Function</td><td>-</td></tr><tr><td>value-key</td><td>\u81EA\u5B9A\u4E49<code>options</code>\u7ED3\u6784\u4E2D<code>value</code>\u7684\u5B57\u6BB5</td><td>String</td><td>-</td></tr><tr><td>text-key</td><td>\u81EA\u5B9A\u4E49<code>options</code>\u7ED3\u6784\u4E2D<code>text</code>\u7684\u5B57\u6BB5</td><td>String</td><td>-</td></tr><tr><td>children-key</td><td>\u81EA\u5B9A\u4E49<code>options</code>\u7ED3\u6784\u4E2D<code>children</code>\u7684\u5B57\u6BB5</td><td>String</td><td>-</td></tr><tr><td>convert-config</td><td>\u5F53options\u4E3A\u53EF\u8F6C\u6362\u4E3A\u6811\u5F62\u7ED3\u6784\u7684\u6241\u5E73\u7ED3\u6784\u65F6\uFF0C\u914D\u7F6E\u8F6C\u6362\u89C4\u5219</td><td>Object</td><td>-</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u9009\u4E2D\u503C\u6539\u53D8\u65F6\u89E6\u53D1</td><td>(value, pathNodes)</td></tr><tr><td>pathChange</td><td>\u9009\u4E2D\u9879\u6539\u53D8\u65F6\u89E6\u53D1</td><td>(pathNodes)</td></tr></tbody></table>`,29),c=[p],i={setup(e,{expose:s}){return s({frontmatter:{}}),(r,j)=>(n(),a("div",t,c))}};export{i as default};
