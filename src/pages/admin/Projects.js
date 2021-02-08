import { Row } from "../../components/containers";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { LabeledButton } from '../../components/buttons';
import { connect } from "react-redux";
import { 
    createFetch, 
    getAllFetch, 
    selectProjectById, 
    setProjectsTotalFetch 
} from "../../actoins/project";
import { useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom';
import { setModal } from '../../actoins/modal';
import { Pagination } from '../../components/Pagination';

const Projects = props => {
    const { projects, total, userId } = props;
    const { getAll, getTotal, openModalForProjectCreation, selectProject } = props;

    const offset = process.env.REACT_APP_OFFSET;
    const { pageNumber } = useParams();
    const history = useHistory();
    const [page, setPage] = useState(pageNumber ? pageNumber - 1 : 0);
    const apiUrl = process.env.REACT_APP_FILES_URL;

    useEffect(() => {
        getAll(page, offset);
        getTotal();
    }, [page]);

    return (
        <section className='admin-page'>
            <div className='container'>
                <div className='admin-page__header'>
                    <Row justifyContent='sb' alignItems='c'>
                        <h1>Projects</h1>
                        <LabeledButton 
                            text='New'
                            onClick={() => {
                                openModalForProjectCreation(userId, () => {
                                    getAll(page, offset);
                                    getTotal();
                                });
                            }}
                        />
                    </Row>
                </div>
                <div className='admin-page__main'>
                    <Row justifyContent='sb' wrap='w'>

                        {
                            projects.map(project => (
                                <ProjectCard
                                    key={project.id}
                                    img={project.preview ? apiUrl + project.preview : '' }
                                    title={project.title}
                                    description={project.description}
                                    gitLink={project.githubLink}
                                    prjLink={project.projectLink}
                                    canClicked={true}
                                    onClick={() => {
                                        selectProject(project.id);
                                        history.push(`/admin/project/${project.id}`)
                                    }}
                                />
                            ))
                        }
                    </Row>
                </div>
                <Pagination
                    totalItems={total}
                    itemsPerPage={offset}
                    currentPage={+pageNumber}
                    changePage={setPage}
                    visiblePageLinks={5}
                    page='projects'
                />
            </div>
        </section>
    );
};


const mapStateToProps = state => ({
    projects: state.project.array,
    total: state.project.total,
    userId: state.user.id,
});

const mapDispatchToProps = dispatch => ({
    selectProject: id => {
        dispatch(selectProjectById(id));
    },
    openModalForProjectCreation: (userId, success) => {
        dispatch(setModal({
            text: 'Write unique title for new project:',
            visible: true,
            withInput: true,
            handleSuccess: (value, fail) => {
                dispatch(createFetch({
                    title: value,
                    preview: '',
                    description: '',
                    projectLink: '',
                    githubLink: '',
                    userId,
                }, success));
            }
        }));
    },
    getAll: (page, limit) => {
        dispatch(getAllFetch(page, limit));
    },
    getTotal: () => {
        dispatch(setProjectsTotalFetch());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);