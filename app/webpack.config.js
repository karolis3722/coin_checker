const path = require('path');
module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      { 
          test: /\.(eot|ttf|woff2?|otf|svg|png)$/, 
          loader:'file-loader', 
          options: {
            name: '[name].[ext]'
         }
      },
      {
        test: /\.css$/,
        use:[{
            loader: "style-loader"
        }, {
            loader: "css-loader",
        }],
        include: [
            path.join(__dirname, 'src'),
            /node_modules/
          ],
        
    },
    {
        test: /\.(png|jpg|woff|svg)$/,
        loader: 'file-loader'
    }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', 'css', 'json'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};