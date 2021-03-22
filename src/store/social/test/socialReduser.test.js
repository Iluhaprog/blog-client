import {
  initialState,
  socialReduser,
} from '../socialReduser';
import * as social from '../socialActions';

describe('socialReduser', () => {
  test('Should handle TOGGLE_SOCIAL_FETCH action', () => {
    const result = socialReduser(initialState, social.toggleFetch());
    expect(result).toEqual({
      ...initialState,
      isFetch: true,
    });
  });

  test('Should handle ADD_SOCIAL action', () => {
    const socialData = {title: 'TEST_SOCIAL_TITLE'};
    const result = socialReduser(initialState, social.addSocial(socialData));
    expect(result).toEqual({
      ...initialState,
      socials: [socialData],
    });
  });

  test('Should handle UPDATE_SOCIAL action', () => {
    const id = 1;
    const socialData = {id, title: 'TEST_PROJECT_TITLE'};
    const updatedData = {...socialData, title: 'TEST'};
    const state = {
      ...initialState,
      socials: [socialData],
    };
    const result = socialReduser(state, social.updateSocial(updatedData));
    expect(result).toEqual({
      ...state,
      socials: [updatedData],
    });
  });

  test('Should handle FILL_SOCIALS_ARRAY action', () => {
    const socialData = {title: 'TEST_SOCIAL_TITLE'};
    const result = socialReduser(
        initialState,
        social.fillSocialsArray([socialData]),
    );
    expect(result).toEqual({
      ...initialState,
      socials: [socialData],
    });
  });

  test('Should handle REMOVE_SOCIAL action', () => {
    const id = 1;
    const socialData = {id, title: 'TEST_PROJECT_TITLE'};
    const state = {
      ...initialState,
      socials: [socialData],
    };
    const result = socialReduser(state, social.removeSocial(id));
    expect(result).toEqual(initialState);
  });
});
