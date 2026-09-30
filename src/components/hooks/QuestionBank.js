// Ex15 (2) - Question Bank: component chi hien thi + dispatch
import { useReducer } from 'react';
import { Alert, Button, Card, ListGroup, ProgressBar } from 'react-bootstrap';
import { createQuizState, quizReducer } from '../../reducers/quizReducer';

function QuestionBank({ questions }) {
  // tham so thu 3 (init) tao state ban dau tu questions
  const [state, dispatch] = useReducer(quizReducer, questions, createQuizState);
  const { current, selected, score, finished } = state;

  if (finished) {
    return (
      <Alert variant="success">
        <h5>Hoàn thành!</h5>
        <p>Điểm: {score} / {questions.length}</p>
        <Button onClick={() => dispatch({ type: 'RESTART' })}>Làm lại</Button>
      </Alert>
    );
  }

  const q = questions[current];

  // to mau dap an sau khi da chon: dung = xanh, sai = do
  const variantOf = (option) => {
    if (selected === null) return undefined;
    if (option === q.answer) return 'success';
    if (option === selected) return 'danger';
    return undefined;
  };

  return (
    <Card>
      <Card.Body>
        <ProgressBar now={(current / questions.length) * 100} className="mb-3" />
        <Card.Title>Câu {current + 1}/{questions.length}: {q.question}</Card.Title>

        <ListGroup className="my-3">
          {q.options.map((option) => (
            <ListGroup.Item
              key={option}
              action
              variant={variantOf(option)}
              disabled={selected !== null}
              onClick={() => dispatch({ type: 'ANSWER', payload: option })}
            >
              {option}
            </ListGroup.Item>
          ))}
        </ListGroup>

        <div className="d-flex justify-content-between align-items-center">
          <span>Điểm: {score}</span>
          <Button disabled={selected === null} onClick={() => dispatch({ type: 'NEXT' })}>
            {current === questions.length - 1 ? 'Xem kết quả' : 'Câu tiếp'}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default QuestionBank;
