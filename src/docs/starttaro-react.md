# 小程序开发

## 介绍

* NutUI-React-Taro 是 NutUI-React 组件库依托于 Taro，为多端应用场景提供的一套组件库。

* 目前提供了近 40 个组件，涵盖了日常业务开发使用的大部分场景。


## 预览


> 微信扫描下方二维码体验，体验组件库示例 , Demo 源码  https://github.com/jdf2e/nutui-demo/tree/master/react-taro


## 使用 Taro 创建一个 React 项目 
#### 1. 安装 Taro 脚手架
* 通过 Npm 或 Yarn 安装  
* node版本>=12.10.0

```bash
# 使用 npm 安装 CLI
npm install -g @tarojs/cli

# OR 使用 yarn 安装 CLI
yarn global add @tarojs/cli

# OR 安装了 cnpm，使用 cnpm 安装 CLI
cnpm install -g @tarojs/cli
```

> 值得一提的是，如果安装过程出现sass相关的安装错误，请在安装 mirror-config-china 后重试。

```bash
npm install -g mirror-config-china
```

#### 2. 检查是否安装成功

```bash
taro -v
```
当前版本为3.5.4。

#### 3. 项目初始化

使用命令创建模板：

```bash
taro init myApp
```
这里使用 react 框架的默认模板构建，css 预处理器使用scss编译。

#### 4. 运行你的项目
```bash
npm run dev:weapp
```
并在小程序的IDE下运行该项目，运行目录要指向 dist 文件夹下。
这时，demo 完毕。

## 引入 NutUI-React 组件库
#### 1. 安装 taro 内置组件的支持插件 @tarojs/plugin-html

```bash
yarn add @tarojs/plugin-html
```

#### 2. 配置该内置组件
```javascript
// config/index.js
config = {
  // ...
  plugins: ['@tarojs/plugin-html']
}
```

#### 3. 添加@nuiui-react-taro组件库
```bash
yarn add @nutui/nutui-react-taro
```

#### 4. 代码中引入nutui-react-taro库，进行测试
```js
import { Button } from '@nutui/nutui-react-taro';
render () {
  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <Button type="primary" className='btn'>主要按钮</Button>
    </View>
  )
}
```
#### 5. nutui-react-taro 样式引入
1）因为nutui-react 使用的是 scss 预处理器，同时，支持主题定制，所以需要在配置文件里，增加对样式变量的引入。

// config/index.js
```js
sass:{
  data: `@import "@nutui/nutui-react-taro/dist/styles/variables.scss";`
}
```

2) 同时，我们需要在babel配置文件里，增加 import 插件:
// babel.config.js
```js
plugins: [
  [
    "import",
    {
      "libraryName": "@nutui/nutui-react-taro",
      "libraryDirectory": "dist/esm",
      "style": true,
      "camel2DashComponentName": false
    },
    'nutui-react-taro'
  ]
]
```
记得，安装babel-plugin-import 插件。

```bash
yarn add babel-plugin-import
```

3) 使用pxconfig，忽略对组件库的单位的转换。
// config/index.js
```js
pxtransform: {
  config: {
    selectorBlackList: ['nut-']
  }
},
```
