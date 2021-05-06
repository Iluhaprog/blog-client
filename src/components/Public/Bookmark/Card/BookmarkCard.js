import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Row} from '../../Row';
// import {Image} from '../../UI/Image';
import {getEntityDataByLang} from '../../../../utils/data/data';
import {Title} from '../../UI/Title';
import {Separator} from '../../Separator';
import {Button} from '../../UI/Button';
import {Trash} from 'react-bootstrap-icons';
import {NavLink} from 'react-router-dom';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Card = styled.div`
  max-width: 300px;
  min-width: 150px;
  width: 100%;
  margin: 10px;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px;
  
  a {
    text-decoration: none;
    color: #000;
    
    h2 {
      margin: 0;
      font-size: 20px;
    }
  }
`;

const BookmarkCard = ({data, lang, onDelete}) => {
  data = getEntityDataByLang(data, lang.title, 'postData');
  const API_URL = process.env.REACT_APP_API_URL;

  return (
    <Card>
      <Row alignItems={'center'} justifyContent={'space-between'}>
        <Row alignItems={'center'}>
          <LazyLoadImage
            width={50}
            height={50}
            src={`${API_URL}/${data.preview}`}
            alt={data.title}
          />
          <Separator indentLeft={20} />
          <NavLink to={`/post/${data.id}`}>
            <Title maxWidth={150}>
              {data.title}
            </Title>
          </NavLink>
        </Row>
        <Button
          onClick={onDelete}
          minWidth={20}
          mod={'small'}
        >
          <Trash />
        </Button>
      </Row>
    </Card>
  );
};

BookmarkCard.propTypes = {
  data: PropTypes.object,
  lang: PropTypes.object,
  onDelete: PropTypes.func,
};

export {BookmarkCard};
