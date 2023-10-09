import webpack from 'webpack';

export function resolvers(): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
  }
}