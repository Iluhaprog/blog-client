import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllFetch } from  '../../actoins/post';
import { ImageBox } from '../../components/boxes/ImageBox';
import { TitledBox } from '../../components/boxes'
import { PostCard } from '../../components/PostCard';

function Home(props) {
    const files = process.env.REACT_APP_FILES_URL;
    const history = useHistory();

    useEffect(() => {
        props.getPosts();
    }, []);
    
    return (
        <section className='main-page'>
            <ImageBox img={`${files}${props.homePreview}`}>
                <h1 className='main-page__title'>
                    {props.homeTitle}
                </h1>
            </ImageBox>
            <TitledBox title='Last posts'>
                {
                    props.posts.map(post => {
                        return (
                            <PostCard
                                key={post.id+Date.now()}
                                img={post.preview ? files + post.preview : ''}
                                title={post.title}
                                description={post.description}
                                tags={post.Tags}
                                date={post.date}
                                canEdit={false}
                                onClick={() => {
                                    history.push(`/post/${post.id}`);
                                }}
                            />
                        );
                    })
                }
            </TitledBox>
        </section>
    );
}

Home.defaultProps = {
    posts: [],
};

Home.propTypes = {
    posts: PropTypes.array,
};

const mapStateToProps = state => ({
    homeTitle: state.home.title,
    homePreview: state.home.preview,
    posts: state.post.array,
});

const mapDispatchToProps = dispatch => ({
    getPosts: () => {
        dispatch(getAllFetch(0, 8));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);