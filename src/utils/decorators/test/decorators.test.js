import {decorators} from '..';

test('requestWithToken', () => {
  const obj = {
    func(headers) {
      return headers;
    },
  };
  const token = 'TEST_TOKEN';
  const returnValue ={
    Authorization: `Bearer ${token}`,
  };
  jest.spyOn(obj, 'func').mockReturnValue(returnValue);
  jest.spyOn(localStorage, 'getItem').mockReturnValue(token);

  const answer = decorators.requestWithToken(obj.func);

  expect(localStorage.getItem).toBeCalled();
  expect(localStorage.getItem).toBeCalledWith(process.env.REACT_APP_ACCESS_TOKEN_KEY);
  expect(obj.func).toBeCalled();
  expect(obj.func).toBeCalledWith(returnValue);
  expect(answer).toEqual(returnValue);
});
