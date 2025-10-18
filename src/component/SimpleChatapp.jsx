/*
Simple React Chat App

How to use:
1. Create a Vite or Create React App project and install Tailwind CSS (optional).
2. Drop this file as `App.jsx` (or paste into your main component).
3. Run the app. Messages persist in localStorage.

Features:
- Send messages (press Enter or click Send)
- Choose your name (defaults to "You")
- Messages are persisted to localStorage
- Simple responsive UI using Tailwind classes
- Placeholder where you can later add a backend/websocket
*/

import React, { useEffect, useRef, useState } from "react";

export default function App() {
  const [name, setName] = useState(() => {
    return localStorage.getItem("chat_name") || "You";
  });
  const [text, setText] = useState("");
  const [messages, setMessages] = useState(() => {
    try {
      const raw = localStorage.getItem("simple_chat_messages");
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });

  const listRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("simple_chat_messages", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem("chat_name", name);
  }, [name]);

  useEffect(() => {
    // scroll to bottom when messages change
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  function sendMessage() {
    const trimmed = text.trim();
    if (!trimmed) return;

    const newMsg = {
      id: Date.now(),
      sender: name || "You",
      text: trimmed,
      ts: new Date().toISOString(),
    };

    setMessages((m) => [...m, newMsg]);
    setText("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  function clearChat() {
    if (confirm("Clear chat history?")) {
      setMessages([]);
      localStorage.removeItem("simple_chat_messages");
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">C</div>
            <div>
              <div className="text-sm font-semibold text-gray-900 dark:text-gray-100">Simple Chat</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Local-only demo — messages saved in browser</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="px-2 py-1 rounded-md border bg-transparent text-sm text-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-700"
              placeholder="Your name"
            />
            <button onClick={clearChat} className="text-sm px-3 py-1 rounded-md bg-red-100 text-red-700 hover:bg-red-200">Clear</button>
          </div>
        </div>

        {/* Message list */}
        <div ref={listRef} className="flex-1 overflow-auto p-4 space-y-3 bg-gray-50 dark:bg-gray-900">
          {messages.length === 0 ? (
            <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8">No messages yet — start the conversation 👋</div>
          ) : (
            messages.map((m) => {
              const mine = m.sender === (name || "You");
              return (
                <div key={m.id} className={`flex ${mine ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[78%] px-4 py-2 rounded-2xl shadow-sm break-words ${mine ? "bg-indigo-600 text-white rounded-br-none" : "bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-bl-none border dark:border-gray-600"}`}>
                    <div className="text-xs font-semibold mb-1 opacity-90">{m.sender}</div>
                    <div className="whitespace-pre-wrap">{m.text}</div>
                    <div className="text-[10px] opacity-70 text-right mt-1">{new Date(m.ts).toLocaleString()}</div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Composer */}
        <div className="p-4 border-t dark:border-gray-700 bg-white dark:bg-gray-800">
          <div className="flex gap-3">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={`Message as ${name || "You"} — press Enter to send`}
              className="flex-1 px-3 py-2 resize-none rounded-xl border dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none"
              rows={2}
            />
            <div className="flex flex-col gap-2">
              <button onClick={sendMessage} className="px-4 py-2 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700">Send</button>
              <button onClick={() => setText("")} className="px-4 py-2 rounded-xl border dark:border-gray-700">Clear</button>
            </div>
          </div>
        </div>
      </div>

      {/* Notes: To add real-time use websockets (socket.io) or a backend. */}
    </div>
  );
}
