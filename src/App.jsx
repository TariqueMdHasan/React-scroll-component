
import React from "react";
import "./App.css";

const items = ["Card 1", "Card 2", "Card 3", "Card 4", "Card 5"];

const AutoScroll = () => {
  return (
    <div className="scroll-wrapper">
      <div className="scroll-left">
        {[...items, ...items, ...items].map((item, index) => (
          <div className="scroll-item" key={index}>
            {item}
          </div>
        ))}
      </div>
      <div className="scroll-right">
        {[...items, ...items].map((item, index) => (
          <div className="scroll-item" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoScroll;
