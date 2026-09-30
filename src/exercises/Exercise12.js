// Exercise 12 - useState: counter, controlled input, toggle

import { Card } from 'react-bootstrap';
import { Counter, Echo, Toggle } from '../components/hooks';

function Exercise12() {
  return (
    <div>
      <h3>Exercise 12 — useState</h3>

      <Card className="mt-3">
        <Card.Header>1. Counter</Card.Header>
        <Card.Body><Counter /></Card.Body>
      </Card>

      <Card className="mt-3">
        <Card.Header>2. Controlled input</Card.Header>
        <Card.Body><Echo /></Card.Body>
      </Card>

      <Card className="mt-3">
        <Card.Header>3. Toggle hiện / ẩn</Card.Header>
        <Card.Body><Toggle /></Card.Body>
      </Card>
    </div>
  );
}

export default Exercise12;
