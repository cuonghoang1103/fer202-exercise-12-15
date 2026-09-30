// Ex15 - reducer cho counter: nhan state cu + action, tra ve state moi

export const initialCounter = { count: 0 };

export function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return initialCounter;
    default:
      return state;
  }
}
