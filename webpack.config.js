var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
var webpack = require('webpack');
var fs = require('fs');

const paths = ['/'];


module.exports = {

  entry: './react-dev/router.js',

  //devtool: 'cheap-module-source-map',
  devtool: 'eval',
  // webpack folder's entry js - excluded from jekll's build process.

  output: {
    // we're going to put the generated file in the assets folder so jekyll will grab it.
      filename: 'bundle.js',
      path: 'src/_assets/js/',
      //need to compile to UMD or CommonJS so it can be requred in a Node context
      libraryTarget: 'umd',
  },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules)/,
          loader: 'babel', // 'babel-loader' is also a legal name to reference
          query: {
            presets: ['react', 'es2015']
          }
        }
      ],

      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          }
        }),
        new StaticSiteGeneratorPlugin('bundle.js', paths, { greet: 'Hello' })
      ]
    }
};
