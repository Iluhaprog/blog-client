import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Titlebar} from '../Titlebar';
import {WindowFrame} from './Frame';
import PropTypes from 'prop-types';

const WindowBox = styled.div`
  position: absolute;
  width: fit-content;
  z-index: 1;
  
  &:hover {
    z-index: 2;
  }
`;

const Window = ({title, onClose, children}) => {
  const [x, setX] = useState(100);
  const [y, setY] = useState(100);
  const [offset, setOffset] = useState({x: 100, y: 100});
  const [isMouseDown, setIsMouseDown] = useState(false);

  const mouseDown = (e) => {
    setOffset({
      x: e.target.getBoundingClientRect().left - e.clientX,
      y: e.target.getBoundingClientRect().top - 30 - e.clientY,
    });
    setIsMouseDown(true);
  };
  const mouseUp = () => {
    setIsMouseDown(false);
  };

  const move = (e) => {
    setX(e.clientX + offset.x);
    setY(e.clientY + offset.y);
  };

  useEffect(() => {
    if (isMouseDown) {
      document.onmousemove = move;
      document.onmouseup = mouseUp;
    } else {
      document.onmousemove = null;
    }
  }, [isMouseDown]);

  return (
    <WindowBox
      style={{
        top: `${y}px`,
        left: `${x}px`,
      }}
    >
      <Titlebar
        onMouseDown={mouseDown}
        onMouseUp={mouseUp}
        isActive={true}
        title={title}
        onClose={onClose}
      />
      <WindowFrame>
        {children}
      </WindowFrame>
    </WindowBox>
  );
};

Window.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

export {Window};
