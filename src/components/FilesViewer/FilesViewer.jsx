import React from 'react';
import PropTypes from 'prop-types';
import { Row } from '../containers';
import './filesViewer.scss';

function FilesViewer(props) {
    const { files } = props;
    const urlApi = process.env.REACT_APP_FILES_URL;
    return (
        <div className='files-viewer'>
            <ul>
               {
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
               } 
            </ul>
        </div>
    );
}

FilesViewer.defaultProps = {
    files: [],
};

FilesViewer.propTypes = {
    files: PropTypes.array,
};

export default FilesViewer;