
const webpack = require('webpack');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

const paths = [
  '/',
];

module.exports = {
  //devtool: 'cheap-module-source-map',
  devtool: 'eval',
  // webpack folder's entry js - excluded from jekll's build process.
  entry: {
    'main': './react-dev/entry.js'
  },

  output: {
    // we're going to put the generated file in the assets folder so jekyll will grab it.
      filename: 'bundle.js',
      path: 'src/_assets/js/',
      libraryTarget: 'umd'
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
        new StaticSiteGeneratorPlugin('main', paths, {
          //properties assigned here are merged into 'locals'
          //passed to exported render function
          greet: 'Hello'
        })
      ]
    }
};
