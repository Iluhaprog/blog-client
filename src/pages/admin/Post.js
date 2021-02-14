import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { 
    createFileFetch,
    getFilesFetch,
    selectPostById, 
    setTagsFetch,
    updateFetch,
    updatePreviewFetch,
    setPostFetch,
} from '../../actoins/post';
import { ImageLoaderForm, PostForm } from '../../components/forms';
import { Row } from '../../components/containers';
import FilesViewer from '../../components/FilesViewer/FilesViewer';
import { Loader } from '../../components/Loader';
import { getUniqueName } from '../../util/string/string';
import { addError } from '../../actoins/error';
import { setErrorCatch } from '../../util/SettingErrorCatch';

const Post = props => {
    const { id } = useParams();
    const { dirname, files = [], getFiles } = props;

    useEffect(() => {
        props.getPostById(id);
    }, []);

    useEffect(() => {
        if (props.selected.directoryId) {
            getFiles(props.selected.directoryId)
        }
    }, [files.length]);

    const submit = values => {
        const tags = values.Tags || [];
        const { title, description, preview, text, visible } = values;
        if (tags.length) {
            props.setTags(id, tags);
        }
        if (preview.name) {
            props.updatePreview(id,  new File([preview], getUniqueName(preview.name)));
        }
        props.updatePost({
            id,
            title,
            description,
            text,
            visible,
        });
    }

    const sendFile = values => {
        if (dirname) {
            props.upload(dirname, values.file);
        }
    }

    return (
        <section className='admin-page'>
            <div className='admin-page__header'>
                <Row alignItems='c'>
                    <h1>{props.selected.title}</h1>
                    <Loader visible={props.isFetch}/>
                </Row>
            </div>
            <Row>
                <PostForm onSubmit={submit}/>
                <div className='column column_ai-c' style={{width: '40%'}}>
                    <ImageLoaderForm onSubmit={sendFile}/>
                    <FilesViewer files={files}/>
                </div>
            </Row>
        </section>
    );
}

const mapStateToProps = state => ({
    selected: state.post.selected,
    dirname: state.post.dir ? state.post.dir.name : '',
    files: state.post.files,
    isFetch: state.post.isFetch,
});

const mapDispatchToProps = dispatch => ({
    getPostById: id => {
        selectPostById(id);
    },
    setTags: (postId, tags) => {
        setErrorCatch(
            dispatch(setTagsFetch(postId, tags || [])),
            e => {
                dispatch(addError(e));
                dispatch(setPostFetch(false));
            }
        );
    },
    updatePreview: (postId, file) => {
        const fd = new FormData();
        fd.append('preview', file);
        setErrorCatch(
            dispatch(updatePreviewFetch(postId, fd)),
            e => {
                dispatch(addError(e));
                dispatch(setPostFetch(false));
            }
        );
    },
    updatePost: post => {
        setErrorCatch(
            dispatch(updateFetch(post)),
            e => {
                dispatch(addError(e));
                dispatch(setPostFetch(false));
            }
        );
    },
    upload: (dirname, file) => {
        if (file) {
            const fd = new FormData();
            fd.append('file', new File([file], getUniqueName(file.name)));
            setErrorCatch(
                dispatch(createFileFetch(dirname, fd)),
                e => {
                    dispatch(addError(e));
                    dispatch(setPostFetch(false));
                }
            );
        }
    },
    getFiles: dirId => {
        dispatch(getFilesFetch(dirId));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Post)