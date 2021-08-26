import type { ErrorActions, ErrorType } from './errors.reducer';

export const logNewError = (error: ErrorType): ErrorActions => ({
  type: 'LOG_ERROR',
  payload: error,
});

export const clearErrorLog = (): ErrorActions => ({
  type: 'CLEAR_LOG',
  payload: { code: 0, message: '' }, // default empty error object
});
