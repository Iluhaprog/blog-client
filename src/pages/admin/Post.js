import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { 
    selectPostById, 
    setTagsFetch,
    updateFetch,
    updatePreviewFetch
} from '../../actoins/post';
import { PostForm } from '../../components/forms';

const Post = props => {
    const { id } = useParams();

    if (!props.selected.id) {
        props.getPostById(id);
    }

    const submit = values => {
        const tags = values.Tags || [];
        const { title, description, preview, text, visible } = values;
        if (tags.length) {
            props.setTags(id, tags);
            console.log(tags);
        }
        props.updatePreview(id, preview);
        props.updatePost({
            id,
            title,
            description,
            text,
            visible,
        });
    }

    return (
        <section className='admin-page'>
            <PostForm onSubmit={submit}/>
        </section>
    );
}

const mapStateToProps = state => ({
    selected: state.post.selected,
});

const mapDispatchToProps = dispatch => ({
    getPostById: id => {
        selectPostById(id);
    },
    setTags: (postId, tags) => {
        dispatch(setTagsFetch(postId, tags || []));
    },
    updatePreview: (postId, file) => {
        const fd = new FormData();
        fd.append('preview', file);
        dispatch(updatePreviewFetch(postId, fd));
    },
    updatePost: post => {
        console.log(post);
        dispatch(updateFetch(post));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Post)