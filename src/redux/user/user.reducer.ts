import { PayloadAction } from '@reduxjs/toolkit';
// Controls state relating to the current user of this application

// export type UserActions = {
//   type: 'SET_CURRENT_USER' | 'UNSET_CURRENT_USER'; // add more actions here
//   payload: string;
// };
export type UserActions = 'SET_CURRENT_USER' | 'UNSET_CURRENT_USER'; // add more actions here

export type UserState = {
  currentUser: null | string;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
};

const userReducer = (
  state = INITIAL_STATE,
  action: PayloadAction<string, UserActions>,
): UserState => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
      };
    case 'UNSET_CURRENT_USER':
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
};

export default userReducer;
