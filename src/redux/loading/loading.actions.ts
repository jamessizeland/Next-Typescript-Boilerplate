import type { BusyStateActions } from './loading.reducer';

export const AppBusy = (set: boolean): BusyStateActions => ({
  type: set ? 'SET_APP_BUSY' : 'UNSET_APP_BUSY',
  payload: 'app',
});
