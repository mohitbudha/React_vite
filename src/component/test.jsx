import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ExpenseTracker = () => {
  const [transactions, setTransactions] = useState(() => {
    try {
      const raw = localStorage.getItem("expense_tracker");
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });

  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem("expense_tracker", JSON.stringify(transactions));
    } catch (e) {}
  }, [transactions]);

  function addTransaction(e) {
    e.preventDefault();
    if (!text.trim() || !amount) return;
    const newTx = {
      id: Date.now(),
      text,
      amount: parseFloat(amount),
      type
    };
    setTransactions((prev) => [newTx, ...prev]);
    setText("");
    setAmount("");
  }

  function deleteTransaction(id) {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  }

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expense;

  const chartData = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        data: [income, expense],
        backgroundColor: ["#4ade80", "#f87171"]
      }
    ]
  };

  return (
    <div
      className={`min-h-screen flex justify-center items-center p-6 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Expense Tracker</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? "🌞 Light" : "🌙 Dark"}
          </button>
        </div>

        <h2 className="text-lg font-semibold mb-2">
          Balance: Rs. {balance}
        </h2>
        <div className="mb-4">
          <Pie data={chartData} />
        </div>

        <form onSubmit={addTransaction} className="flex flex-col gap-2 mb-4">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Description"
            className="border rounded-md px-3 py-2 focus:outline-none"
          />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Amount"
            className="border rounded-md px-3 py-2 focus:outline-none"
          />
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border rounded-md px-3 py-2"
          >
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white rounded-md px-4 py-2"
          >
            Add Transaction
          </button>
        </form>

        <h3 className="font-semibold mb-2">History</h3>
        <ul className="space-y-2 max-h-40 overflow-y-auto">
          {transactions.map((t) => (
            <li
              key={t.id}
              className="flex justify-between items-center border p-2 rounded-md"
            >
              <span>
                {t.text}{" "}
                <span
                  className={`${
                    t.type === "income" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {t.type === "income" ? "+" : "-"} Rs.{t.amount}
                </span>
              </span>
              <button
                onClick={() => deleteTransaction(t.id)}
                className="text-sm px-2 py-1 bg-red-400 text-white rounded-md hover:bg-red-500"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExpenseTracker;
