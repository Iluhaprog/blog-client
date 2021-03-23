import {FormTypes} from './ModalFormTypes';

export const INIT_MODAL = 'INIT_MODAL';
export const SET_FORM_TYPE = 'SET_FORM_TYPE';
export const SET_VISIBLE = 'SET_VISIBLE';
export const CLEAR_MODAL = 'CLEAR_MODAL';

export const initModal = ({
  title = '',
  description = '',
  successHandler = () => {},
}) => ({
  type: INIT_MODAL,
  title,
  description,
  successHandler,
});

export const setFormType = (formType = FormTypes.NONE) => ({
  type: SET_FORM_TYPE,
  formType,
});

export const setVidible = (isVisible = false) => ({
  type: SET_VISIBLE,
  isVisible,
});

export const clearModal = () => ({
  type: CLEAR_MODAL,
});
