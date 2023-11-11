import { ReducersMapObject } from '@reduxjs/toolkit';
import { UserSchema } from '@/entities/User';
import { LoginSchema } from '@/features/authByLoginAndPassword';
import { ProfileSchema } from '@/entities/Profile';
import { createAccountFormSchema } from '@/features/createAccontWithLoginAndPassword';

export interface StoreSchema {
  user: UserSchema;
  // async reducers
  loginForm?: LoginSchema;
  createAccountForm?: createAccountFormSchema;
  profile?: ProfileSchema;
}

export type ReducerMap = ReducersMapObject<StoreSchema>;
export type ReducerMapKey = keyof ReducerMap;
export type StoreReducer = ReducerMap[ReducerMapKey];
