import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Container} from '../../Container';
import PropTypes from 'prop-types';
import {getById} from '../../../../store/post/postActions';
import {useParams} from 'react-router';
import {HomeSection} from '../../UI/HomeSection';
import bg from '../../../../assets/public/bg/mainBG.jpg';
import {Description} from '../../UI/Description';
import {Title} from '../../UI/Title';
import styled from 'styled-components';
import {Row} from '../../Row';
import {Tag} from '../../UI/Tag';
import {Separator} from '../../Separator';
import {PostText} from '../Text';
import {Time} from '../../UI/Time';
import {getDateAndTime} from '../../../../utils/string/string';

const Box = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  &:after, &:before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 1px;
    background: var(--color-1);
  }

  &:before {
    margin-bottom: 10px;
  }
`;

let PostContent = ({post, getPost}) => {
  const {id} = useParams();
  const API_URL = process.env.REACT_APP_API_URL;
  const [date, time] = getDateAndTime(post.creationDate || '');

  useEffect(() => {
    getPost(id);
  }, []);

  return (
    <Container maxWidth={1200}>
      <HomeSection
        src={post.preview ? API_URL + '/' + post.preview : bg}
        maxHeight={500}
        card={{
          maxWidth: 400,
          maxHeight: 350,
        }}
      >
        <Box>
          <Title>{post.title}</Title>
          <Description>{post.description}</Description>
        </Box>
      </HomeSection>
      <Separator indentBottom={30}/>
      <Row justifyContent={'center'} wrap={'wrap'}>
        {
          post.tags?.map((tag) => (
            <Tag
              mod={'big'}
              key={tag.id}
              title={tag.title}
            />
          ))
        }
      </Row>
      <Separator indentBottom={15}/>
      <Row justifyContent={'center'}>
        <Time>
          {date + ' - ' + time}
        </Time>
      </Row>
      <Separator indentBottom={30}/>
      <Container maxWidth={800}>
        <PostText mdText={post.text}/>
      </Container>
    </Container>
  );
};

PostContent.propTypes = {
  post: PropTypes.object,
  getPost: PropTypes.func,
};

const mapStateToProps = (state) => ({
  post: state.post.selected,
});

const mapDispatchToProps = (dispatch) => ({
  getPost: (id) => {
    dispatch(getById(id));
  },
});

PostContent = connect(mapStateToProps, mapDispatchToProps)(PostContent);

export {PostContent};
