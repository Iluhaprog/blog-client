import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { LabeledButton } from '../../components/buttons';
import { Row } from '../../components/containers';
import { 
    getAllFetch, 
    deleteFetch, 
    setTotalFetch, 
    createFetch 
} from '../../actoins/post';
import { setModal } from '../../actoins/modal';
import { PostCard } from '../../components/PostCard';
import { useHistory, useParams } from 'react-router-dom';
import { Pagination } from '../../components/Pagination';

const Posts = props => {
    const { posts, getAllPosts, total, getTotal, userId } = props;
    const { openModalForPostCreation, openModalForPostDeleting } = props;
    const offset = process.env.REACT_APP_OFFSET;
    const { pageNumber } = useParams();
    const [page, setPage] = useState(pageNumber ? pageNumber - 1 : 0);
    const history = useHistory();

    const calcPosts = useCallback(() => {
        getAllPosts(page, offset);
        getTotal();
    }, [posts])

    useEffect(() => {
        calcPosts(posts);
    }, [page, calcPosts]);

    return (
        <section className='admin-page'>
            <div className='container'>
                <div className='admin-page__header'>
                    <Row justifyContent='sb' alignItems='c'>
                        <h1>Posts</h1>
                        <LabeledButton 
                            text='New'
                            onClick={() => {
                                openModalForPostCreation(userId)
                            }}
                        />
                    </Row>
                </div>
                <Row justifyContent='sb' wrap='w'>
                    {
                        posts.map(post => {
                            return (
                                <PostCard
                                    key={post.id}
                                    img={post.preview}
                                    title={post.title}
                                    description={post.description}
                                    tags={post.Tags}
                                    date={post.date}
                                    onClick={() => {
                                        history.push(`/admin/post/${post.id}`)
                                    }}
                                    onDelete={() => {
                                        openModalForPostDeleting(post)
                                    }}
                                />
                            );
                        })
                    }
                </Row>
                <Pagination
                    totalItems={total}
                    itemsPerPage={offset}
                    currentPage={+pageNumber}
                    changePage={setPage}
                    visiblePageLinks={5}
                />
            </div>
        </section>
    );
};

const mapStateToProps = state => ({
    posts: state.post.array,
    total: state.post.total,
    userId: state.user.id,
});


const mapDispatchToProps = dispatch => ({
    getAllPosts: (page, offset) => {
        dispatch(getAllFetch(page, offset))
    },
    deletePostById: (id) => {
        dispatch(deleteFetch(id))
    },
    getTotal: () => {
        dispatch(setTotalFetch())
    },
    openModalForPostCreation: userId => {
        dispatch(setModal({
            text: 'Write unique title for new post:',
            visible: true,
            withInput: true,
            handleSuccess: (value, fail) => {
                dispatch(createFetch({
                    title: value,
                    description: '',
                    preview: '',
                    text: '',
                    visible: false,
                    userId,
                }));
            }
        }));
    },
    openModalForPostDeleting: post => {
        dispatch(setModal({
            text: `Do you really want to hit "${post.title}"`,
            visible: true,
            handleSuccess: (value, fail) => {
                dispatch(deleteFetch(post.id));
            }
        }))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);