import React from 'react';
import PropTypes from 'prop-types';
import {FileBoxWrapper} from './FileBoxWrapper';
import {Badge, Button, Col, Container, Row} from 'react-bootstrap';
import {FileEarmarkPlus} from 'react-bootstrap-icons';
import {FileBoxPreview} from './FileBoxPreview';

function FileBox({fileName, onClick}) {
  const API_URL = process.env.REACT_APP_API_URL;
  return (
    <FileBoxWrapper>
      <Container>
        <Row className='justify-content-end'>
          <Col md={2}>
            <FileBoxPreview>
              <img src={`${API_URL}/${fileName}`} alt={fileName}/>
            </FileBoxPreview>
          </Col>
          <Col md={8}>
            <Row className='align-items-center' style={{height: '100%'}}>
              <Badge variant={'secondary'}>
                <a
                  style={{color: '#fff'}}
                  href={`${API_URL}/${fileName}`}
                >
                  {fileName}
                </a>
              </Badge>
            </Row>
          </Col>
          <Col md={2}>
            <Row className='justify-content-end'>
              <Button
                variant={'primary'}
                onClick={() => onClick(fileName)}
              >
                <FileEarmarkPlus/>
              </Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </FileBoxWrapper>
  );
}

FileBox.defaultProps = {
  onClick: () => {},
};

FileBox.propTypes = {
  fileName: PropTypes.string,
  onClick: PropTypes.func,
};

export {FileBox};
