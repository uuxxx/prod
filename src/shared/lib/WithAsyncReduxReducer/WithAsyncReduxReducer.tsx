import { useEffect } from 'react';
import { isKeyOf } from '@/utils';
import { useAppDispatch, useAppStore } from '../reduxHooks/reduxHooks';
import { WithAsyncReduxReducerProps } from './WithAsyncReduxReducerProps';

export function WithAsyncReduxReducer(props: WithAsyncReduxReducerProps) {
  const { reducers, children } = props;

  const { reducerManager } = useAppStore();
  const dispatch = useAppDispatch();

  useEffect(() => {
    let reducersMap = [];
    for (const reducerKey in reducers) {
      if (Object.prototype.hasOwnProperty.call(reducers, reducerKey)) {
        isKeyOf(reducerKey, reducers);
        reducerManager.add(reducerKey, reducers[reducerKey]);
        reducersMap.push(reducerKey.toUpperCase());
      }
    }
    if (reducersMap.length) {
      dispatch({
        type: `@ADD ${reducersMap.join(', ')} REDUCER${reducersMap.length > 1 ? 'S' : ''}`,
      });
    }
    return () => {
      reducersMap = [];
      for (const reducerKey in reducers) {
        if (Object.prototype.hasOwnProperty.call(reducers, reducerKey)) {
          isKeyOf(reducerKey, reducers);
          reducerManager.remove(reducerKey);
          reducersMap.push(reducerKey.toUpperCase());
        }
      }
      if (reducersMap.length) {
        dispatch({
          type: `@REMOVE ${reducersMap.join(', ')} REDUCER${reducersMap.length > 1 ? 'S' : ''}`,
        });
      }
    };
  }, []);

  return <>{children}</>;
}
