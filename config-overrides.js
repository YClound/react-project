const { override, addWebpackAlias, fixBabelImports } = require('customize-cra');
const path = require('path');

function resolve(dir) {
  return path.resolve(__dirname, dir)
}

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: "es",
    style: "css",
  }),
  addWebpackAlias({
    "@": resolve("./src"),
    "@components": resolve('./src/components'),
    "@pages": resolve('./src/pages'),
    "@utils": resolve('./src/utils'),
  })
)