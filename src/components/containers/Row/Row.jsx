import React from 'react';

export default ({ children, justifyContent, alignItems, wrap }) => {
    const jc = justifyContent ? `row_jc-${justifyContent}` : '';
    const ai = alignItems ? `row_ai-${alignItems}` : ''
    const w = wrap ? `row_w-${wrap}` : ''; 
    return (
        <div className={`row ${jc} ${ai} ${w}`}>
            { children }
        </div>
    );
}