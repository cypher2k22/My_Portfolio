import React from "react";

export default function ButtonGlobal({ text, onClick, className }) {
  return (
    <button
      className={`buttonglobal text-uppercase border-0  position-relative p-3 text-bold ${className}`}
      onClick={onClick}
    >
      <span></span>
      {text}
    </button>
  );
}
