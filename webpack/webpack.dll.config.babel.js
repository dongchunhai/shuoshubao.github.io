import fs from 'fs'
import path from 'path'
import webpack from 'webpack'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import {PATH_ROOT, PATH_SRC} from './config'

const FILE_NAME = '[name]_[hash]'
const PATH_LIB = path.resolve(PATH_SRC, 'lib')

export default {
  entry: {
    vendor: [
      'react',
      'classnames',
      'prop-types',
      'react-dom'
    ]
  },
  output: {
    path: PATH_LIB,
    filename: `${FILE_NAME}.js`,
    library: FILE_NAME
  },
  plugins: [
    new CleanWebpackPlugin([PATH_LIB], {
      root: PATH_ROOT,
      verbose: false
    }),
    new webpack.DllPlugin({
      context: __dirname,
      name: FILE_NAME,
      path: path.resolve(PATH_LIB, 'vendor.json')
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
}
