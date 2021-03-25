import styled from 'styled-components';
import PropTypes from 'prop-types';

const FileFieldWrapper = styled.div`
  padding: 10px 0;
  max-width: ${({maxWidth}) => maxWidth}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

FileFieldWrapper.defaultProps = {
  maxWidth: 200,
};

FileFieldWrapper.propTypes = {
  maxWidth: PropTypes.number,
};

export {FileFieldWrapper};
