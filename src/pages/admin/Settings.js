import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { 
    update, 
    updatePreview, 
    getHomeFetch, 
    setHomeFetch 
} from '../../actoins/home';
import { SettingsForm } from "../../components/forms/SettingsForm";
import { getUniqueName } from '../../util/string/string';
import { addError } from '../../actoins/error';
import { setErrorCatch } from '../../util/SettingErrorCatch';

const Settings = props => {

    useEffect(() => {
        props.get();
    }, []);

    const submit = values => {
        if (values.title) {
            props.update({...props.home, title: values.title});
        }
        if (values.preview) {
            props.updatePreview(values.preview);
        }
    }

    return (
        <section className='admin-page'>
            <div className='container'>
                <div className='admin-page__header'>
                    <h1>Settings</h1>
                </div>
            </div>
            <div className='admin-page__main'>
                <SettingsForm onSubmit={submit}/>
            </div>
        </section>
    );
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    get: () => {
        dispatch(getHomeFetch());
    },
    update: home => {
        setErrorCatch(
            dispatch(update(home)),
            e => {
                dispatch(addError(e));
                dispatch(setHomeFetch(false));
            }
        );
    },
    updatePreview: file => {
        const fd = new FormData();
        fd.append('file', new File([file], getUniqueName(file.name)));
        setErrorCatch(
            dispatch(updatePreview(fd)),
            e => {
                dispatch(addError(e));
                dispatch(setHomeFetch(false));
            }
        );
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);


