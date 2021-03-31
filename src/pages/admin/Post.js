import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router';
import {getById} from '../../store/post/postActions';
import {connect} from 'react-redux';
import {PostUpdateForm} from '../../components/Post/UpdateForm';
import {Container} from 'react-bootstrap';

let Post = ({selected, selectPost}) => {
  const {id} = useParams();

  useEffect(() => {
    selectPost(id);
  }, []);

  return (
    <section>
      <Container>
        <PostUpdateForm />
      </Container>
    </section>
  );
};

Post.propTypes = {
  selected: PropTypes.object,
  selectPost: PropTypes.func,
};

const mapStateToProps = (state) => ({
  selected: state.post.selected,
});

const mapDispatchToProps = (dispatch) => ({
  selectPost: (id) => {
    dispatch(getById(id));
  },
});

Post = connect(mapStateToProps, mapDispatchToProps)(Post);

export {Post};
