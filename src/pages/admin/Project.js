import React from 'react';
import { connect } from 'react-redux';
import { ProjectForm } from '../../components/forms/';
import { updateFetch, updatePreviewFetch } from '../../actoins/project';
import { getUniqueName } from '../../util/string/string'
import { useParams } from 'react-router-dom';

const Project = props => {
    const { update, updatePreview } = props;
    const { id } = useParams();

    const submit = values => {
        const {file, title, description, projectLink, githubLink} = values;
        update({
            id,
            title, 
            description,
            projectLink,
            githubLink,
        });
        if (file) {
            updatePreview(id, file);
        }
    };

    return (
        <div className='admin-page'>
            <ProjectForm onSubmit={submit}/>
        </div>
    );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    updatePreview: (projectId, file) => {
        const fd = new FormData();
        fd.append('file', new File([file], getUniqueName(file.name)));
        dispatch(updatePreviewFetch(projectId, fd));
    },
    update: project => {
        dispatch(updateFetch(project));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Project);