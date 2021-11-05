const path = require("path");
const webpack = require("webpack");

module.exports = {

  context: __dirname,

  entry: {
    example: './example/index.jsx',
  },

  output: {
    filename: '[name].bundle.js',
  },


  mode: "development",
  devtool: 'source-map',


  resolve: {

    symlinks:   true,

    extensions: [ '.tsx', '.ts', '.js', '.jsx' ],

    alias: {
      three: path.join(__dirname, "node_modules/three"),
      react: path.join(__dirname, "node_modules/react"),
    }

  },


  module: {
    rules: [
      // CSS Loader
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },

      // JSX Loader
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },

      // Typescript Loader
      // {
      //   test: /\.tsx?$/,
      //   use: 'ts-loader',
      //   exclude: /node_modules/,
      // },
    ]
  },

  watchOptions: {
    poll: true
  },

  plugins: [

  ]
};
