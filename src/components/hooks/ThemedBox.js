// Ex14 - Cac component doc theme bang useContext, KHONG nhan props
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { ThemeContext } from './ThemeContext';

export function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Button variant={theme.variant} onClick={toggleTheme}>
      Đổi sang {theme.name === 'light' ? 'tối' : 'sáng'}
    </Button>
  );
}

export function Toolbar() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="p-3 rounded mt-3"
      style={{ color: theme.foreground, background: theme.background }}
    >
      <h5>Toolbar</h5>
      <p className="mb-0">Theme hiện tại: <strong>{theme.name}</strong></p>
    </div>
  );
}

// Layout nam giua, khong truyen props theme xuong => khong prop drilling
export function Layout() {
  return (
    <div>
      <ThemeButton />
      <Toolbar />
    </div>
  );
}
