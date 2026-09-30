// Exercise 14 - useContext: theme sang / toi

import { Layout, ThemeProvider } from '../components/hooks';

function Exercise14() {
  return (
    <div>
      <h3>Exercise 14 — useContext</h3>
      <p>Bấm nút để đổi theme. Toolbar đọc theme từ context, không nhận props.</p>

      {/* Provider boc ngoai cung, moi component ben trong deu doc duoc theme */}
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    </div>
  );
}

export default Exercise14;
