const webpack = require("webpack");
const path = require("path");
const fs = require("fs");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, "../src"),
  dist: path.join(__dirname, "../dist")
}

const PAGES_DIR = `${PATHS.src}/pages/`;
const PAGES = fs.readdirSync(PAGES_DIR).filter(el => el != "index");

const ENTRIES = {
  index: `${PATHS.src}/pages/index/index.js`,
  filter: `${PATHS.src}/pages/filter/filter.js`,
  room: `${PATHS.src}/pages/room/room.js`,
  signin: `${PATHS.src}/pages/signin/signin.js`,
  signup: `${PATHS.src}/pages/signup/signup.js`
}

module.exports = {
  externals: {
    paths: PATHS
  },
  node: {
    fs: "empty"
  },
  entry: ENTRIES,
  output: {
    filename: `js/[name]-[hash].js`,
    path: PATHS.dist,
    publicPath: "/"
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: 'all'
        }
      },
    },
  },
  module: {
    rules: [{
      test: /\.pug$/,
      loader: 'pug-loader'
    }, {
      test: /modernizr/,
      loader: 'imports-loader?this=>window!exports-loader?window.Modernizr'
    }, {
      test: /\.js$/,
      loader: "babel-loader",
      exclude: "/node_modules/"
    }, {
      test: /-webfont\.(woff(2)?|ttf|svg)$/,
      loader: "file-loader",
      options: {
        name: `fonts/[name].[ext]`
      }
    }, {
      test: /\.(jp(e*)g|png|svg|ico)$/,
      use: [{
        loader: "file-loader",
        options: {
          name: "img/[name].[ext]"
        }
      }]
    }, {
      test: /\.scss$/,
      use: [{
          loader: MiniCssExtractPlugin.loader
        }, {
          loader: "css-loader",
          options: {
            sourceMap: true
          }
        }, {
          loader: 'resolve-url-loader',
          options: {
            url: false
          }
        }, {
          loader: "sass-loader",
          options: {
            sourceMap: true
          }
        }
      ]
    }, {
      test: /\.css$/,
      use: [{
          loader: MiniCssExtractPlugin.loader,
          options: {
            publicPath: "/HTMLPractice/dist/"
          }
        }, {
          loader: "css-loader",
          options: {
            sourceMap: true,
            url: false
          }
        }, {
          loader: "postcss-loader",
          options: {
            url: false
          }
        }
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `css/[name]-[contenthash].css`,
    }),
    new CopyWebpackPlugin([
      { from: `${PATHS.src}/img`, to: `img` },
      { from: `${PATHS.src}/fonts`, to: `fonts` },
      { from: `${PATHS.src}/static`, to: "" }
    ]),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/index/index.pug`,
      filename: `./index.html`,
      excludeChunks: Object.keys(ENTRIES).filter(el => el != "index"),
      minify: {
        collapseWhitespace: true, 
        removeComments: true, 
        removeRedundantAttributes: true, 
        removeScriptTypeAttributes: true, 
        removeStyleLinkTypeAttributes: true, 
        useShortDoctype: true
      }
    }),
    ...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}/${page}.pug`,
      filename: `./${page}.html`,
      excludeChunks: Object.keys(ENTRIES).filter(el => el != page),
      minify: {
        collapseWhitespace: true, 
        removeComments: true, 
        removeRedundantAttributes: true, 
        removeScriptTypeAttributes: true, 
        removeStyleLinkTypeAttributes: true, 
        useShortDoctype: true
      }
    }))
  ]
}