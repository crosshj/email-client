const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, "index.jsx"),
  output: {
    path:path.resolve(__dirname, "../docs"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "client/index.html", to: "index.html" },
        { from: "client/index.css", to: "index.css" },
        { from: "server/data/*", to: "api/[name][ext]" },
      ],
    }),
  ],
};
