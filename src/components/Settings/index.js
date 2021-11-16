import './styles.scss';

const Settings = () => (
  <div className="settings">
    <button type="button" className="settings__open-close">+</button>
    <form className="settings__form">
      <input type="email" placeholder="E-mail" className="settings__field" />
      <input type="password" placeholder="Password" className="settings__field" />
      <button type="submit" className="settings__submit">Envoyer</button>
    </form>
  </div>
);

export default Settings;
