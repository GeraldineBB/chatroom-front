import './styles.scss';
import Message from '../Message';
import {useSelector} from 'react-redux'; 


const Messages = () => {

  const messages = useSelector(
    (state) => state.messages, 
  )

return (
  <div className="messages">

    {
      messages.map (
        (message) => <Message key={message} message={message}/>        
      )
    }

  </div>
  ); 


};

export default Messages; 
