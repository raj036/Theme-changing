import { useTheme } from '../context/ThemeContext';

export function Layout({ children }) {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isDark ? 'dark bg-gray-900' : 'bg-gray-100'
    }`}>
      {children}
    </div>
  );
}