import styled from 'styled-components';
import {themes} from '../../store/settings/settingsReduser';
import {connect} from 'react-redux';
import * as PropTypes from 'prop-types';

const ModalBox = styled.div`
  max-width: ${(props) => props.maxWidth}px;
  max-height: ${(props) => props.maxHeight}px;
  height: 100vh;
  overflow-y: scroll;
  border-radius: 10px;
  background-color: ${(props) => {
    return props.theme === themes.DARK ? '#343a40' : '#f8f9fa';
  }
};
  margin: 0 auto;
  margin-top: calc(50vh - ${(props) => props.maxHeight/2}px);
  padding: 10px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
`;

ModalBox.defaultProps = {
  maxWidth: 500,
  maxHeight: 500,
};

ModalBox.propTypes = {
  theme: PropTypes.string,
  maxWidth: PropTypes.number,
  maxHeight: PropTypes.number,
};

const mapStateToProps = (state) => ({
  theme: state.settings.theme,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ModalBox);
