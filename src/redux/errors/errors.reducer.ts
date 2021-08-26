// Controls state relating to the current user of this application

export type ErrorType = { code: number; message: string };

export type ErrorActions = {
  type: 'LOG_ERROR' | 'CLEAR_LOG'; // add more actions here
  payload: ErrorType;
};

type ErrorState = {
  log: ErrorType[];
};

const INITIAL_STATE: ErrorState = {
  log: [],
};

const errorReducer = (
  state = INITIAL_STATE,
  action: ErrorActions,
): ErrorState => {
  switch (action.type) {
    case 'LOG_ERROR':
      return {
        ...state,
        log: state.log.concat(action.payload),
      };
    case 'CLEAR_LOG':
      return {
        ...state,
        log: [],
      };
    default:
      return state;
  }
};

export default errorReducer;
