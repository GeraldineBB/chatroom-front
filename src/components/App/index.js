import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// == Import
import './styles.scss';

import Messages from 'src/components/Messages';
import Form from 'src/components/Form';
import Settings from 'src/components/Settings';
import { initWebsocket } from '../../actions';

// == Composant
// au lancement de l'app, on émet l'intention de se connecter au serveur websocket
// on utilise le hook d'effet use Effect
// on dispatche l'intention : "je veux me co", on traite cette action dans un middleware redux
const App = () => {
  const dispatch = useDispatch();
  useEffect(
    () => {
      dispatch(initWebsocket());
    },
    [],
  );
  return (
    <div className="app">
      <Settings />
      <Messages />
      <Form />
    </div>
  );
};

// == Export
export default App;
