import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllFetch } from '../../actoins/project';
import { getAdminInfoFetch } from '../../actoins/user';
import { 
    RoundBox,
    DescriptionBox,
    TagBox,
    TitledBox,
} from '../../components/boxes'
import { 
    Column, 
    Row, 
    Container 
} from '../../components/containers';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import './styles.scss';

function About(props) {
    const fileApi = process.env.REACT_APP_FILES_URL;
    const skills = props.skills.split(',') || [];

    useEffect(() => {
        props.getProjects();
        props.getAdminInfo();
    });

    return (
        <section className='main-page main-page__padding'>
            <Container>
                <Column>
                    <Row wrap='w' justifyContent='c' alignItems='c'>
                        <RoundBox max={true}>
                            <img src={fileApi + props.avatar} alt='avatar'/>
                        </RoundBox>
                        <DescriptionBox
                            title={`${props.firstName} ${props.lastName}`}
                            description={props.bio}
                        >
                            <ul className='row'>
                                <li className='skills-title'>
                                    Skills: 
                                </li>
                                {
                                    skills.map(skill => (
                                        <TagBox 
                                            key={skill}
                                            title={skill}
                                            mode='violet'
                                        />
                                    ))
                                }
                            </ul>
                        </DescriptionBox>
                    </Row>
                    <TitledBox title='Projects'>
                        {
                            props.projects.map(project => (
                                <ProjectCard
                                    key={project.id}
                                    img={project.preview ? fileApi + project.preview : '' }
                                    title={project.title}
                                    description={project.description}
                                    gitLink={project.githubLink}
                                    prjLink={project.projectLink}
                                    canEdit={false}
                                />
                            ))
                        }
                    </TitledBox>
                </Column>
            </Container>
        </section>
    );
}

About.defaultProps = {
    skills: '',
    projects: [],
};

About.propTypes = {
    avatar: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    bio: PropTypes.string,
    skills: PropTypes.string,
    projects: PropTypes.array,
};

const mapStateToProps = state => ({
    avatar: state.user.adminInfo?.avatarImage,
    firstName: state.user.adminInfo?.firstName,
    lastName: state.user.adminInfo?.lastName,
    bio: state.user.adminInfo?.bio,
    skills: state.user.adminInfo?.skills,
    projects: state.project.array,
});

const mapDispatchToProps = dispatch => ({
    getProjects: () => {
        dispatch(getAllFetch(0, 10));
    },
    getAdminInfo: () => {
        dispatch(getAdminInfoFetch());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(About);