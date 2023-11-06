import path from 'path';
import webpack from 'webpack';
import { devServer } from './config/webpack/devServer';
import { loaders } from './config/webpack/loaders/loaders';
import { plugins } from './config/webpack/plugins';
import { resolvers } from './config/webpack/resolvers';

interface Env {
  mode: 'development' | 'production';
}

module.exports = ({ mode }: Env): webpack.Configuration => {
  const isProd = mode === 'production';
  return {
    mode,
    devtool: isProd ? false : 'eval-source-map',
    module: {
      rules: loaders(isProd),
    },
    resolve: resolvers(),
    entry: path.resolve(__dirname, 'src'),
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      publicPath: '/',
    },
    plugins: plugins({ context: __dirname, isProd }),
    devServer: isProd ? undefined : devServer(),
  };
};
