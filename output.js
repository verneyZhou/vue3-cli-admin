{
  mode: 'development',
  context: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin',
  devtool: 'cheap-source-map',
  node: {
    setImmediate: false,
    process: 'mock',
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  output: {
    path: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/dist',
    filename: 'static/js/[name].js',
    publicPath: '/',
    chunkFilename: 'static/js/[name].js'
  },
  resolve: {
    alias: {
      '@': '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/src',
      vue$: 'vue/dist/vue.runtime.esm-bundler.js'
    },
    extensions: [
      '.tsx',
      '.ts',
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm',
      '.js',
      '.ts',
      '.jsx',
      '.tsx',
      '.json',
      '.vue',
      '.mjs'
    ],
    modules: [
      'node_modules',
      '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules',
      '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/@vue/cli-service/node_modules'
    ],
    plugins: [
      {
        apply: function nothing() {
          // ¯\_(ツ)_/¯
        },
        makePlugin: function () { /* omitted long function */ },
        moduleLoader: function () { /* omitted long function */ },
        topLevelLoader: {
          apply: function nothing() {
            // ¯\_(ツ)_/¯
          }
        },
        bind: function () { /* omitted long function */ },
        tsLoaderOptions: function () { /* omitted long function */ },
        forkTsCheckerOptions: function () { /* omitted long function */ }
      }
    ]
  },
  resolveLoader: {
    modules: [
      '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/@vue/cli-plugin-typescript/node_modules',
      '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/@vue/cli-plugin-babel/node_modules',
      'node_modules',
      '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules',
      '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/@vue/cli-service/node_modules'
    ],
    plugins: [
      {
        apply: function nothing() {
          // ¯\_(ツ)_/¯
        }
      }
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('mjs') */
      {
        test: /\.mjs$/,
        type: 'javascript/auto',
        include: [
          /node_modules/
        ]
      },
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          {
            loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/cache-loader/dist/cjs.js',
            options: {
              cacheDirectory: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/.cache/vue-loader',
              cacheIdentifier: '0191e2c3'
            }
          },
          {
            loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/vue-loader-v16/dist/index.js',
            options: {
              cacheDirectory: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/.cache/vue-loader',
              cacheIdentifier: '0191e2c3',
              babelParserPlugins: [
                'jsx',
                'classProperties',
                'decorators-legacy'
              ]
            }
          }
        ]
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp)(\?.*)?$/,
        use: [
          {
            loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/file-loader/dist/cjs.js',
                options: {
                  name: 'static/img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        exclude: [
          '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/src/assets/svg'
        ],
        use: [
          {
            loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/file-loader/dist/cjs.js',
            options: {
              name: 'static/img/[name].[hash:8].[ext]'
            }
          }
        ]
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/file-loader/dist/cjs.js',
                options: {
                  name: 'static/media/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/url-loader/dist/cjs.js',
            options: {
              limit: 4096,
              fallback: {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/file-loader/dist/cjs.js',
                options: {
                  name: 'static/fonts/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').rule('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              {
                loader: 'pug-plain-loader'
              }
            ]
          },
          /* config.module.rule('pug').rule('pug-template') */
          {
            use: [
              {
                loader: 'raw-loader'
              },
              {
                loader: 'pug-plain-loader'
              }
            ]
          }
        ]
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('css').rule('normal') */
          {
            use: [
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          },
          /* config.module.rule('postcss').rule('normal') */
          {
            use: [
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'style-resources-loader',
                options: {
                  patterns: [
                    '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/src/styles/variables.scss'
                  ]
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'style-resources-loader',
                options: {
                  patterns: [
                    '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/src/styles/variables.scss'
                  ]
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'style-resources-loader',
                options: {
                  patterns: [
                    '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/src/styles/variables.scss'
                  ]
                }
              }
            ]
          },
          /* config.module.rule('scss').rule('normal') */
          {
            use: [
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              },
              {
                loader: 'style-resources-loader',
                options: {
                  patterns: [
                    '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/src/styles/variables.scss'
                  ]
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').rule('normal') */
          {
            use: [
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/sass-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/less-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/less-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/less-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').rule('normal') */
          {
            use: [
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/less-loader/dist/cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').rule('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]'
                  }
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          },
          /* config.module.rule('stylus').rule('normal') */
          {
            use: [
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/vue-style-loader/index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/css-loader/dist/cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 2
                }
              },
              {
                loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/postcss-loader/src/index.js',
                options: {
                  sourceMap: false,
                  plugins: [
                    function () { /* omitted long function */ }
                  ]
                }
              },
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false,
                  preferPathResolver: 'webpack'
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          {
            loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/cache-loader/dist/cjs.js',
            options: {
              cacheDirectory: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/.cache/babel-loader',
              cacheIdentifier: 'fa0e071c'
            }
          },
          {
            loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/babel-loader/lib/index.js'
          }
        ]
      },
      /* config.module.rule('ts') */
      {
        test: /\.ts$/,
        use: [
          {
            loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/cache-loader/dist/cjs.js',
            options: {
              cacheDirectory: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/.cache/ts-loader',
              cacheIdentifier: '0511a189'
            }
          },
          {
            loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/babel-loader/lib/index.js'
          },
          {
            loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/ts-loader/index.js',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: [
                '\\.vue$'
              ],
              happyPackMode: false
            }
          }
        ]
      },
      /* config.module.rule('tsx') */
      {
        test: /\.tsx$/,
        use: [
          {
            loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/cache-loader/dist/cjs.js',
            options: {
              cacheDirectory: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/.cache/ts-loader',
              cacheIdentifier: '0511a189'
            }
          },
          {
            loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/babel-loader/lib/index.js'
          },
          {
            loader: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/node_modules/ts-loader/index.js',
            options: {
              transpileOnly: true,
              happyPackMode: false,
              appendTsxSuffixTo: [
                '\\.vue$'
              ]
            }
          }
        ]
      },
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
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      {
        options: {
          test: /\.m?js(\?.*)?$/i,
          chunkFilter: () => true,
          warningsFilter: () => true,
          extractComments: false,
          sourceMap: true,
          cache: true,
          cacheKeys: defaultCacheKeys => defaultCacheKeys,
          parallel: true,
          include: undefined,
          exclude: undefined,
          minify: undefined,
          terserOptions: {
            output: {
              comments: /^\**!|@preserve|@license|@cc_on/i
            },
            compress: {
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
              if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            mangle: {
              safari10: true
            }
          }
        }
      }
    ]
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('feature-flags') */
    new DefinePlugin(
      {
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false'
      }
    ),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"development"',
          BASE_URL: '"/"'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          function () { /* omitted long function */ }
        ],
        additionalFormatters: [
          function () { /* omitted long function */ }
        ]
      }
    ),
    /* config.plugin('html') */
    new HtmlWebpackPlugin(
      {
        title: 'vue3-cli-admin',
        templateParameters: function () { /* omitted long function */ },
        template: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/public/index.html'
      }
    ),
    /* config.plugin('copy') */
    new CopyPlugin(
      [
        {
          from: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/public',
          to: '/Users/admin/my-code/self/byme/vue3-study/vue3-cli-admin/dist',
          toType: 'dir',
          ignore: [
            '.DS_Store',
            {
              glob: 'index.html',
              matchBase: false
            }
          ]
        }
      ]
    ),
    /* config.plugin('fork-ts-checker') */
    new ForkTsCheckerWebpackPlugin(
      {
        typescript: {
          extensions: {
            vue: {
              enabled: true,
              compiler: '@vue/compiler-sfc'
            }
          },
          diagnosticOptions: {
            semantic: true,
            syntactic: false
          }
        }
      }
    ),
    {
      profile: false,
      handler: (percent, message, ...details) => {
        this.updateProgress(percent, message, details);
      },
      modulesCount: 500,
      showEntries: false,
      showModules: true,
      showActiveModules: true,
      options: {
        name: 'vue3-cli-admin',
        color: 'green',
        reporters: [
          'basic'
        ],
        reporter: null
      },
      reporters: [
        {}
      ]
    }
  ],
  entry: {
    app: [
      './src/main.ts'
    ]
  }
}
