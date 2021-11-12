/* eslint-disable import/prefer-default-export */
// Un selecteur 'selector' est une fonction qui permet de retourner une
// information contenue dans le state.
// C'est bien que l'on utilise avec le hook useSelector
export const getMessageMaxId = (state) => {
  const { messages } = state;

  // on récupére toutes les id
  const messagesIds = messages.map(
    (message) => message.id,
  );

  // on récupère la dernière id, et on rajoute 1 dans le reducer
  const messageMaxId = Math.max(...messagesIds, 0);

  return messageMaxId;
};
