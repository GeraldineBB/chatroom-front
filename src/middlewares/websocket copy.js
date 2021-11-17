import { addReceivedMessage, INIT_WEBSOCKET, SEND_MESSAGE } from '../actions';

// on définit ici socket pour qu'elle soit disponible dans tous les CASES !
let socket;

const websocketMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case INIT_WEBSOCKET:

    {
      console.log('j\'initialise la connexion au serveur');

      // on se connecte au serveur
      socket = window.io('http://localhost:3001');

      // se mettre en écoute (écouter que les messages arrivent)
      // received message : emis par le serveur
      // quand je recois un message > je veux l'ajouter et je veux aussi modifier le reducer
      socket.on('send_message', (message) => {
        console.log('nouvel évènement send_message', message);
        // à réception d'un message on émet le souhait d'ajouter le message reçu
        // > on gère cette intention dans le reducer !
        store.dispatch(addReceivedMessage(message));
      });

      next(action);
      break;
    }
    case SEND_MESSAGE:
    {
      // on extrait du state les informations nécessaires
      const { currentUser, newMessageContent } = store.getState();
      // on émet vers le serveur un évènement de type send_message
      // on s'était mis en attente de ceet évent plus haut (on(sendmessage)) donc on va voir apparaitre ce message
      socket.emit('send_message', { author: currentUser, content: newMessageContent });
      next(action);
      break;
    }

    default:
      next(action);
  }
};

export default websocketMiddleware;
