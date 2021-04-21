import React, {useEffect} from 'react';
import {Column} from '../../Column';
import {PageTitle} from '../../UI/PageTitle';
import PropTypes from 'prop-types';
import {getVisible} from '../../../../store/post/postActions';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Container} from '../../Container';
import {PostCard} from '../Card';
import {Filter} from '../../../../api/filters';
import {Separator} from '../../Separator';
import {useHistory} from 'react-router';
import {getEntityDataByLang} from '../../../../utils/data/data';

const Box = styled.div`
  padding: 30px 0;
`;

let LastPosts = ({lang, posts, getPosts}) => {
  const history = useHistory();

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Column>
      <Box>
        <PageTitle>{lang.text.LAST_POSTS}</PageTitle>
        <Separator indentTop={40}/>
        <Container maxWidth={860}>
          {
            posts?.map((post) => {
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
                  onClick={() => history.push('/post/' + post.id)}
                />
              );
            })
          }
        </Container>
      </Box>
    </Column>
  );
};

LastPosts.propTypes = {
  lang: PropTypes.object,
  posts: PropTypes.array,
  getPosts: PropTypes.func,
};

const mapStateToProps = (state) => ({
  lang: state.settings.lang,
  posts: state.post.posts,
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => {
    dispatch(getVisible(0, 6, Filter.DESC));
  },
});

LastPosts = connect(mapStateToProps, mapDispatchToProps)(LastPosts);

export {LastPosts};
