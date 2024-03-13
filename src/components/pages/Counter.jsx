import React, { useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState(1);

  const increment = (event) => {
    event.preventDefault();
    setCounter(Number(counter + value));
    setValue(1);
  };
  const decrement = (event) => {
    event.preventDefault();
    setCounter(Number(counter - value));
    setValue(1);
  };

  const inputChangeHandler = (event) => {
    event.target.value.replace(/\D/g, "");
  };

  return (
    <div className="counter_style">
      <h1 className="text-2xl">Increase/Decrease</h1>
      <input
        className="text-black my_input"
        type="text"
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
        placeholder="Enter a number"
        onInput={inputChangeHandler}
      />
      <button
        type="button"
        className="btn_increment"
        onClick={increment}
      >
        +
      </button>
      <button
        type="button"
        className="btn_decrement"
        onClick={decrement}
      >
        -
      </button>

      <h2 className="text-3xl">
        Total:
        {counter}
      </h2>
    </div>
  );
}

export default Counter;
