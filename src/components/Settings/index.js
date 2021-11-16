import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import './styles.scss';
import { toggleSettings, setEmailContent } from '../../actions';
import Field from '../Field';

const Settings = () => {
  const dispatch = useDispatch();

  // on passe une callback à use Selector car nouveau rendu à chaque fois s
  const isSettingsOpen = useSelector((state) => state.isSettingsOpen);
  const className = classNames('settings', { 'settings--open': isSettingsOpen });

  const emailContent = useSelector((state) => state.emailContent);

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
      <form className="settings__form">
        <Field name="emailValue" type="email" placeholder="E-mail" />
        <Field name="passwordValue" type="password" placeholder="Password" />
        <button type="submit" className="settings__submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Settings;
