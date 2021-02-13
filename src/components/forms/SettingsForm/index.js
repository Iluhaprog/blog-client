import sf from './SettingsForm';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { setLightTheme, setDarkTheme } from '../../../actoins/theme';

const mapStateToProps = state => ({
    initialValues: {
        title: state.home.title,
    },
    theme: state.theme.theme,
    isFetch: state.home.isFetch,
});

const mapDispatchToProps = dispatch => ({
    setTheme: theme => {
        if (theme === 'dark') dispatch(setLightTheme())
        else dispatch(setDarkTheme());
    },
});

const SettingsForm = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'settings',
    enableReinitialize: true,
})(sf));

export {
    SettingsForm,
};