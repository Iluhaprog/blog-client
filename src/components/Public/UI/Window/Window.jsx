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
  const [tabindex] = useState(Date.now());
  const [x, setX] = useState(100);
  const [y, setY] = useState(100);
  const [offset, setOffset] = useState({x: 0, y: 0});
  const [isMouseDown, setIsMouseDown] = useState(false);

  const mouseDown = (e) => {
    setOffset({
      x: e.target.offsetLeft - e.clientX,
      y: e.target.offsetTop - e.clientY,
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
      tabIndex={tabindex}
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
