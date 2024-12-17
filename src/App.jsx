import { useTheme } from './context/ThemeContext';
import { Layout } from './components/Layout';
import { ThemeToggle } from './components/ThemeToggle';
import { Card } from './components/Card';

function App() {

  const {isDark} = useTheme();

  return (
    <>
      <Layout>
        <div className="container mx-auto px-4 py-16">
          <h1 className={`text-4xl font-bold text-center mb-12 dark:text-white text-gray-800 ${isDark ? "text-white" : "text-black"}`}>
            Theme Context Demo
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card 
              title="Welcome!"
              content="This is a demo of React Context API with theme switching capability."
            />
            <Card 
              title="How it works"
              content="Click the sun/moon icon in the top right corner to switch between light and dark themes."
            />
            <Card 
              title="Best Practices"
              content="Notice how we've separated concerns into different components and context files."
            />
          </div>
        </div>
        <ThemeToggle />
      </Layout>
    </>
  );
}

export default App;