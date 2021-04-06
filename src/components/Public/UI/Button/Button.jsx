import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  min-width: ${({minWidth}) => minWidth}px;
  outline: none;
  text-align: center;
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
  transition: .15s ease-in-out;
  
  &:hover {
    background-color: var(--color-1);
    color: #fff;
  }
`;

Button.defaultProps = {
  minWidth: 100,
  mod: 'big',
};

Button.propTypes = {
  minWidth: PropTypes.number,
  mod: PropTypes.oneOf(['big', 'small']),
};

export {Button};
