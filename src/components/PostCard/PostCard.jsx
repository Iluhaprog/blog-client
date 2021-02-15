import React from 'react';
import PropTypes from 'prop-types';
import { Row } from '../containers';
import { TagBox } from '../boxes';
import { DangerButton, PrimaryButton } from '../buttons';
import { Wave } from '../Wave';
import './postCard.scss';

function PostCard(props) {
    return (
        <article className='post-card column'>
            <Wave img={props.img} />
            <div className="post-description">
                <div className="column column_jc-sb">
                    <h3 className="post-description__title">{props.title}</h3>
                    <p className="post-description__text">
                        {props.description}
                    </p>
                    <ul className='tags'>
                        <Row justifyContent='fs' alignItems='c' wrap='w'>
                            { 
                                props.tags.map(tag => (
                                    <TagBox key={tag.id} title={tag.title} />
                                ))
                            }
                        </Row>
                    </ul>
                    <div className="post-card__bottom">
                        <Row justifyContent='sb' alignItems='c' wrap='w'>
                                {
                                    props.canEdit 
                                        ? (
                                            <Row>
                                                <PrimaryButton
                                                    text='Change'
                                                    onClick={props.onClick} 
                                                />
                                                <DangerButton 
                                                    text='Delete' 
                                                    onClick={props.onDelete} 
                                                />
                                            </Row>
                                        )
                                        : (
                                            <PrimaryButton
                                                text='Read'
                                                onClick={props.onClick} 
                                            />
                                        )

                                }
                            <time className="date">
                                {props.date && props.date.split('T')[0]}
                            </time>
                        </Row>
                    </div>
                </div>
            </div>
        </article>
    );
}

PostCard.defaultProps = {
    tags: [],
    canEdit: false,
    onClick: () => {},
    onDelete: () => {},
};

PostCard.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.array,
    canEdit: PropTypes.bool,
    onClick: PropTypes.func,
    onDelete: PropTypes.func,
    date: PropTypes.string,
};

export default PostCard;