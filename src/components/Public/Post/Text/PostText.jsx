import React from 'react';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';
import './Styles/dracula.css';
import {makeMD} from '../../../../utils/md';

const mdIt = makeMD();

const PostTextBox = styled.div`
  padding: 15px;
`;

const PostText = ({mdText}) => {
  const html = mdIt.render(mdText || '');

  return (
    <PostTextBox dangerouslySetInnerHTML={{__html: html}}>
    </PostTextBox>
  );
};

PostText.propTypes = {
  mdText: PropTypes.string,
};

export {PostText};
