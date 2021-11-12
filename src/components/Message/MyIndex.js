import PropTypes from 'prop-types';

import './styles.scss';

const Message = ({message, author}) => (
  <div className="message">
    <div className="message__author">{author}</div>
    <div className="message__content">{message}</div>
  </div>
)

Message.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired, 
}

export default Message; 
