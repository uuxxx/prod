import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function loaders(isProd: boolean): webpack.RuleSetRule[] {
  return [
    {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    },
    {
      test: /\.s[ac]ss$/i,
      use: [
        isProd ? MiniCssExtractPlugin.loader : 'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: (resPath: string) => resPath.includes('.module.'),
              localIdentName: isProd ? '[hash:base64:8]' : '[name]__[local]--[hash:base64:5]',
            },
          },
        },
        'sass-loader',
      ],
    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
        },
      ],
    },
    {
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    },
  ];
}
