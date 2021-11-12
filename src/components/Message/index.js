import PropTypes from 'prop-types';

import './styles.scss';

const Message = ({ author, content }) => (
  <div className="message">
    <div className="message__author">
      {author}
    </div>
    <div className="message__content">
      {content}
    </div>
  </div>
);

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Message;
