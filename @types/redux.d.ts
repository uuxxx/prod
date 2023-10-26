// eslint-disable-next-line
import * as Redux from 'redux';

declare module 'redux' {
  export type CreateReducerManager<S> = (initialReducers: ReducersMapObject<S>) => {
    getReducerMap: () => ReducersMapObject<S>;
    reduce: (state: S, action: AnyAction) => CombinedState<S>;
    add: <K extends keyof ReducersMapObject<S>>(key: K, reducer: ReducersMapObject<S>[K]) => void;
    remove: (key: Exclude<keyof ReducersMapObject<S>, typeof $CombinedState>) => void;
  };
  export interface Store<S> {
    reducerManager: ReturnType<CreateReducerManager<S>>;
  }
}
