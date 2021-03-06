import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const BackgroundBox = styled.div`
  position: relative;
  height: ${({maxHeight}) => maxHeight}px;
  width: 100%;
`;

const ImageBox = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  
  span {
    width: 100% !important;
    height: 100% !important;
    
    img {
      width: 100%;
      height: 100%;
      object-position: center;
      object-fit: cover;
    }
  }
`;

const ContentBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Background = ({
  maxHeight,
  src,
  alt,
  children,
}) => {
  return (
    <BackgroundBox maxHeight={maxHeight}>
      <ImageBox>
        <LazyLoadImage
          src={src}
          width={1280}
          height={720}
          alt={alt}
          effect={'blur'}
        />
      </ImageBox>
      <ContentBox>
        {children}
      </ContentBox>
    </BackgroundBox>
  );
};

Background.propTypes = {
  maxHeight: PropTypes.number,
  src: PropTypes.string,
  alt: PropTypes.string,
  children: PropTypes.node,
};

export {Background};
