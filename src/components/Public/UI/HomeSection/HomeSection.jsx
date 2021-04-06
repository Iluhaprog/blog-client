import React from 'react';
import {Card} from '../Card';
import {Background} from '../Background';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContentBox = styled.div`
  padding: 0 20px 20px 20px;
  height: 100%;
`;

const HomeSection = ({src, children, maxHeight, card}) => {
  return (
    <Background
      maxHeight={maxHeight}
      src={src}
      alt={'Home image'}
    >
      <ContentBox>
        <Card maxWidth={card.maxWidth} maxHeight={card.maxHeight}>
          {children}
        </Card>
      </ContentBox>
    </Background>
  );
};

HomeSection.propTypes = {
  src: PropTypes.string,
  children: PropTypes.node,
  maxHeight: PropTypes.number,
  card: PropTypes.shape({
    maxWidth: PropTypes.number,
    maxHeight: PropTypes.number,
  }),
};

export {HomeSection};
