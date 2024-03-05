import { useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [num, setNum] = useState(initialValue);

  const increase = () => {
    setNum(num + 1);
  };

  const decrease = () => {
    setNum(num - 1);
  };

  const setZero = () => {
    setNum(0);
  };
  return { increase, decrease, setZero, num };
};
