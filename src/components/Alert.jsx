import React from "react";

export default function Alert(props) {
  return (
    <div>
      <div role="alert">
        <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
          <p>Pokemon not found</p>
        </div>
      </div>
    </div>
  );
}
