import './styles.scss';
import Message from '../Message';
import {useSelector} from 'react-redux'; 


const Messages = () => {

  const messages = useSelector(
    (state) => state.messages, 
  )

  const author = useSelector (
    (state) => state.author, 
  )

return (
  <div className="messages">

    {
      messages.map (
        (message) => <Message key={message} message={message} author={author}/>        
      )
    }

  </div>
  ); 


};

export default Messages; 
