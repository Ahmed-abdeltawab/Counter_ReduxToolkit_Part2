import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByValue } from "./CounterSlice";

const Counter = () => {
  const { value } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("2");
  console.log(value);
  return (
    <div>
      <h1>{value}</h1>
      <button
        onClick={() => {
          dispatch(increment());
        }}
        style={{ marginRight: "10px", cursor: "pointer" }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
        style={{ cursor: "pointer" }}
      >
        Derement
      </button>
      <div className="incByVal">
        <button
          onClick={() => {
            dispatch(incrementByValue({ count: amount }));
          }}
          style={{ marginLeft: "10px", cursor: "pointer" }}
        >
          Increment by Amount
        </button>
        <input
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          type="text"
          placeholder="Amount"
          value={amount}
        />
      </div>
    </div>
  );
};

export default Counter;
