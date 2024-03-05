// custom hooks must start with use, and must be called within a react component
// hook is function allowing you to abstract logic in react
import { useState } from "react";

export const useToggle = (initialValue = false) => {
  const [state, setState] = useState(initialValue);

  const toggle = () => {
    setState((prev) => !prev);
  };
  return [state, toggle];
};
