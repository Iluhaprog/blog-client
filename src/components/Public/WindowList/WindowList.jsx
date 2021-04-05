import React from 'react';
import * as PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {removeWindow, updateWindow} from '../../../store/window/windowActions';
import styled from 'styled-components';
import {Window} from '../UI/Window';

const WindowListBox = styled.div`
  position: absolute;
  top: 6vh;
  left: 0;
`;

let WindowList = ({windowList, onClose, onUpdate}) => {
  return (
    <WindowListBox>
      {
        windowList?.map((win) => {
          const Content = win.component;
          return (
            <Window
              key={win.id}
              title={win.title}
              onClose={() => onClose(win.id)}
            >
              {
                Content && (
                  <Content
                    data={win.content}
                    onUpdate={(content) => onUpdate(win.id, content)}
                  />
                )
              }
            </Window>
          );
        })
      }
    </WindowListBox>
  );
};

WindowList.propTypes = {
  windowList: PropTypes.array,
  onClose: PropTypes.func,
  onUpdate: PropTypes.func,
};

const mapStateToProps = (state) => ({
  windowList: state.window.windowList,
});

const mapDispatchToProps =(dispatch) => ({
  onClose: (id) => {
    dispatch(removeWindow(id));
  },
  onUpdate: (id, content) => {
    dispatch(updateWindow(id, content));
  },
});

WindowList = connect(mapStateToProps, mapDispatchToProps)(WindowList);

export {WindowList};
