# 小程序开发

## 介绍

* 作为一款具有京东科技风格的组件库，NutUI-JDT 和 Taro 合力，现已可以用 NutUI-JDT 开发小程序了，二者的结合，不仅可以让开发者一处代码，多端运行，畅快自如地开发小程序。更可以在开发过程中，使用到更美观、更便捷、组件更丰富的组件库。

## 预览


> 微信扫描下方二维码体验，体验组件库示例 , Demo 源码  https://github.com/jdf2e/nutui-demo/tree/master/taro

<img width="200" src="https://storage.360buyimg.com/jdc-article/gh_f2231eb941be_258.jpg" />
<img src="https://img12.360buyimg.com/imagetools/jfs/t1/205124/1/15643/30360/62aad730Ea5734bf9/703bb91a0b73282f.png" width="200" alt="NutUI" />

## 安装

* 通过 Npm 或 Yarn 安装  
* node版本>=12.10.0

### 安装 Taro 脚手架

``` bash
# 使用 npm 安装 CLI
npm install -g @tarojs/cli

# OR 使用 yarn 安装 CLI
yarn global add @tarojs/cli

# OR 安装了 cnpm，使用 cnpm 安装 CLI
cnpm install -g @tarojs/cli
```

> 值得一提的是，如果安装过程出现sass相关的安装错误，请在安装 mirror-config-china 后重试。

``` bash
npm install -g mirror-config-china
```

### 检查是否安装成功

``` bash
taro -v
```
<img src="https://img12.360buyimg.com/imagetools/jfs/t1/113013/14/29712/8279/630ec921Ee898abbc/30d0945a08fc4c22.png" />

### 项目初始化

使用命令创建模板：

``` bash
taro init myApp
```

### 按照下方图片依次选择，选择 Vue3 + NutUI 模板

<img src="https://img13.360buyimg.com/imagetools/jfs/t1/132905/13/28449/96619/630ec93bE666f060e/4bb0e2bc051d90a9.png" />

> 注意：如果非模板方式，单独安装的 nutui-taro npm 包，需要按以下步骤进行配置(完整项目请参考[NutUI-Demo](https://github.com/jdf2e/nutui-demo/tree/master/taro3.5.4/) )

### 配置 taro 插件 @tarojs/plugin-html

1. 首先下载 [@tarojs/plugin-html](https://taro-docs.jd.com/taro/docs/use-h5/)
``` bash
yarn add @tarojs/plugin-html
```
2. 在项目中配置
``` javascript
// config/index.js
config = {
  // ...
  plugins: ['@tarojs/plugin-html']
  // 给 sass-loader 传递选项 ！！！！ 按需加载方式必须配置
  sass: {
      data: `@import "@nutui/nutui-taro/dist/styles/variables.scss";`,
  }
}
```
3. 配置 nutui 375尺寸
``` javascript
// config/index.js
config = {
  // ...
  designWidth: 375,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1
  }
}
```

### NPM 使用示例

> 注意：这种方式将会导入所有组件，打包文件大小会很大

```javascript
// app.ts
import { createApp } from 'vue'
import NutUI from "@nutui/nutui-taro" // 在入口文件处引用NutUI
import "@nutui/nutui-taro/dist/style.css";

const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
App.use(NutUI);
export default App
```


#### 推荐使用按需加载

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一款 babel 插件，它会在编译过程中将 import 语句自动转换为按需引入的方式。
##### 安装插件
``` bash
npm install babel-plugin-import --save-dev
```

在 `.babelrc` 或 `babel.config.js` 中添加配置：
``` javascript
{
  // ...
  plugins: [
    [
      "import",
      {
        "libraryName": "@nutui/nutui-taro",
        "libraryDirectory": "dist/packages/_es",
        // customName自定义兼容国际化使用
        "customName": (name, file) => {
          if (name == 'Locale') {
            return '@nutui/nutui-taro/dist/packages/locale/lang';
          } else {
            return `@nutui/nutui-taro/dist/packages/_es/${name}`;
          }
        },
        "style": (name, file) => name.toLowerCase().replace('_es/', '') + '/index.scss',
        "camel2DashComponentName": false
      },
      'nutui3-taro'
    ]
  ]
}
```

```javascript
import { createApp } from "vue";
import { Button, Cell, Icon } from "@nutui/nutui-taro";
const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
App.use(Button).use(Cell).use(Icon);
```



#### 定制化主题使用

首先需要在 **app.ts** 文件中配置 使用 scss 样式文件如：

```javascript
import { createApp } from "vue";
import { Button, Cell, Icon } from "@nutui/nutui-taro";
// 全量引入NutUI 需要引入此scss文件 ，按需加载方式不需要引入此文件
// import '@nutui/nutui-taro/dist/styles/themes/default.scss';
const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})
App.use(Button).use(Cell).use(Icon);
```

创建定制化主题样式文件 ```assets/styles/custom_theme.scss``` ，样式变量覆盖表参考 [nutui variables](https://github.com/jdf2e/nutui/blob/next/src/packages/styles/variables.scss)
``` scss
$primary-color: #478EF2;
$primary-color-end: #496AF2;
```



然后需要在 `config/index.js` 文件中配置 `scss` 文件全局覆盖如：

``` javascript
const path = require('path');
const config = {
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1
  },
  sass: {
		resource: [
			path.resolve(__dirname, '..', 'src/assets/styles/custom_theme.scss')
		],
    // 默认京东 APP 10.0主题 > @import "@nutui/nutui-taro/dist/styles/variables.scss";
    // 京东科技主题 > @import "@nutui/nutui-taro/dist/styles/variables-jdt.scss";
    // 京东B商城主题 > @import "@nutui/nutui-taro/dist/styles/variables-jdb.scss";
    data: `@import "@nutui/nutui-taro/dist/styles/variables.scss";`
	},
  // ...
```

`vue` 文件中使用查看效果

``` html
<template>
  <view>
      <nut-button type="primary" >nutui</nut-button>
  </view>
</template>
```