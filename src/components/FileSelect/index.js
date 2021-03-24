import {FileSelect as FS} from './FileSelect';
import {getAll} from '../../store/directory/directoryActions';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  theme: state.settings.theme,
  directories: state.dir.directories,
});

const mapDispatchToProps = (dispatch) => ({
  getDirectories: (page) => dispatch(getAll(page)),
});

const FileSelect = connect(mapStateToProps, mapDispatchToProps)(FS);
export {FileSelect};
