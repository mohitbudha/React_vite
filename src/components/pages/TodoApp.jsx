import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (input.trim() === "") return;
    const newTask = { id: Date.now(), text: input, completed: false };
    setTasks([...tasks, newTask]);
    setInput("");
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const totalTasks = tasks.length;
  const activeTasks = tasks.filter((t) => !t.completed).length;
  const completedTasks = tasks.filter((t) => t.completed).length;

  return (
    <div className="flex flex-col items-center p-6 max-w-md mx-auto bg-gray-100 rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4">My Tasks</h1>

      {/* Input */}
      <div className="flex w-full mb-4">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 p-2 rounded-l-lg border border-gray-300 outline-none"
        />
        <button
          onClick={addTask}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg"
        >
          Add
        </button>
      </div>

      {/* Filter Buttons */}
      <div className="flex space-x-3 mb-4">
        <button
          onClick={() => setFilter("all")}
          className={`px-3 py-1 rounded-lg ${
            filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("active")}
          className={`px-3 py-1 rounded-lg ${
            filter === "active" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`px-3 py-1 rounded-lg ${
            filter === "completed" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Completed
        </button>
      </div>

      {/* Task List */}
      <ul className="w-full">
        {filteredTasks.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks found</p>
        ) : (
          filteredTasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center bg-white p-2 mb-2 rounded-lg shadow"
            >
              <div className="flex items-center space-x-3">
                {/* Radio button */}
                <input
                  type="radio"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                  className="w-5 h-5 accent-blue-500 cursor-pointer"
                />
                <span
                  className={`cursor-pointer ${
                    task.completed ? "line-through text-gray-400" : ""
                  }`}
                  onClick={() => toggleComplete(task.id)}
                >
                  {task.text}
                </span>
              </div>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500 font-semibold"
              >
                ❌
              </button>
            </li>
          ))
        )}
      </ul>

      {/* Counter */}
      <div className="mt-4 w-full bg-white rounded-lg shadow p-3 flex justify-around text-sm font-semibold">
        <p>📋 Total: {totalTasks}</p>
        <p>🟢 Active: {activeTasks}</p>
        <p>✅ Completed: {completedTasks}</p>
      </div>
    </div>
  );
};

export default TodoList;
