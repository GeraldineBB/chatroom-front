import { getMessageMaxId } from '../selectors';

const initialState = {
  currentUser: 'Super Chien',

  messages: [
    {
      id: 1,
      author: 'Super Chat',
      content: 'Salut ça va ?',
    },
    {
      id: 2,
      author: 'Super Chat',
      content: 't\'as pas des super croquettes ?',
    },
    {
      id: 3,
      author: 'Super Chat',
      content: 'stp',
    },
  ],
  newMessageContent: '',

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_NEW_MESSAGE':
      return {
        ...state,
        newMessageContent: action.newMessageContent,
      };
    case 'ADD_NEW_MESSAGE_BIS': {
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            // ici on veut faire une projection du state (= un selector)
            id: getMessageMaxId(state) + 1,
            author: state.currentUser,
            content: state.newMessageContent,
          },
        ],
        // pour vider le champs à chaque ajout c'est plus simple de le gérer ici directement
        newMessageContent: '',
      };

      // équivalent à :
      /*
      // on prépare le message à ajouter
      const newMessage = {
        id: 4,
        author: 'Super Chat',
        content: 'Test',
      };

      // on contruit une nouvelle liste de message à partir de la liste courante
      // on respecte le principe d'immutabilité, on ne modifie jamais directement un tableau
      // ou un objet dans le state.
      const newMessages = [...state.messages];

      // on ajoute le nouveau message à la nouvelle liste des messages
      newMessages.push(newMessage);

      // on retourn la nouvelle version de l'état
      // dans la quelle la liste des messages est la liste que l'on vient de créer
      return {
        ...state,
        messages: newMessages,
      };
      */
    }
    default:
      return state;
  }
};

export default reducer;
