import styled from 'styled-components';
import PropTypes from 'prop-types';

const Image = styled.figure`
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
  border-radius: ${({round}) => round ? '50%' : '0'};
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

Image.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  round: PropTypes.bool,
};

export {Image};
