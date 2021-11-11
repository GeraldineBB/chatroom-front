import PropTypes from 'prop-types';

import './styles.scss';

const Message = ({message}) => (
  <p>{message}</p>
)

Message.propTypes = {
  message: PropTypes.string.isRequired, 
}

export default Message; 
