import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Image} from '../../UI/Image';
import empty from '../../../../assets/brkImg.png';
import {Title} from '../../UI/Title';
import {Description} from '../../UI/Description';
import {Time} from '../../UI/Time';
import {getDateAndTime} from '../../../../utils/string/string';
import {Row} from '../../Row';
import {Tag} from '../../UI/Tag';
import {Button} from '../../UI/Button';
import {Separator} from '../../Separator';
import {Bookmark} from 'react-bootstrap-icons';

const Card = styled.article`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 50px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  figure {
    margin: 0;
  }
  
  footer {
    padding-left: 5px;
  }
  
  @media screen and (max-width: 420px) {
    figure {
      margin: 0 auto;
      max-width: 100%;
      img {
        width: 100%;
      }
    }
    
    footer {
      padding: 0 20px 0 0;
    }
  }
`;

const CardContent = styled.section`
  max-width: 500px;
  width: 100%;
  padding: 10px 0 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PostCard = (props) => {
  const {title, preview, description, creationDate, tags, lang} = props;
  const {onClick, addToBookmarks} = props;
  const API_URL = process.env.REACT_APP_API_URL;
  const [date, time] = getDateAndTime(creationDate || '');

  return (
    <Card>
      <Image
        width={350}
        height={350}
      >
        <img src={preview ? API_URL + '/' + preview : empty} alt={title}/>
      </Image>
      <CardContent>
        <div>
          <header>
            <Title>
              {title}
            </Title>
          </header>
          <Description>
            {description}
          </Description>
          <Time>
            {`${date} - ${time}`}
          </Time>
        </div>
        <div>
          <Row justifyContent={'flex-start'} wrap={'wrap'}>
            {
              tags?.map((tag) => (
                <Tag key={tag.id} title={tag.title} />
              ))
            }
          </Row>
          <Separator indentTop={10} />
          <footer>
            <Row justifyContent={'space-between'}>
              <Button
                onClick={onClick}
                mod={'small'}
              >
                {lang.button.READ}
              </Button>
              {addToBookmarks && (
                <Button
                  onClick={addToBookmarks}
                  mod={'small'}
                  minWidth={20}
                >
                  <Bookmark/>
                </Button>
              )
              }
            </Row>
          </footer>
        </div>
      </CardContent>
    </Card>
  );
};

PostCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  preview: PropTypes.string,
  tags: PropTypes.array,
  creationDate: PropTypes.string,
  lang: PropTypes.object,
  onClick: PropTypes.func,
  addToBookmarks: PropTypes.func,
};

export {PostCard};
