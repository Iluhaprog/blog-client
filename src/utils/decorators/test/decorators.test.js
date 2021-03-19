import {decorators} from '..';
import {createFetchToggler} from '../decorators';

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
  expect(localStorage.getItem)
      .toBeCalledWith(process.env.REACT_APP_ACCESS_TOKEN_KEY);
  expect(obj.func).toBeCalled();
  expect(obj.func).toBeCalledWith(returnValue);
  expect(answer).toEqual(returnValue);
});

test('declarateActionCreator (success)', async () => {
  const funcs = {
    toggleFetch: () => {},
    request: (dispatch, id) => Promise.resolve(id),
    handleError: (err) => {},
    dispatch: () => {},
  };

  const id = 1;
  jest.spyOn(funcs, 'toggleFetch').mockReturnValue(undefined);
  jest.spyOn(funcs, 'request').mockResolvedValueOnce(id);
  jest.spyOn(funcs, 'dispatch');

  const actionCreator = decorators.declareAyncActionCreator(
      funcs.toggleFetch,
      funcs.request,
      funcs.handleError,
  );
  const dispatchedActionCreator = actionCreator(id);
  const promiseResult = await dispatchedActionCreator(funcs.dispatch);

  expect(promiseResult).toBe(id);
  expect(funcs.toggleFetch).toBeCalledTimes(2);
  expect(funcs.dispatch).toBeCalledTimes(2);
  expect(funcs.request).toBeCalledTimes(1);
  expect(funcs.request).toBeCalledWith(funcs.dispatch, id);
});


test('declarateActionCreator (fail)', async () => {
  const funcs = {
    toggleFetch: () => {},
    request: (dispatch, id) => Promise.resolve(id),
    handleError: (err) => {},
    dispatch: () => {},
  };

  const id = 1;
  const error = new Error('error');
  jest.spyOn(funcs, 'toggleFetch').mockReturnValue(undefined);
  jest.spyOn(funcs, 'request').mockRejectedValueOnce(error);
  jest.spyOn(funcs, 'handleError');
  jest.spyOn(funcs, 'dispatch');

  const actionCreator = decorators.declareAyncActionCreator(
      funcs.toggleFetch,
      funcs.request,
      funcs.handleError,
  );
  const dispatchedActionCreator = actionCreator(id);
  await dispatchedActionCreator(funcs.dispatch);

  expect(funcs.toggleFetch).toBeCalledTimes(2);
  expect(funcs.dispatch).toBeCalledTimes(3);
  expect(funcs.request).toBeCalledTimes(1);
  expect(funcs.handleError).toBeCalledTimes(1);
  expect(funcs.handleError).toBeCalledWith(error);
});

test('createFetchToggler', () => {
  const TEST_ACTION = 'TEST_ACTION';
  const toggleFetch = createFetchToggler(TEST_ACTION);
  const result = toggleFetch();

  expect(result).toEqual({
    type: TEST_ACTION,
  });
});
