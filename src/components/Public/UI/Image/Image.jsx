import React, {useState} from 'react';
import styled from 'styled-components';
import * as PropTypes from 'prop-types';

const ImageBox = styled.div`
  border-width: 3px;
  border-style: double;
  min-width: ${({minWidth}) => minWidth}px;
  min-height: ${({minHeight}) => minHeight}px;
  width: fit-content;
  
  img {
    object-position: center;
    object-fit: cover;
  }
`;

const Image = ({width, height, src}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <ImageBox minWidth={width} minHeight={height}>
      <img
        width={`${width}px`}
        height={`${height}px`}
        src={src}
        alt={src}
        loading={'lazy'}
        onLoad={() => setImageLoaded(!imageLoaded)}
      />
      {!imageLoaded && 'Loading...'}
    </ImageBox>
  );
};

Image.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  src: PropTypes.string,
};

export {Image};
