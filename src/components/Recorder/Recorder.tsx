import React from "react";
import "./Recorder.css";

const Recorder = () => {
  return (
    <div className="recorder">
      <button className="recorder-record">
        <span></span>
      </button>
      <div className="recorder-counter">00.00.00</div>
    </div>
  );
};

export default Recorder;
