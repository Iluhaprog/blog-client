import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, change, arrayPush, getFormValues } from 'redux-form';
import { SendButton, SuccessButton } from '../../buttons';
import { Row } from '../../containers';
import { 
    LabeledInput, 
    MarkdownRedactor, 
    DropZone, 
    MultipleSelect,
    Textarea,
    LabeledToggler
} from '../../formElements';
import { addTagFetch, getAllFetch } from '../../../actoins/tag';
import { setModal } from '../../../actoins/modal'
import './postForm.scss';

function PostForm(props) {
    const { handleSubmit, openModalWindow, setSelect, setVisible } = props;

    useEffect(() => {
        props.getAllTags();
    }, [props.tags])

    return (
        <form onSubmit={handleSubmit} className='post-form'>
            <LabeledInput 
                type='text'
                name='title'
                component='input'
                label='Title'
            />
            <Row>
                <Field
                    name='preview'
                    component={DropZone}
                />
                <Textarea 
                    name='description'
                    placeholder='Description'
                />
            </Row>
            <MarkdownRedactor 
                name='text'
                placeholder='Text'
                value={props.formValues ? props.formValues.text : ''}
            />
            <LabeledToggler 
                value={props.formValues ? props.formValues.visible : false}
                handleChange={setVisible}
                label='Visible: '
            />
            <Row alignItems='fs'>
                <div className='post-form__tags'>
                    <p>Tags:</p>
                    <SuccessButton 
                        text='New tag'
                        onClick={e => {
                            e.preventDefault();
                            openModalWindow();
                        }}
                    />
                </div>
                <MultipleSelect
                    values={props.selected.Tags || []}
                    options={props.tags}
                    onChange={option => setSelect(option)}
                />
            </Row>
            <SendButton 
                text='Send'
            />
        </form>
    );
}

const mapStateToProps = state => ({
    initialValues: {
        ...state.post.selected,
    },
    selected: state.post.selected,
    tags: state.tags.tags,
    formValues: getFormValues('postForm')(state),
});

const mapDispatchToProps = dispatch => ({
    openModalWindow: () => {
        dispatch(setModal({
            text: 'Write tag title:',
            visible: true,
            withInput: true,
            handleSuccess: (title, fail) => {
                dispatch(addTagFetch({ title }))
            }
        }));
    },
    addTag: tag => {
        dispatch(addTagFetch(tag));
    },
    getAllTags: () => {
        dispatch(getAllFetch())
    },
    setSelect: value => {
        dispatch(arrayPush('postForm', 'Tags', value))
    },
    setVisible: value => {
        dispatch(change('postForm', 'visible', value))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'postForm',
    enableReinitialize: true,
})(PostForm));