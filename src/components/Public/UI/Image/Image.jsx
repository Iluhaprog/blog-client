import styled from 'styled-components';
import PropTypes from 'prop-types';

const Image = styled.figure`
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
  border-radius: ${({round}) => round ? '50%' : '0'};
  overflow: hidden;
  margin: 0;
  flex: 0 0 ${({width}) => width ? `${width}px` : 'auto' };
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  
  @media screen and (max-width: 420px) {
    width: 90vw;
    height: 90vw;
    flex: 0 0 auto;
  }
`;

Image.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  round: PropTypes.bool,
};

export {Image};
