import { RootState } from '@/app/providers/store';
import { getLoadingStatus } from './getLoadingStatus';

describe('getLoadingStatus selector', () => {
  it('should return true', () => {
    expect(
        getLoadingStatus({
          loginForm: {
            isLoading: true,
          },
        } as RootState),
    ).toEqual(true);
  });

  it('should return false if there is no appropriate redux slice', () => {
    expect(getLoadingStatus({} as RootState)).toEqual(false);
  });
});
