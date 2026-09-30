// Ex15 - reducer cho Question Bank: moi logic quiz nam o day

export function createQuizState(questions) {
  return {
    questions,
    current: 0, // chi so cau dang lam
    selected: null, // dap an nguoi dung chon
    score: 0,
    finished: false,
  };
}

export function quizReducer(state, action) {
  switch (action.type) {
    case 'ANSWER': {
      if (state.selected !== null) return state; // da chon roi thi khong cho chon lai
      const q = state.questions[state.current];
      const correct = action.payload === q.answer;
      return {
        ...state,
        selected: action.payload,
        score: correct ? state.score + 1 : state.score,
      };
    }
    case 'NEXT': {
      const isLast = state.current === state.questions.length - 1;
      if (isLast) return { ...state, finished: true };
      return { ...state, current: state.current + 1, selected: null };
    }
    case 'RESTART':
      return createQuizState(state.questions);
    default:
      return state;
  }
}
