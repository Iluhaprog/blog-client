import React from 'react';
import {Badge, Button, Row} from 'react-bootstrap';
import {XSquare} from 'react-bootstrap-icons';
import PropTypes from 'prop-types';

const DropdownHeader = (props) => {
  const {dir, removeDir} = props;

  return (
    <Row
      className={'justify-content-between align-items-center'}
      style={{
        padding: '10px 20px',
      }}
    >
      <h3>
        <Badge variant={'secondary'}>
          /{dir.name}
        </Badge>
      </h3>
      <Button
        variant={'danger'}
        onClick={() => removeDir(dir.id)}
      >
        <XSquare />
      </Button>
    </Row>
  );
};

DropdownHeader.propTypes = {
  dir: PropTypes.object,
  removeDir: PropTypes.func,

};

export {DropdownHeader};
