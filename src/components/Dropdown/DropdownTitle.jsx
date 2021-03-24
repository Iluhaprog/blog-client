import styled from 'styled-components';
import {themes} from '../../store/settings/settingsReduser';
import {connect} from 'react-redux';

let DropdownTitle = styled.div`
  width: 100%;
  font-size: 20px;
  border-bottom: 1px solid ${({theme}) => {
    return theme === themes.DARK ? '#343a40' : '#f8f9fa';
  }};
`;

const mapStateToProps = (state) => ({
  theme: state.settings.theme,
});

const mapDispatchToProps = () => ({});

DropdownTitle = connect(mapStateToProps, mapDispatchToProps)(DropdownTitle);

export {DropdownTitle};
