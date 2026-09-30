// Exercise 13 - useEffect: fetch bai viet theo user, fetch lai khi doi user

import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { UserPosts } from '../components/hooks';
import { users } from '../data/hooks';

function Exercise13() {
  const [userId, setUserId] = useState(1);

  return (
    <div>
      <h3>Exercise 13 — useEffect</h3>

      <Form.Group className="my-3" style={{ maxWidth: 320 }}>
        <Form.Label>Chọn user</Form.Label>
        <Form.Select value={userId} onChange={(e) => setUserId(Number(e.target.value))}>
          {users.map((u) => (
            <option key={u.id} value={u.id}>{u.id}. {u.name}</option>
          ))}
        </Form.Select>
      </Form.Group>

      {/* doi userId => prop doi => useEffect trong UserPosts chay lai */}
      <UserPosts userId={userId} />
    </div>
  );
}

export default Exercise13;
