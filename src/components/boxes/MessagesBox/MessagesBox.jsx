import React from 'react';
import './messagesBox.scss';

export default props => (
    <section className='messages-box'>
        { props.children }
    </section>
)