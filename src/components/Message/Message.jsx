import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import { MessagesBox } from '../boxes';
import { Error as ErrorMessage } from '../messages';

function Message(props) {
    const { errors, show } = props;
    return (
        <MessagesBox>
            <TransitionGroup>
            {
                errors.map(error => {
                    setTimeout(() => {
                        show(error.id);
                    }, 10000);

                    return (
                        <CSSTransition
                            key={error.id}
                            timeout={300}
                            classNames='error-box'
                        >
                            <ErrorMessage 
                                message={error.error.message}
                                onClose={() => show(error.id)}
                            />
                        </CSSTransition>
                    )
                })
            }
            </TransitionGroup>
        </MessagesBox>
    );
}

Message.defaultProps = {
    errors: [],
    show: () => {},
};

Message.propTypes = {
    errors: PropTypes.array,
    show: PropTypes.func,
};

export default Message;