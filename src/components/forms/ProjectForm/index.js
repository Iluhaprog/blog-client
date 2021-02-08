import pf from './ProjectForm';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

const mapStateToProps = state => ({
    initialValues: {
        title: state.project.selected.title,
        description: state.project.selected.description,
        githubLink: state.project.selected.githubLink,
        projectLink: state.project.selected.projectLink,
    },
});

const mapDispatchToProps = dispatch => ({});

const ProjectForm = connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'project',
    enableReinitialize: true,
})(pf));

export {
    ProjectForm,
};