import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(5);

  function handleCountIncrement() {
    setCount((previousCount) => previousCount + 1);
  }

  function handleCountDecrement() {
    setCount((previousCount) => previousCount - 1);
  }

  function handleInputChange(value) {
    setInputValue(value);
  }

  function handleAmountAdd() {
    setCount((previousCount) => previousCount + (Number(inputValue) || 0));
  }

  function handleAmountSet() {
    setCount(Number(inputValue) || 0);
  }

  return (
    <div className="border w-fit rounded-md p-4 flex flex-col gap-4 items-center bg-white">
      <div className="self-start text-xs border-b w-full text-neutral-400 italic">
        <p>Counter.js</p>
      </div>
      <div className="flex gap-2">
        <button className="" onClick={handleCountDecrement}>
          -
        </button>
        <span className="border rounded-md p-4">{count}</span>
        <button className="" onClick={handleCountIncrement}>
          +
        </button>
      </div>
      <div className="flex flex-col items-center gap-2">
        <input
          className="text-center border-neutral-200 border rounded-md focus:outline-neutral-200 w-16"
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <div className="flex gap-2">
          <button
            className="text-sm w-16 border border-neutral-200 rounded-md"
            onClick={handleAmountAdd}
          >
            Add Amount
          </button>
          <button
            className="text-sm w-16 border border-neutral-200 rounded-md"
            onClick={handleAmountSet}
          >
            Set Amount
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
