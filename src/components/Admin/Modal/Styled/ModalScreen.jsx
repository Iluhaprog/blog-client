import styled from 'styled-components';
import {themes} from '../../../../store/settings/settingsReducer';
import PropTypes from 'prop-types';

const ModalScreen = styled.div`
  max-width: ${({maxWidth}) => maxWidth}px;
  max-height: ${({maxHeight}) => maxHeight}px;
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  margin-top: calc(50vh - ${({maxHeight}) => maxHeight/2}px);
  background-color: ${({theme}) => {
    return theme === themes.DARK ? '#343a40' : '#f8f9fa';
  }};
`;

ModalScreen.defaultProps = {
  theme: themes.LIGHT,
  maxWidth: 700,
  maxHeight: 500,
};

ModalScreen.propTypes = {
  theme: PropTypes.string,
  maxWidth: PropTypes.number,
  maxHeight: PropTypes.number,
};

export {ModalScreen};
