import React from 'react';

export default ({ children, justifyContent, alignItems }) => {
    const jc = justifyContent ? `row_jc-${justifyContent}` : '';
    const ai = alignItems ? `row_ai-${alignItems}` : ''
    return (
        <div className={`row ${jc} ${ai}`}>
            { children }
        </div>
    );
}