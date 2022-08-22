import React from "react";
import "./TrainingOptions.css";

export default function TrainingOptions({ title }) {
  return (
    <>
      <a className="options" onClick={handleClick}>
        <h1>{title}</h1>
      </a>
    </>
  );
}
function handleClick(event) {
  console.log(event.currentTarget);
}
