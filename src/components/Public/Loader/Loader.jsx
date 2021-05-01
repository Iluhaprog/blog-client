import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .spinner-block {
    width: 125px;
    text-align: center;
    margin-right: 0;

    .spinner {
      position: relative;
      width: 125px;
      height: 125px;

      &:before,
      &:after {
        content: "";
        display: block;
        position: absolute;
        border-width: 4px;
        border-style: solid;
        border-radius: 50%;
      }
    }
    
    .spinner.spinner-3 {

      @keyframes scale-2 {
        0% {
          transform: scale(0);
          opacity: 0;
        }

        50% {
          transform: scale(0.7);
          opacity: 1;
        }

        100% {
          transform: scale(1);
          opacity: 0;
        }
      }

      &:before {
        width: 125px;
        height: 125px;
        border-color: #000;
        top: 0;
        left: 0;
        animation: scale-2 1s linear 0s infinite;
      }

      &:after {
        width: 125px;
        height: 125px;
        border-color: #000;
        top: 0;
        left: 0;
        opacity: 0;
        animation: scale-2 1s linear 0.5s infinite;
      }
    }

  }
`;

const Loader = () => {
  return (
    <Box>
      <div className={'spinner-block'}>
        <div className={'spinner spinner-3'}>
        </div>
      </div>
    </Box>
  );
};

export {Loader};
