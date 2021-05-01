import {MessageTypes} from '../../../store/message/MessageTypes';
import {refreshToken as refresh} from '../../../api/auth';
import {clearAuth, makeAuth} from '../../../store/auth/authActions';
import {ADD_MESSAGE} from '../../../store/message/messageActions';
import {HttpStatus} from '../../../api/status';

export const isError = (message) => {
  return message.type === MessageTypes.ERROR;
};

export const getNewTokens = async (isError, userId) => {
  if (!isError) return;

  const {status, data} = await refresh(userId);
  if (status === HttpStatus.OK) {
    return data;
  }
  throw new Error('Unauthorized');
};

export function refreshToken(store) {
  return (next) => (action) => {
    if (action.type === ADD_MESSAGE) {
      getNewTokens(
          isError(action.message),
          store.getState().user.data.id,
      )
          .then((tokens) => {
            store.dispatch(makeAuth(tokens));
          })
          .catch(() => {
            store.dispatch(clearAuth());
          });
    }
    return next(action);
  };
}
