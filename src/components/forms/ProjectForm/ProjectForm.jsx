import React from 'react';
import { Row } from '../../containers';
import { Field } from 'redux-form';
import { 
    Textarea, 
    LabeledInput, 
    DropZone 
} from '../../formElements';
import './projectForm.scss';
import { PrimaryButton } from '../../buttons';

export default props => {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit} className='project-form'>
            <div className='container'>
                <Row>
                    <Field
                        name='file'
                        component={DropZone}
                    />
                    <div className='project-form__box'>
                        <LabeledInput 
                            type='text'
                            name='title'
                            component='input'
                            label='Title'
                        />
                        <Textarea 
                            name='description'
                            placeholder='Description'
                        />
                    </div>
                </Row>
                <Row>
                    <LabeledInput 
                        type='text'
                        name='githubLink'
                        component='input'
                        label='Github'
                    />
                    <LabeledInput 
                        type='text'
                        name='projectLink'
                        component='input'
                        label='Project'
                    />
                </Row>
                <PrimaryButton 
                    text='Save'
                />
            </div>
        </form>
    );
};