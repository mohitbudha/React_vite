import React, { useState, useEffect } from 'react';

// Simple To‑Do list component
// Features: add tasks, delete tasks, persist in localStorage

export default function ToDoList() {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState(() => {
    try {
      const raw = localStorage.getItem('todo_tasks');
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('todo_tasks', JSON.stringify(tasks));
    } catch (e) {
      // ignore
    }
  }, [tasks]);

  function addTask(e) {
    e.preventDefault();
    const text = taskText.trim();
    if (!text) return;
    const newTask = { id: Date.now(), text };
    setTasks(prev => [newTask, ...prev]);
    setTaskText('');
  }

  function deleteTask(id) {
    setTasks(prev => prev.filter(t => t.id !== id));
  }

  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white shadow-md rounded-2xl p-6">
        <h1 className="text-2xl font-semibold mb-4">To‑Do List</h1>

        <form onSubmit={addTask} className="flex gap-2 mb-4">
          <input
            value={taskText}
            onChange={e => setTaskText(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 border rounded-md px-3 py-2 focus:outline-none"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-sky-500 text-white hover:bg-sky-600"
          >
            Add
          </button>
        </form>

        {tasks.length === 0 ? (
          <p className="text-gray-500">No tasks yet — add one above </p>
        ) : (
          <ul className="space-y-2">
            {tasks.map(task => (
              <li
                key={task.id}
                className="flex items-center justify-between border p-3 rounded-md"
              >
                <span>{task.text}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-sm px-2 py-1 rounded-md border hover:bg-red-50"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-4 text-xs text-gray-400">
          Tasks are stored in your browser (localStorage).
        </div>
      </div>
    </div>
  );
}
