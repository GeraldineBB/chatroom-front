export const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';

export const CHANGE_VALUE_INPUT = 'CHANGE_VALUE_INPUT';

export const addNewMessage = (messageInput) => (
  {type : ADD_NEW_MESSAGE, messageInput : messageInput}
)

export const changeValueInput = (input) => (
  {type: CHANGE_VALUE_INPUT, input}
)
