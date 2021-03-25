import styled from 'styled-components';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {themes} from '../../../store/settings/settingsReduser';

let InputFieldWrapper = styled.div`
  margin: 10px 0;
  max-width: ${({maxWidth}) => maxWidth ? `${maxWidth}px` : '100%'};
  & label {
    font-size: 20px;
    color: ${({theme}) => {
    return theme === themes.DARK ? 'rgba(255,255,255,.8)' : '#495057';
  }};
  }
  
  & input {
    display: block;
    width: 100%;
    color: ${({theme}) => {
    return theme === themes.DARK ? '#ced4da' : '#495057';
  }};
    outline: none;
    background-color: ${({theme}) => {
    return theme === themes.DARK ? '#343a40' : '#fff';
  }};
    background-clip: padding-box;
    border: 1px solid ${({theme}) => {
    return theme === themes.DARK ? 'rgba(255,255,255,.3)' : '#ced4da';
  }};
    border-radius: .25rem;
    padding: 10px;
  }
`;

InputFieldWrapper.propTypes = {
  maxWidth: PropTypes.number,
  theme: PropTypes.string,
};

const mapStateToProps = (state) => ({
  theme: state.settings.theme,
});

const mapDispatchToProps = () => ({});

InputFieldWrapper = connect(
    mapStateToProps,
    mapDispatchToProps,
)(InputFieldWrapper);

export {InputFieldWrapper};
