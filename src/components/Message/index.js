import PropTypes from 'prop-types';

import './styles.scss';

const Message = ({message}) => (
  <div className="container-message">
    <p>{message}</p>
  </div>
)

Message.propTypes = {
  message: PropTypes.string.isRequired, 
}

export default Message; 
