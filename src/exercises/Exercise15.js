// Exercise 15 - useReducer: counter + question bank

import { Card } from 'react-bootstrap';
import { CounterReducer, QuestionBank } from '../components/hooks';
import { questions } from '../data/hooks';

function Exercise15() {
  return (
    <div>
      <h3>Exercise 15 — useReducer</h3>

      <Card className="mt-3">
        <Card.Header>1. Counter (INCREMENT / DECREMENT / RESET)</Card.Header>
        <Card.Body><CounterReducer /></Card.Body>
      </Card>

      <h5 className="mt-4">2. Question Bank (ANSWER / NEXT / RESTART)</h5>
      <QuestionBank questions={questions} />
    </div>
  );
}

export default Exercise15;
