import { useState } from "react";
import React from "react";
import TrainingOptions from "./components/trainingoptions/TrainingOptions";
import "./App.css";

function App() {
  return (
    <>
      <div className="wrapper">
        <TrainingOptions title="Audio" />
        <TrainingOptions title="Video" />
        <TrainingOptions title="Time Yourself" />
      </div>
    </>
  );
}

export default App;
