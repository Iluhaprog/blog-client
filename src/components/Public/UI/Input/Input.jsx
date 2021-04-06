import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  outline: none;
  border: 2px solid var(--color-1);
  font-size: ${({mod}) => {
    return mod === 'big' ? 16 : 12;
  }}px;
  padding: ${({mod}) => {
    return mod === 'big' ? 10 : 5;
  }}px;
  box-sizing: border-box;
  border-radius: ${({mod}) => {
    return mod === 'big' ? 15 : 5;
  }}px;
  
  &::placeholder {
    color: rgba(0, 0, 0, .4);
  }
`;

Input.defaultProps = {
  mod: 'big',
};

Input.propTypes = {
  mod: PropTypes.oneOf(['big', 'small']),
};

export {Input};
