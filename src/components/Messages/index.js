import './styles.scss';

// on peut utiliser ce chemin pour l'import
// grâce à un resolver prévu dans notre config de webpack
import Message from 'src/components/Message';
import { useSelector } from 'react-redux';

const Messages = () => {
  // - on récupère la liste des messages depuis le store,
  const messages = useSelector(
    (state) => state.messages,
  );

  return (
    <div className="messages">

      {
      // - on transforme notre tableau de message en "tableau de composant"
      //   on transmettra à chaque composant message les props dont il a besoin.
      //   utilisation d'un spread
      messages.map(
        (message) => <Message key={message.id} {...message} />,
      )
      }

    </div>
  );
};

export default Messages;
