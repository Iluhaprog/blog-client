import React, {useRef} from 'react';
import {Dropdown} from '../../Dropdown/Dropdown';
import {DropdownHeader} from './DropdownHeader';
import {Badge, Button, Col, Row} from 'react-bootstrap';
import {FileArrowDown} from 'react-bootstrap-icons';
import {FileBox} from '../../FileBox';
import PropTypes from 'prop-types';

const DirListItem = (props) => {
  const {dir, createFile, removeDir, removeFile} = props;
  const inputFile = useRef(null);

  return (
    <Col md={12} key={dir.id}>
      <Dropdown
        header={() => (
          <DropdownHeader
            dir={dir}
            removeDir={removeDir}
          />
        )}
      >
        <Row
          className={'justify-content-between'}
          style={{padding: '10px 20px'}}
        >
          <h5>
            <Badge variant={'secondary'}>
              Files
            </Badge>
          </h5>
          <Button
            variant={'primary'}
            onClick={(e) => {
              e.preventDefault();
              inputFile.current.click();
            }}
            style={{marginRight: '10px'}}
          >
            <FileArrowDown />
          </Button>
          <input
            type='file'
            ref={inputFile}
            style={{display: 'none'}}
            onChange={(e) => {
              e.preventDefault();
              createFile(e.target.files[0], dir.id);
            }}
          />
        </Row>
        {
          dir.files?.map((file) => (
            <FileBox
              key={file.id}
              isDeleted={true}
              fileName={file.name}
              onClick={() => {
                removeFile(file.id);
              }}
            />
          ))
        }
      </Dropdown>
    </Col>
  );
};

DirListItem.propTypes = {
  dir: PropTypes.object,
  createFile: PropTypes.func,
  removeFile: PropTypes.func,
  removeDir: PropTypes.func,
};

export {DirListItem};
