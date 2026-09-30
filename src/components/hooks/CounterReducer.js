// Ex15 (1) - Counter dung useReducer
import { useReducer } from 'react';
import { Button } from 'react-bootstrap';
import { counterReducer, initialCounter } from '../../reducers/counterReducer';

function CounterReducer() {
  const [state, dispatch] = useReducer(counterReducer, initialCounter);

  return (
    <div className="d-flex align-items-center gap-2">
      <Button variant="outline-danger" onClick={() => dispatch({ type: 'DECREMENT' })}>-</Button>
      <span className="fs-4 px-2">{state.count}</span>
      <Button variant="outline-success" onClick={() => dispatch({ type: 'INCREMENT' })}>+</Button>
      <Button variant="secondary" onClick={() => dispatch({ type: 'RESET' })}>Reset</Button>
    </div>
  );
}

export default CounterReducer;
