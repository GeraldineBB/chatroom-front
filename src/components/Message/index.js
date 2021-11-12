import PropTypes from 'prop-types';

import './styles.scss';

const Message = ({message}) => (
  <div className="message">
    <div className="message__author">Super Chat</div>
    <div className="message__content">{message}</div>
  </div>
)

Message.propTypes = {
  message: PropTypes.string.isRequired, 
}

export default Message; 
