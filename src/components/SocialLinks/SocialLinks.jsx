import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { LabeledButton } from '../buttons';
import { Row, Column } from '../containers';
import { SocialLinkForm } from '../forms';
import { Loader } from '../loaders/Loader';
import './socialLinks.scss';

function SocialLinks(props) {
    const { create, update, updatePreview } = props;

    useEffect(() => {
        props.getSocials(props.userId);
    }, [])

    return (
        <div className='social-links'>
            <Column>
                <Row justifyContent='sb' alignItems='c'>
                    <h3 className='social-links__title'>
                        Socials
                    </h3>
                    <Row justifyContent='fe'>
                        <Loader visible={props.isFetch}/>
                        <LabeledButton
                            text='Add'
                            onClick={() => {
                                create({ 
                                    title: '',
                                    preview: '',
                                    link: '',
                                });
                            }} 
                        />
                    </Row>
                </Row>
                {
                    props.socials.map(social => (
                        <SocialLinkForm 
                            form={'social' + social.id}
                            onSubmit={values => {
                                update({ 
                                    ...social,
                                    title: values.socialTitle,
                                    link: values.socialLink,
                                });
                                if (values.preview) {
                                    updatePreview(social.id, values.preview);
                                }
                            }}
                            key={social.id}
                            id={social.id}
                            preview={social.preview}
                            initialValues={{
                                socialTitle: social.title,
                                socialLink: social.link,
                            }}
                        />
                    ))
                }
            </Column>
        </div>
    );
}

SocialLinks.defaultProps = {
    socials: [],
    getSocials: () => {},
};

SocialLinks.propTypes = {
    socials: PropTypes.array,
    getSocials: PropTypes.func,
};

export default SocialLinks;