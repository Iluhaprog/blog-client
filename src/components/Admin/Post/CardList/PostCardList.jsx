import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getAll, remove} from '../../../../store/post/postActions';
import {PostCard} from '../Card';
import {Container, Row} from 'react-bootstrap';
import {Pagination} from '../../Pagination';
import {
  initModal,
  setFormType,
  setVidible,
} from '../../../../store/modal/modalActions';
import {ModalScreenTypes} from '../../../../store/modal/ModalFormTypes';

const ListBox = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px 0;
  
  & li {
    align-self: stretch;
    margin-bottom: 20px;
    
    .card {
      height: 100%;
    }
  }
`;

let PostCardList = ({
  posts,
  total,
  lang,
  getAll,
  theme,
  onDelete,
  showConfirmModal,
}) => {
  const [page, setPage] = useState(0);
  const limit = 9;

  const handlePageClick = (data) => {
    const selected = data.selected * limit;
    setPage(selected);
  };

  useEffect(() => {
    getAll(page, limit);
  }, [page]);

  return (
    <Container>
      <Row>
        <ListBox>
          {
            posts.map((post) => (
              <li key={post.id}>
                <PostCard
                  theme={theme}
                  post={post}
                  lang={lang}
                  onDelete={() => {
                    showConfirmModal(
                        `${lang.text.CONFIRM_POST_DELETE} "${post.title}" ?`,
                        () => onDelete(post.id),
                    );
                  }}
                />
              </li>
            ))
          }
        </ListBox>
      </Row>
      <Row className='justify-content-center'>
        <Pagination
          total={total}
          limit={limit}
          theme={theme}
          onClick={handlePageClick}
        />
      </Row>
    </Container>
  );
};

PostCardList.propTypes = {
  posts: PropTypes.array,
  total: PropTypes.number,
  theme: PropTypes.string,
  lang: PropTypes.object,
  onDelete: PropTypes.func,
  getAll: PropTypes.func,
  showConfirmModal: PropTypes.func,
};

const mapStateToProps = (state) => ({
  posts: state.post.posts,
  total: +state.post.total,
  lang: state.settings.lang,
  theme: state.settings.theme,
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => {
    dispatch(remove(id));
  },
  getAll: (page, limit) => {
    dispatch(getAll(page, limit));
  },
  showConfirmModal: (title, successHandler) => {
    dispatch(initModal({
      title,
      description: '',
      successHandler,
    }));
    dispatch(setFormType(ModalScreenTypes.CONFIRM));
    dispatch(setVidible(true));
  },
});

PostCardList = connect(mapStateToProps, mapDispatchToProps)(PostCardList);

export {PostCardList};
