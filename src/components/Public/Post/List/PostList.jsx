import React, {useEffect, useState} from 'react';
import {Pagination} from '../../UI/Pagination';
import PropTypes from 'prop-types';
import {Column} from '../../Column';
import {PostCard} from '../Card';
import {Container} from '../../Container';
import {useHistory, useParams} from 'react-router';
import {Separator} from '../../Separator';
import {getEntityDataByLang} from '../../../../utils/data/data';

const PostList = ({total, posts, lang, getPosts, addToBookmarks}) => {
  const {page: pageNumber} = useParams();
  const limit = process.env.REACT_APP_PAGINATION_LIMIT;
  const [page, setPage] = useState((+pageNumber - 1) * limit);
  const history = useHistory();

  useEffect(() => {
    getPosts(page);
  }, []);

  useEffect(() => {
    getPosts && getPosts(page);
  }, [page]);

  const handlePageClick = (data) => {
    const selected = data.selected * process.env.REACT_APP_PAGINATION_LIMIT;
    console.log(data.selected);
    history.push(`/posts/${+data.selected + 1}`);
    setPage(selected);
  };

  return (
    <>
      <Container maxWidth={1000}>
        <Column>
          {
            posts?.map((post) => {
              const bmPost = post;
              post = getEntityDataByLang(
                  post,
                  lang.title,
                  'postData',
              );
              return (
                <PostCard
                  key={post.id}
                  title={post.title}
                  description={post.description}
                  preview={post.preview}
                  creationDate={post.creationDate}
                  tags={post.tags}
                  lang={lang}
                  addToBookmarks={() => addToBookmarks(bmPost)}
                  onClick={() => history.push('/post/' + post.id)}
                />
              );
            })
          }
        </Column>
      </Container>
      <Separator indentBottom={30} />
      <Pagination
        total={+total}
        limit={+limit}
        initialPage={+Math.ceil(page / limit)}
        onClick={handlePageClick}
      />
    </>
  );
};

PostList.propTypes = {
  total: PropTypes.number,
  posts: PropTypes.array,
  lang: PropTypes.object,
  addToBookmarks: PropTypes.func,
  getPosts: PropTypes.func,
};

export {PostList};
