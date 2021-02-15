import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { DangerButton, SuccessButton } from '../../buttons';
import { Row } from '../../containers';
import './modal.scss';

function Modal(props) {
    const { modal, close, setFail} = props;
    const { text, handleSuccess, fail, withInput, visible } = modal;
    const [value, setValue] = useState('');

    return (
        <div className={`modal ${visible ? 'modal_visible' : ''}`}>
            <Row justifyContent='c' alignItems='c'>
                <div className='modal-window'>
                    <p className='modal-window__text'>
                        {text}
                    </p>
                    {
                        withInput 
                            ? (
                                <input 
                                    type='text' 
                                    className='modal-window__input'
                                    onChange={e => setValue(e.target.value)}
                                    value={value}
                                />
                              )
                            : ''
                    }
                    {
                        fail.message 
                            ? (<strong>{fail.message}</strong>)
                            : '' 
                    }
                    <Row justifyContent='sb'>
                        <SuccessButton 
                            text='ok'
                            onClick={() => {
                                handleSuccess(value, setFail);
                                close();
                            }}
                        />
                        <DangerButton 
                            text='close' 
                            onClick={() => {
                                close();
                                setValue('');
                            }}
                        />
                    </Row>
                </div>
            </Row>
        </div>
    );
}

Modal.defaultProps = {
    setFail: () => {},
};

Modal.propTypes = {
    close: PropTypes.func.isRequired,
    modal: PropTypes.shape({
        text: PropTypes.string.isRequired,
        handleSuccess: PropTypes.func.isRequired,
        fail: PropTypes.shape({
            message: PropTypes.string.isRequired,
        }),
        withInput: PropTypes.bool.isRequired,
        visible: PropTypes.bool.isRequired,
    }),
    setFail: PropTypes.func,
};


export default Modal;