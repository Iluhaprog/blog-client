import {FormTypes} from './ModalFormTypes';
import * as modal from './modalActions';

export const initialState = {
  successHandler: () => {},
  title: '',
  description: '',
  formType: FormTypes.NONE,
  isVisible: false,
};

export const modalReduser = (state = initialState, action) => {
  switch (action.type) {
    case modal.INIT_MODAL:
      return {
        ...state,
        title: action.title,
        description: action.description,
        successHandler: action.successHandler,
      };
    case modal.SET_FORM_TYPE:
      return {
        ...state,
        formType: action.formType,
      };
    case modal.SET_VISIBLE:
      return {
        ...state,
        isVisible: action.isVisible,
      };
    case modal.CLEAR_MODAL:
      return {
        ...initialState,
      };
    default:
      return {
        ...state,
      };
  }
};
