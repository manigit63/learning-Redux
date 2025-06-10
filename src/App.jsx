import React, { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

import {
  decrement,
  increment,
  reset,
  incrementByAmount,
} from "./features/counter/counterSlice";

const App = () => {
  const [amount, setAmount] = useState(0);

  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  const handleIncrementClick = () => {
    dispatch(increment());
  };
  const handleDecrementClick = () => {
    dispatch(decrement());
  };
  const handleResetClick = () => {
    dispatch(reset());
  };
  const handleAmountClick = () => {
    dispatch(incrementByAmount(amount));
  };
  return (
    <div>
      <button onClick={handleIncrementClick}>+</button>
      <p>Count : {count}</p>
      <button onClick={handleDecrementClick}>-</button>
      <br />
      <br />
      <button onClick={handleResetClick}>Reset</button>
      <br />
      <br />
      <input
        type="number"
        placeholder="enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleAmountClick}>inc by Amount</button>
    </div>
  );
};

export default App;
