const path = require('path');
export default {
  entry: './src/index.js',
  extraBabelPlugins: [
    ['import', { libraryName: 'antd-mobile', libraryDirectory: 'es', style: true }]
  ],
  env: {
    development: {
      extraBabelPlugins: ['dva-hmr'],
    },
  },
  alias: {
    components: path.resolve(__dirname, 'src/components/'),
    utils: path.resolve(__dirname, 'src/utils/'),
    assets: path.resolve(__dirname, 'src/assets/'),
    routes: path.resolve(__dirname, 'src/routes/')
  },
  ignoreMomentLocale: true,
  theme: './src/theme.js',
  disableDynamicImport: true,
  publicPath: '/',
  sass: {},
  proxy: {
    "/iot": {
      target: "http://172.16.67.79:8080",
      changeOrigin: true,
      pathRewrite: { "^/iot": "/" }
    }
  },
  hash: true,
};
