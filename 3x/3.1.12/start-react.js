import{e as a,o as n,y as t}from"./vendor.js";const l={class:"markdown-body"},p=t(`<h1>\u5FEB\u901F\u4E0A\u624B</h1><h2>\u9884\u89C8</h2><blockquote><p>\u626B\u63CF\u4E0B\u65B9\u4E8C\u7EF4\u7801\u4F53\u9A8C\uFF0C\u4F53\u9A8C React \u7EC4\u4EF6\u5E93\u793A\u4F8B</p></blockquote><img src="https://img12.360buyimg.com/imagetools/jfs/t1/202336/18/18586/7437/61b832ccE0b13d53d/18605da7232a5a0e.png" width="200" alt="NutUI"><h2>NPM \u5B89\u88C5</h2><pre><code class="language-bash">npm i @nutui/nutui-react
</code></pre><h3>NPM \u4F7F\u7528\u793A\u4F8B</h3><h4>\u6309\u9700\u52A0\u8F7D\u7EC4\u4EF6</h4><blockquote><p>\u6CE8\u610F\uFF1ANutUI React \u9ED8\u8BA4\u652F\u6301\u57FA\u4E8E ES modules \u7684 tree shaking\uFF0C\u5BF9\u4E8E JS \u90E8\u5206\uFF0C\u76F4\u63A5\u5F15\u5165 import { Button } from \u2018@nutui/nutui-react\u2019 \u5C31\u4F1A\u6709\u6309\u9700\u52A0\u8F7D\u7684\u6548\u679C\u3002</p></blockquote><pre><code class="language-javascript"><span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> React <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;react&quot;</span>;
<span class="hljs-keyword">import</span> * <span class="hljs-keyword">as</span> ReactDOM <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;react-dom&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&#39;@nutui/nutui-react/dist/style.css&#39;</span>
<span class="hljs-keyword">import</span> { Icon } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@nutui/nutui-react&#39;</span>;

ReactDOM.render(
  <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">&quot;App&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">Icon</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;dongdong&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">Icon</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>,
  <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">&quot;app&quot;</span>)
);

</code></pre><h4>\u4E3A\u4EC0\u4E48\u53EA\u6309\u9700\u5F15\u5165\u6837\u5F0F</h4><p>NutUI React \u9ED8\u8BA4\u652F\u6301\u57FA\u4E8E ES modules \u7684 tree shaking\uFF0C\u5BF9\u4E8E JS \u90E8\u5206\uFF0C\u76F4\u63A5\u5F15\u5165 import { Button } from \u2018@nutui/nutui-react\u2019 \u5C31\u4F1A\u6709\u6309\u9700\u52A0\u8F7D\u7684\u6548\u679C\u3002\u56E0\u6B64\u4EC5\u6837\u5F0F\u4E0D\u662F\u6309\u9700\u5BFC\u5165\u7684\uFF0C\u56E0\u6B64\u53EA\u9700\u6309\u9700\u5BFC\u5165\u6837\u5F0F\u5373\u53EF\u3002</p><h4>Vite \u6784\u5EFA\u5DE5\u5177 \u901A\u8FC7 vite-plugin \u4F7F\u7528\u6309\u9700\u52A0\u8F7D</h4><p>\u7531\u4E8E vite \u672C\u8EAB\u5DF2\u6309\u9700\u5BFC\u5165\u4E86\u7EC4\u4EF6\u5E93\uFF0C\u56E0\u6B64\u4EC5\u6837\u5F0F\u4E0D\u662F\u6309\u9700\u5BFC\u5165\u7684\uFF0C\u56E0\u6B64\u53EA\u9700\u6309\u9700\u5BFC\u5165\u6837\u5F0F\u5373\u53EF\u3002</p><p>Vite \u6784\u5EFA\u5DE5\u5177\uFF0C\u4F7F\u7528 vite-plugin-style-import \u5B9E\u73B0\u6309\u9700\u5F15\u5165\u3002</p><h4>\u5B89\u88C5\u63D2\u4EF6</h4><p><code>npm install vite-plugin-style-import --save-dev</code></p><p>\u5728 vite.config \u4E2D\u6DFB\u52A0\u914D\u7F6E\uFF1A</p><pre><code class="language-typescript"><span class="hljs-keyword">import</span> { defineConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vite&quot;</span>;
<span class="hljs-keyword">import</span> react <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@vitejs/plugin-react&quot;</span>;
<span class="hljs-keyword">import</span> styleImport <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;vite-plugin-style-import&quot;</span>;
<span class="hljs-comment">// https://vitejs.dev/config/</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> defineConfig({
  <span class="hljs-attr">css</span>: {
    <span class="hljs-attr">preprocessorOptions</span>: {
      <span class="hljs-attr">scss</span>: {
        <span class="hljs-comment">// \u914D\u7F6E nutui \u5168\u5C40 scss \u53D8\u91CF</span>
        <span class="hljs-attr">additionalData</span>: <span class="hljs-string">\`@import &quot;@test/nutui-react/dist/styles/variables.scss&quot;;\`</span>,
      },
    },
  },
  <span class="hljs-attr">plugins</span>: [
    react(),
    styleImport({
      <span class="hljs-attr">libs</span>: [
        {
          <span class="hljs-attr">libraryName</span>: <span class="hljs-string">&quot;@test/nutui-react&quot;</span>,
          <span class="hljs-attr">libraryNameChangeCase</span>: <span class="hljs-string">&quot;pascalCase&quot;</span>,
          <span class="hljs-attr">resolveStyle</span>: <span class="hljs-function">(<span class="hljs-params">name</span>) =&gt;</span> {
            <span class="hljs-keyword">return</span> <span class="hljs-string">\`@test/nutui-react/dist/packages/<span class="hljs-subst">\${name.toLowerCase()}</span>/<span class="hljs-subst">\${name.toLowerCase()}</span>.scss\`</span>;
          },
        },
      ],
    }),
  ],
});

</code></pre><h4>WebPack \u6784\u5EFA\u5DE5\u5177</h4><pre><code class="language-javascript"><span class="hljs-built_in">module</span>: {
    <span class="hljs-attr">rules</span>: [
      {
        <span class="hljs-attr">test</span>: <span class="hljs-regexp">/\\.tsx?$/</span>,
        use: [
          {
            <span class="hljs-attr">loader</span>: <span class="hljs-string">&quot;babel-loader&quot;</span>,
            <span class="hljs-attr">options</span>: {
              <span class="hljs-attr">presets</span>: [
                <span class="hljs-string">&quot;@babel/preset-env&quot;</span>,
                <span class="hljs-string">&quot;@babel/preset-react&quot;</span>,
                <span class="hljs-string">&quot;@babel/preset-typescript&quot;</span>,
              ],
              <span class="hljs-attr">plugins</span>: [
                [
                  <span class="hljs-string">&quot;import&quot;</span>,
                  {
                    <span class="hljs-attr">libraryName</span>: <span class="hljs-string">&quot;@test/nutui-react&quot;</span>,
                    <span class="hljs-attr">libraryDirectory</span>: <span class="hljs-string">&quot;dist/esm&quot;</span>,
                    <span class="hljs-attr">style</span>: <span class="hljs-function">(<span class="hljs-params">file</span>) =&gt;</span> {
                      <span class="hljs-keyword">const</span> fileName = file.match(<span class="hljs-regexp">/\\/(\\w+)$/</span>)[<span class="hljs-number">0</span>];
                      <span class="hljs-keyword">return</span> <span class="hljs-string">\`<span class="hljs-subst">\${file
                        .replace(<span class="hljs-string">&quot;esm&quot;</span>, <span class="hljs-string">&quot;packages&quot;</span>)
                        .toLowerCase()}</span><span class="hljs-subst">\${fileName.toLowerCase()}</span>.scss\`</span>;
                    },
                    <span class="hljs-attr">camel2DashComponentName</span>: <span class="hljs-literal">false</span>,
                  },
                  <span class="hljs-string">&quot;nutui-react&quot;</span>,
                ],
              ],
            },
          },
        ],
        <span class="hljs-attr">exclude</span>: <span class="hljs-string">&quot;/node_modules/&quot;</span>,
      },
      {
        <span class="hljs-attr">test</span>: <span class="hljs-regexp">/\\.(s[ac]|c)ss$/i</span>,
        use: [
          <span class="hljs-string">&quot;style-loader&quot;</span>,
          <span class="hljs-string">&quot;css-loader&quot;</span>,
          {
            <span class="hljs-attr">loader</span>: <span class="hljs-string">&quot;sass-loader&quot;</span>,
            <span class="hljs-attr">options</span>: {
              <span class="hljs-attr">additionalData</span>: <span class="hljs-string">\`@import &quot;@test/nutui-react/dist/styles/variables.scss&quot;;\`</span>,
            },
          },
        ],
      },
    ],
  },

</code></pre><h4>CDN \u5B89\u88C5\u4F7F\u7528\u793A\u4F8B</h4><blockquote><p>\u53EF\u4EE5\u901A\u8FC7 CDN \u7684\u65B9\u5F0F\u5F15\u5165\uFF0C \u53EF\u4EE5\u5728 <strong>jsdelivr</strong> \u548C <strong>unpkg</strong> \u7B49\u516C\u5171 CDN \u4E0A\u83B7\u53D6\u5230 NutUI\u3002</p></blockquote><pre><code class="language-html"><span class="hljs-meta">&lt;!DOCTYPE <span class="hljs-meta-keyword">html</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">html</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">&#39;UTF-8&#39;</span> /&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&#39;viewport&#39;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&#39;width=device-width, initial-scale=1.0&#39;</span> /&gt;</span>
  <span class="hljs-comment">&lt;!-- \u5F15\u5165\u6837\u5F0F --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">link</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">&#39;stylesheet&#39;</span>
        <span class="hljs-attr">href</span>=<span class="hljs-string">&#39;https://cdn.jsdelivr.net/npm/@nutui/nutui-react/dist/style.css&#39;</span> /&gt;</span>
  <span class="hljs-comment">&lt;!-- \u5F15\u5165React --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">crossorigin</span>
          <span class="hljs-attr">src</span>=<span class="hljs-string">&#39;https://unpkg.com/react@17/umd/react.production.min.js&#39;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">crossorigin</span>
          <span class="hljs-attr">src</span>=<span class="hljs-string">&#39;https://unpkg.com/react-dom@17/umd/react-dom.production.min.js&#39;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- \u5F15\u5165NutUI\u7EC4\u4EF6\u5E93 --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">script</span>
    <span class="hljs-attr">src</span>=<span class="hljs-string">&#39;https://cdn.jsdelivr.net/npm/@nutui/nutui-react/dist/nutui.react.umd.js&#39;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&#39;app&#39;</span>&gt;</span>

<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-comment">// \u5728 #app \u6807\u7B7E\u4E0B\u6E32\u67D3\u4E00\u4E2A\u6309\u94AE\u7EC4\u4EF6</span>
  ReactDOM.render(
    React.createElement(
      nutui.react.Button,
      <span class="hljs-literal">null</span>,
      React.createElement(<span class="hljs-string">&quot;div&quot;</span>, <span class="hljs-literal">null</span>, <span class="hljs-string">&quot;\u4E3B\u8981\u6309\u94AE&quot;</span>)
    ),
    <span class="hljs-built_in">document</span>.querySelector(<span class="hljs-string">&quot;#app&quot;</span>)
  );
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>
</code></pre><blockquote><p>\u5728\u9875\u9762\u4E2D\u76F4\u63A5\u5F15\u5165\uFF0C\u5C06\u65E0\u6CD5\u4F7F\u7528 <strong>\u4E3B\u9898\u5B9A\u5236</strong> \u7B49\u529F\u80FD\u3002\u6211\u4EEC\u63A8\u8350\u4F7F\u7528 <em>NPM</em> \u6216 <em>YARN</em> \u65B9\u5F0F\u5B89\u88C5\uFF0C\u4E0D\u63A8\u8350\u5728\u9875\u9762\u4E2D\u76F4\u63A5\u5F15\u5165\u7684\u7528\u6CD5</p></blockquote><h2>\u4F7F\u7528\u6CE8\u610F\u4E8B\u9879</h2><ul><li>\u7EC4\u4EF6 css \u5355\u4F4D\u4F7F\u7528\u7684\u662F <strong>px</strong>\uFF0C\u5982\u679C\u4F60\u7684\u9879\u76EE\u4E2D\u9700\u8981 <strong>rem</strong> \u5355\u4F4D\uFF0C\u53EF\u501F\u52A9\u4E00\u4E9B\u5DE5\u5177\u8FDB\u884C\u8F6C\u6362\uFF0C\u6BD4\u5982 <a href="https://www.webpackjs.com/">webpack</a> \u7684 <a href="https://www.npmjs.com/package/px2rem-loader">px2rem-loader</a>\u3001<a href="https://github.com/postcss/postcss">postcss</a> \u7684 <a href="https://www.npmjs.com/package/postcss-plugin-px2rem">postcss-plugin-px2rem</a> \u63D2\u4EF6\u7B49</li></ul>`,27),c=[p],j={setup(e,{expose:s}){return s({frontmatter:{}}),(o,h)=>(n(),a("div",l,c))}};export{j as default};
