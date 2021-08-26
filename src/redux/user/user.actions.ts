import type { UserActions } from './user.reducer';

export const setCurrentUser = (user: string): UserActions => ({
  type: 'SET_CURRENT_USER',
  payload: user,
});
