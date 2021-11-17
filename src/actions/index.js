export const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const SET_NEW_MESSAGE = 'SET_NEW_MESSAGE';

export const setNewMessage = (newMessageContent) => (
  {
    type: SET_NEW_MESSAGE,
    newMessageContent,
  }
);

export const TOGGLE_SETTINGS = 'TOGGLE_SETTINGS';

export const toggleSettings = () => ({
  type: TOGGLE_SETTINGS,

});

export const SET_FIELD_VALUE = 'SET_FIELD_VALUE';

export const setFieldValue = (name, value) => ({
  type: SET_FIELD_VALUE,
  name,
  value,
});

export const INIT_WEBSOCKET = 'INIT_WEBSOCKET';

export const initWebsocket = () => ({
  type: INIT_WEBSOCKET,

});

export const SEND_MESSAGE = 'SEND_MESSAGE';

export const sendMessage = () => ({
  type: SEND_MESSAGE,

});

export const ADD_RECEIVED_MESSAGE = 'ADD_RECEIVED_MESSAGE';

export const addReceivedMessage = () => ({
  type: ADD_RECEIVED_MESSAGE,
  message,
});

/// //////////////////////////////////////////:

// action type
export const ADD_NEW_MESSAGE_BIS = 'ADD_NEW_MESSAGE_BIS';

// action creator associé
// objectif : créer une action de type ADD NEW MESSAGE
// c'est ça qu'on va vouloir dispatcher
export const addNewMessageBis = () => ({
  type: ADD_NEW_MESSAGE_BIS,
});

export const SET_EMAIL_CONTENT = 'SET_EMAIL_CONTENT';

export const setEmailContent = (emailContent) => ({
  type: SET_EMAIL_CONTENT,
  emailContent,
});

export const SET_PASSWORD_CONTENT = 'SET_PASSWORD_CONTENT';

export const setPasswordContent = (passwordContent) => ({
  type: SET_PASSWORD_CONTENT,
  passwordContent,
});

export const SET_POPUPSTATE = 'SET_POPUPSTATE';

export const setPopupState = () => ({
  type: SET_POPUPSTATE,
});
