import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';
import MarkdownIt from 'markdown-it';
import imsize from 'markdown-it-imsize';

const mdIt = new MarkdownIt().use(imsize);

const Box = styled.div`
  width: 100%;
  height: 200px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 20px;
  
  img {
    object-position: center;
    object-fit: cover;
  }
`;
const PreviewBox = ({md}) => {
  const html = mdIt.render(md || '');
  return (
    <Box dangerouslySetInnerHTML={{__html: html}}>
    </Box>
  );
};

PreviewBox.propTypes = {
  md: PropTypes.string,
};

export {PreviewBox};
