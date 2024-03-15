import { useState } from "react";

export const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter1, counter2, counter3 } = state;

  const handlePlus = () => {
    setState({ ...state, counter1: counter1 + 1 });
  };

  const handleMinus = () => {
    setState({ ...state, counter1: counter1 - 1 });
  };

  return (
    <>
      <h1>Counter: {counter1}</h1>
      <h1>Counter2: {counter2}</h1>
      <h1>Counter3: {counter3}</h1>
      <hr />
      <button className="btn btn-primary" onClick={() => handlePlus()}>
        +1
      </button>
      <button className="btn btn-secondary" onClick={() => handleMinus()}>
        -1
      </button>
    </>
  );
};
