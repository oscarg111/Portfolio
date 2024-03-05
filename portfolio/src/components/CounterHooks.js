import { useCounter } from "./useCounter";

export const CounterHooks = () => {
  const { increase, decrease, setZero, num } = useCounter(5);
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={setZero}>setZero</button>
    </div>
  );
};
