import React from 'react';

export default ({ children, justifyContent, alignItems, wrap }) => {
    const jc = justifyContent ? `column_jc-${justifyContent}` : '';
    const ai = alignItems ? `column_ai-${alignItems}` : ''
    const w = wrap ? `column_w-${wrap}` : ''; 
    return (
        <div className={`column ${jc} ${ai} ${w}`}>
            { children }
        </div>
    );
}