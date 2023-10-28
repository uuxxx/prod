import { ReducerMap } from '@/app/providers/store/config/types';
import { PropsWithChildren } from 'react';

export interface WithAsyncReduxReducerProps extends PropsWithChildren {
  reducers: Partial<ReducerMap>;
}
