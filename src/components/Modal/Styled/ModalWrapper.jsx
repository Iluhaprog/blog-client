import styled from 'styled-components';
import PropTypes from 'prop-types';

const ModalWrapper = styled.div`
  display: ${({isVisible}) => isVisible ? 'block' : 'none'} ;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1020;
`;

ModalWrapper.propTypes = {
  isVisible: PropTypes.bool,
};

export {ModalWrapper};
