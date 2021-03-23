/**
 * @param {Function} func
 * @return {*}
 */
import {MessageTypes} from '../../store/message/MessageTypes';

export function requestWithToken(func) {
  const accessTokenKey = process.env.REACT_APP_ACCESS_TOKEN_KEY;
  const accessToken = localStorage.getItem(accessTokenKey);

  const headers = {
    Authorization: accessToken ? `Bearer ${accessToken}` : '',
  };
  return func(headers);
}

/**
 * @param {Function} toggleFetch
 * @param {Function} request
 * @param {Function} messageHandler
 * @return {Function} Return action creator
 */
export function declareAsyncActionCreator(
    toggleFetch,
    request,
    messageHandler,
) {
  return (...args) => (dispatch) => {
    dispatch(toggleFetch());
    return request(dispatch, ...args)
        .then(
            (data) => {
              dispatch(toggleFetch());
              dispatch(messageHandler(MessageTypes.SUCCESS));
              return data;
            },
            (err) => {
              dispatch(toggleFetch());
              dispatch(messageHandler(MessageTypes.ERROR, err));
            },
        );
  };
}

/**
 * @param {Function} toggleFetch
 * @param {Function} errorHandler
 * @return {Function} Return action creator
 */
export function createDeclarator(toggleFetch, errorHandler) {
  return (request) => declareAsyncActionCreator(
      toggleFetch,
      request,
      errorHandler,
  );
}

/**
 * @param {string} type
 * @return {function(): {type: *}}
 */
export function createFetchToggler(type) {
  return () => ({type});
}
