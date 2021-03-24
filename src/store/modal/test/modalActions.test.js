import * as modal from '../modalActions';
import configureStore from 'redux-mock-store';
import {ModalScreenTypes} from '../ModalFormTypes';

const mockStore = configureStore();

describe('Modal actions creators', () => {
  test('Should create INIT_MODAL action', () => {
    const store = mockStore();
    const modalInitData = {
      title: 'TEST_MODAL_TITLE',
      description: 'TEST_MODAL_DESCRIPTION',
      successHandler: jest.fn(),
    };
    const expectedActions = [{type: modal.INIT_MODAL, ...modalInitData}];
    store.dispatch(modal.initModal(modalInitData));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create SET_FORM_TYPE action', () => {
    const store = mockStore();
    const expectedActions = [
      {
        type: modal.SET_FORM_TYPE,
        formType: ModalScreenTypes.ONE_INPUT,
      },
    ];
    store.dispatch(modal.setFormType(ModalScreenTypes.ONE_INPUT));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create SET_VISIBLE action', () => {
    const store = mockStore();
    const expectedActions = [
      {
        type: modal.SET_VISIBLE,
        isVisible: true,
      },
    ];
    store.dispatch(modal.setVidible(true));
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });

  test('Should create SET_VISIBLE action', () => {
    const store = mockStore();
    const expectedActions = [{type: modal.CLEAR_MODAL}];
    store.dispatch(modal.clearModal());
    const actions = store.getActions();
    expect(actions).toEqual(expectedActions);
  });
});
