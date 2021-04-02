import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

const DefaultToggle = ({theme, onTrue, onFalse, condition, components}) => {
  const [value, setValue] = useState(condition);
  const setTrue = () => {
    onTrue();
    setValue(!value);
  };
  const setFalse = () => {
    onFalse();
    setValue(!value);
  };

  const TrueComponent = components[0];
  const FalseComponent = components[1];

  return (
    <Button
      variant={theme}
      onClick={value ? setFalse : setTrue}
    >
      {
        value ?
          TrueComponent && <TrueComponent /> :
          FalseComponent && <FalseComponent />
      }
    </Button>
  );
};

DefaultToggle.defaultProps = {
  onTrue: () => {},
  onFalse: () => {},
  components: [],
};

DefaultToggle.propTypes = {
  theme: PropTypes.string,
  onTrue: PropTypes.func,
  onFalse: PropTypes.func,
  condition: PropTypes.bool,
  components: PropTypes.array,
};

export {DefaultToggle};
