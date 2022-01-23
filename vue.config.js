const path = require('path')
const IS_PROD = process.env.NODE_ENV === 'production'
const WebpackBar = require('webpackbar')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')


const resolve = dir => path.join(__dirname, dir)


module.exports = {
  publicPath: IS_PROD ? process.env.VUE_APP_PUBLIC_PATH : '/', // 默认'/'，部署应用包时的基本 URL

  // outputDir: process.env.outputDir || 'dist', // 默认dist, 生产环境构建文件的目录

  assetsDir: "static", // 相对于outputDir的静态资源(js、css、img、fonts)目录

  // indexPath: 'index.html', // 指定生成的 index.html 的输出路径 (相对于 outputDir); 默认index.html

  // pages: utils.entries(), // 构建多页面应用，每个“page”应该有一个对应的 JavaScript 入口文件

  lintOnSave: false, // 默认true；是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
  productionSourceMap: false, // 不输出 map 文件，以加速生产环境构建

  devServer: ['mock', 'dev'].includes(process.env.VUE_APP_ENV) ? {
    publicPath: '/',
    hot: true,
    port: '8097',
    open: true,
    proxy: { // proxy配置
      '/mock': {
        'target': 'http://60.205.222.230:3000/mock/',
        'pathRewrite': {
          '^/mock': ''
        }
      }
    }
  } : {},
  // 该对象将会被 webpack-merge 合并入最终的 webpack 配置，允许我们更细粒度的控制其内部配置。
  configureWebpack: () => {
    const config = {
        // devtool: 'source-map',
        resolve: {
            alias: { // 设置目录别名alias
                '@': resolve('src')
            },
            extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.mjs'] // 导入时想要省略的扩展名列表
        },
        plugins: [ // 插件
            new WebpackBar({ // 编译进度条
                name: 'vue3-cli-admin'
            }),
        ]
    };

    if (IS_PROD) {
        config.plugins.push(
            // gzip
            new CompressionWebpackPlugin({
                filename: '[path].gz[query]',
                test: new RegExp('\\.(' + ['js', 'css'].join('|') + ')$'),
                threshold: 10240,
                minRatio: 0.8,
                deleteOriginalAssets: false
            })
        )

        // 生产环境清除 console.log
        config.optimization = {
            minimizer: [
                new TerserPlugin({
                terserOptions: {
                    mangle: true,
                    compress: {
                    warnings: false,
                    drop_console: false,
                    drop_debugger: false,
                    pure_funcs: ['console.log'] // 清除 console.log
                    }
                }
                })
            ],
        }
    }
    return config;
  },
  chainWebpack: config => {

    // 移除 preload 插件
    config.plugins.delete('preload')
    // 移除 prefetch 插件, 当有很多页面时，它会导致太多毫无意义的请求
    config.plugins.delete('prefetch')
    // 开发环境 sourcemap 不包含列信息
    config.when(!IS_PROD,config => config.devtool('cheap-source-map'))



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


      //////// 打包分析 npm i webpack-bundle-analyzer -D
      if (process.env.VUE_APP_ENV === 'analyze') {
        const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
        config.plugin('webpack-report').use(BundleAnalyzerPlugin, [
          {
            analyzerMode: 'static'
          }
        ])
      }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/styles/variables.scss'), // 配置全局 variables 变量
      ]
    }
  },
  css: {
    loaderOptions: { // // 向预处理器 Loader 传递选项
      // less: {
      //   javascriptEnabled: true
      // },
      // postcss: {
      //   // 这里的选项会传递给 postcss-loader
      // }
    }
  },
  /**
   * transpileDependencies配置默认为[], babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。配置需要转译的第三方库。
   */
  transpileDependencies:[ 
    'swiper',
    'dom7',
  ]

};
