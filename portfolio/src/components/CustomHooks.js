import "../App.css";
import { useState } from "react";
import { useToggle } from "./useToggle";
import { CounterHooks } from "./CounterHooks";

export const CustomHooks = () => {
  const [isVisible, toggle] = useToggle();
  return (
    <div className="CustomHooks">
      <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <h1>Hello World</h1>}
      <CounterHooks />
    </div>
  );
};
