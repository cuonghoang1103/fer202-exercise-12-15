// Ex12 (2) - Controlled input: chu hien ra ngay khi go
import { useState } from 'react';
import { Form } from 'react-bootstrap';

function Echo() {
  const [text, setText] = useState('');

  return (
    <div>
      {/* value lay tu state, onChange cap nhat state => input "controlled" */}
      <Form.Control
        placeholder="Gõ gì đó..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p className="mt-2 mb-0">Bạn đang gõ: <strong>{text}</strong></p>
    </div>
  );
}

export default Echo;
