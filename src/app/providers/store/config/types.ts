import { ReducersMapObject } from '@reduxjs/toolkit';
import { User } from '@/entities/User';
import { LoginSchema } from '@/features/authByLoginAndPassword';

export interface StoreSchema {
  user: User;
  // async reducers
  loginForm?: LoginSchema;
}

export type ReducerMap = ReducersMapObject<StoreSchema>;
export type ReducerMapKey = keyof ReducerMap;
export type StoreReducer = ReducerMap[ReducerMapKey];
