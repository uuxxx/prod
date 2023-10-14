import { classNames } from './classNames';

describe('classNames', () => {
  it('all args are passed', () => {
    const mockStyles = {
      main: 'abc',
      hovered: 'def',
      additional: 'ghi',
    };

    const res = classNames(mockStyles, 'main', { hovered: true }, ['additional']);

    expect(res).toBe('abc ghi def');
  });

  it('modes obj received field with false value', () => {
    const mockStyles = {
      main: 'abc',
      hovered: 'def',
      additional: 'ghi',
    };

    const res = classNames(mockStyles, 'main', { hovered: false }, ['additional']);

    expect(res).toBe('abc ghi');
  });

  it('additional array includes empty string', () => {
    const mockStyles = {
      main: 'abc',
      hovered: 'def',
      additional: 'ghi',
    };

    const res = classNames(mockStyles, 'main', { hovered: true }, ['']);

    expect(res).toBe('abc def');
  });
});
