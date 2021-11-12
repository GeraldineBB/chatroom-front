const initialState = {
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
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'ADD_NEW_MESSAGE_BIS': {
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
    }
    default:
      return state;
  }
};

export default reducer;
