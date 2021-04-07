import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ContainerBox = styled.div`
  max-width: ${({maxWidth}) => maxWidth}px;
  width: 100%;
  margin: 0 auto;
`;

const Container = ({maxWidth, children}) => {
  return (
    <ContainerBox maxWidth={maxWidth}>
      {children}
    </ContainerBox>
  );
};

Container.defaultProps = {
  maxWidth: 1280,
};

Container.propTypes = {
  maxWidth: PropTypes.number,
  children: PropTypes.node,
};

export {Container};
