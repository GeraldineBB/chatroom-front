// == Import
import './styles.scss';

// import des composants
import Form from '../Form';
import Message from '../Message';
import Messages from '../Messages'

// == Composant
const App = () => (
  <div className="app">
    <Form />
    <Message />
    <Messages />

  </div>
);

// == Export
export default App;
