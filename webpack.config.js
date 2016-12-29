
const webpack = require('webpack');

module.exports = {
  //devtool: 'cheap-module-source-map',
  devtool: 'eval',
  // webpack folder's entry js - excluded from jekll's build process.
  entry: "./react-dev/entry.js",
  output: {
    // we're going to put the generated file in the assets folder so jekyll will grab it.
      path: 'src/_assets/js/',
      filename: "bundle.js"
  },
    module: {
  /*  plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV' : JSON.stringify('production') 
        } 
      })
    ],*/
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};


