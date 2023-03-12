const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.tsx",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(css|less)$/i,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src/index.html"),
      title: "Mountain Guide",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    static: "./dist",
    port: 4000,
    hot: true, //enable webpack hot module replacement
    open: true,
    historyApiFallback: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
};
