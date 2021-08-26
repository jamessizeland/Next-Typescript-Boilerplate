// Controls state relating to the overall busy state of this application

export type BusyStateActions = {
  type: 'SET_APP_BUSY' | 'UNSET_APP_BUSY'; // add more actions here
  payload: 'app' | string;
};

type BusyState = {
  appBusy: boolean;
};

const INITIAL_STATE: BusyState = {
  appBusy: false,
};

const busyReducer = (
  state = INITIAL_STATE,
  action: BusyStateActions,
): BusyState => {
  switch (action.type) {
    case 'SET_APP_BUSY':
      return {
        ...state,
        appBusy: true,
      };
    case 'UNSET_APP_BUSY':
      return {
        ...state,
        appBusy: false,
      };
    default:
      return state;
  }
};

export default busyReducer;
