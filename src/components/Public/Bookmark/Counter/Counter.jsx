import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styled from 'styled-components';

const Counter = styled.div`
  position: relative;
  
  span {
    position: absolute;
    top: -30px;
    left: -15px;
    width: 18px;
    height: 18px;
    font-size: 10px;
    font-weight: bold;
    background-color: #ff7063;
    color: #fff;
    border-radius: 8px;
    border: 2px solid #000;
  }
`;

let BookmarkCounter = ({count}) => {
  return (
    <Counter>
      <span>
        {count}
      </span>
    </Counter>
  );
};

BookmarkCounter.propTypes = {
  count: PropTypes.number,
};

const mapStateToProps = (state) => ({
  count: +state.bookmark.unviewedBookmarksNumber,
});

const mapDispatchToProps = () => ({});

BookmarkCounter = connect(
    mapStateToProps,
    mapDispatchToProps,
)(BookmarkCounter);

export {BookmarkCounter};
