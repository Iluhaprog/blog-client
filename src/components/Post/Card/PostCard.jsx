import React from 'react';
import PropTypes from 'prop-types';
import {Badge, Button, Card, Col, Container, Row} from 'react-bootstrap';
import broken from '../../../assets/brkImg.png';
import {Eye, EyeSlash} from 'react-bootstrap-icons';
import {useHistory} from 'react-router';

const PostCard = ({post, lang, theme, onDelete}) => {
  const API_URL = process.env.REACT_APP_API_URL;
  const history = useHistory();
  return (
    <Card
      bg={theme}
      style={{width: '300px'}}
    >
      <Card.Img
        variant={'top'}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        src={post.preview ? `${API_URL}/${post.preview}` : broken}
      />
      <Card.Body>
        <Card.Title>
          <Container>
            <Row className='justify-content-between'>
              {post.title.length > 20 ?
                  post.title?.slice(0, 20) + '...' :
                  post.title
              }
              <Badge
                variant='secondary'
              >
                {
                  post.isVisible ? <Eye /> : <EyeSlash />
                }
              </Badge>
            </Row>
          </Container>
        </Card.Title>
        <Card.Text>
          {post.description.length > 100 ?
              post.description.slice(0, 100) + '...' :
              post.description
          }
        </Card.Text>
        <Row>
          <Col md={12}>
            {
              post.tags?.map((tag) => (
                <Badge
                  key={tag.id}
                  variant={'secondary'}
                  style={{marginRight: '5px'}}
                >
                  {tag.title}
                </Badge>
              ))
            }
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer>
        <Row className='justify-content-between align-items-center'>
          <Col md={3}>
            <Button
              variant={'primary'}
              onClick={() => history.push(`/admin/post/${post.id}`)}
            >
              {lang.button.READ}
            </Button>
          </Col>
          <Col md={3}>
            <Button
              onClick={() => onDelete()}
              variant={'danger'}
            >
              {lang.button.DELETE}
            </Button>
          </Col>
          <Col md={6}>
            <time
              className='text-muted'
              style={{
                paddingLeft: '30px',
              }}
            >
              {post.creationDate?.split('T')[0]}
            </time>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};

PostCard.propTypes = {
  post: PropTypes.object,
  theme: PropTypes.string,
  lang: PropTypes.object,
  onDelete: PropTypes.func,
};

export {PostCard};
