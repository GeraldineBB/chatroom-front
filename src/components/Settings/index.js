import { useDispatch, useSelector } from 'react-redux';

import { setEmailContent, setPasswordContent, setPopupState } from '../../actions';

import './styles.scss';

const Settings = () => {
  const dispatch = useDispatch();

  const emailContent = useSelector(
    (state) => state.emailContent,
  );

  const passwordContent = useSelector(
    (state) => state.passwordContent,
  );

  const isPopUp = useSelector(
    (state) => state.popUp,
  );

  const handleClickOnPopUp = () => {
    dispatch(setPopupState());
  };

  const handleChangeEmail = (event) => {
    dispatch(setEmailContent(event.target.value));
  };

  const handleChangePassword = (event) => {
    dispatch(setPasswordContent(event.target.value));
  };

  const handleSubmit = () => {
    dispatch(setEmailContent(emailContent));
    dispatch(setPasswordContent(passwordContent));
  };

  return (
    <div className="settings">
      <button
        type="submit"
        className="settings__button"
        onClick={handleClickOnPopUp}
      >
        X
      </button>
      <div className={isPopUp ? 'settings__ON' : 'settings__OFF'}>
        <form className="settings__form">
          <input
            value={emailContent}
            type="text"
            placeholder="Email"
            className="settings__form--email"
            onChange={handleChangeEmail}
          />
          <input
            value={passwordContent}
            type="text"
            placeholder="Mot de passe"
            className="settings__form--password"
            onChange={handleChangePassword}
          />
          <button
            type="submit"
            className="settings__form--submit"
            onSubmit={handleSubmit}
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
