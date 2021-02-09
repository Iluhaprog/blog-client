import React from 'react';
import github from '../../assets/icons/github.png';
import link from '../../assets/icons/link.png';
import './projectCard.scss';


export default props => (
    <article 
        className={`portfolio-card ${props.canEdit ? 'portfolio-card_can-clicked' : ''}`}
        onClick={props.onClick || (() => {})}>
        <div className="portfolio-card__bg">
            {props.img 
                ? <img src={props.img} alt={props.title} />
                : ''
            }
        </div>
        <div className="portfolio-card__description">
            <div className="column">
                <h2 className="portfolio-card__title">
                    {props.title}
                </h2>
                <p className="portfolio-card__text">
                    { props.description }
                </p>
                <div className="row">
                    <a href={props.gitLink} className="portfolio-card__link">
                        <img src={github} alt="github"/>
                    </a>
                    <a href={props.prjLink} className="portfolio-card__link">
                        <img src={link} alt="link"/>
                    </a>
                </div>
            </div>
        </div>
    </article>
)