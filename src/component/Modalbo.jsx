import React, { useState } from "react";

const PopoverExample = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Toggle Popover
      </button>

      {open && (
        <>
          {/* Background Overlay */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          ></div>

          {/* Popover Box */}
          <div className="absolute top-12 left-0 bg-white shadow-lg p-4 rounded-md z-50">
            <p>This is a popover ✨</p>
          </div>
        </>
      )}
    </div>
  );
};

export default PopoverExample;
