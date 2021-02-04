import React, { useState } from 'react';
import marked from 'marked';
import { Textarea } from '../Textarea';
import './markdownRedactor.scss';
import { SuccessButton, DangerButton } from '../../buttons';

export default props => {
    const [view, setView] = useState(false);
    const html = marked(props.value || '');
    return (
        <div className={`markdown-redactor ${view ? 'markdown-redactor_big' : ''}`}>
            <div className='markdown-redactor__write-zone'>
                { view 
                    ? (
                        <DangerButton 
                            text='close'
                            onClick={() => setView(!view)}
                        />
                      )
                    : (
                        <SuccessButton 
                            text='view'
                            onClick={() => setView(!view)}
                        />
                    )
                }
                <Textarea 
                    name={props.name}
                    placeholder={props.placeholder}
                />
            </div>
            <div 
                className='markdown-redactor__view-zone markdown-body'
                dangerouslySetInnerHTML={{__html: html}}
            >
            </div>
        </div>
    )
}