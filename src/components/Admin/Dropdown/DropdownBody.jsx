import styled from 'styled-components';
import PropTypes from 'prop-types';

const DropdownBody = styled.div`
  overflow-y: ${({visible}) => visible ? 'scroll' : 'hidden'};
  overflow-x: hidden;
  max-height: 300px;
  height: ${({visible}) => visible ? '300px' : '0'};
  width: 100%;
  transition: .3s ease-in-out;
`;

DropdownBody.propTypes = {
  visible: PropTypes.bool,
};

export {DropdownBody};
