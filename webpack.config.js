const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// import path from 'path'
const loader1 = (source) => {
  console.log('%c [ source ]-4', 'font-size:13px; background:pink; color:#bf2c9f;', source)
  return source + "//给你的代码加点注释：loader1";
};

const loader2 = (source) => {
  console.log('%c [ source ]-9', 'font-size:13px; background:pink; color:#bf2c9f;', source)
  return source + "//给你的代码加点注释：loader2";
};
module.exports = {
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   use: [loader1, loader2],
      // },
      // { test: /\.ts$/, use: 'ts-loader' },
    ],
  },
  mode: "development", //防止代码被压缩
  entry: "./src/index.js", //入口文件
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  plugins: [
    // new ProgressBarWebpackPlugin(),
    // new MiniCssExtractPlugin({
    //   filename: '[name]_[contenthash:8].css'
    // }),
    // new FriendlyErrorsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devtool: "source-map", //防止干扰源文件
  // resolve 是干嘛的
//   resolve: {
//     // Add '.ts' and '.tsx' as resolvable extensions.
//     extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
// },
devServer: {
  // contentBase: '../dist',
  port: 6666,
  open: true,
  compress: true,
  hot: true,
  historyApiFallback: {
    disableDotRule: true, // 解决 history 刷新404问题
  },
},
// devtool: 'cheap-source-map',
};