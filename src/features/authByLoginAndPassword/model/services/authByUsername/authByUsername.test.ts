import * as firebaseAuth from 'firebase/auth';
import type { UserCredential } from 'firebase/auth';
import { RootState } from '@/app/providers/store';
import { Dispatch } from '@reduxjs/toolkit';
import { authByUsernameAndPassword } from './authByUsername';

jest.mock('firebase/auth');

const mockedFirebaseAuth = jest.mocked(firebaseAuth);

describe('authByUsername', () => {
  let dispatch: Dispatch;
  let getState: () => RootState;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  });

  test('server responded successfully', async () => {
    mockedFirebaseAuth.signInWithEmailAndPassword.mockReturnValue(
        new Promise((resolve) => {
          resolve({
            user: {
              email: 'test@gmail.com',
              displayName: 'testDisplayName',
              emailVerified: true,
              photoURL: null,
              metadata: {
                creationTime: '11 11 11',
                lastSignInTime: '12 12 12',
              },
              uid: 'test',
            },
          } as UserCredential);
        }),
    );

    const user = {
      email: 'test@gmail.com',
      displayName: 'testDisplayName',
      emailVerified: true,
      createdAt: '11 11 11',
      lastSignInTime: '12 12 12',
      photoURL: null,
      uid: 'test',
    };

    const action = authByUsernameAndPassword({ password: '12345', email: 'test@mail.com' });
    const result = await action(dispatch, getState, undefined);

    expect(mockedFirebaseAuth.signInWithEmailAndPassword).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(user);
  });

  it('server reponded with error', async () => {
    mockedFirebaseAuth.signInWithEmailAndPassword.mockReturnValue(
        new Promise((_, reject) => {
          reject();
        }),
    );

    const action = authByUsernameAndPassword({ password: 'test', email: 'test' });
    const result = await action(dispatch, getState, undefined);
    expect(mockedFirebaseAuth.signInWithEmailAndPassword).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
  });
});
