import './styles.scss';
import {useSelector, useDispatch} from 'react-redux'; 
import {changeValueInput, addNewMessage} from '../../actions'; 

const Form = () => {

  const valueInput = useSelector(
    (state) => state.valueInput, 
  );

  const messages = useSelector(
    (state) => state.messages, 
  )

  const dispatch = useDispatch();

  return (

  <div>
  <form className="form">
    <input 
      value={valueInput} 
      type="text" 
      className="form-item" 
      placeholder="Ecrivez votre message"
      onChange={
        (event) => {
          dispatch(changeValueInput(event.target.value)); 
        }
      }
      />
     <input
      type="submit"
      className="form-button" 
      onClick={
        (event) => {
          console.log('je dois ajouter un message onClick'); 
          console.log(event.target.value); 
          dispatch(addNewMessage(event.target.value))}
      }
     />
  </form>
  </div>
  ); 
}; 

export default Form; 
