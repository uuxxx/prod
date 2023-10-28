import { RootState } from '@/app/providers/store';
import { getLogin } from './getLogin';

describe('getLogin selector', () => {
  it('should return username', () => {
    expect(
        getLogin({
          loginForm: {
            username: 'test123',
          },
        } as RootState),
    ).toEqual('test123');
  });

  it('should return empty string if there is no appropriate redux slice', () => {
    expect(getLogin({} as RootState)).toEqual('');
  });
});
