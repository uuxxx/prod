import type {Configuration as DevServerConfiguration} from 'webpack-dev-server';

export function devServer(): DevServerConfiguration {
  return {
    historyApiFallback: true,
    client: {
      progress: true,
      reconnect: 1, 
      logging: 'error'
    }
  }
}