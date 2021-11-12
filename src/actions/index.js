// action type
export const ADD_NEW_MESSAGE_BIS = 'ADD_NEW_MESSAGE_BIS';

// action creator associé
// objectif : créer une action de type ADD NEW MESSAGE
// c'est ça qu'on va vouloir dispatcher
export const addNewMessageBis = () => ({
  type: ADD_NEW_MESSAGE_BIS,
});

export const SET_NEW_MESSAGE = 'SET_NEW_MESSAGE';

export const setNewMessage = (newMessageContent) => (
  {
    type: SET_NEW_MESSAGE,
    newMessageContent,
  }
);
