import { useRef, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import MessageListItem from '../MessageListItem/index.jsx';

const listStyles = {
  height: '80vh',
  border: '1px solid rgba(0, 0, 0, 0.4)',
  borderRadius: '4px',
  overflow: 'auto',
};

const MessageList = ({ messages, removeMessage }) => {
  const messagesEndRef = useRef(null);
  console.log(messages);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  }, [messages]);

  return (
    <ListGroup variant="flush" style={listStyles}>
      {messages.map((msg) => (
        <MessageListItem key={msg.messageId} msg={msg} removeMessage={removeMessage} />
      ))}
      <span ref={messagesEndRef}></span>
    </ListGroup>
  );
};

export default MessageList;
