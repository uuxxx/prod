import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function loaders(isProd: boolean): webpack.RuleSetRule[] {
  return [
    {
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader", 
          options: {
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: isProd ? 
            '[hash:base64:8]' : 
            '[name]__[local]--[hash:base64:5]',
          }
        }},
        "sass-loader",
      ],
    },
  ]
}