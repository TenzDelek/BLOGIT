"use client";
import React, { useState } from "react";

const Upvote = () => {
  const [count, setcount] = useState(0);
  return (
    <div className=" space-y-3  items-center">
      <button
        onClick={() => setcount(count + 1)}
        className=" rounded-md bg-blue-500 text-white px-2 py-1 text-sm mt-10"
      >
        Upvote
      </button>
      <div>{count}</div>
    </div>
  );
};

export default Upvote;
