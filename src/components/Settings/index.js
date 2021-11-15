import './styles.scss';

const Settings = () => (

  <div className="settings">
    <button type="submit" className="settings__button">X</button>
    <form className="settings__form">
      <input
        type="text"
        placeholder="Email"
        className="settings__form--email"
      />
      <input
        type="text"
        placeholder="Mot de passe"
        className="settings__form--password"
      />
      <button type="submit" className="settings__form--submit">Envoyer</button>
    </form>
  </div>
);

export default Settings;
