import { RootState } from '@/app/providers/store';
import { getError } from './getError';

describe('getError selector', () => {
  it('should return error', () => {
    expect(
        getError({
          loginForm: {
            error: 'test123',
          },
        } as RootState),
    ).toEqual('test123');
  });

  it('should return empty string if there is no appropriate redux slice', () => {
    expect(getError({} as RootState)).toEqual('');
  });
});
