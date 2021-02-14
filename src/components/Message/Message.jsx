import React from 'react';
import { MessagesBox } from '../boxes';
import { Error as ErrorMessage } from '../messages';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default ({ errors = [], show = () => {} }) => (
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