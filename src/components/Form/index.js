import './styles.scss';

const Form = () => (
  <form className="form">
    <input type="text" placeholder="Saisir un message" className="form__message" />
    <button type="submit" className="form__submit">&gt;</button>
  </form>
);

export default Form;
