import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h2`
  font-family: var(--public-font);
  font-size: 32px;
  font-weight: 700;
  text-align: ${({align}) => align};
  word-wrap: anywhere;
  ${({maxWidth}) => {
    return maxWidth ? (`
      max-width: ${maxWidth}px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis
    `) : '';
  }}
`;

Title.propTypes = {
  align: PropTypes.oneOf(['center', 'left', 'right']),
  maxWidth: PropTypes.number,
};

export {Title};
