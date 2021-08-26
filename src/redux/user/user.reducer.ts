// Controls state relating to the current user of this application

export type UserActions = {
  type: 'SET_CURRENT_USER'; // add more actions here
  payload: string;
};
type UserState = {
  currentUser: null | string;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action: UserActions): UserState => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
