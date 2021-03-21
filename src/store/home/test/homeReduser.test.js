import {
  initialState,
  homeReduser,
} from '../homeReduser';
import * as home from '../homeActions';

describe('homeReducer', () => {
  test('Should handle TOGGLE_HOME_FETCH action', () => {
    const result = homeReduser(initialState, home.toggleFetch());
    expect(result).toEqual({
      ...initialState,
      isFetch: true,
    });
  });

  test('Should handle SELECT_HOME action', () => {
    const homeData = {title: 'TEST_HOME_TITLE'};
    const result = homeReduser(initialState, home.selectHome(homeData));
    expect(result).toEqual({
      ...initialState,
      selected: homeData,
    });
  });

  test('Should handle ADD_HOME action', () => {
    const homeData = {title: 'TEST_HOME_TITLE'};
    const result = homeReduser(initialState, home.addHome(homeData));
    expect(result).toEqual({
      ...initialState,
      homes: [homeData],
    });
  });

  test('Should handle UPDATE_HOME action', () => {
    const homeData = {id: 1, title: 'TEST_HOME_TITLE'};
    const updatedHome = {...homeData, title: 'NEW_TEST_HOME_TITLE'};
    const state = {
      ...initialState,
      homes: [homeData],
    };
    const result = homeReduser(state, home.updateHome(updatedHome));
    expect(result).toEqual({
      ...initialState,
      homes: [updatedHome],
    });
  });

  test('Should handle REMOVE_HOME action', () => {
    const homeData = {id: 1, title: 'TEST_HOME_TITLE'};
    const state = {
      ...initialState,
      homes: [homeData],
    };
    const result = homeReduser(state, home.removeHome(homeData.id));
    expect(result).toEqual(initialState);
  });
});
