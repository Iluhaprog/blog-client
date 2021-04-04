import styled from 'styled-components';
import {connect} from 'react-redux';
import {themes} from '../../../store/settings/settingsReducer';

let FileBoxWrapper = styled.div`
  width: auto;
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${({theme}) => {
    return theme === themes.DARK ? '#343a40' : '#f8f9fa';
  }};
`;

const mapStateToProps = (state) => ({
  theme: state.settings.theme,
});

const mapDispatchToProps = () => ({});

FileBoxWrapper = connect(mapStateToProps, mapDispatchToProps)(FileBoxWrapper);

export {FileBoxWrapper};
