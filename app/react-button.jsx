"use client";

import { useState } from "react";
import "./global.css";

export default function ReactButton() {
  const [reactions, setReactions] = useState(0);

  function handleClick() {
    setReactions(reactions + 1);
  }

  return (
    <button
      onClick={handleClick}
      className="bg-gray-700 rounded-full shadow-lg border-2 hover:bg-gray-800 p-2"
    >
      React({reactions})
    </button>
  );
}
