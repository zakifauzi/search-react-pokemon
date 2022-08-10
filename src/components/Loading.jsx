import React from "react";

export default function Loading() {
  return (
    <div className="mt-2">
      <div
        className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
        role="status"
      ></div>
    </div>
  );
}
