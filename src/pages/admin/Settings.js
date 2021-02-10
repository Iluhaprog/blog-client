import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { update, updatePreview, getHomeFetch } from '../../actoins/home';
import { SettingsForm } from "../../components/forms/SettingsForm";
import { getUniqueName } from '../../util/string/string';

const Settings = props => {

    useEffect(() => {
        props.get();
    }, []);

    const submit = values => {
        console.log(values);
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
        dispatch(update(home));
    },
    updatePreview: file => {
        const fd = new FormData();
        fd.append('file', new File([file], getUniqueName(file.name)));
        dispatch(updatePreview(fd));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);


