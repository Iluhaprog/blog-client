import React from 'react';
import { Field } from 'redux-form';
import { DropZone, LabeledInput, LabeledToggler, Toggler } from '../../formElements';
import './settingsForm.scss';
import { PrimaryButton } from '../../buttons';

export default props => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit} className='settings-form'>
            <div className='settings-form__box'>
                <LabeledInput 
                    name='title'
                    type='text'
                    component='input'
                    label='Home page title'
                />
            </div>
            <div className='settings-form__box'>
                <p className='settings-form__title'>Home page image</p>
                <Field
                    name='preview'
                    component={DropZone}
                />
            </div>
            <div className='settings-form__box'>
                <LabeledToggler 
                    value={props.theme === 'dark' || false}
                    label='Dark theme: '
                    handleChange={props.setTheme && props.setTheme.bind(null, props.theme)}
                />
            </div>
            <div className='settings-form__box'>
                <PrimaryButton 
                    text='Apply'
                />
            </div>
        </form>
    );
};