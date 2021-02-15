import React, { useState } from 'react';
import PropTypes from 'prop-types';
import marked from '../../../util/setting/marked';
import { Textarea } from '../Textarea';
import { SuccessButton, DangerButton } from '../../buttons';
import './markdownRedactor.scss';

function MarkdownRedactor(props) {
    const [view, setView] = useState(false);
    const html = marked(props.value);
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
    );
}

MarkdownRedactor.defaultProps = {
    value: '',
};

MarkdownRedactor.propTypes = {
    value: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
};

export default MarkdownRedactor;