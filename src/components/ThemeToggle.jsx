import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-4 right-4 p-3 rounded-full transition-colors duration-200 ${
        isDark ? 'bg-gray-700 text-yellow-300' : 'bg-blue-100 text-gray-800'
      }`}
    >
      {isDark ? <FaSun size={24} /> : <FaMoon size={24} />}
    </button>
  );
}