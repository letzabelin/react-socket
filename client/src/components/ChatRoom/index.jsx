import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { useLocalStorage, useChat } from '../../hooks/index.js';
import MessageForm from './MessageForm/index.jsx';
import MessageList from './MessageList/index.jsx';
import UserList from './UserList/index.jsx';

const ChatRoom = () => {
  const { roomId } = useParams();
  const [username] = useLocalStorage('username');
  const { users, messages, sendMessage, removeMessage } = useChat(roomId);

  return (
    <Container>
      <h2 className="text-center">Room: {roomId === 'job' ? 'Job' : 'Free'}</h2>
      <UserList users={users} />
      <MessageList messages={messages} removeMessage={removeMessage} />
      <MessageForm username={username} sendMessage={sendMessage} />
    </Container>
  );
};

export default ChatRoom;
