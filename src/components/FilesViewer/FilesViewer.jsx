import React from 'react';
import { Row } from '../containers';
import './filesViewer.scss';

export default props => {
    const { files } = props;
    const urlApi = process.env.REACT_APP_FILES_URL;
    return (
        <div className='files-viewer'>
            <ul>
               {
                   files 
                    ? (
                        files.reverse().map(file => (
                            <li 
                                key={file.id}
                                className='file-view'
                            >
                                <Row alignItems='c'>
                                    <div className='image-box'>
                                        <img 
                                            src={urlApi + file.name} 
                                            alt={file.name}
                                            width='50px'
                                            height='30px'
                                        />
                                    </div>
                                    <p className='file-view__name'>
                                        {file.name}
                                    </p>
                                </Row>
                            </li>
                        ))
                      )
                    : ''
               } 
            </ul>
        </div>
    );
};