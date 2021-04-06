import React from 'react';
import styled from 'styled-components';
import {
  ReactComponent as Search,
} from '../../../../assets/public/icons/search.svg';
import PropTypes from 'prop-types';

const SearchInputBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: ${({maxWidth}) => maxWidth + 'px' || 'fit-content'};
  width: 100%;
  align-items: center;
  border: 2px solid var(--color-1);
  box-sizing: border-box;
  border-radius: ${({mod}) => {
    return mod === 'big' ? 15 : 5;
  }}px;
  padding: ${({mod}) => {
    return mod === 'big' ? 10 : 5;
  }}px;
  
  input {
    outline: none;
    width: 100%;
    margin: 0;
    border: 0;
    font-size: ${({mod}) => {
    return mod === 'big' ? 16 : 12;
  }}px;
    
    &::placeholder {
      color: rgba(0, 0, 0, .4);
    }
  }
  
  button {
    border: 0;
    margin: 0;
    padding: 0;
    background-color: transparent;
  }
`;

const SearchInput = ({
  name,
  value,
  onChange,
  placeholder,
  mod,
  maxWidth,
}) => {
  return (
    <SearchInputBox maxWidth={maxWidth} mod={mod}>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <button type={'submit'}>
        <Search />
      </button>
    </SearchInputBox>
  );
};

SearchInput.propTypes = {
  mod: PropTypes.oneOf(['big', 'small']),
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  maxWidth: PropTypes.number,
};

export {SearchInput};
