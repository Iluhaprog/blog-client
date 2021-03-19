/**
 * @param {Function} func
 * @return {*}
 */
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
 * @param {Function} errorHandler
 * @return {Function} Return action creator
 */
export function declareAyncActionCreator(toggleFetch, request, errorHandler) {
  return (...args) => (dispatch) => {
    dispatch(toggleFetch());
    return request(dispatch, ...args)
        .then(
            (data) => {
              dispatch(toggleFetch());
              return data;
            },
            (err) => {
              dispatch(toggleFetch());
              dispatch(errorHandler(err));
            },
        );
  };
}
