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
