import{e as t,o as a,y as n}from"./vendor.js";const l={class:"markdown-body"},e=n(`<h1>Dialog \u5BF9\u8BDD\u6846</h1><h3>\u4ECB\u7ECD</h3><p>\u6A21\u6001\u5BF9\u8BDD\u6846\uFF0C\u5728\u6D6E\u5C42\u4E2D\u663E\u793A\uFF0C\u5F15\u5BFC\u7528\u6237\u8FDB\u884C\u76F8\u5173\u64CD\u4F5C\uFF0C\u5E38\u7528\u4E8E\u6D88\u606F\u63D0\u793A\u3001\u6D88\u606F\u786E\u8BA4\uFF0C\u6216\u5728\u5F53\u524D\u9875\u9762\u5185\u5B8C\u6210\u7279\u5B9A\u7684\u4EA4\u4E92\u64CD\u4F5C\u3002</p><p>\u5F39\u51FA\u6846\u7EC4\u4EF6\u652F\u6301\u51FD\u6570\u8C03\u7528\u548C\u7EC4\u4EF6\u8C03\u7528\u4E24\u79CD\u65B9\u5F0F\u3002</p><h3>\u5B89\u88C5</h3><p><code>import { Dialog } from &#39;nutui-react&#39;</code></p><h2>\u4EE3\u7801\u6F14\u793A</h2><h3>\u51FD\u6570\u5F0F\u8C03\u7528</h3><pre><code class="language-tsx">&lt;Cell title=<span class="hljs-string">&quot;\u57FA\u7840\u5F39\u6846&quot;</span> onClick={<span class="hljs-function">() =&gt;</span> {
    Dialog.alert({
        <span class="hljs-attr">title</span>: <span class="hljs-string">&#39;\u57FA\u7840\u5F39\u6846&#39;</span>,
        <span class="hljs-attr">content</span>: <span class="hljs-string">&#39;\u652F\u6301\u51FD\u6570\u8C03\u7528\u548C\u7EC4\u4EF6\u8C03\u7528\u4E24\u79CD\u65B9\u5F0F\u3002&#39;</span>
    });
}}&gt;&lt;/Cell&gt;
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u65E0\u6807\u9898\u5F39\u6846&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {
        Dialog.alert({
        content: &#39;\u65E0\u6807\u9898\u5F39\u6846&#39;
    });
}}&gt;<span class="hljs-tag">&lt;/<span class="hljs-name">Cell</span>&gt;</span></span>
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u63D0\u793A\u5F39\u6846&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {
    Dialog.alert({
        title: &#39;\u6E29\u99A8\u63D0\u793A&#39;,
        content: &#39;\u652F\u6301\u51FD\u6570\u8C03\u7528\u548C\u7EC4\u4EF6\u8C03\u7528\u4E24\u79CD\u65B9\u5F0F\u3002&#39;,
        noCancelBtn: true
    });
}}&gt;<span class="hljs-tag">&lt;/<span class="hljs-name">Cell</span>&gt;</span></span>
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5E95\u90E8\u6309\u94AE \u5782\u76F4\u8C03\u7528&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> {
    Dialog.alert({
        title: &#39;\u6E29\u99A8\u63D0\u793A&#39;,
        content: &#39;\u652F\u6301\u51FD\u6570\u8C03\u7528\u548C\u7EC4\u4EF6\u8C03\u7528\u4E24\u79CD\u65B9\u5F0F\u3002&#39;,
        footerDirection: &#39;vertical&#39;
    });
}}&gt;<span class="hljs-tag">&lt;/<span class="hljs-name">Cell</span>&gt;</span></span>
</code></pre><h3>\u7EC4\u4EF6\u8C03\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">const</span> [visible1, setVisible1] = useState(<span class="hljs-literal">false</span>);
<span class="hljs-keyword">const</span> [visible2, setVisible2] = useState(<span class="hljs-literal">false</span>);

<span class="hljs-keyword">return</span> <span class="xml"><span class="hljs-tag">&lt;&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u57FA\u7840\u5F39\u6846&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> setVisible1(true)}&gt;<span class="hljs-tag">&lt;/<span class="hljs-name">Cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Dialog</span> 
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u7EC4\u4EF6\u8C03\u7528&quot;</span>
    <span class="hljs-attr">visible</span>=<span class="hljs-string">{visible1}</span>
    <span class="hljs-attr">onOk</span>=<span class="hljs-string">{()</span> =&gt;</span> setVisible1(false)}
    onCancel={() =&gt; setVisible1(false)}
&gt;
    \u5982\u679C\u9700\u8981\u5728\u5F39\u7A97\u5185\u5D4C\u5165\u7EC4\u4EF6\u6216\u5176\u4ED6\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u53EF\u4EE5\u4F7F\u7528\u7EC4\u4EF6\u8C03\u7528\u7684\u65B9\u5F0F\u3002
<span class="hljs-tag">&lt;/<span class="hljs-name">Dialog</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Cell</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u5E95\u90E8\u6309\u94AE \u5782\u76F4\u8C03\u7528&quot;</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{()</span> =&gt;</span> setVisible2(true)}&gt;<span class="hljs-tag">&lt;/<span class="hljs-name">Cell</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">Dialog</span> 
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u7EC4\u4EF6\u8C03\u7528&quot;</span>
    <span class="hljs-attr">visible</span>=<span class="hljs-string">{visible2}</span>
    <span class="hljs-attr">lockScroll</span>=<span class="hljs-string">{true}</span>
    <span class="hljs-attr">footerDirection</span>=<span class="hljs-string">&#39;vertical&#39;</span>
    <span class="hljs-attr">onOk</span>=<span class="hljs-string">{()</span> =&gt;</span> setVisible2(false)}
    onCancel={() =&gt; setVisible2(false)}
&gt;
    \u5982\u679C\u9700\u8981\u5728\u5F39\u7A97\u5185\u5D4C\u5165\u7EC4\u4EF6\u6216\u5176\u4ED6\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u53EF\u4EE5\u4F7F\u7528\u7EC4\u4EF6\u8C03\u7528\u7684\u65B9\u5F0F\u3002
<span class="hljs-tag">&lt;/<span class="hljs-name">Dialog</span>&gt;</span>
<span class="hljs-tag">&lt;/&gt;</span></span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>visible</td><td>\u5BF9\u8BDD\u6846\u662F\u5426\u53EF\u89C1</td><td>boolean</td><td>-</td></tr><tr><td>title</td><td>\u6807\u9898</td><td>ReactNode</td><td>-</td></tr><tr><td>content</td><td>\u5BF9\u8BDD\u6846\u7684\u5185\u5BB9\uFF0C\u9002\u7528\u4E8E\u51FD\u6570\u5F0F\u8C03\u7528</td><td>ReactNode</td><td>-</td></tr><tr><td>footer</td><td>\u81EA\u5B9A\u4E49\u9875\u811A\uFF0C\u4F20\u5165 null \u5219\u4E0D\u663E\u793A</td><td>ReactNode</td><td>-</td></tr><tr><td>okText</td><td>\u786E\u8BA4\u6309\u94AE\u6587\u6848</td><td>ReactNode</td><td>\u2018\u786E\u5B9A\u2019</td></tr><tr><td>cancelText</td><td>\u53D6\u6D88\u6309\u94AE\u6587\u6848</td><td>ReactNode</td><td>\u2018\u53D6\u6D88\u2019</td></tr><tr><td>mask</td><td>\u662F\u5426\u5C55\u793A\u906E\u7F69</td><td>boolean</td><td>true</td></tr><tr><td>noOkBtn</td><td>\u662F\u5426\u9690\u85CF\u786E\u5B9A\u6309\u94AE</td><td>boolean</td><td>false</td></tr><tr><td>noCancelBtn</td><td>\u662F\u5426\u9690\u85CF\u53D6\u6D88\u6309\u94AE</td><td>boolean</td><td>false</td></tr><tr><td>okBtnDisabled</td><td>\u7981\u7528\u786E\u5B9A\u6309\u94AE</td><td>boolean</td><td>false</td></tr><tr><td>noFooter</td><td>\u662F\u5426\u9690\u85CF\u5E95\u90E8\u6309\u94AE\u680F</td><td>boolean</td><td>false</td></tr><tr><td>closeOnClickOverlay</td><td>\u70B9\u51FB\u8499\u5C42\u662F\u5426\u5173\u95ED\u5BF9\u8BDD\u6846</td><td>boolean</td><td>true</td></tr><tr><td>cancelAutoClose</td><td>\u53D6\u6D88\u6309\u94AE\u662F\u5426\u9ED8\u8BA4\u5173\u95ED\u5F39\u7A97</td><td>boolean</td><td>true</td></tr><tr><td>textAlign</td><td>\u6587\u5B57\u5BF9\u9F50\u65B9\u5411\uFF0C\u53EF\u9009\u503C\u540C css \u7684 text-align</td><td>string</td><td>\u2018center\u2019</td></tr><tr><td>footerDirection</td><td>\u4F7F\u7528\u6A2A\u7EB5\u65B9\u5411 \u53EF\u9009\u503C horizontal\u3001vertical</td><td>string</td><td>\u2018horizontal\u2019</td></tr><tr><td>lockScroll</td><td>\u80CC\u666F\u662F\u5426\u9501\u5B9A</td><td>boolean</td><td>false</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>onOk</td><td>\u786E\u5B9A\u6309\u94AE\u56DE\u8C03</td><td>(e?: MouseEvent) =&gt; Promise</td></tr><tr><td>onCancel</td><td>\u53D6\u6D88\u6309\u94AE\u56DE\u8C03</td><td>() =&gt; void</td></tr><tr><td>onClosed</td><td>\u5173\u95ED\u56DE\u8C03\uFF0C\u4EFB\u4F55\u60C5\u51B5\u5173\u95ED\u5F39\u7A97\u90FD\u4F1A\u89E6\u53D1</td><td>Function</td></tr></tbody></table>`,16),d=[e],i={setup(p,{expose:s}){return s({frontmatter:{}}),(r,o)=>(a(),t("div",l,d))}};export{i as default};
