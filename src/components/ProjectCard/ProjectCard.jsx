import React from 'react';
import PropTypes from 'prop-types';
import github from '../../assets/icons/github.png';
import link from '../../assets/icons/link.png';
import { SuccessButton, DangerButton } from '../buttons';
import { Row } from '../containers';
import './projectCard.scss';

function ProjectCard(props) {
    return (
        <article 
            className={`portfolio-card ${props.canEdit ? 'portfolio-card_can-clicked' : ''}`}>
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
                    <Row justifyContent='sb'>
                        <Row>
                            <a href={props.gitLink} className="portfolio-card__link">
                                <img src={github} alt="github"/>
                            </a>
                            <a href={props.prjLink} className="portfolio-card__link">
                                <img src={link} alt="link"/>
                            </a>
                        </Row>
                        { props.canEdit 
                            ? ( <Row>
                                    <SuccessButton
                                        text='Edit'
                                        onClick={props.onEdit}
                                    />
                                    <DangerButton 
                                        text='Delete'
                                        onClick={props.onDelete}
                                    />
                                </Row>
                            )
                            : ''
                        }
                    </Row>
                </div>
            </div>
        </article>
    );
}

ProjectCard.defaultProps = {
    canEdit: false,
    onEdit: () => {},
    onDelete: () => {},
};

ProjectCard.propTypes = {
    canEdit: PropTypes.bool,
    img: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    gitLink: PropTypes.string,
    prjLink: PropTypes.string,
    onEdit: PropTypes.func,
    onDelete: PropTypes.func,
};

export default ProjectCard;