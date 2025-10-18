import React, { useState, useEffect } from "react";

const QuizRun = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("my_questions");
    if (saved) setQuestions(JSON.parse(saved));
  }, []);

  function handleAnswer(choice) {
    if (choice === questions[currentQ].correct) setScore((prev) => prev + 1);

    if (currentQ + 1 < questions.length) setCurrentQ(currentQ + 1);
    else alert(`Quiz Finished! Score: ${score + (choice === questions[currentQ].correct ? 1 : 0)}/${questions.length}`);
  }

  if (questions.length === 0) return <p className="p-6">No questions found. Add some first!</p>;

  const question = questions[currentQ];

  return (
    <div className="p-6">
      <h2 className="font-semibold mb-2">{question.question}</h2>
      {question.choices.map((c, i) => (
        <button
          key={i}
          onClick={() => handleAnswer(c)}
          className="block w-full border px-3 py-2 mb-2 hover:bg-blue-100"
        >
          {c}
        </button>
      ))}
      <p>Question {currentQ + 1} / {questions.length}</p>
      <p>Score: {score}</p>
    </div>
  );
};

export default QuizRun;
