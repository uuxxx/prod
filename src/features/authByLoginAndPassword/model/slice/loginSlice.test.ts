import { LoginSchema } from '../types/loginSchema';
import { loginReducer, loginActions } from './loginSlice';

describe('loginSlice test', () => {
  it('setUsername', () => {
    const state = { username: '' } as LoginSchema;
    expect(loginReducer(state, loginActions.setUsername('test'))).toEqual({ username: 'test' });
  });

  it('setPassword', () => {
    const state = { password: '' } as LoginSchema;
    expect(loginReducer(state, loginActions.setPassword('test'))).toEqual({ password: 'test' });
  });
});
