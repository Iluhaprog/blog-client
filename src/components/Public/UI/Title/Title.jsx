import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h2`
  font-family: var(--public-font);
  font-size: 32px;
  font-weight: 700;
  text-align: ${({align}) => align};
`;

Title.propTypes = {
  align: PropTypes.oneOf(['center', 'left', 'right']),
};

export {Title};
