import React from 'react';
import './roundBox.scss';

export default ({ children, max }) => (
    <div className={'round-box' + (max ? ' round-box__max' : '')}>
        { children }
    </div>
);