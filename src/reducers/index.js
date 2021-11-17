import {
  // eslint-disable-next-line max-len
  ADD_NEW_MESSAGE_BIS, SET_EMAIL_CONTENT, SET_NEW_MESSAGE, SET_PASSWORD_CONTENT, SET_POPUPSTATE, TOGGLE_SETTINGS, SET_FIELD_VALUE, ADD_RECEIVED_MESSAGE,
} from '../actions';
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
  // valeur du champ email :
  emailValue: '',
  passwordValue: '',
  // le formulaure de login est-il ouvert ?
  isSettingsOpen: true,

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.value,
        // on en profite pour refermer le formulaire de login
        isSettingsOpen: false,
      };
    case TOGGLE_SETTINGS:
      return {
        ...state,
        isSettingsOpen: !state.isSettingsOpen,
      };
    case SET_FIELD_VALUE:
      return {
        ...state,
        // équivalent à emailValue : action.emailValue
        // ici on accède à la propriété de l'objet dont le nom est contenu dans action.name
        // syntaxe pour échapper les propriétés de l'objet
        [action.name]: action.value,
      };

    case SET_NEW_MESSAGE:
      return {
        ...state,
        newMessageContent: action.newMessageContent,
      };

    case ADD_RECEIVED_MESSAGE: {
      return {
        ...state,
        messages: [
          ...state.messages,
          action.message,
        ],
        newMessageContent: action.message.author === state.currentUser ? '' : state.newMessageContent,
      };
    }
    case ADD_NEW_MESSAGE_BIS: {
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
