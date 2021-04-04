import styled from 'styled-components';
import {connect} from 'react-redux';
import {themes} from '../../../../store/settings/settingsReducer';

let LoginFormBox = styled.div`
  position: absolute;
  top: 0; bottom: 0; left: 0; right: 0;
  max-width: 300px;
  height: 300px;
  margin: auto;
  background-color: ${({theme}) => {
    return theme === themes.DARK ? '#212529' : '#f8f9fa';
  }};
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  padding: 15px 0;
`;

const mapStateToProps = (state) => ({
  theme: state.settings.theme,
});

const mapDispatchToProps = () => ({});

LoginFormBox = connect(
    mapStateToProps,
    mapDispatchToProps,
)(LoginFormBox);

export {LoginFormBox};
