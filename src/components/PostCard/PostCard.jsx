import React from 'react';
import { Row } from '../containers';
import { TagBox } from '../boxes';
import wave1 from '../../assets/post_card/wave1.png';
import wave2 from '../../assets/post_card/wave2.png';
import './postCard.scss';
import { DangerButton, PrimaryButton } from '../buttons';

export default props => {

    return (
        <article className='post-card'>
            <div className="wave-box">
                <div className="wave-box__bg">
                    { props.img && <img src={props.img} alt="post-preview" /> }
                </div>
                <div className="wave-box__effect">
                    <div className="wave-box__item">
                        <img src={wave1} alt="wave1" />
                    </div>
                    <div className="wave-box__item">
                        <img src={wave2} alt="wave2" />
                    </div>
                    <div className="wave-box__item">
                        <img src={wave1} alt="wave3" />
                    </div>
                    <div className="wave-box__item">
                        <img src={wave2} alt="wave4" />
                    </div>
                </div>
            </div>
            <div className="post-description">
                <div className="column">
                    <h3 className="post-description__title">{props.title}</h3>
                    <p className="post-description__text">
                        {props.description}
                    </p>
                    <ul className='tags'>
                        <Row justifyContent='fs' alignItems='c' wrap='w'>
                            { 
                                props.tags && props.tags.map(tag => (
                                    <TagBox key={tag.id} title={tag.title} />
                                ))
                            }
                        </Row>
                    </ul>
                    <div className="post-card__bottom">
                        <Row justifyContent='sb' alignItems='c' wrap='w'>
                            <Row>
                                <PrimaryButton text='Change' onClick={props.onClick} />
                                <DangerButton text='Delete' onClick={props.onDelete} />
                            </Row>
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