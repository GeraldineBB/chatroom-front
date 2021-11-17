import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import './styles.scss';

const Message = ({ author, content }) => {
  // const currentUser = useSelector((state) => state.currentUser);
  // const className = classNames('message', { 'message--mine': author === currentUser });

  // ou bien

  const isMine = useSelector((state) => state.currentUser === author);
  const className = classNames('message', { 'message--mine': isMine });

  return (
    <div className={className}>
      <div className="message__author">
        {author}
      </div>
      <div className="message__content">
        {content}
      </div>
    </div>
  );
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Message;
