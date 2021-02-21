import React from 'react';
import { Field } from 'redux-form';
import { Row, Column } from '../../containers';
import {
    DropZone,
    LabeledInput,
} from '../../formElements';
import { 
    SuccessButton,
    DangerButton,
} from '../../buttons';
import './socialLinkForm.scss';

function SocialLinkForm(props) {
    const { handleSubmit } = props;
    const fileApi = process.env.REACT_APP_FILES_URL;
    return (
        <form className='social-form' onSubmit={handleSubmit}>
            <Row alignItems='c' justifyContent='fs'>
                <Row justifyContent='c' alignItems='c'>
                    <Field 
                        name='preview'
                        component={DropZone}
                    />
                    {
                        props.preview 
                            ? <div className='social-form__img'>
                                <img
                                    src={fileApi + props.preview} 
                                    alt="prview"
                                />
                                </div>
                            : ''
                    }
                </Row>
                <Column>
                    <LabeledInput 
                        name='socialTitle'
                        label='Title'
                    />
                    <LabeledInput 
                        name='socialLink'
                        label='Link'
                    />
                </Column>
                <Column alignItems='sb'>
                    <SuccessButton 
                        text='Ok'
                    />
                    <DangerButton 
                        text='Delete'
                        onClick={e => {
                            e.preventDefault();
                            props.delete(props.id)
                        }}
                    />
                </Column>
            </Row>
        </form>
    );
}

export default SocialLinkForm;