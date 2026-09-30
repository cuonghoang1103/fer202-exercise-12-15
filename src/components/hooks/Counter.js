// Ex12 (1) - Counter: moi lan bam thi tang 1
import { useState } from 'react';
import { Button } from 'react-bootstrap';

function Counter() {
  const [count, setCount] = useState(0);

  // dung dang ham (c => c + 1) de luon lay gia tri moi nhat
  return (
    <Button variant="primary" onClick={() => setCount((c) => c + 1)}>
      Count: {count}
    </Button>
  );
}

export default Counter;
