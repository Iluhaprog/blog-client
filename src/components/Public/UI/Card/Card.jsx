import styled from 'styled-components';
import PropTypes from 'prop-types';

const Card = styled.div`
  max-width: ${({maxWidth}) => `${maxWidth}px` || '500px'};
  max-height: ${({maxHeight}) => `${maxHeight}px` || '500px'};
  width: 100%;
  height: 100vh;
  background-color: #fff;
  padding: 15px;
`;

Card.propTypes = {
  maxWidth: PropTypes.number,
  maxHeight: PropTypes.number,
};

export {Card};
