import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

const LogoBox = styled.a`
  color: var(--color-1);
  font-size: 30px;
  font-family: var(--public-font);
  font-weight: 400;
  
  span {
    color: #fff;
    background: var(--color-1);
    padding: 10px 0 10px 10px;
  }
`;

const Logo = ({title}) => {
  return (
    <LogoBox>
      <span>{title?.slice(0, 2)}</span>
      {title.slice(2, title.length)}
    </LogoBox>
  );
};

Logo.propTypes = {
  title: PropTypes.string,
};

export {Logo};
