import * as message from './messageActions';

export const initialState = {
  messages: [],
  messageLiveTime: process.env.REACT_APP_MESSAGE_LIVETIME || 2000,
};

export const messageReduser = (state = initialState, action) => {
  switch (action.type) {
    case message.ADD_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, action.message],
      };
    case message.REMOVE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter((message) => message.id !== action.id),
      };
    default:
      return {
        ...state,
      };
  }
};

