import React, {useEffect, useState} from 'react';
import {Pagination} from '../../UI/Pagination';
import PropTypes from 'prop-types';
import {Column} from '../../Column';
import {PostCard} from '../Card';
import {Container} from '../../Container';
import {useHistory} from 'react-router';
import {Separator} from '../../Separator';

const PostList = ({total, posts, lang, getPosts}) => {
  const [page, setPage] = useState(0);
  const history = useHistory();
  const limit = process.env.REACT_APP_PAGINATION_LIMIT;

  useEffect(() => {
    getPosts(page);
  }, []);

  useEffect(() => {
    getPosts && getPosts(page);
  }, [page]);

  const handlePageClick = (data) => {
    const selected = data.selected * process.env.REACT_APP_PAGINATION_LIMIT;
    setPage(selected);
  };

  return (
    <>
      <Container maxWidth={1000}>
        <Column>
          {
            posts?.map((post) => (
              <PostCard
                key={post.id}
                title={post.title}
                description={post.description}
                preview={post.preview}
                creationDate={post.creationDate}
                tags={post.tags}
                lang={lang}
                onClick={() => history.push('/post/' + post.id)}
              />
            ))
          }
        </Column>
      </Container>
      <Separator indentBottom={30} />
      <Pagination
        total={total}
        limit={limit}
        onClick={handlePageClick}
      />
    </>
  );
};

PostList.propTypes = {
  total: PropTypes.number,
  posts: PropTypes.array,
  lang: PropTypes.object,
  getPosts: PropTypes.func,
};

export {PostList};
