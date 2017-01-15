module.exports = {
  context: __dirname + '/src',
  entry: {
    javascript: './index.js',
	html: './index.html'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'index.js'
  },
  devServer: {
    contentBase: 'dist',
    port: 3001
  },
  module: {
    loaders: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query:{
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
