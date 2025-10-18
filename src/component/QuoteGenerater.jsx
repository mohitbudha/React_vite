import { useState } from "react";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("Click button to get quote");
  const quotes = [
    "React is the library of JS",
    "Practice makes perfect",
    "Keep coding , Keep Growing",
    "save trees",
  ];

  const newQuote = () => {
    const i = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[i]);
  };
  return (
    <div className="p-4">
      <p className="text-lg">{quote}</p>
      <button
        onClick={newQuote}
        className="mt-2 bg-purple-600 text-white px-4 py-2 rounded-lg"
      >
        New Quote
      </button>
    </div>
  );
};

export default QuoteGenerator;

// Build a To-DO list (add and delete task)