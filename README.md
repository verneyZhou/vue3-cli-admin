# vue3-cli-admin
vue3+vue-cli搭建的后台管理系统


## 准备

node版本：`v10.x.x`

@vue/cli: `v.4.5.15`


vue-cli
- 官方文档：https://cli.vuejs.org/zh/guide/
- npm: https://www.npmjs.com/package/@vue/cli



## 搭建

- npm install -g @vue/cli
    - 已安装直接更新：npm update -g @vue/cli
    - 查看版本：vue --version

- vue create vue3-cli-admin
- 选择手动配置：
    ``` shell
    Vue CLI v4.5.15
    ? Please pick a preset: Manually select features
    ? Check the features needed for your project: Choose Vue version, Babel, TS, Router, Vuex, CSS Pre-processors, Linter, Unit
    ? Choose a version of Vue.js that you want to start the project with 3.x
    ? Use class-style component syntax? Yes
    ? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
    ? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
    ? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Sass/SCSS (with node-sass)
    ? Pick a linter / formatter config: Prettier
    ? Pick additional lint features: Lint on save
    ? Pick a unit testing solution: Jest
    ? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
    ? Save this as a preset for future projects? (y/N) n
    ```

- 之后等待安装，安装完成，本地即生成一个 `vue3-cli-admin` 项目



## 配置


### 配置全局环境变量

1. 在根目录下新建`.env.dev/.env.prod`等文件
```
<!-- .env.dev -->
NODE_ENV = 'development'
VUE_APP_ENV = 'dev'
BASE_URL = '/'
VUE_APP_PUBLIC_PATH = '/'
VUE_APP_API = 'https://www.baidu.com'
```
> 只有以 `VUE_APP` 开头的变量会被 `webpack.DefinePlugin` 静态嵌入到客户端侧的包中，代码中可以通过 `process.env.VUE_APP_XXX` 访问；`NODE_ENV` 和 `BASE_URL` 是两个特殊变量，在代码中始终可用

2. `package.json`中修改命令


参考：[mode-and-env](https://cli.vuejs.org/zh/guide/mode-and-env.html)


### 配置vue.config.js

官方参考：https://github.com/staven630/vue-cli4-config/tree/vue-cli3#top

详细配置参考：https://cli.vuejs.org/zh/config/#vue-config-js

1. 新建 `vue.config.js`
> `vue.config.js` 是一个可选的配置文件，如果项目的 (和 `package.json` 同级的) 根目录中存在这个文件，那么它会被 `@vue/cli-service` 自动加载。

2. 配置

- configureWebpack
> 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中


- chainWebpack
> 链式操作 (高级), 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。




### Element-Plus

https://element-plus.gitee.io/zh-CN/guide/quickstart.html

- 全局导入

- 按需加载

- 国际化: 中英文切换配置

- `@element-plus/icons`: https://element-plus.gitee.io/zh-CN/component/icon.html

``` js
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["element-plus/global"]
  }
}

```



### scss

- 全局配置 variables.less
    > style-resources-loader

- 变量
 1. `$name`
 2. `height: calc(100vh - #{$navBarHeight});`


### tsx


### svg

- vue.config.js 中 svg-sprite-loader 配置
- 全局导入
- svg-icon


### mock接口

`npm i mockjs -D`

官网：http://mockjs.com/




## 其他

1. 终端输入 `vue inspect --rules`，查看规则配置的列表；
2. `vue inspect --rule svg-icons`: 单独查看 svg-icons 的配置规则
3. `vue inspect > output.js` 输出所有 webpack 配置到指定文件
> https://cli.vuejs.org/zh/guide/webpack.html#%E4%BF%AE%E6%94%B9%E6%8F%92%E4%BB%B6%E9%80%89%E9%A1%B9









## 报错

1. ` ERROR  Invalid options in vue.config.js: "linOnSave" is not allowed`

lintOnSave 配置


2. `Syntax Error: TypeError: this.getOptions is not a function`

`<style lang="less">`引起的报错，改为`scss`



3. `svg-sprite-loader` 报错

``` js
404.svg:1 Uncaught Error: Module build failed (from ./node_modules/svg-sprite-loader/lib/loader.js):
InvalidSvg: svg-sprite-loader exception. 
```

- 先检查`svg`文件是否正常，svg文件为空可能导致此类报错；
- 然后检查`svg`的配置, 正确配置如下：
``` js
{
    chainWebpack: config => {
         ///////// 配置svg规则
        const dir = resolve('src/assets/svg'); // 指定路径
        config.module.rule('svg-icons') // 给 module 添加名为 icons 的 rule
        .uses.clear().end() // 清除已有的loader, 如果不这样做会添加在此loader之后
                .test(/\.(svg)(\?.*)?$/) // 正则匹配 svg 文件
        .include.add(dir).end() // 包括哪些目录
        .exclude.add(/node_modules/).end() // // 正则匹配排除node_modules目录
                .use('svg-sprite-loader').loader('svg-sprite-loader') // 加载loader
        .options({ symbolId: 'icon-[name]'}).end() // 参数
        config.module.rule('svg').exclude.add(dir) // 默认svg配置排除指定路径
      ////////
    }
}
```
终端输入 `vue inspect --rule svg-icons`后可查看配置规则：
``` js
/* config.module.rule('svg-icons') */
{
  test: /\.(svg)(\?.*)?$/,
  include: [
    '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/src/assets/svg'
  ],
  exclude: [
    /node_modules/
  ],
  use: [
    {
      loader: 'svg-sprite-loader',
      options: {
        symbolId: 'icon-[name]'
      }
    }
  ]
}
```
跟 webpack 中的配置差不多~



4. `nprogress` 和 `js-cookie` 报错

安装： `npm i @types/nprogress @types/js-cookie -D`



5. element-plus的icon显示不了：
``` js
 Failed to resolve component: alarm-clock
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement. 
```

这是因为elment-plus的icon图标，需要单独引入，引入方法见`src/plugins/element-plus.js`



6. `element-plus.js?d2e6:21 Uncaught TypeError: Cannot assign to read only property 'exports' of object '#<Object>'`

webpack不允许混用import和module.exports,统一用法即可~




## npm run build 时的报错

1. ` ERROR  TypeError: Cannot read property 'tapPromise' of undefined`

> compression-webpack-plugin 版本问题，降至`v5.0.1`；

[参考](https://blog.csdn.net/weixin_38401146/article/details/115308825)



2. ` ERROR  TypeError: Cannot read property 'javascript' of undefined`
> terser-webpack-plugin 版本问题，降至`v4.2.3`





## 问题记录

1. vite搭建的项目，ts文件中有些地方标红，不知道为什么？

2. vite搭的项目ts预发不规范也不报错，但vue-cli搭的就会报错，阻断运行？


3. ts的语法规范在哪里配置？



