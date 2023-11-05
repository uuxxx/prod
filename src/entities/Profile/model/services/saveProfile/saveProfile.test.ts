import * as firestore from 'firebase/firestore';
import { Dispatch } from '@reduxjs/toolkit';
import { RootState } from '@/app/providers/store';
import { Country } from '@/shared/constants/country';
import { Currency } from '@/shared/constants/currency';
import { saveProfile } from './saveProfile';
import { ProfileErrors } from '../../types/ProfileErrors';

jest.mock('firebase/firestore');

const mockedFirestore = jest.mocked(firestore);

jest.mock('./saveProfile', () => {
  const originalModule = jest.requireActual('./saveProfile');
  return {
    __esModule: true,
    ...originalModule,
    uploadAvatar: jest.fn(() => Promise.resolve()),
  };
});

describe('fetchProfile', () => {
  let getState: jest.Mock<RootState>;
  let dispatch: Dispatch;

  beforeEach(() => {
    getState = jest.fn();
    dispatch = jest.fn();
  });

  mockedFirestore.setDoc.mockImplementation(() => Promise.resolve());

  it('successfully saving changes', async () => {
    getState.mockReturnValue({
      user: { uid: 'test-id' },
      profile: {
        formData: {
          age: '42',
          name: 'TestName',
          surname: 'TestSurname',
          country: Country.Russia,
          currency: Currency.RUB,
        },
      },
    } as RootState);

    const action = saveProfile();
    const result = await action(dispatch, getState, undefined);

    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(dispatch).toBeCalled();
  });

  it('error in validation', async () => {
    getState.mockReturnValue({
      user: { uid: 'test-id' },
      profile: {
        formData: {
          age: '42e',
          name: 'TestName',
          surname: 'TestSurname',
          country: Country.Russia,
          currency: Currency.RUB,
        },
      },
    } as RootState);

    const action = saveProfile();
    const result = await action(dispatch, getState, undefined);

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe(ProfileErrors.INVALID_AGE);
  });
});
