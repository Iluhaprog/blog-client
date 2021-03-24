import React, {useEffect, useState} from 'react';
import {Wrapper} from '../Wrapper';
import {ModalBox} from '../ModalBox';
import {Button, Container, Row} from 'react-bootstrap';
import {XSquare} from 'react-bootstrap-icons';
import PropTypes from 'prop-types';
import {Dropdown} from '../Dropdown/Dropdown';
import {FileBox} from '../FileBox';

function FileSelect({directories, theme, getDirectories}) {
  const [visible, setVisible] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    getDirectories(page);
    setPage(0);
  }, []);


  console.log(directories);

  return (
    <Wrapper visible={visible}>
      <ModalBox maxWidth={700}>
        <Container >
          <Row className='justify-content-end'>
            <Button
              variant={'danger'}
              onClick={() => setVisible(false)}
            >
              <XSquare />
            </Button>
          </Row>
        </Container>
        <Container>
          {directories.map((dir) => (
            <Dropdown
              key={dir.id}
              title={dir.name}
            >
              {
                dir.files.map((file) => (
                  <FileBox
                    key={file.id}
                    fileName={file.name}
                    onClick={() => {}}
                  />
                ))
              }
            </Dropdown>
          ))}
        </Container>
      </ModalBox>
    </Wrapper>
  );
}

FileSelect.defaultProps = {
  directories: [],
  getDirectories: () => {},
};

FileSelect.propTypes = {
  theme: PropTypes.string,
  directories: PropTypes.array,
  getDirectories: PropTypes.func,
};

export {FileSelect};
