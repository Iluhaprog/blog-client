import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {DefaultButton} from '../Button/Default';
import {Close} from '../Icons/Close';
import bg from '../../../../assets/public/bg/bg2.png';

const TitlebarBox = styled.div`
  min-width: 300px;
  width: 100%;
  min-height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 0 15px;
  font-family: var(--public-font);
  color: #000;
  border: 1px solid #000;
  box-shadow: 1px 1px 0px 1px #000000;

  p {
    margin: 0;
  }
`;

const TitlebarItem = styled.div`
  max-width: 150px;
  min-height: 24px;
  width: 100%;
  height: 100%;
  opacity: ${({isActive}) => isActive ? 1 : 0};
  background: url(${bg}) repeat;
  padding: 0 15px;
`;

TitlebarItem.propTypes = {
  isActive: PropTypes.bool,
};

const Titlebar = ({title, isActive, onClose}) => {
  return (
    <TitlebarBox>
      <TitlebarItem isActive={isActive}>
        <DefaultButton onClick={onClose}>
          <Close width={20} height={20} />
        </DefaultButton>
      </TitlebarItem>
      <p>{title}</p>
      <TitlebarItem isActive={isActive}>
      </TitlebarItem>
    </TitlebarBox>
  );
};

Titlebar.propTypes = {
  title: PropTypes.string,
  isActive: PropTypes.bool,
  onClose: PropTypes.func,
};

export {Titlebar};
