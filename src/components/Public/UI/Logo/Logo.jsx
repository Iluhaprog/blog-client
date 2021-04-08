import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

const LogoBox = styled.a`
  color: var(--color-1);
  font-size: 30px;
  font-family: var(--public-font);
  font-weight: 400;
  
  &:hover {
    text-decoration: none;
    color: var(--color-1);
    cursor: pointer;
  }
  
  span {
    color: #fff;
    background: var(--color-1);
    padding: 10px 0 10px 10px;
  }
`;

const Logo = ({title, onClick}) => {
  return (
    <LogoBox type={'button'} onClick={onClick}>
      <span>{title?.slice(0, 2)}</span>
      {title.slice(2, title.length)}
    </LogoBox>
  );
};

Logo.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};

export {Logo};
