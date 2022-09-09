# applet development

## introduce

* NutUI-React-Taro is a set of component libraries provided by NutUI-React component library for multi-terminal application scenarios relying on Taro.

* At present, nearly 40 components are provided, covering most of the scenarios used in daily business development.


## preview


> Scan the QR code below on WeChat to experience the component library example, Demo source code https://github.com/jdf2e/nutui-demo/tree/master/react-taro


## Create a React project with Taro
#### 1. Install Taro Scaffolding
* Install via Npm or Yarn
* node version >= 12.10.0

```bash
# By Npm
npm install -g @tarojs/cli

# OR yarn
yarn global add @tarojs/cli

```

> It is worth mentioning that if there is a sass-related installation error during the installation process, please try again after installing mirror-config-china.

```bash
npm install -g mirror-config-china
```

#### 2. Check if the installation is successful

```bash
taro -v
```
The current version is 3.5.4.

#### 3. Project initialization

Create a template with the command:

```bash
taro init myApp
````
This is built using react framework's default template and the css preprocessor is compiled using scss.

#### 4. Run your project
```bash
npm run dev:weapp
````
And run the project under the IDE of the applet, and the running directory should point to the dist folder.
At this point, the demo is complete.

## Introduce NutUI-React component library
#### 1. Install the support plugin for taro built-in components @tarojs/plugin-html

```bash
yarn add @tarojs/plugin-html
````

#### 2. Configure the built-in component
```javascript
// config/index.js
config = {
  // ...
  plugins: ['@tarojs/plugin-html']
}
```

#### 3. Add @nuiui-react-taro component library
```bash
yarn add @nutui/nutui-react-taro
````

#### 4. Introduce the nutui-react-taro library into the code for testing
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
#### 5. nutui-react-taro style introduction
1) Because nutui-react uses the scss preprocessor and supports theme customization, it is necessary to add style variables to the configuration file.

// config/index.js
```js
sass:{
  data: `@import "@nutui/nutui-react/dist/styles/variables.scss";`
}
```

2) At the same time, we need to add the import plugin to the babel configuration file:
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
Remember, install the babel-plugin-import plugin.

```bash
yarn add babel-plugin-import
```

3) Using pxconfig, ignoring the unit conversion for the component library.
   // config/index.js
```js
pxtransform: {
  config: {
    selectorBlackList: ['nut-']
  }
},
```
