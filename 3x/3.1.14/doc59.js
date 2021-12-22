import{e as a,o as n,y as t}from"./vendor.js";const l={class:"markdown-body"},p=t(`<h1>Table \u8868\u683C</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u5C55\u793A\u57FA\u7840\u8868\u683C</p><h3>\u5B89\u88C5</h3><pre><code class="language-javascript"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>;
<span class="hljs-comment">// vue</span>
<span class="hljs-keyword">import</span> { Table } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui&#39;</span>;
<span class="hljs-comment">// taro</span>
<span class="hljs-keyword">import</span> { Table } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-taro&#39;</span>;

<span class="hljs-keyword">const</span> app = createApp();
app.use(Table);
</code></pre><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u4F7F\u7528</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-table</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-table</span>&gt;</span>
</code></pre><pre><code class="language-ts"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
        <span class="hljs-attr">columns</span>: [
        {
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u59D3\u540D&#39;</span>,
          <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;name&#39;</span>
        },
        {
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u6027\u522B&#39;</span>,
          <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;sex&#39;</span>
        },
        {
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u5B66\u5386&#39;</span>,
          <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;record&#39;</span>
        }
      ],
      <span class="hljs-attr">data</span>: [
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Tom&#39;</span>,
          <span class="hljs-attr">sex</span>: <span class="hljs-string">&#39;\u7537&#39;</span>,
          <span class="hljs-attr">record</span>: <span class="hljs-string">&#39;\u5C0F\u5B66&#39;</span>
        },
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Lucy&#39;</span>,
          <span class="hljs-attr">sex</span>: <span class="hljs-string">&#39;\u5973&#39;</span>,
          <span class="hljs-attr">record</span>: <span class="hljs-string">&#39;\u672C\u79D1&#39;</span>
        },
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Jack&#39;</span>,
          <span class="hljs-attr">sex</span>: <span class="hljs-string">&#39;\u7537&#39;</span>,
          <span class="hljs-attr">record</span>: <span class="hljs-string">&#39;\u9AD8\u4E2D&#39;</span>
        }
      ],
    });
    <span class="hljs-keyword">return</span> {
        ...toRefs(state),
    };
}
</code></pre><h3>\u662F\u5426\u663E\u793A\u8FB9\u6846\uFF0C\u6587\u5B57\u5BF9\u9F50</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-table</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> <span class="hljs-attr">:bordered</span>=<span class="hljs-string">&quot;bordered&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-table</span>&gt;</span>
</code></pre><pre><code class="language-ts"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
        <span class="hljs-attr">bordered</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">columns</span>: [
        {
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u59D3\u540D&#39;</span>,
          <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;name&#39;</span>,
          <span class="hljs-attr">align</span>: <span class="hljs-string">&#39;center&#39;</span>
        },
        {
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u6027\u522B&#39;</span>,
          <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;sex&#39;</span>
        },
        {
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u5B66\u5386&#39;</span>,
          <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;record&#39;</span>
        }
      ],
      <span class="hljs-attr">data</span>: [
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Tom&#39;</span>,
          <span class="hljs-attr">sex</span>: <span class="hljs-string">&#39;\u7537&#39;</span>,
          <span class="hljs-attr">record</span>: <span class="hljs-string">&#39;\u5C0F\u5B66&#39;</span>
        },
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Lucy&#39;</span>,
          <span class="hljs-attr">sex</span>: <span class="hljs-string">&#39;\u5973&#39;</span>,
          <span class="hljs-attr">record</span>: <span class="hljs-string">&#39;\u672C\u79D1&#39;</span>
        },
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Jack&#39;</span>,
          <span class="hljs-attr">sex</span>: <span class="hljs-string">&#39;\u7537&#39;</span>,
          <span class="hljs-attr">record</span>: <span class="hljs-string">&#39;\u9AD8\u4E2D&#39;</span>
        }
      ],
    });
    <span class="hljs-keyword">return</span> {
        ...toRefs(state),
    };
}
</code></pre><h3>\u663E\u793A\u603B\u7ED3\u680F</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-table</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> <span class="hljs-attr">:summary</span>=<span class="hljs-string">&quot;summary&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-table</span>&gt;</span>
</code></pre><pre><code class="language-ts"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
        <span class="hljs-attr">columns</span>: [
        {
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u59D3\u540D&#39;</span>,
          <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;name&#39;</span>
        },
        {
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u6027\u522B&#39;</span>,
          <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;sex&#39;</span>
        },
        {
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u5B66\u5386&#39;</span>,
          <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;record&#39;</span>
        },
        {
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u5E74\u9F84&#39;</span>,
          <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;age&#39;</span>
        },
        {
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u5730\u5740&#39;</span>,
          <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;address&#39;</span>
        }
      ],
      <span class="hljs-attr">data</span>: [
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Tom&#39;</span>,
          <span class="hljs-attr">sex</span>: <span class="hljs-string">&#39;\u7537&#39;</span>,
          <span class="hljs-attr">record</span>: <span class="hljs-string">&#39;\u5C0F\u5B66&#39;</span>,
          <span class="hljs-attr">age</span>: <span class="hljs-number">13</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">&#39;\u5317\u4EAC&#39;</span>
        },
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Lucy&#39;</span>,
          <span class="hljs-attr">sex</span>: <span class="hljs-string">&#39;\u5973&#39;</span>,
          <span class="hljs-attr">record</span>: <span class="hljs-string">&#39;\u672C\u79D1&#39;</span>,
          <span class="hljs-attr">age</span>: <span class="hljs-number">34</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">&#39;\u4E0A\u6D77&#39;</span>
        },
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Jack&#39;</span>,
          <span class="hljs-attr">sex</span>: <span class="hljs-string">&#39;\u7537&#39;</span>,
          <span class="hljs-attr">record</span>: <span class="hljs-string">&#39;\u9AD8\u4E2D&#39;</span>,
          <span class="hljs-attr">age</span>: <span class="hljs-number">4</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">&#39;\u676D\u5DDE&#39;</span>
        }
      ],
      <span class="hljs-attr">summary</span>: <span class="hljs-function">() =&gt;</span> {
        <span class="hljs-keyword">return</span> {
          <span class="hljs-attr">value</span>: <span class="hljs-string">&#39;\u8FD9\u662F\u603B\u7ED3\u680F&#39;</span>,
          <span class="hljs-attr">colspan</span>: <span class="hljs-number">5</span>
        }
      }
    });
    <span class="hljs-keyword">return</span> {
        ...toRefs(state),
    };
}
</code></pre><h3>\u6761\u7EB9\u3001\u660E\u6697\u4EA4\u66FF</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-table</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns3&quot;</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data2&quot;</span> <span class="hljs-attr">:striped</span>=<span class="hljs-string">&quot;striped&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-table</span>&gt;</span>
</code></pre><pre><code class="language-ts"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      ...,
      <span class="hljs-attr">striped</span>: <span class="hljs-literal">true</span>,
    });
    <span class="hljs-keyword">return</span> {
        ...toRefs(state),
    };
}
</code></pre><h3>\u65E0\u6570\u636E\u9ED8\u8BA4\u5C55\u793A\uFF0C\u652F\u6301\u81EA\u5B9A\u4E49</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-table</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">nut-table</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">nut-table</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns3&quot;</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data3&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> #<span class="hljs-attr">nodata</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;no-data&quot;</span>&gt;</span>
        \u8FD9\u91CC\u662F\u81EA\u5B9A\u4E49\u5C55\u793A
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">nut-table</span>&gt;</span>
</code></pre><pre><code class="language-ts"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">columns</span>: [
        {
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u59D3\u540D&#39;</span>,
          <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;name&#39;</span>
        },
        {
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u6027\u522B&#39;</span>,
          <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;sex&#39;</span>
        },
        {
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u5B66\u5386&#39;</span>,
          <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;record&#39;</span>
        },
        {
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u5E74\u9F84&#39;</span>,
          <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;age&#39;</span>
        },
        {
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u5730\u5740&#39;</span>,
          <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;address&#39;</span>
        }
      ],
      <span class="hljs-attr">data</span>: [],
      <span class="hljs-attr">striped</span>: <span class="hljs-literal">true</span>,
    });
    <span class="hljs-keyword">return</span> {
        ...toRefs(state),
    };
}
</code></pre><h3>\u81EA\u5B9A\u4E49\u5355\u5143\u683C</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-table</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span>&gt;</span>
</code></pre><pre><code class="language-ts"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">columns</span>: [
        {
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u59D3\u540D&#39;</span>,
          <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;name&#39;</span>,
          <span class="hljs-attr">align</span>: <span class="hljs-string">&#39;center&#39;</span>
        },
        {
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u6027\u522B&#39;</span>,
          <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;sex&#39;</span>
        },
        {
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u5B66\u5386&#39;</span>,
          <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;record&#39;</span>
        },
        {
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u64CD\u4F5C&#39;</span>,
          <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;render&#39;</span>
        }
      ],
      <span class="hljs-attr">data</span>: [
          {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Tom&#39;</span>,
          <span class="hljs-attr">sex</span>: <span class="hljs-string">&#39;\u7537&#39;</span>,
          <span class="hljs-attr">record</span>: <span class="hljs-string">&#39;\u5C0F\u5B66&#39;</span>,
          <span class="hljs-attr">render</span>: <span class="hljs-function">() =&gt;</span> {
            <span class="hljs-keyword">return</span> h(
              Button,
              {
                <span class="hljs-attr">onClick</span>: <span class="hljs-function">() =&gt;</span> {
                  (Toast <span class="hljs-keyword">as</span> <span class="hljs-built_in">any</span>).text(<span class="hljs-string">&#39;hello&#39;</span>);
                },
                <span class="hljs-attr">size</span>: <span class="hljs-string">&#39;small&#39;</span>,
                <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;primary&#39;</span>
              },
              <span class="hljs-string">&#39;Hello&#39;</span>
            );
          }
        },
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Lucy&#39;</span>,
          <span class="hljs-attr">sex</span>: <span class="hljs-string">&#39;\u5973&#39;</span>,
          <span class="hljs-attr">record</span>: <span class="hljs-string">&#39;\u672C\u79D1&#39;</span>,
          <span class="hljs-attr">render</span>: <span class="hljs-function">() =&gt;</span> {
            <span class="hljs-keyword">return</span> h(Icon, { <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;dongdong&#39;</span>, <span class="hljs-attr">size</span>: <span class="hljs-string">&#39;14px&#39;</span> });
          }
        },
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Jack&#39;</span>,
          <span class="hljs-attr">sex</span>: <span class="hljs-string">&#39;\u7537&#39;</span>,
          <span class="hljs-attr">record</span>: <span class="hljs-string">&#39;\u9AD8\u4E2D&#39;</span>,
          <span class="hljs-attr">render</span>: <span class="hljs-function">() =&gt;</span> {
            <span class="hljs-keyword">return</span> h(
              Button,
              {
                <span class="hljs-attr">type</span>: <span class="hljs-string">&#39;success&#39;</span>,
                <span class="hljs-attr">size</span>: <span class="hljs-string">&#39;small&#39;</span>,
                <span class="hljs-attr">onClick</span>: <span class="hljs-function">() =&gt;</span> {
                  <span class="hljs-built_in">window</span>.open(<span class="hljs-string">&#39;https://www.jd.com&#39;</span>);
                }
              },
              <span class="hljs-string">&#39;\u8DF3\u8F6C\u5230\u4EAC\u4E1C&#39;</span>
            );
          }
        }
      ]
    });
    <span class="hljs-keyword">return</span> {
        ...toRefs(state),
    };
}
</code></pre><h3>\u652F\u6301\u5F02\u6B65\u6E32\u67D3</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-table</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span>&gt;</span>
</code></pre><pre><code class="language-ts"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">data</span>: [],
      <span class="hljs-attr">data1</span>: [
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Tom&#39;</span>,
          <span class="hljs-attr">sex</span>: <span class="hljs-string">&#39;\u7537&#39;</span>,
          <span class="hljs-attr">record</span>: <span class="hljs-string">&#39;\u5C0F\u5B66&#39;</span>,
          <span class="hljs-attr">age</span>: <span class="hljs-number">13</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">&#39;\u5317\u4EAC&#39;</span>
        },
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Lucy&#39;</span>,
          <span class="hljs-attr">sex</span>: <span class="hljs-string">&#39;\u5973&#39;</span>,
          <span class="hljs-attr">record</span>: <span class="hljs-string">&#39;\u672C\u79D1&#39;</span>,
          <span class="hljs-attr">age</span>: <span class="hljs-number">34</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">&#39;\u4E0A\u6D77&#39;</span>
        },
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Jack&#39;</span>,
          <span class="hljs-attr">sex</span>: <span class="hljs-string">&#39;\u7537&#39;</span>,
          <span class="hljs-attr">record</span>: <span class="hljs-string">&#39;\u9AD8\u4E2D&#39;</span>,
          <span class="hljs-attr">age</span>: <span class="hljs-number">4</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">&#39;\u676D\u5DDE&#39;</span>
        }
      ]
    });
    onMounted(<span class="hljs-function">() =&gt;</span> {
        <span class="hljs-built_in">setTimeout</span>(<span class="hljs-function">() =&gt;</span> {
            state.data = state.data1.slice();
        }, <span class="hljs-number">5000</span>);
    });
    <span class="hljs-keyword">return</span> {
        ...toRefs(state),
    };
}
</code></pre><h3>\u652F\u6301\u6392\u5E8F</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">nut-table</span> <span class="hljs-attr">:columns</span>=<span class="hljs-string">&quot;columns&quot;</span> <span class="hljs-attr">:data</span>=<span class="hljs-string">&quot;data&quot;</span> @<span class="hljs-attr">sorter</span>=<span class="hljs-string">&quot;handleSorter&quot;</span>&gt;</span>
</code></pre><pre><code class="language-ts"><span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {
    <span class="hljs-keyword">const</span> state = reactive({
      <span class="hljs-attr">columns</span>: [
        {
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u59D3\u540D&#39;</span>,
          <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;name&#39;</span>,
          <span class="hljs-attr">align</span>: <span class="hljs-string">&#39;center&#39;</span>,
          <span class="hljs-attr">sorter</span>: <span class="hljs-literal">true</span>
        },
        {
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u6027\u522B&#39;</span>,
          <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;sex&#39;</span>,
        },
        {
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u5B66\u5386&#39;</span>,
          <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;record&#39;</span>
        },
        {
          <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u5E74\u9F84&#39;</span>,
          <span class="hljs-attr">key</span>: <span class="hljs-string">&#39;age&#39;</span>,
          <span class="hljs-attr">sorter</span>: <span class="hljs-function">(<span class="hljs-params">row1: <span class="hljs-built_in">any</span>, row2: <span class="hljs-built_in">any</span></span>) =&gt;</span> { <span class="hljs-keyword">return</span> row1.age - row2.age }
        }
      ],
      <span class="hljs-attr">data</span>: [
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Tom&#39;</span>,
          <span class="hljs-attr">sex</span>: <span class="hljs-string">&#39;\u7537&#39;</span>,
          <span class="hljs-attr">record</span>: <span class="hljs-string">&#39;\u5C0F\u5B66&#39;</span>,
          <span class="hljs-attr">age</span>: <span class="hljs-number">10</span>
        },
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Lucy&#39;</span>,
          <span class="hljs-attr">sex</span>: <span class="hljs-string">&#39;\u5973&#39;</span>,
          <span class="hljs-attr">record</span>: <span class="hljs-string">&#39;\u672C\u79D1&#39;</span>,
          <span class="hljs-attr">age</span>: <span class="hljs-number">30</span>
        },
        {
          <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;Jack&#39;</span>,
          <span class="hljs-attr">sex</span>: <span class="hljs-string">&#39;\u7537&#39;</span>,
          <span class="hljs-attr">record</span>: <span class="hljs-string">&#39;\u9AD8\u4E2D&#39;</span>,
          <span class="hljs-attr">age</span>: <span class="hljs-number">4</span>
        }
      ]
    });
    
    <span class="hljs-keyword">const</span> handleSorter = <span class="hljs-function">(<span class="hljs-params">item: TableColumnProps</span>) =&gt;</span> {
      (Toast <span class="hljs-keyword">as</span> <span class="hljs-built_in">any</span>).text(<span class="hljs-string">\`<span class="hljs-subst">\${<span class="hljs-built_in">JSON</span>.stringify(item)}</span>\`</span>);
    }

    <span class="hljs-keyword">return</span> {
        ...toRefs(state),
    };
}
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>bordered</td><td>\u662F\u5426\u663E\u793A\u8FB9\u6846</td><td>Boolean</td><td><code>true</code></td></tr><tr><td>columns</td><td>\u8868\u5934\u6570\u636E</td><td>TableColumnProps[]</td><td><code>[]</code></td></tr><tr><td>data</td><td>\u8868\u683C\u6570\u636E</td><td>Object[]</td><td><code>[]</code></td></tr><tr><td>summary</td><td>\u662F\u5426\u663E\u793A\u7B80\u4ECB</td><td>Function</td><td>-</td></tr><tr><td>striped</td><td>\u6761\u7EB9\u662F\u5426\u660E\u6697\u4EA4\u66FF</td><td>Boolean</td><td><code>false</code></td></tr></tbody></table><h3>TableColumnProps</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>key</td><td>\u5217\u7684\u552F\u4E00\u6807\u8BC6</td><td>String</td><td>\`\`</td></tr><tr><td>title</td><td>\u8868\u5934\u6807\u9898</td><td>String</td><td>\`\`</td></tr><tr><td>align</td><td>\u5217\u7684\u5BF9\u9F50\u65B9\u5F0F\uFF0C\u53EF\u9009\u503C<code>left</code>,<code>center</code>,<code>right</code></td><td>String</td><td><code>left</code></td></tr><tr><td>sorter</td><td>\u6392\u5E8F\uFF0C\u53EF\u9009\u503C\u6709 <code>true</code>,<code>function</code>, <code>default</code>, \u5176\u4E2D <code>default</code>\u8868\u793A\u70B9\u51FB\u4E4B\u540E\u53EF\u80FD\u4F1A\u4F9D\u8D56\u63A5\u53E3, <code>function</code>\u53EF\u4EE5\u8FD4\u56DE\u5177\u4F53\u7684\u6392\u5E8F\u51FD\u6570, <code>default</code>\u8868\u793A\u91C7\u7528\u9ED8\u8BA4\u7684\u6392\u5E8F\u7B97\u6CD5</td><td>Boolean\u3001Function\u3001String</td><td>-</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>sorter</td><td>\u70B9\u51FB\u6392\u5E8F\u6309\u94AE\u89E6\u53D1</td><td>item: \u5F53\u524D\u70B9\u51FB\u7684\u8868\u5934\u7684\u6570\u636E</td></tr></tbody></table>`,37),c=[p],d={setup(r,{expose:s}){return s({frontmatter:{}}),(h,j)=>(n(),a("div",l,c))}};export{d as default};
