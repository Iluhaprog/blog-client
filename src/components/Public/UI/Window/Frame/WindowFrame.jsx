import React from 'react';
import styled from 'styled-components';
import bg from '../../../../../assets/public/bg/bg1.svg';
import resize from '../../../../../assets/public/icons/resize.svg';
import arrow from '../../../../../assets/public/icons/scroll-arrow.svg';
import topArrow from '../../../../../assets/public/icons/top-arrow.svg';
import bottomArrow from '../../../../../assets/public/icons/bottom-arrow.svg';
import rightArrow from '../../../../../assets/public/icons/right-arrow.svg';
import * as PropTypes from 'prop-types';

const WindowFrameWrapper = styled.div`
  min-width: 600px;
  max-width: 100%;
  min-height: 200px;
  max-height: 87vh;
  border: 1px solid #000000;
  box-shadow: 1px 1px 0px 1px #000000;
  background-color: #fff;
  color: #000;
  overflow: scroll;
  resize: both;
  
  &::-webkit-scrollbar {
    width: 28px;
    height: 28px;
    background-color: #fff;
    border: 1px solid #000;
  }
  
  &::-webkit-scrollbar-track {
    background-image: url(${bg});
    border-radius: 0;
    border: 1px solid #000;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #fff;
    border-radius: 0;
    border: 1px solid #000;
  }
  
  &::-webkit-resizer {
    background: url(${resize}) no-repeat center;
  }

  &::-webkit-scrollbar-button {
    width: 28px;
    height: 28px;
  }
  
  &::-webkit-scrollbar-button:increment:vertical {
    background: url(${bottomArrow});
  }

  &::-webkit-scrollbar-button:decrement:vertical {
    background: url(${topArrow});
  }

  &::-webkit-scrollbar-button:increment:horizontal {
    background: url(${rightArrow});
  }

  &::-webkit-scrollbar-button:decrement:horizontal {
    background: url(${arrow});
  }
`;

const WindowFrame = (props) => {
  return (
    <WindowFrameWrapper>
      {props.children}
    </WindowFrameWrapper>
  );
};

WindowFrame.propTypes = {
  children: PropTypes.node,
};

export {WindowFrame};
