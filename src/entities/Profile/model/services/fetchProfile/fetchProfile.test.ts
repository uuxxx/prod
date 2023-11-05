import * as storage from 'firebase/storage';
import * as firestore from 'firebase/firestore';
import { Dispatch } from '@reduxjs/toolkit';
import { DocumentSnapshot, DocumentData } from 'firebase/firestore';
import { RootState } from '@/app/providers/store';
import { Profile } from '../../types/Profile';
import { fetchProfile } from './fetchProfile';
import { ProfileErrors } from '../../types/ProfileErrors';

jest.mock('firebase/storage');
jest.mock('firebase/firestore');

const mockedStorage = jest.mocked(storage);
const mockedFirestore = jest.mocked(firestore);

describe('fetchProfile', () => {
  global.URL.createObjectURL = jest.fn(() => 'test');

  let getState: () => RootState;
  let dispatch: Dispatch;

  beforeEach(() => {
    getState = jest.fn();
    dispatch = jest.fn();
  });

  it('server responded successfully, user data and their avatar are stored on the server', async () => {
    const testBlob = new Blob(['test'], { type: 'image/png' });
    mockedStorage.getBlob.mockResolvedValue(testBlob);

    class MockDockSnap {
      exists() {
        return true;
      }
      data(): Profile {
        return {
          name: 'TestName',
          surname: 'TestSurname',
          age: 'TestAge',
        };
      }
    }

    mockedFirestore.getDoc.mockResolvedValue(
      new MockDockSnap() as DocumentSnapshot<DocumentData, DocumentData>,
    );

    const action = fetchProfile('test');
    const result = await action(dispatch, getState, undefined);

    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual({
      name: 'TestName',
      surname: 'TestSurname',
      age: 'TestAge',
      photoURL: URL.createObjectURL(testBlob),
    });

    expect(mockedStorage.getBlob).toHaveBeenCalled();
    expect(mockedFirestore.getDoc).toHaveBeenCalled();
  });

  it('server responded with error, USER_NOT_FOUND', async () => {
    const testBlob = new Blob(['test'], { type: 'image/png' });
    mockedStorage.getBlob.mockResolvedValue(testBlob);

    class MockDockSnap {
      exists() {
        return false;
      }
    }

    mockedFirestore.getDoc.mockResolvedValue(
      new MockDockSnap() as DocumentSnapshot<DocumentData, DocumentData>,
    );

    const action = fetchProfile('test');
    const result = await action(dispatch, getState, undefined);

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe(ProfileErrors.USER_NOT_FOUND);
  });
});
