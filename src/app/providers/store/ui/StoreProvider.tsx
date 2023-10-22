import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';

export function StoreProvider(props: PropsWithChildren) {
  const { children } = props;
  return <Provider store={createReduxStore()}>{children}</Provider>;
}
