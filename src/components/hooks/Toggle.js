// Ex12 (3) - Toggle: bam de an / hien doan chu
import { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';

function Toggle() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Button variant="outline-secondary" onClick={() => setShow((s) => !s)}>
        {show ? 'Ẩn' : 'Hiện'}
      </Button>
      {/* && : chi ve Alert khi show = true */}
      {show && <Alert variant="info" className="mt-2 mb-0">Giờ bạn thấy tôi 👋</Alert>}
    </div>
  );
}

export default Toggle;
