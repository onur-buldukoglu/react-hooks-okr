import { useReducer } from 'react';

function CounterWithReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0, inputValue: 5 });

  function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return { ...state, count: state.count + 1 };
      case 'decrement':
        return { ...state, count: state.count - 1 };
      case 'set_input_value':
        return { ...state, inputValue: action.value };
      case 'add_amount':
        return {
          ...state,
          count: state.count + (Number(state.inputValue) || 0),
        };
      case 'set_amount':
        return { ...state, count: Number(state.inputValue) || 0 };
      default:
        return state;
    }
  }

  function handleCountIncrement() {
    dispatch({ type: 'increment' });
  }

  function handleCountDecrement() {
    dispatch({ type: 'decrement' });
  }

  function handleInputChange(value) {
    dispatch({ type: 'set_input_value', value: value });
  }

  function handleAmountAdd() {
    dispatch({ type: 'add_amount' });
  }

  function handleAmountSet() {
    dispatch({ type: 'set_amount' });
  }

  return (
    <div className="border w-fit rounded-md p-4 flex flex-col gap-4 items-center bg-white">
      <div className="self-start text-xs border-b w-full text-neutral-400 italic">
        <p>CounterWithReducer.js</p>
      </div>
      <div className="flex gap-2">
        <button className="" onClick={handleCountDecrement}>
          -
        </button>
        <span className="border rounded-md p-4">{state.count}</span>
        <button className="" onClick={handleCountIncrement}>
          +
        </button>
      </div>
      <div className="flex flex-col items-center gap-2">
        <input
          className="text-center border-gray-200 border rounded-md focus:outline-gray-200 w-16"
          value={state.inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <div className="flex gap-2">
          <button
            className="text-sm w-16 border border-gray-200 rounded-md"
            onClick={handleAmountAdd}
          >
            Add Amount
          </button>
          <button
            className="text-sm w-16 border border-gray-200 rounded-md"
            onClick={handleAmountSet}
          >
            Set Amount
          </button>
        </div>
      </div>
    </div>
  );
}

export default CounterWithReducer;
