import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import './styles.scss';
import { toggleSettings } from '../../actions';
import Field from '../Field';

const Settings = () => {
  const dispatch = useDispatch();

  // on passe une callback à use Selector car nouveau rendu à chaque fois s
  const isSettingsOpen = useSelector((state) => state.isSettingsOpen);
  const className = classNames('settings', { 'settings--open': isSettingsOpen });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit, je vais me co à une API');

    // intention : JE VEUX ME CONNECTER A L'API
    // dispatch d'une action
    // action qui ne sera pas traduit dans le reducer (car pas de modif de l'état)
    // nouveau composant : middleWare
    // = videur
    // il va se placer avant le dispatch, il va gérer les actions avant qu'elles n'arrivent au reducer
    dispatch({ type: 'LOGIN' });

    // axios.post('http://localhost:3001/login', {
    //   email: 'bouclierman@herocorp.io',
    //   password: 'wrong',
    // }).then(
    //   (response) => console.log(response.data),

    //   // dispatch d'une action pour enregistrer le nom de l'utilisateur
    // ).catch(
    //   (error) => console.log(error),
    // );
  };

  // equivalent à :
  // if (isSettingsOpen) {
  //   className = 'settings settings--open';
  // }
  // else {
  //   className = 'settings';
  // }

  // pour provoquer un changement d'état:
  // - on écoute une action de l'utilisateur
  // - on réagit dans un handler
  // - on dispatche une intention
  // - on traduit cette intention en modification du state dans le reducer

  return (
    <div className={className}>
      <button
        type="button"
        className="settings__open-close"
        onClick={
          () => {
            // équivaut à
            // dispatch({ type: 'TOGGLE_SETTINGS' });
            dispatch(toggleSettings());
          }
        }
      >+
      </button>
      <form className="settings__form" onSubmit={handleSubmit}>
        <Field name="emailValue" type="email" placeholder="E-mail" />
        <Field name="passwordValue" type="password" placeholder="Password" />
        <button type="submit" className="settings__submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Settings;
