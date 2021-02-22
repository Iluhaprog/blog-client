import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Row } from '../containers';
import './socials.scss';

function Socials(props) {
    const fileApi = process.env.REACT_APP_FILES_URL;

    useEffect(() => {
        props.getLinks();
    }, [])

    return (
        <div className='socials'>
            <Row justifyContent='c' alignItems='c'>
                { 
                    props.links.map(link => (
                        <a 
                            key={link.id + link.link + Date.now()}
                            href={link.link} 
                            className='socials__link'
                        >
                            { 
                                link.preview 
                                    ? <img 
                                        width={40}
                                        height={40}
                                        src={fileApi + link.preview} 
                                        alt='link'
                                    />
                                    : link.title
                            }
                        </a>
                    )) 
                }
            </Row>
        </div>
    );
}

Socials.defaultProps = {
    links: [],
    getLinks: () => {},
};

Socials.propTypes = {
    links: PropTypes.array,
    getLinks: PropTypes.func,
};

export default Socials;