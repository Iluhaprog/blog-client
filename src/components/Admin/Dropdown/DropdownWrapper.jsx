import styled from 'styled-components';
import {themes} from '../../../store/settings/settingsReducer';
import {connect} from 'react-redux';

let DropdownWrapper = styled.div`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: ${(props) => {
    return props.theme === themes.DARK ? '#52555c' : '#fff';
  }};
  border-radius: 5px;
`;

const mapStateToProps = (state) => ({
  theme: state.settings.theme,
});

const mapDispatchToProps = () => ({});

DropdownWrapper = connect(mapStateToProps, mapDispatchToProps)(DropdownWrapper);

export {DropdownWrapper};
