import { useDispatch } from 'react-redux';
import './styles.scss';

const Form = () => {
  const dispatch = useDispatch;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('formuluaire soumis, on veut ajouter un message');
    dispatch({ type: 'ADD_NEW_MESSAGE_BIS' });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input type="text" placeholder="Saisir un message" className="form__message" />
      <button type="submit" className="form__submit">&gt;</button>
    </form>
  );
};

export default Form;
