import{e as a,o as n,y as t}from"./vendor.js";const l={class:"markdown-body"},p=t(`<h1>Checkbox \u590D\u9009\u6309\u94AE</h1><h3>\u4ECB\u7ECD</h3><p>\u591A\u9009\u6309\u94AE\u7528\u4E8E\u9009\u62E9\u3002</p><h3>\u5B89\u88C5</h3><pre><code class="language-ts"><span class="hljs-keyword">import</span> { Checkbox, CheckBoxGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-react&#39;</span>;

</code></pre><h2>\u57FA\u672C\u7528\u6CD5</h2><pre><code class="language-html">const CheckBoxDemo = () =&gt; {
  const [checked, setChecked] = useState(true)
  return (<span class="hljs-tag">&lt;&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">CheckBox</span> <span class="hljs-attr">textPosition</span>=<span class="hljs-string">{</span>&#39;<span class="hljs-attr">left</span>&#39;} <span class="hljs-attr">label</span>=<span class="hljs-string">{</span>&#39;\u590D\u9009\u6846&#39;} <span class="hljs-attr">checked</span>=<span class="hljs-string">{checked}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">CheckBox</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">CheckBox</span> <span class="hljs-attr">textPosition</span>=<span class="hljs-string">{</span>&#39;<span class="hljs-attr">right</span>&#39;} <span class="hljs-attr">label</span>=<span class="hljs-string">{</span>&#39;\u590D\u9009\u6846&#39;} <span class="hljs-attr">checked</span>=<span class="hljs-string">{false}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">CheckBox</span>&gt;</span>
  <span class="hljs-tag">&lt;/&gt;</span>
  )
}
</code></pre><h2>\u7981\u7528\u72B6\u6001</h2><pre><code class="language-html">const CheckBoxDemo = () =&gt; {
  return (<span class="hljs-tag">&lt;&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">CheckBox</span>
      <span class="hljs-attr">textPosition</span>=<span class="hljs-string">{</span>&#39;<span class="hljs-attr">right</span>&#39;}
      <span class="hljs-attr">label</span>=<span class="hljs-string">{</span>&#39;\u672A\u9009\u65F6\u7981\u7528\u72B6\u6001&#39;}
      <span class="hljs-attr">checked</span>=<span class="hljs-string">{false}</span>
      <span class="hljs-attr">disabled</span>=<span class="hljs-string">{true}</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">CheckBox</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">CheckBox</span>
      <span class="hljs-attr">textPosition</span>=<span class="hljs-string">{</span>&#39;<span class="hljs-attr">right</span>&#39;}
      <span class="hljs-attr">label</span>=<span class="hljs-string">{</span>&#39;\u9009\u4E2D\u65F6\u7981\u7528\u72B6\u6001&#39;}
      <span class="hljs-attr">checked</span>=<span class="hljs-string">{true}</span>
      <span class="hljs-attr">disabled</span>=<span class="hljs-string">{true}</span>
    &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">CheckBox</span>&gt;</span>
  <span class="hljs-tag">&lt;/&gt;</span>)
}
</code></pre><h2>\u81EA\u5B9A\u4E49\u5C3A\u5BF8</h2><pre><code class="language-html">const CheckBoxDemo = () =&gt; {
  return (<span class="hljs-tag">&lt;&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">CheckBox</span> <span class="hljs-attr">label</span>=<span class="hljs-string">{</span>&#39;\u81EA\u5B9A\u4E49\u5C3A\u5BF8<span class="hljs-attr">25</span>&#39;} <span class="hljs-attr">iconSize</span>=<span class="hljs-string">{25}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">CheckBox</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">CheckBox</span> <span class="hljs-attr">label</span>=<span class="hljs-string">{</span>&#39;\u81EA\u5B9A\u4E49\u5C3A\u5BF8<span class="hljs-attr">10</span>&#39;} <span class="hljs-attr">iconSize</span>=<span class="hljs-string">{10}</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">CheckBox</span>&gt;</span>
  <span class="hljs-tag">&lt;/&gt;</span>)
}
</code></pre><h2>\u81EA\u5B9A\u4E49\u56FE\u6807</h2><p>\u8FD9\u91CC\u5EFA\u8BAE\u540C\u65F6\u8BBE\u7F6E <code>iconName</code> \u548C <code>iconActiveName</code> \u5C5E\u6027</p><pre><code class="language-html">const CheckBoxDemo = () =&gt; {
  return (<span class="hljs-tag">&lt;&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">CheckBox</span> <span class="hljs-attr">iconName</span>=<span class="hljs-string">&quot;checklist&quot;</span> <span class="hljs-attr">iconActiveName</span>=<span class="hljs-string">&quot;checklist&quot;</span>&gt;</span>\u81EA\u5B9A\u4E49\u56FE\u6807<span class="hljs-tag">&lt;/<span class="hljs-name">CheckBox</span>&gt;</span>
  <span class="hljs-tag">&lt;/&gt;</span>)
}
</code></pre><h2>change\u4E8B\u4EF6</h2><p>\u503C\u53D1\u751F\u53D8\u5316\u65F6\uFF0C\u5C06\u89E6\u53D1change\u4E8B\u4EF6</p><pre><code class="language-html">const CheckBoxDemo = () =&gt; {
  return (<span class="hljs-tag">&lt;&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">CheckBox</span>
      <span class="hljs-attr">checked</span>=<span class="hljs-string">{false}</span>
      <span class="hljs-attr">onChange</span>=<span class="hljs-string">{(state,</span> <span class="hljs-attr">label</span>) =&gt;</span> {
      Toast.text(\`\u60A8\${state ? &#39;\u9009\u4E2D&#39; : &#39;\u53D6\u6D88&#39;}\u4E86\${label}\`)
      }}
      &gt;
      change\u590D\u9009\u6846
    <span class="hljs-tag">&lt;/<span class="hljs-name">CheckBox</span>&gt;</span>
  <span class="hljs-tag">&lt;/&gt;</span>)
}
</code></pre><h2>CheckBoxGroup\u4F7F\u7528</h2><pre><code class="language-html">const CheckBoxDemo = () =&gt; {
  const [checkboxgroup1, setCheckboxgroup1] = useState([&#39;1&#39;])
  return (
    <span class="hljs-tag">&lt;<span class="hljs-name">CheckBoxGroup</span>
      <span class="hljs-attr">checkedValue</span>=<span class="hljs-string">{checkboxgroup1}</span>
      <span class="hljs-attr">onChange</span>=<span class="hljs-string">{(value)</span> =&gt;</span> {
    console.log(value)
    setCheckboxgroup1(value)
    }}
    &gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">CheckBox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{false}</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>
        \u7EC4\u5408\u590D\u9009\u6846
      <span class="hljs-tag">&lt;/<span class="hljs-name">CheckBox</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">CheckBox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{false}</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>
        \u7EC4\u5408\u590D\u9009\u6846
      <span class="hljs-tag">&lt;/<span class="hljs-name">CheckBox</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">CheckBox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{false}</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>
        \u7EC4\u5408\u590D\u9009\u6846
      <span class="hljs-tag">&lt;/<span class="hljs-name">CheckBox</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">CheckBox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{false}</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;4&quot;</span>&gt;</span>
        \u7EC4\u5408\u590D\u9009\u6846
      <span class="hljs-tag">&lt;/<span class="hljs-name">CheckBox</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">CheckBoxGroup</span>&gt;</span>
  )
}
</code></pre><h2>CheckBoxGroup \u5168\u9009/\u53D6\u6D88</h2><pre><code class="language-html">const CheckBoxDemo = () =&gt; {
  const [checkboxgroup2, setCheckboxgroup2] = useState([&#39;1&#39;])
  const checkboxgroup2Ref = useRef(null)
  return (<span class="hljs-tag">&lt;&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">CheckBoxGroup</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">{{}}</span>
      <span class="hljs-attr">ref</span>=<span class="hljs-string">{checkboxgroup2Ref}</span>
      <span class="hljs-attr">checkedValue</span>=<span class="hljs-string">{checkboxgroup2}</span>
      <span class="hljs-attr">onChange</span>=<span class="hljs-string">{(value)</span> =&gt;</span> {
    Toast.text(\`\${value.length === 2 ? &#39;\u5168\u9009&#39; : &#39;\u53D6\u6D88\u5168\u9009&#39;}\`)
    }}
    &gt;
    <span class="hljs-tag">&lt;<span class="hljs-name">CheckBox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{false}</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>
      \u7EC4\u5408\u590D\u9009\u6846
    <span class="hljs-tag">&lt;/<span class="hljs-name">CheckBox</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">CheckBox</span> <span class="hljs-attr">checked</span>=<span class="hljs-string">{false}</span> <span class="hljs-attr">label</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>
      \u7EC4\u5408\u590D\u9009\u6846
    <span class="hljs-tag">&lt;/<span class="hljs-name">CheckBox</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">CheckBoxGroup</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;primary&quot;</span>
      <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {
    ;(checkboxgroup2Ref.current as any).toggleAll(true)
    }}
    &gt;
    \u5168\u9009
    <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Button</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;info&quot;</span>
      <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {
    ;(checkboxgroup2Ref.current as any).toggleAll(false)
    }}
    &gt;
    \u53D6\u6D88
    <span class="hljs-tag">&lt;/<span class="hljs-name">Button</span>&gt;</span>
  <span class="hljs-tag">&lt;/&gt;</span>)
}
</code></pre><h2>Checkbox</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>checked</td><td>\u662F\u5426\u5904\u4E8E\u9009\u4E2D\u72B6\u6001</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u9009\u62E9</td><td>Boolean</td><td><code>false</code></td></tr><tr><td>textPosition</td><td>\u6587\u672C\u6240\u5728\u7684\u4F4D\u7F6E\uFF0C\u53EF\u9009\u503C\uFF1A<code>left</code>,<code>right</code></td><td>String</td><td><code>right</code></td></tr><tr><td>iconSize</td><td><a href="#/icon">\u56FE\u6807\u5C3A\u5BF8</a></td><td>String\u3001Number</td><td><code>18</code></td></tr><tr><td>iconName</td><td><a href="#/icon">\u56FE\u6807\u540D\u79F0</a>\uFF0C\u9009\u4E2D\u524D(\u5EFA\u8BAE\u548C<code>iconActiveName</code>\u4E00\u8D77\u4FEE\u6539)</td><td>String</td><td><code>&#39;check-normal&#39;</code></td></tr><tr><td>iconActiveName</td><td><a href="#/icon">\u56FE\u6807\u540D\u79F0</a>\uFF0C\u9009\u4E2D\u540E(\u5EFA\u8BAE\u548C<code>iconName</code>\u4E00\u8D77\u4FEE\u6539)</td><td>String</td><td><code>&#39;checked&#39;</code></td></tr><tr><td>label</td><td>\u590D\u9009\u6846\u7684\u6587\u672C\u5185\u5BB9</td><td>String</td><td>-</td></tr></tbody></table><h2>CheckBoxGroup</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>checkedValue</td><td>\u5F53\u524D\u9009\u4E2D\u9879\u7684\u6807\u8BC6\u7B26\uFF0C\u548C <code>label</code> \u76F8\u5BF9\u5E94</td><td>String</td><td>-</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u9009\u62E9,\u5C06\u7528\u4E8E\u5176\u4E0B\u7684\u5168\u90E8\u590D\u9009\u6846</td><td>Boolean</td><td><code>false</code></td></tr></tbody></table><h2>Checkbox Event</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u503C\u53D8\u5316\u65F6\u89E6\u53D1</td><td>(state, label),<code>state</code>\u4EE3\u8868\u5F53\u524D\u72B6\u6001\uFF0C<code>label</code>\u8868\u793A\u5F53\u524D\u9009\u4E2D\u7684\u503C</td></tr></tbody></table><h2>CheckBoxGroup Event</h2><table><thead><tr><th>\u5B57\u6BB5</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u503C\u53D8\u5316\u65F6\u89E6\u53D1</td><td>label,<code>label</code>\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u8868\u793A\u5F53\u524D\u9009\u4E2D\u9879\u7684\u96C6\u5408</td></tr></tbody></table>`,29),c=[p],d={setup(e,{expose:s}){return s({frontmatter:{}}),(o,r)=>(n(),a("div",l,c))}};export{d as default};
