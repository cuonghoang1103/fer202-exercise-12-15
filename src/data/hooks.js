// Du lieu dung cho Exercise 12 -> 15 (Chuong 8 - Hooks)

// Ex13: danh sach user de chon, id khop voi JSONPlaceholder (1 -> 10)
export const users = [
  { id: 1, name: 'Leanne Graham' },
  { id: 2, name: 'Ervin Howell' },
  { id: 3, name: 'Clementine Bauch' },
  { id: 4, name: 'Patricia Lebsack' },
  { id: 5, name: 'Chelsey Dietrich' },
];

export const POSTS_API = 'https://jsonplaceholder.typicode.com/posts';

// Ex14: hai bo mau sang / toi
export const themes = {
  light: { name: 'light', foreground: '#000000', background: '#eeeeee', variant: 'dark' },
  dark: { name: 'dark', foreground: '#ffffff', background: '#222222', variant: 'light' },
};

// Ex15: ngan hang cau hoi - answer la dap an dung
export const questions = [
  {
    id: 1,
    question: 'Hook nào dùng để lưu state trong function component?',
    options: ['useEffect', 'useState', 'useContext', 'useRef'],
    answer: 'useState',
  },
  {
    id: 2,
    question: 'Mảng phụ thuộc rỗng [] trong useEffect nghĩa là gì?',
    options: ['Chạy mỗi lần render', 'Không bao giờ chạy', 'Chỉ chạy một lần sau khi mount', 'Chạy khi unmount'],
    answer: 'Chỉ chạy một lần sau khi mount',
  },
  {
    id: 3,
    question: 'useContext giúp tránh vấn đề gì?',
    options: ['Prop drilling', 'Memory leak', 'Race condition', 'Re-render'],
    answer: 'Prop drilling',
  },
  {
    id: 4,
    question: 'useReducer trả về gì?',
    options: ['[state, setState]', '[state, dispatch]', '[reducer, action]', '[value, ref]'],
    answer: '[state, dispatch]',
  },
];
