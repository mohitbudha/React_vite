import React, { useState, useEffect } from "react";

const AddQuestions = () => {
  const [questions, setQuestions] = useState(() => {
    const saved = localStorage.getItem("my_questions");
    return saved ? JSON.parse(saved) : [];
  });
  const [newQ, setNewQ] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correct, setCorrect] = useState("");

  useEffect(() => {
    localStorage.setItem("my_questions", JSON.stringify(questions));
  }, [questions]);

  function addQuestion(e) {
    e.preventDefault();
    if (!newQ || !correct) return;

    const q = { question: newQ, choices: options, correct };
    setQuestions((prev) => [...prev, q]);

    setNewQ("");
    setOptions(["", "", "", ""]);
    setCorrect("");
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Add Quiz Questions</h1>
      <form onSubmit={addQuestion} className="space-y-3 mb-4">
        <input
          value={newQ}
          onChange={(e) => setNewQ(e.target.value)}
          placeholder="Enter Question"
          className="w-full border px-2 py-1"
        />
        {options.map((opt, idx) => (
          <input
            key={idx}
            value={opt}
            onChange={(e) =>
              setOptions((prev) => prev.map((o, i) => (i === idx ? e.target.value : o)))
            }
            placeholder={`Option ${idx + 1}`}
            className="w-full border px-2 py-1"
          />
        ))}
        <input
          value={correct}
          onChange={(e) => setCorrect(e.target.value)}
          placeholder="Correct Answer"
          className="w-full border px-2 py-1"
        />
        <button type="submit" className="bg-green-500 text-white px-3 py-1 rounded">
          Add Question
        </button>
      </form>

      <h2 className="font-semibold mb-2">Saved Questions: {questions.length}</h2>
      <ul className="space-y-1">
        {questions.map((q, i) => (
          <li key={i} className="border p-2 rounded-md">
            {q.question} (Correct: {q.correct})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddQuestions;
