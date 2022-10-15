const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    main: path.resolve(__dirname, "./src/main.js"),
    searchForm: path.resolve(__dirname, "./src/js/searchForm.js"),
    filter: path.resolve(__dirname, "./src/js/categoryFilter.js"),
  },
  output: { path: path.resolve(__dirname, "build"), filename: ["main"].js },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "./src/pages/index.html"),
      filename: "index.html",
      chunks: ["main", "searchForm", "filter"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
  devServer: {
    port: 8080,
    static: {
      directory: path.join(__dirname, "src"),
    },
  },
};
