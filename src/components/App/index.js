// == Import
import './styles.scss';

// import des composants
import Form from '../Form';
import Messages from '../Messages'

// == Composant
const App = () => (
  <div className="app">
    <Messages />
    <Form />

  </div>
);

// == Export
export default App;
