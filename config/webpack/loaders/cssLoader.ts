import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export function cssLoader(isProd: boolean) {
  return [
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
  ];
}
