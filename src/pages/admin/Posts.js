import React, { useEffect, useState, useMemo } from 'react';
import { connect } from 'react-redux';
import { LabeledButton } from '../../components/buttons';
import { Row } from '../../components/containers';
import { 
    selectPostById,
    getAllFetch, 
    deleteFetch, 
    setTotalFetch, 
    createFetch, 
    getDirFetch
} from '../../actoins/post';
import { setModal } from '../../actoins/modal';
import { PostCard } from '../../components/PostCard';
import { useHistory, useParams } from 'react-router-dom';
import { Pagination } from '../../components/Pagination';

const Posts = props => {
    const { posts, getAllPosts, total, getTotal, userId, selectPost, getDir } = props;
    const { openModalForPostCreation, openModalForPostDeleting } = props;
    const offset = process.env.REACT_APP_OFFSET;
    const { pageNumber } = useParams();
    const [page, setPage] = useState(pageNumber ? pageNumber - 1 : 0);
    const history = useHistory();
    const apiUrl = process.env.REACT_APP_FILES_URL;

    useEffect(() => {
        getAllPosts(page, offset);
        getTotal();
    }, [page]);

    return (
        <section className='admin-page'>
            <div className='container'>
                <div className='admin-page__header'>
                    <Row justifyContent='sb' alignItems='c'>
                        <h1>Posts</h1>
                        <LabeledButton 
                            text='New'
                            onClick={() => {
                                openModalForPostCreation(userId, () => {
                                    getAllPosts(page, offset);
                                    getTotal();
                                });
                            }}
                        />
                    </Row>
                </div>
                <div className='admin-page__main'>
                    <Row justifyContent='sb' wrap='w'>
                        {
                            posts.map(post => {
                                return (
                                    <PostCard
                                        key={post.id+Date.now()}
                                        img={post.preview ? apiUrl + post.preview : ''}
                                        title={post.title}
                                        description={post.description}
                                        tags={post.Tags}
                                        date={post.date}
                                        onClick={() => {
                                            history.push(`/admin/post/${post.id}`);
                                            selectPost(post.id);
                                            getDir(post.directoryId);
                                        }}
                                        onDelete={() => {
                                            openModalForPostDeleting(post, () => {
                                                getAllPosts(page, offset);
                                                getTotal();
                                            })
                                        }}
                                    />
                                );
                            })
                        }
                    </Row>
                </div>
                <Pagination
                    totalItems={total}
                    itemsPerPage={offset}
                    currentPage={+pageNumber}
                    changePage={setPage}
                    visiblePageLinks={5}
                    page='posts'
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
    selectPost: (id) => {
        dispatch(selectPostById(id))
    },
    getDir: dirId => {
        dispatch(getDirFetch(dirId))
    },
    openModalForPostCreation: (userId, success) => {
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
                }, success));
            }
        }));
    },
    openModalForPostDeleting: (post, success) => {
        dispatch(setModal({
            text: `Do you really want to hit "${post.title}"`,
            visible: true,
            handleSuccess: (value, fail) => {
                dispatch(deleteFetch(post.id, success));
            }
        }))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);