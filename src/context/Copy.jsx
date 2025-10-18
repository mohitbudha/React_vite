import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className="h-screen flex flex-col items-center justify-center transition-colors duration-500"
      style={{
        backgroundColor: theme === "dark" ? "#111827" : "#ffffff",
        color: theme === "dark" ? "#ffffff" : "#111827",
      }}
    >
      <h1 className="text-3xl font-bold mb-6">
        {theme === "light" ? "Light Mode" : "Dark Mode"}
      </h1>
      <button
        onClick={toggleTheme}
        className="px-6 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium shadow-md transition-all duration-300"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default App;