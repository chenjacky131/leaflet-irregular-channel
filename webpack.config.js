const path = require('path');
module.exports = {
  entry: './src/index.js',
  experiments: {
    outputModule: true,
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'irregular-channel.js',
    library: {
      type: 'module'
    }
  }
}
