"use client";
import { useEffect } from "react";

function Error({ error, reset }) {
  useEffect(() => {}, [error]);
  return (
    <div className="text-center mt-10">
      <h1> Something went wrong</h1>
      <button className="hover:text-amber-600" onClick={() => reset()}>
        Try Again
      </button>
    </div>
  );
}

export default Error;
