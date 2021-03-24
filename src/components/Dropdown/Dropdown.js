import React, {useState} from 'react';
import {DropdownWrapper} from './DropdownWrapper';
import {DropdownTitle} from './DropdownTitle';
import {DropdownBody} from './DropdownBody';
import PropTypes from 'prop-types';


function Dropdown(props) {
  const [visible, setVisible] = useState(false);
  return (
    <DropdownWrapper>
      <DropdownTitle onClick={() => setVisible(!visible)}>
        {props.title}
      </DropdownTitle>
      <DropdownBody visible={visible}>
        {props.children}
      </DropdownBody>
    </DropdownWrapper>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export {Dropdown};
