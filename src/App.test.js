import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('mo app thi thay Exercise 1', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Exercise 1/i })).toBeInTheDocument();
});

test('bam menu thi doi bai', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: /Exercise 8/i }));
  expect(screen.getByLabelText('Họ và tên')).toBeInTheDocument();
});

// ===== Exercise 12 -> 15 (Hooks) =====

function moBai(ten) {
  render(<App />);
  fireEvent.click(screen.getByRole('button', { name: ten }));
}

test('Ex12: counter tang, input hien chu, toggle an hien', () => {
  moBai(/Exercise 12/i);
  fireEvent.click(screen.getByRole('button', { name: /Count: 0/ }));
  expect(screen.getByRole('button', { name: /Count: 1/ })).toBeInTheDocument();

  fireEvent.change(screen.getByPlaceholderText('Gõ gì đó...'), { target: { value: 'xin chao' } });
  expect(screen.getByText('xin chao')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'Hiện' }));
  expect(screen.getByText(/Giờ bạn thấy tôi/)).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Ẩn' }));
  expect(screen.queryByText(/Giờ bạn thấy tôi/)).not.toBeInTheDocument();
});

test('Ex13: fetch bai viet, doi user thi fetch lai', async () => {
  // gia lap fetch de test khong can mang
  global.fetch = jest.fn((url) =>
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve([{ id: 1, title: 'Bai cua ' + url.split('userId=')[1] }]),
    })
  );
  moBai(/Exercise 13/i);
  expect(await screen.findByText(/Bai cua 1/)).toBeInTheDocument();

  fireEvent.change(screen.getByRole('combobox'), { target: { value: '3' } });
  expect(await screen.findByText(/Bai cua 3/)).toBeInTheDocument();
  expect(global.fetch).toHaveBeenLastCalledWith(expect.stringContaining('userId=3'));
});

test('Ex14: bam nut thi doi theme', () => {
  moBai(/Exercise 14/i);
  expect(screen.getByText('light')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: /Đổi sang tối/ }));
  expect(screen.getByText('dark')).toBeInTheDocument();
});

test('Ex15: counter reducer va question bank', () => {
  moBai(/Exercise 15/i);
  fireEvent.click(screen.getByRole('button', { name: '+' }));
  fireEvent.click(screen.getByRole('button', { name: '+' }));
  fireEvent.click(screen.getByRole('button', { name: '-' }));
  expect(screen.getByText('1')).toBeInTheDocument();

  // tra loi dung 4 cau
  ['useState', 'Chỉ chạy một lần sau khi mount', 'Prop drilling', '[state, dispatch]'].forEach((dapAn) => {
    fireEvent.click(screen.getByText(dapAn));
    fireEvent.click(screen.getByRole('button', { name: /Câu tiếp|Xem kết quả/ }));
  });
  expect(screen.getByText('Điểm: 4 / 4')).toBeInTheDocument();
});
