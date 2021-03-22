import {
  initialState,
  userReducer,
} from '../userReduser';
import * as user from '../userActions';

describe('userReduser', () => {
  test('Should handle TOGGLE_USER_FETCH action', () => {
    const result = userReducer(initialState, user.toggleFetch());
    expect(result).toEqual({
      ...initialState,
      isFetch: true,
    });
  });

  test('Should handle SET_USER_DATA action', () => {
    const userData = {id: 1};
    const result = userReducer(initialState, user.setUserData(userData));
    expect(result).toEqual({
      ...initialState,
      data: userData,
    });
  });

  test('Should handle ADD_USER action', () => {
    const userData = {id: 1};
    const result = userReducer(initialState, user.addUser(userData));
    expect(result).toEqual({
      ...initialState,
      users: [userData],
    });
  });

  test('Should handle FILL_USERS_ARRAY action', () => {
    const users = [{id: 1}];
    const result = userReducer(initialState, user.fillUsersArray(users));
    expect(result).toEqual({
      ...initialState,
      users,
    });
  });

  test(
      'Shoud handle UPDATE_USER action (data in state is empty object)',
      () => {
        const userData = {id: 1, name: 'TEST'};
        const updatedUserData = {...userData, name: 'UPDATED'};
        const state = {
          ...initialState,
          users: [userData],
        };
        const result = userReducer(state, user.updateUser(updatedUserData));
        expect(result).toEqual({
          ...initialState,
          users: [updatedUserData],
        },
        );
      });

  test(
      'Shoud handle UPDATE_USER action (data in state does not empty object)',
      () => {
        const userData = {id: 1, name: 'TEST'};
        const updatedUserData = {...userData, name: 'UPDATED'};
        const state = {
          ...initialState,
          data: userData,
          users: [userData],
        };
        const result = userReducer(state, user.updateUser(updatedUserData));
        expect(result).toEqual({
          ...initialState,
          data: updatedUserData,
          users: [updatedUserData],
        },
        );
      });
});
