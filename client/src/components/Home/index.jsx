import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

import { useLocalStorage } from '../../hooks/index.js';

const Home = () => {
  const [username, setUsername] = useLocalStorage('username', 'Andrew');
  const [roomId, setRoomId] = useState('free');
  const linkRef = useRef(null);
  const handleChangeName = ({ target: { value } }) => {
    setUsername(value);
  };

  const handleChangeRoom = ({ target: { value } }) => {
    setRoomId(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    linkRef.current.click();
  };

  const trimmedName = username.trim();

  return (
    <Form className="mt-5" style={{ maxWidth: '320px', margin: '0 auto' }} onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Name:</Form.Label>
        <Form.Control value={username} onChange={handleChangeName} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Room:</Form.Label>
        <Form.Control as="select" value={roomId} onChange={handleChangeRoom}>
          <option value="free">Free</option>
          <option value="job" disabled>
            Job
          </option>
        </Form.Control>
      </Form.Group>
      {trimmedName && (
        <Button variant="success" as={Link} to={`/${roomId}`} ref={linkRef}>
          Chat
        </Button>
      )}
    </Form>
  );
};

export default Home;
