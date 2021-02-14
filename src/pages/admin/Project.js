import React from 'react';
import { connect } from 'react-redux';
import { ProjectForm } from '../../components/forms/';
import { updateFetch, updatePreviewFetch } from '../../actoins/project';
import { getUniqueName } from '../../util/string/string';
import { useParams } from 'react-router-dom';
import { addError } from '../../actoins/error';
import { setErrorCatch } from '../../util/SettingErrorCatch';

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
        setErrorCatch(
            dispatch(updatePreviewFetch(projectId, fd)),
            e => dispatch(addError(e))
        );
    },
    update: project => {
        setErrorCatch(
            dispatch(updateFetch(project)),
            e => dispatch(addError(e))
        );
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Project);