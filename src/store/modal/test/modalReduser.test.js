import {
  initialState,
  modalReduser,
} from '../modalReduser';
import * as modal from '../modalActions';
import {ModalScreenTypes} from '../ModalFormTypes';

describe('modalReduser', () => {
  test('Should handle INIT_MODAL action', () => {
    const title = 'TEST_MODAL_TITLE';
    const description = 'TEST_MODAL_DESCRIPTION';
    const successHandler = jest.fn();
    const result = modalReduser(initialState, modal.initModal({
      title,
      description,
      successHandler,
    }));
    expect(result).toEqual({
      ...initialState,
      title,
      description,
      successHandler,
    });
  });

  test('Should handle SET_FORM_TYPE action', () => {
    const formType = ModalScreenTypes.ONE_INPUT;
    const result = modalReduser(initialState, modal.setFormType(formType));
    expect(result).toEqual({
      ...initialState,
      formType,
    });
  });

  test('Should handle SET_VISIBLE action', () => {
    const isVisible = true;
    const result = modalReduser(initialState, modal.setVidible(isVisible));
    expect(result).toEqual({
      ...initialState,
      isVisible,
    });
  });

  test('Should handle CLEAR_MODAL action', () => {
    const store = {
      ...initialState,
      title: 'TEST_MODAL_TITLE',
      description: 'TEST_MODAL_DESCRIPTION',
    };
    const result = modalReduser(store, modal.clearModal());
    expect(result).toEqual(initialState);
  });
});
