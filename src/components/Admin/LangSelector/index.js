import {LangSelector as LS} from './LangSelector';
import {connect} from 'react-redux';
import {setLang} from '../../../store/settings/settingsActions';

const mapStateToProps = (state) => ({
  lang: state.settings.lang,
  theme: state.settings.theme,
});

const mapDispatchToProps = (dispatch) => ({
  setLang: (locale) => dispatch(setLang(locale)),
});

const LangSelector = connect(mapStateToProps, mapDispatchToProps)(LS);

export {LangSelector};
