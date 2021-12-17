import React from "react";
import { useState } from "react";
import { evaluate } from "mathjs";
import "./App.css";

const App = () => {
  const theButtons = [
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "*",
    "7",
    "8",
    "9",
    "-",
    ".",
    "0",
    "C",
    "=",
  ];

  const [screen, setScreen] = useState("");

  // const config = {};
  // const math = create(all, config);

  const theButtonsDoThings = (button) => {
    if (button === "=") {
      setScreen(evaluate(screen));
    } else if (button === "C") {
      setScreen("");
    } else {
      setScreen(screen + button);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="calc">
          <div className="screen">{screen}</div>
          <div className="buttons">
            {theButtons.map((button, index) => {
              return (
                <h2
                  className="singleButton"
                  // In order to pass a value as a parameter through the onClick handler we pass in an arrow function which returns a call to the theButtonsDoThings function.
                  onClick={() => {
                    theButtonsDoThings(button);
                  }}
                  key={index}
                >
                  {button}
                </h2>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
