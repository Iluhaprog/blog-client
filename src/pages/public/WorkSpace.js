import React from 'react';
import {Nav} from '../../components/Public/Nav';
import styled from 'styled-components';

const WorkSpaceBox = styled.main`
  padding: 6vh 20px;
  height: 95vh;
`;

const WorkSpace = () => {
  return (
    <WorkSpaceBox>
      <Nav />
    </WorkSpaceBox>
  );
};

export {WorkSpace};
