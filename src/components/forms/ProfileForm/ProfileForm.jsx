import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Row } from '../../containers';
import { SendButton } from '../../buttons';
import { DropZone, LabeledInput, Textarea } from '../../formElements';
import { HintBox } from '../../boxes';
import { Loader } from '../../loaders/Loader';
import './profileForm.scss';

function ProfileForm(props) {
    const { handleSubmit, isFetch } = props;
    return (
        <form onSubmit={handleSubmit} className='profile-form'>
            <h2>Account info</h2>
            <Row alignItems='c' justifyContent='sb'>
                <Field
                    name='avatar'
                    component={DropZone}
                />
                <HintBox>
                    <p>Drag image and drop in this box or click on this box</p>
                </HintBox>
            </Row>
            <Row alignItems='c' justifyContent='sb'>
                <LabeledInput 
                    type='text'
                    name='firstName'
                    component='input'
                    label='First Name'
                />
                <LabeledInput 
                    type='text'
                    name='lastName'
                    component='input'
                    label='Last Name'
                />
                <HintBox>
                    <p>Write your real first name and last name</p>
                </HintBox>
            </Row>
            <Row alignItems='c' justifyContent='sb'>
                <LabeledInput 
                    type='text'
                    name='username'
                    component='input'
                    label='Username'
                />
                <LabeledInput 
                    type='text'
                    name='email'
                    component='input'
                    label='Email'
                />
                <HintBox>
                    <p>Write your real email namd and unique username</p>
                </HintBox>
            </Row>
            <h2>Profile info</h2>
            <Row alignItems='c' justifyContent='sb'>
                <Textarea name='bio' placeholder='Bio' />
                <HintBox>
                    <p>Write about your developer path, projects etc. </p>
                </HintBox>
            </Row>
            <div className='skills'>
                <Row alignItems='c' justifyContent='sb'>
                    <LabeledInput 
                        type='text'
                        name='skills'
                        component='input'
                        label='Skills'
                        />
                    <HintBox>
                        <p>Write the skills that you own, separated by commas</p>
                    </HintBox>
                </Row>
            </div>
            <Row justifyContent='fs'>
                <SendButton text='Apply' />
                <Loader
                    visible={isFetch}
                />
            </Row>
        </form>
    );
}

const mapStateToProps = state => ({
    initialValues: {
        avatar: state.user.avatarImage,
        firstName: state.user.firstName,
        lastName: state.user.lastName,
        username: state.user.username,
        email: state.user.email,
        bio: state.user.bio,
        skills: state.user.skills,
    },
    isFetch: state.user.isFetch,
});

export default connect(mapStateToProps)(reduxForm({
    form: 'profile',
    enableReinitialize: true,
})(ProfileForm));