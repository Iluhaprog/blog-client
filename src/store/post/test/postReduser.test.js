import {
  initialState,
  postReducer,
} from '../postReduser';
import * as post from '../postActions';

describe('postReduser', () => {
  test('Should handle TOGGLE_POST_FETCH action', () => {
    const result = postReducer(initialState, post.toggleFetch());
    expect(result).toEqual({
      ...initialState,
      isFetch: true,
    });
  });

  test('Should handle SELECT_POST action', () => {
    const postData = {title: 'TEST_POST_TITLE'};
    const result = postReducer(initialState, post.selectPost(postData));
    expect(result).toEqual({
      ...initialState,
      selected: postData,
    });
  });

  test('Should handle ADD_POST action', () => {
    const postData = {title: 'TEST_POST_TITLE'};
    const result = postReducer(initialState, post.addPost(postData));
    expect(result).toEqual({
      ...initialState,
      posts: [postData],
    });
  });

  test('Should handle UPDATE_POST action', () => {
    const postData = {id: 1, title: 'TEST_POST_TITLE'};
    const updatedData = {...postData, title: 'UPDATED_POST'};
    const state = {
      ...initialState,
      posts: [postData],
    };
    const result = postReducer(state, post.updatePost(updatedData));
    expect(result).toEqual({
      ...initialState,
      posts: [updatedData],
    });
  });

  test('Should handle FILL_POSTS_ARRAY action', () => {
    const postData = {title: 'TEST_POST_TITLE'};
    const result = postReducer(initialState, post.fillPostsArray([postData]));
    expect(result).toEqual({
      ...initialState,
      posts: [postData],
    });
  });

  test('Should handle SET_POST_TOTAL action', () => {
    const total = 1;
    const result = postReducer(initialState, post.setPostTotal(total));
    expect(result).toEqual({
      ...initialState,
      total,
    });
  });

  test('Should handle REMOVE_POST action', () => {
    const id = 1;
    const postData = {id, title: 'TEST_POST_TITLE'};
    const state = {
      ...initialState,
      posts: [postData],
    };
    const result = postReducer(state, post.removePost(id));
    expect(result).toEqual(initialState);
  });
});
