import{e as a,o as n,y as t}from"./vendor.js";const l={class:"markdown-body"},p=t(`<h1>Collapse \u6298\u53E0\u9762\u677F</h1><h3>\u4ECB\u7ECD</h3><p>\u53EF\u4EE5\u6298\u53E0/\u5C55\u5F00\u7684\u5185\u5BB9\u533A\u57DF\u3002</p><ul><li>\u5F53\u4FE1\u606F\u91CF\u8F83\u5927\u4E14\u5206\u7C7B\u8F83\u591A\u65F6\uFF0C\u53EF\u4F7F\u7528\u6298\u53E0\u9762\u677F\u8FDB\u884C\u5206\u7C7B\u6536\u7EB3\uFF1B</li><li>\u624B\u98CE\u7434\u662F\u4E00\u79CD\u7279\u6B8A\u7684\u6298\u53E0\u9762\u677F\uFF0C\u53EA\u5141\u8BB8\u5355\u4E2A\u5185\u5BB9\u7684\u5C55\u5F00\u3002</li></ul><h3>\u5B89\u88C5</h3><p><code>import { Collapse,CollapseItem } from &#39;nutui-react&#39;</code></p><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-jsx">&lt;Collapse activeName={[<span class="hljs-string">&#39;1&#39;</span>, <span class="hljs-string">&#39;2&#39;</span>]} icon=<span class="hljs-string">&quot;arrow-down&quot;</span> iconSize=<span class="hljs-string">&quot;16&quot;</span> iconColor=<span class="hljs-string">&quot;#999&quot;</span>&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">CollapseItem</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98981&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>
    \u4EAC\u4E1C\u201C\u5382\u76F4\u4F18\u54C1\u8BA1\u5212\u201D\u9996\u63A8\u201C\u653F\u5E9C\u4F18\u54C1\u9986\u201D 3\u5E74\u8986\u76D680%\u9547\u7EA7\u653F\u5E9C
  <span class="hljs-tag">&lt;/<span class="hljs-name">CollapseItem</span>&gt;</span></span>
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">CollapseItem</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98982&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>
    \u4EAC\u4E1C\u201C\u5382\u76F4\u4F18\u54C1\u8BA1\u5212\u201D\u9996\u63A8\u201C\u653F\u5E9C\u4F18\u54C1\u9986\u201D 3\u5E74\u8986\u76D680%\u9547\u7EA7\u653F\u5E9C
  <span class="hljs-tag">&lt;/<span class="hljs-name">CollapseItem</span>&gt;</span></span>
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">CollapseItem</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98983&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">disabled</span>&gt;</span>
    \u4EAC\u4E1C\u201C\u5382\u76F4\u4F18\u54C1\u8BA1\u5212\u201D\u9996\u63A8\u201C\u653F\u5E9C\u4F18\u54C1\u9986\u201D
  <span class="hljs-tag">&lt;/<span class="hljs-name">CollapseItem</span>&gt;</span></span>
&lt;/Collapse&gt;
</code></pre><h3>\u65E0icon\u6837\u5F0F\uFF0C\u7ED1\u5B9A\u70B9\u51FB\u4E8B\u4EF6</h3><pre><code class="language-jsx"><span class="hljs-keyword">import</span> React, { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;react&#39;</span>
<span class="hljs-keyword">import</span> { Collapse ,CollapseItem} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;nutui-react&#39;</span>
<span class="hljs-keyword">const</span> CollapseDemo = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> changeEnv = <span class="hljs-function">(<span class="hljs-params">isOpen: boolean, name: string</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(isOpen, name)
  }
  <span class="hljs-keyword">return</span> (  
  <span class="xml"><span class="hljs-tag">&lt;&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">Collapse</span> <span class="hljs-attr">activeName</span>=<span class="hljs-string">{[</span>&#39;<span class="hljs-attr">1</span>&#39;, &#39;<span class="hljs-attr">2</span>&#39;]} <span class="hljs-attr">change</span>=<span class="hljs-string">{(isOpen,</span> <span class="hljs-attr">name</span>) =&gt;</span> changeEnv(isOpen, name)}&gt;
  <span class="hljs-tag">&lt;<span class="hljs-name">CollapseItem</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98981&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>&gt;</span>
    \u4EAC\u4E1C\u201C\u5382\u76F4\u4F18\u54C1\u8BA1\u5212\u201D\u9996\u63A8\u201C\u653F\u5E9C\u4F18\u54C1\u9986\u201D 3\u5E74\u8986\u76D680%\u9547\u7EA7\u653F\u5E9C
  <span class="hljs-tag">&lt;/<span class="hljs-name">CollapseItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">CollapseItem</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98982&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>
    \u4EAC\u4E1C\u201C\u5382\u76F4\u4F18\u54C1\u8BA1\u5212\u201D\u9996\u63A8\u201C\u653F\u5E9C\u4F18\u54C1\u9986\u201D 3\u5E74\u8986\u76D680%\u9547\u7EA7\u653F\u5E9C
  <span class="hljs-tag">&lt;/<span class="hljs-name">CollapseItem</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">CollapseItem</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98983&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>
    \u4EAC\u4E1C\u201C\u5382\u76F4\u4F18\u54C1\u8BA1\u5212\u201D\u9996\u63A8\u201C\u653F\u5E9C\u4F18\u54C1\u9986\u201D
  <span class="hljs-tag">&lt;/<span class="hljs-name">CollapseItem</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Collapse</span>&gt;</span>
  
  <span class="hljs-tag">&lt;/&gt;</span></span>)

</code></pre><h3>\u624B\u98CE\u7434\u6A21\u5F0F</h3><pre><code class="language-jsx">&lt;Collapse activeName={[<span class="hljs-string">&#39;1&#39;</span>]} accordion={<span class="hljs-literal">true</span>} icon=<span class="hljs-string">&quot;arrow-down&quot;</span>&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">CollapseItem</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98981&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">subTitle</span>=<span class="hljs-string">{</span>&#39;\u6587\u672C\u5185\u5BB9&#39;}&gt;</span>
    \u4EAC\u4E1C\u201C\u5382\u76F4\u4F18\u54C1\u8BA1\u5212\u201D\u9996\u63A8\u201C\u653F\u5E9C\u4F18\u54C1\u9986\u201D 3\u5E74\u8986\u76D680%\u9547\u7EA7\u653F\u5E9C
  <span class="hljs-tag">&lt;/<span class="hljs-name">CollapseItem</span>&gt;</span></span>
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">CollapseItem</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98982&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>&gt;</span>
    \u4EAC\u4E1C\u201C\u5382\u76F4\u4F18\u54C1\u8BA1\u5212\u201D\u9996\u63A8\u201C\u653F\u5E9C\u4F18\u54C1\u9986\u201D 3\u5E74\u8986\u76D680%\u9547\u7EA7\u653F\u5E9C
  <span class="hljs-tag">&lt;/<span class="hljs-name">CollapseItem</span>&gt;</span></span>
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">CollapseItem</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98983&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span>&gt;</span>
    \u4EAC\u4E1C\u201C\u5382\u76F4\u4F18\u54C1\u8BA1\u5212\u201D\u9996\u63A8\u201C\u653F\u5E9C\u4F18\u54C1\u9986\u201D
  <span class="hljs-tag">&lt;/<span class="hljs-name">CollapseItem</span>&gt;</span></span>
&lt;/Collapse&gt;
</code></pre><h3>\u81EA\u5B9A\u4E49\u6298\u53E0\u56FE\u6807</h3><pre><code class="language-jsx">&lt;Collapse activeName={[<span class="hljs-string">&#39;1&#39;</span>]} accordion={<span class="hljs-literal">true</span>} icon=<span class="hljs-string">&quot;arrow-right2&quot;</span> rotate={<span class="hljs-number">90</span>}&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">CollapseItem</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98981&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;arrow-down&quot;</span>&gt;</span>
    \u4EAC\u4E1C\u201C\u5382\u76F4\u4F18\u54C1\u8BA1\u5212\u201D\u9996\u63A8\u201C\u653F\u5E9C\u4F18\u54C1\u9986\u201D 3\u5E74\u8986\u76D680%\u9547\u7EA7\u653F\u5E9C
  <span class="hljs-tag">&lt;/<span class="hljs-name">CollapseItem</span>&gt;</span></span>
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">CollapseItem</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98982&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;arrow-down&quot;</span>&gt;</span>
    \u4EAC\u4E1C\u201C\u5382\u76F4\u4F18\u54C1\u8BA1\u5212\u201D\u9996\u63A8\u201C\u653F\u5E9C\u4F18\u54C1\u9986\u201D 3\u5E74\u8986\u76D680%\u9547\u7EA7\u653F\u5E9C
  <span class="hljs-tag">&lt;/<span class="hljs-name">CollapseItem</span>&gt;</span></span>
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">CollapseItem</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98983&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;arrow-down&quot;</span>&gt;</span>
    \u4EAC\u4E1C\u201C\u5382\u76F4\u4F18\u54C1\u8BA1\u5212\u201D\u9996\u63A8\u201C\u653F\u5E9C\u4F18\u54C1\u9986\u201D
  <span class="hljs-tag">&lt;/<span class="hljs-name">CollapseItem</span>&gt;</span></span>
&lt;/Collapse&gt;
</code></pre><h3>\u81EA\u5B9A\u4E49title\u56FE\u6807</h3><pre><code class="language-jsx">&lt;Collapse activeName={[<span class="hljs-string">&#39;1&#39;</span>]} accordion={<span class="hljs-literal">true</span>} icon=<span class="hljs-string">&quot;arrow-down&quot;</span>&gt;
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">CollapseItem</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98981&quot;</span>
    <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;1&quot;</span>
    <span class="hljs-attr">titleIcon</span>=<span class="hljs-string">&quot;checked&quot;</span>
    <span class="hljs-attr">titleIconSize</span>=<span class="hljs-string">&quot;16&quot;</span>
    <span class="hljs-attr">titleIconColor</span>=<span class="hljs-string">&quot;red&quot;</span>
    <span class="hljs-attr">titleIconPosition</span>=<span class="hljs-string">&quot;left&quot;</span>
  &gt;</span>
    \u4EAC\u4E1C\u201C\u5382\u76F4\u4F18\u54C1\u8BA1\u5212\u201D\u9996\u63A8\u201C\u653F\u5E9C\u4F18\u54C1\u9986\u201D 3\u5E74\u8986\u76D680%\u9547\u7EA7\u653F\u5E9C
  <span class="hljs-tag">&lt;/<span class="hljs-name">CollapseItem</span>&gt;</span></span>
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">CollapseItem</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98982&quot;</span>
    <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;2&quot;</span>
    <span class="hljs-attr">titleIcon</span>=<span class="hljs-string">{</span>&#39;<span class="hljs-attr">heart-fill</span>&#39;}
    <span class="hljs-attr">titleIconColor</span>=<span class="hljs-string">{</span>&#39;<span class="hljs-attr">red</span>&#39;}
    <span class="hljs-attr">titleIconPosition</span>=<span class="hljs-string">{</span>&#39;<span class="hljs-attr">right</span>&#39;}
  &gt;</span>
    \u4EAC\u4E1C\u201C\u5382\u76F4\u4F18\u54C1\u8BA1\u5212\u201D\u9996\u63A8\u201C\u653F\u5E9C\u4F18\u54C1\u9986\u201D 3\u5E74\u8986\u76D680%\u9547\u7EA7\u653F\u5E9C
  <span class="hljs-tag">&lt;/<span class="hljs-name">CollapseItem</span>&gt;</span></span>
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">CollapseItem</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u98983&quot;</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;3&quot;</span> <span class="hljs-attr">icon</span>=<span class="hljs-string">&quot;arrow-down&quot;</span>&gt;</span>
    \u4EAC\u4E1C\u201C\u5382\u76F4\u4F18\u54C1\u8BA1\u5212\u201D\u9996\u63A8\u201C\u653F\u5E9C\u4F18\u54C1\u9986\u201D
  <span class="hljs-tag">&lt;/<span class="hljs-name">CollapseItem</span>&gt;</span></span>
&lt;/Collapse&gt;
</code></pre><h3>\u52A8\u6001\u6539\u53D8\u6570\u636E</h3><pre><code class="language-jsx"><span class="hljs-keyword">import</span> React, { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;react&#39;</span>
<span class="hljs-keyword">import</span> { Collapse ,CollapseItem} <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;nutui-react&#39;</span>
<span class="hljs-keyword">const</span> CollapseDemo = <span class="hljs-function">() =&gt;</span> {
  <span class="hljs-keyword">const</span> [currIndex, setCurrIndex] = useState(<span class="hljs-number">2</span>)
  <span class="hljs-keyword">const</span> [domData, setDomData] = useState([
    {
      <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u6807\u98981&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;1&#39;</span>,
      <span class="hljs-attr">data</span>: <span class="hljs-string">&#39;\u4EAC\u4E1C\u201C\u5382\u76F4\u4F18\u54C1\u8BA1\u5212\u201D\u9996\u63A8\u201C\u653F\u5E9C\u4F18\u54C1\u9986\u201D 3\u5E74\u8986\u76D680%\u9547\u7EA7\u653F\u5E9C&#39;</span>,
    },
    {
      <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u6807\u989812&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;2&#39;</span>,
      <span class="hljs-attr">data</span>: <span class="hljs-string">&#39;\u4EAC\u4E1C\u201C\u5382\u76F4\u4F18\u54C1\u8BA1\u5212\u201D\u9996\u63A8\u201C\u653F\u5E9C\u4F18\u54C1\u9986\u201D 3\u5E74\u8986\u76D680%\u9547\u7EA7\u653F\u5E9C&#39;</span>,
    },
    {
      <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u6807\u989813&#39;</span>,
      <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;3&#39;</span>,
      <span class="hljs-attr">data</span>: <span class="hljs-string">&#39;\u4EAC\u4E1C\u201C\u5382\u76F4\u4F18\u54C1\u8BA1\u5212\u201D\u9996\u63A8\u201C\u653F\u5E9C\u4F18\u54C1\u9986\u201D 3\u5E74\u8986\u76D680%\u9547\u7EA7\u653F\u5E9C&#39;</span>,
    },
  ])
  <span class="hljs-keyword">const</span> changeEnv = <span class="hljs-function">(<span class="hljs-params">isOpen: boolean, name: string</span>) =&gt;</span> {
    <span class="hljs-built_in">console</span>.log(isOpen, name)
  }
  <span class="hljs-keyword">const</span> changeData = <span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">const</span> newData = [
      {
        <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u6807\u989821&#39;</span>,
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;1&#39;</span>,
        <span class="hljs-attr">data</span>: <span class="hljs-string">&#39;\u4EAC\u4E1C\u201C\u5382\u76F4\u4F18\u54C1\u8BA1\u5212\u201D\u9996\u63A8\u201C\u653F\u5E9C\u4F18\u54C1\u9986\u201D 3\u5E74\u8986\u76D680%\u9547\u7EA7\u653F\u5E9C&#39;</span>,
      },
      {
        <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u6807\u989822&#39;</span>,
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;2&#39;</span>,
        <span class="hljs-attr">data</span>: <span class="hljs-string">&#39;\u4EAC\u4E1C\u201C\u5382\u76F4\u4F18\u54C1\u8BA1\u5212\u201D\u9996\u63A8\u201C\u653F\u5E9C\u4F18\u54C1\u9986\u201D 3\u5E74\u8986\u76D680%\u9547\u7EA7\u653F\u5E9C&#39;</span>,
      },
      {
        <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u6807\u989823&#39;</span>,
        <span class="hljs-attr">name</span>: <span class="hljs-string">&#39;3&#39;</span>,
        <span class="hljs-attr">data</span>: <span class="hljs-string">&#39;\u4EAC\u4E1C\u201C\u5382\u76F4\u4F18\u54C1\u8BA1\u5212\u201D\u9996\u63A8\u201C\u653F\u5E9C\u4F18\u54C1\u9986\u201D 3\u5E74\u8986\u76D680%\u9547\u7EA7\u653F\u5E9C\u4EAC\u4E1C\u201C\u5382\u76F4\u4F18\u54C1\u8BA1\u5212\u201D\u9996\u63A8\u201C\u653F\u5E9C\u4F18\u54C1\u9986\u201D 3\u5E74\u8986\u76D680%\u9547\u7EA7\u653F\u5E9C\u4EAC\u4E1C\u201C\u5382\u76F4\u4F18\u54C1\u8BA1\u5212\u201D\u9996\u63A8\u201C\u653F\u5E9C\u4F18\u54C1\u9986\u201D 3\u5E74\u8986\u76D680%\u9547\u7EA7\u653F\u5E9C\u4EAC\u4E1C\u201C\u5382\u76F4\u4F18\u54C1\u8BA1\u5212\u201D\u9996\u63A8\u201C\u653F\u5E9C\u4F18\u54C1\u9986\u201D 3\u5E74\u8986\u76D680%\u9547\u7EA7\u653F\u5E9C&#39;</span>,
      },
    ]
    setDomData(newData)
    setCurrIndex(<span class="hljs-number">3</span>)
  }
  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Collapse</span> <span class="hljs-attr">activeName</span>=<span class="hljs-string">{currIndex}</span> <span class="hljs-attr">accordion</span>=<span class="hljs-string">{true}</span>&gt;</span>
      {domData.map((item, index) =&gt; {
        return (
          <span class="hljs-tag">&lt;<span class="hljs-name">CollapseItem</span> <span class="hljs-attr">title</span>=<span class="hljs-string">{item.title}</span> <span class="hljs-attr">name</span>=<span class="hljs-string">{item.name}</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{index}</span>&gt;</span>
            {item.data}
          <span class="hljs-tag">&lt;/<span class="hljs-name">CollapseItem</span>&gt;</span>
        )
      })}
    <span class="hljs-tag">&lt;/<span class="hljs-name">Collapse</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> changeData()}&gt;\u70B9\u51FB\u6211<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
    <span class="hljs-tag">&lt;/&gt;</span></span>
  )
</code></pre><h2>API</h2><h3>Collapse Prop</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>activeName</td><td>\u5F53\u524D\u5C55\u5F00\u9762\u677F\u7684 name</td><td>\u624B\u98CE\u7434\u6A21\u5F0F\uFF1Astring/number \u975E\u624B\u98CE\u7434\u6A21\u5F0F\uFF1A(string/number)[]</td><td>-</td></tr><tr><td>accordion</td><td>\u662F\u5426\u5F00\u542F\u624B\u98CE\u7434\u6A21\u5F0F</td><td>boolean</td><td>false</td></tr><tr><td>icon</td><td>\u56FE\u6807\u94FE\u63A5/\u6216\u4F7F\u7528 NutUI \u7684 icon</td><td>String</td><td>-</td></tr><tr><td>iconSize</td><td>\u56FE\u6807\u5927\u5C0F</td><td>String</td><td>\u201816px\u2019</td></tr><tr><td>iconColor</td><td>\u56FE\u6807\u989C\u8272</td><td>String</td><td>\u2018\u2019</td></tr><tr><td>rotate</td><td>\u70B9\u51FB\u6298\u53E0\u548C\u5C55\u5F00\u7684\u65CB\u8F6C\u89D2\u5EA6,\u5728\u81EA\u5B9A\u4E49\u56FE\u6807\u6A21\u5F0F\u4E0B\u751F\u6548</td><td>string/number</td><td>180</td></tr></tbody></table><h3>CollapseItem Prop</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>name</td><td>\u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u5FC5\u586B</td><td>string \\ number</td><td>-</td></tr><tr><td>title</td><td>\u6807\u9898\u680F\u5DE6\u4FA7\u5185\u5BB9</td><td>string</td><td>\u2018\u2019</td></tr><tr><td>disabled</td><td>\u6807\u9898\u680F\u662F\u5426\u7981\u7528</td><td>boolean</td><td>false</td></tr><tr><td>subTitle</td><td>\u6807\u9898\u680F\u526F\u6807\u9898</td><td>string</td><td>\u2018\u2019</td></tr><tr><td>titleIcon</td><td>\u6807\u9898\u56FE\u6807\u94FE\u63A5/\u6216\u4F7F\u7528 NutUI \u7684 icon</td><td>string</td><td>\u2018\u2019</td></tr><tr><td>titleIconColor</td><td>\u6807\u9898\u56FE\u6807\u989C\u8272</td><td>string</td><td>\u2018\u2019</td></tr><tr><td>titleIconSize</td><td>\u6807\u9898\u56FE\u6807\u5927\u5C0F</td><td>string</td><td>\u2018\u2019</td></tr><tr><td>titleIconPosition</td><td>\u6807\u9898\u56FE\u6807\u4F4D\u7F6E</td><td>string</td><td>\u2018\u2019</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u5207\u6362\u9762\u677F\u65F6\u89E6\u53D1</td><td>isOpen:\u662F\u5426\u6253\u5F00\u72B6\u6001\uFF1Bname\uFF1A\u5F53\u524D\u70B9\u51FB\u7684name\u503C</td></tr></tbody></table>`,26),c=[p],i={setup(e,{expose:s}){return s({frontmatter:{}}),(r,o)=>(n(),a("div",l,c))}};export{i as default};
