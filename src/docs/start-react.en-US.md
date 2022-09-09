# Quickstart

## Preview

> Scan the below QR code, experience React component library demos.

<img src="https://img12.360buyimg.com/imagetools/jfs/t1/202336/18/18586/7437/61b832ccE0b13d53d/18605da7232a5a0e.png" width="200" alt="NutUI">

## Install

```bash
npm i @nutui/nutui-react
```

### Demo

```javascript
import * as React from "react";
import * as ReactDOM from "react-dom";
import '@nutui/nutui-react/dist/style.css'
import { Icon } from '@nutui/nutui-react';

ReactDOM.render(
  <div className="App">
    <Icon name="dongdong"></Icon>
  </div>,
  document.getElementById("app")
);

```

#### Why only import styles on demand

NutUI-React supports tree shaking based on ES modules by default. For the JS part, directly importing `import { Button } from '@nutui/nutui-react'` will have the effect of on-demand loading. So only styles are not imported on demand, so just import styles on demand.

#### WebPack build tools use on-demand loading via babel

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import), it is a babel plugin that automatically converts import statements into on-demand import during the compilation process.

##### Install plugin
``` bash
npm install babel-plugin-import --save-dev
```
Add configuration in `.babelrc` or `babel.config.js`:

``` javascript
{
  // ...
  plugins: [
    [
      "import",
      {
        "libraryName": "@nutui/nutui-react",
        "libraryDirectory": "dist/esm",
        "style": true,
        "camel2DashComponentName": false
      },
      'nutui-react'
    ]
  ]
}
```
Configure sass-loader in webpack config to import nutui-react style variables globally
```javascript
//...
// Pass options to sass-loader
scss: {
    data: `@import "@nutui/nutui-react/dist/styles/variables.scss";`,
}
//...
```

### Create React App using on-demand loading via craco

#### create project

```bash
npx create-react-app myNutUI-React
````

#### Install craco and related plugins

```bash
# The example uses the latest version of @craco/craco
npm i --save-dev @craco/craco
npm i --save-dev sass
npm i --save-dev babel-plugin-import
```

#### Add craco configuration, `craco.config.js`

```js
module.exports = {
    reactScriptsVersion: "react-scripts",
    style: {
        sass: {
            loaderOptions: {
                sourceMap: true,
                additionalData: `@import "@nutui/nutui-react/dist/styles/variables.scss";` /* Any sass-loader configuration options: https://github.com/webpack-contrib/sass-loader. */,
            },
        },
    },
    babel: {
        plugins: [
            [
                "import",
                {
                    libraryName: "@nutui/nutui-react",
                    libraryDirectory: "dist/esm",
                    style: true,
                    camel2DashComponentName: false,
                },
                "nutui-react",
            ],
        ],
    },
}

```

#### Vite build tools use on-demand loading via vite-plugin

Since vite itself has imported the component library on demand, only styles are not imported on demand, so just import styles on demand.

[Vite](https://vitejs.dev/) build tool, use [vite-plugin-style-import](https://github.com/anncwb/vite-plugin-style-import) to import on demand.

#### Install plugin

`npm install vite-plugin-style-import --save-dev`

Add configuration in vite.config:

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import styleImport from "vite-plugin-style-import";
// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        // Configure nutui global scss variables
        additionalData: `@import "@nutui/nutui-react/dist/styles/variables.scss";`,
      },
    },
  },
  plugins: [
    react(),
    styleImport({
      libs: [
        {
          libraryName: "@nutui/nutui-react",
          libraryNameChangeCase: "pascalCase",
          resolveStyle: (name) => {
            return `@nutui/nutui-react/dist/esm/${name}/style`
          },
        },
      ],
    }),
  ],
});

```


#### CDN installation usage example

> Can be imported through CDN, and NutUI can be obtained on public CDNs such as **jsdelivr** and **unpkg**.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset='UTF-8' />
  <meta name='viewport' content='width=device-width, initial-scale=1.0' />
  <!-- import style -->
  <link rel='stylesheet'
        href='https://cdn.jsdelivr.net/npm/@nutui/nutui-react/dist/style.css' />
  <!-- import React -->
  <script crossorigin
          src='https://unpkg.com/react@17/umd/react.production.min.js'></script>
  <script crossorigin
          src='https://unpkg.com/react-dom@17/umd/react-dom.production.min.js'></script>
  <!-- import NutUI-React -->
  <script
    src='https://cdn.jsdelivr.net/npm/@nutui/nutui-react/dist/nutui.react.umd.js'></script>
</head>
<body>
<div id='app'></div>
<script>
  // 在 #app 标签下渲染一个按钮组件
  ReactDOM.render(
    React.createElement(
      nutui.react.Button,
      null,
      React.createElement("div", null, "主要按钮")
    ),
    document.querySelector("#app")
  );
</script>
</body>
</html>
```

> If it is directly introduced in the page, functions such as **theme customization** will not be available. We recommend using *NPM* or *YARN* to install, and we do not recommend the usage directly introduced in the page

## Precautions for use
- NutUI-React is built on [react@^17.0.0](https://www.npmjs.com/package/react)
- The `.scss` file provided by NutUI-React version is recommended to use [Dart Sass ^1.40.0](https://www.npmjs.com/package/sass) or above
- The component css unit uses **px**, if you need **rem** in your project
  Units can be converted with the help of some tools, such as [webpack](https://www.webpackjs.com/)
  The [px2rem-loader](https://www.npmjs.com/package/px2rem-loader), [postcss](https://github.com/postcss/postcss)
  The [postcss-plugin-px2rem](https://www.npmjs.com/package/postcss-plugin-px2rem)
  plug-ins, etc.

