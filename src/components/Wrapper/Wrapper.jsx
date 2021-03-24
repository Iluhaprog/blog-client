import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  position: absolute;
  display: ${(props) => props.visible ? 'block' : 'none'};
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1020;
`;

Wrapper.propTypes = {
  visible: PropTypes.bool,
};

export {Wrapper};
