/* eslint-disable no-undef */
import {
  addReceivedMessage, INIT_WEBSOCKET, SEND_MESSAGE, SET_CURRENT_USER,
} from '../actions';

let socket;

const websocketMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case INIT_WEBSOCKET: {
      console.log('j\'initialise la connexion au serveur websocket');

      // on se connecte au serveur socket.io
      socket = window.io('http://localhost:3001');

      // on se met en écoute de l'arrivée de nouveaux messages
      socket.on('send_message', (message) => {
        console.log('nouvel évènement send_message', message);
        // à réception d'un message on emmet le souhait
        // d'ajouter le message reçu (l'action sera traitée par le reducer,
        // on est bien dans le cas d'une mise à jour du state)
        store.dispatch(addReceivedMessage(message));
      });

      next(action);
      break;
    }
    case SEND_MESSAGE: {
      // on extrait du state les information nécessaire
      const { currentUser, newMessageContent } = store.getState();

      // on emmet vers le serveur un évènement de type send_message
      socket.emit('send_message', { author: currentUser, content: newMessageContent });
      next(action);
      break;
    }
    case SET_CURRENT_USER: {
      socket.emit('new_user', action.value);
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default websocketMiddleware;
