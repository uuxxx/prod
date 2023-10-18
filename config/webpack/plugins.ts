import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { PluginsOptions } from './types';

function isWebpackPluginInstance(
  plugin: webpack.WebpackPluginInstance | boolean,
): plugin is webpack.WebpackPluginInstance {
  return typeof plugin !== 'boolean';
}

export function plugins({ context, isProd }: PluginsOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: path.resolve(context, 'public', 'index.html'),
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name][contenthash:8].css',
      chunkFilename: 'css/[name][contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS_PROD__: isProd,
    }),
    !isProd && new webpack.HotModuleReplacementPlugin(),
    !isProd && new ReactRefreshWebpackPlugin(),
    !isProd &&
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      }),
  ].filter(isWebpackPluginInstance);
}
