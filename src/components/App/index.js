// == Import
import './styles.scss';

// import des composants
import Settings from 'src/components/Settings';
import Form from '../Form';
import Messages from '../Messages';

// == Composant
const App = () => (
  <div className="app">
    <Settings />
    <Messages />
    <Form />

  </div>
);

// == Export
export default App;
