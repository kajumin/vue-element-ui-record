// const CompressionWebpackPlugin = require('compression-webpack-plugin')
const isProd = process.env.NODE_ENV === 'production'
const webpackBundleAnalyzer = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin
console.log(webpackBundleAnalyzer)
// 需要gzip压缩的文件后缀
// const productionGzipExtensions = ['js', 'css']
const cdn = {
  // 开发环境
  dev: {
    css: [],
    js: []
  },
  // 生产环境
  build: {
    css: ['https://unpkg.com/element-ui/lib/theme-chalk/index.css'],
    js: [
      'https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.min.js',
      'https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router.min.js',
      'https://cdn.jsdelivr.net/npm/vuex@3.0.1/dist/vuex.min.js',
      'https://cdn.jsdelivr.net/npm/axios@0.18.0/dist/axios.min.js'
    ]
  }
}

const config = {
  // parallel: require('os').cpus().length > 1,
  // 静态资源打包路径
  // assetsDir: 'static', //css js image等存放地址
  // 打包的输出目录
  // outputDir: 'output', //默认为dist
  productionSourceMap: false,
  chainWebpack: (config) => {
    if (isProd) {
      config.optimization.minimizer('terser').tap((args) => {
        const option = args[0].terserOptions.compress
        option.drop_console = true
        option.warnings = false
        option.pure_funcs = ['console.log']
        return args
      })
      config.plugin('webpack-report').use(webpackBundleAnalyzer, [
        {
          analyzerMode: 'static'
        }
      ])
    }
    config.plugin('html').tap((args) => {
      args[0].title = 'element-ui 测试基地'
      if (process.env.NODE_ENV === 'production') {
        args[0].cdn = cdn.build
      }
      if (process.env.NODE_ENV === 'development') {
        args[0].cdn = cdn.dev
      }
      return args
    })
  },
  configureWebpack: (config) => {
    // if (isProd) {
    //   config.plugins.push(
    //     new CompressionWebpackPlugin({
    //       test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
    //       threshold: 8192,
    //       minRatio: 0.8
    //     })
    //   )
    // }
    if (isProd) {
      config.externals = {
        vue: 'vue',
        'vue-router': 'VueRouter',
        vuex: 'Vuex',
        axios: 'axios'
      }
    }
  }
}
module.exports = config
