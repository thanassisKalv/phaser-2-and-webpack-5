const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

// Phaser webpack config
var phaserModule = path.join(__dirname, "/node_modules/phaser-ce/");
var phaser = path.join(phaserModule, "build/custom/phaser-split.js");
var pixi = path.join(phaserModule, "build/custom/pixi.js");
var p2 = path.join(phaserModule, "build/custom/p2.js");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },

      { test: /pixi\.js/, use: ["expose-loader?PIXI"] },
      { test: /phaser-split\.js$/, use: ["expose-loader?Phaser"] },
      { test: /p2\.js/, use: ["expose-loader?p2"] },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new CopyWebpackPlugin({
      patterns:
      [
        { from: './src/assets', to : 'assets' }
      ]
      }
    )
  ],
  resolve: {
    alias: {
      phaser: phaser,
      pixi: pixi,
      p2: p2
    },
  },
};