import {MessageTypes} from './MessageTypes';
import {v4 as uuidv4} from 'uuid';

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

export const addMessage = (type = MessageTypes.DEFAULT, data = {}) => ({
  type: ADD_MESSAGE,
  message: {
    id: uuidv4(),
    data,
    type,
  },
});

export const removeMessage = (id) => ({
  type: REMOVE_MESSAGE,
  id,
});
