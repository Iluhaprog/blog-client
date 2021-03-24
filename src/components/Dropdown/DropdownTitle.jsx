import styled from 'styled-components';
import {connect} from 'react-redux';
import {themes} from '../../store/settings/settingsReduser';

let DropdownTitle = styled.div`
  width: 100%;
  font-size: 20px;
  border-bottom: 1px solid ${({theme}) => {
    return theme === themes.DARK ? '#343a40' : '#e5e5e5';
  }};
  padding: 10px;
`;

const mapStateToProps = (state) => ({
  theme: state.settings.theme,
});

const mapDispatchToProps = () => ({});

DropdownTitle = connect(mapStateToProps, mapDispatchToProps)(DropdownTitle);

export {DropdownTitle};
