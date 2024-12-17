export function Card({ title, content }) {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg transition-colors duration-200 dark:bg-gray-800 bg-white p-6">
      <h2 className="text-xl font-bold mb-4 dark:text-white text-gray-800">{title}</h2>
      <p className="dark:text-gray-300 text-gray-600">{content}</p>
    </div>
  );
}