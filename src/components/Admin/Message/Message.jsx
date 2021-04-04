import React from 'react';
import {connect} from 'react-redux';
import {removeMessage} from '../../../store/message/messageActions';
import styled from 'styled-components';
import {Alert, Button, Container, Row} from 'react-bootstrap';
import {MessageTypes} from '../../../store/message/MessageTypes';
import PropTypes from 'prop-types';
import {XSquare} from 'react-bootstrap-icons';

const MessagesBox = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  max-width: 250px;
  max-height: 85vh;
  width: 100%;
  overflow-y: scroll;
  background-color: transparent;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

let Message = ({messages, messageLiveTime, removeMessage}) => {
  const messageVariants = {
    [MessageTypes.ERROR]: 'danger',
    [MessageTypes.SUCCESS]: 'success',
  };

  return (
    <MessagesBox>
      {
        messages.map((message) => {
          setTimeout(() => {
            removeMessage(message.id);
          }, messageLiveTime);
          return (
            <Alert
              key={message.id}
              variant={messageVariants[message.type]}
            >
              <Container>
                <Row className='justify-content-between align-items-center'>
                  {
                    message.data.isAxiosError ?
                      (message.data.response.data.message) :
                      'Success'
                  }
                  <Button
                    variant={messageVariants[message.type]}
                    onClick={() => removeMessage(message.id)}
                  >
                    <XSquare />
                  </Button>
                </Row>
              </Container>
            </Alert>
          );
        })
      }
    </MessagesBox>
  );
};

Message.propTypes = {
  messages: PropTypes.array,
  messageLiveTime: PropTypes.number,
  removeMessage: PropTypes.func,
};

const mapStateToProps = (state) => ({
  messages: state.message.messages,
  messageLiveTime: +state.message.messageLiveTime,
});

const mapDispatchToProps = (dispatch) => ({
  removeMessage: (id) => dispatch(removeMessage(id)),
});

Message = connect(mapStateToProps, mapDispatchToProps)(Message);

export {Message};
