import path from "path";
import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { PluginsOptions } from "./types";

export function plugins({context}: PluginsOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: path.resolve(context, "public", "index.html"),
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name][contenthash:8].css',
      chunkFilename: 'css/[name][contenthash:8].css',
    }),
  ]
}