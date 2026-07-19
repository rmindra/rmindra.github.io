import { useTheme } from './hooks/useTheme';
import { Home } from './pages/Home';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme}>
      <Home theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}
