import styled from 'styled-components';
import PropTypes from 'prop-types';
import {themes} from '../../../../store/settings/settingsReducer';
import {connect} from 'react-redux';

let FilePreviewWrapper = styled.div`
  max-width: ${({maxWidth}) => maxWidth}px;
  max-height: ${({maxHeight}) => maxHeight}px;
  width: 100%;
  height: 100vh;
  padding: 5px;
  border-radius: 5px;
  background-color: ${({theme}) => {
    return theme === themes.DARK ? '#343a40' : '#f8f9fa';
  }};
  
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 5px;
  }
  
  & svg {
    display: block;
    width: 30px;
    height: auto;
    margin: 0 auto;
    margin-top: 40%;
    fill: ${({theme}) => {
    return theme === themes.DARK ? '#f8f9fa' : '#343a40';
  }};
  }
`;

FilePreviewWrapper.defaultProps = {
  maxWidth: 200,
  maxHeight: 200,
};

FilePreviewWrapper.propTypes = {
  maxWidth: PropTypes.number,
  maxHeight: PropTypes.number,
};

const mapStateToProps = (state) => ({
  theme: state.settings.theme,
});

const mapDispatchToProps = () => ({});

FilePreviewWrapper = connect(
    mapStateToProps,
    mapDispatchToProps,
)(FilePreviewWrapper);

export {FilePreviewWrapper};
