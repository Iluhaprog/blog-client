import React from 'react';
import { Field } from 'redux-form';
import { SendButton } from '../../buttons';
import { DropZone } from '../../formElements';
import './imageLoaderForm.scss';

function ImageLoaderForm(props) {
    const { handleSubmit } = props;

    return (
        <form onSubmit={handleSubmit} className='image-loader-form'>
            <div className='column column_ai-c'>
            <h1 className='image-loader-title'>Images</h1>
                <Field 
                    name='file'
                    component={DropZone}
                />
                <SendButton 
                    text='Ok'
                />
            </div>
        </form>
    );
}

export default ImageLoaderForm;