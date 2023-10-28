import { RootState } from '@/app/providers/store';
import { getPassword } from './getPassword';

describe('getPassword selector', () => {
  it('should return password', () => {
    expect(
        getPassword({
          loginForm: {
            password: 'test123',
          },
        } as RootState),
    ).toEqual('test123');
  });

  it('should return empty string if there is no appropriate redux slice', () => {
    expect(getPassword({} as RootState)).toEqual('');
  });
});
