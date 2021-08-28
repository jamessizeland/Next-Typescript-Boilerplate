import type { UserActions } from './user.reducer';

export const setCurrentUser = (
  user: string,
): { type: UserActions; payload: string } => ({
  type: 'SET_CURRENT_USER',
  payload: user,
});
