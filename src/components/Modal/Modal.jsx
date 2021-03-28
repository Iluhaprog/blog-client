import React from 'react';
import {clearModal} from '../../store/modal/modalActions';
import {connect} from 'react-redux';
import {ModalWrapper} from './Styled/ModalWrapper';
import PropTypes from 'prop-types';
import {ModalScreenTypes} from '../../store/modal/ModalFormTypes';
import {DefaultScreen} from './Screens/Default';
import {FileSelectScreen} from './Screens/FileSelect';
import {InputScreen} from './Screens/Input';

const ModalScreens = {
  [ModalScreenTypes.NONE]: DefaultScreen,
  [ModalScreenTypes.FILE_SELECT]: FileSelectScreen,
  [ModalScreenTypes.INPUT]: InputScreen,
};

let Modal = ({modal, theme, close}) => {
  const Screen = ModalScreens[modal.formType];

  return (
    <ModalWrapper isVisible={modal.isVisible}>
      <Screen
        modal={modal}
        theme={theme}
        onClose={close}
        onSuccess={modal.successHandler}
      />
    </ModalWrapper>
  );
};

Modal.propTypes = {
  modal: PropTypes.object,
  theme: PropTypes.string,
  close: PropTypes.func,
};

const mapStateToProps = (state) => ({
  modal: state.modal,
  theme: state.settings.theme,
});

const mapDispatchToProps = (dispatch) => ({
  close: () => {
    dispatch(clearModal());
  },
});

Modal = connect(mapStateToProps, mapDispatchToProps)(Modal);

export {Modal};
