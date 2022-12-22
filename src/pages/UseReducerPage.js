import { Link } from 'react-router-dom';

import CounterWithReducer from '../components/CounterWithReducer';
import CodeSnippet from '../components/ui/CodeSnippet';
import Heading from '../components/ui/Heading';

function UseReducerPage() {
  const initializeReducerExample = `
    import { useReducer } from 'react';

    function reducer(state, action) {
      // ...
    }

    function CounterWithReducer() {
      const [state, dispatch] = useReducer(reducer, { count: 0 });
      // ...
    }
  `;

  const reducerFunctionExample = `
    function reducer(state, action) {
      switch (action.type) {
        case 'increment': {
          return { count: state.count + 1 }
        }
        case 'decrement': {
          return { count: state.count - 1 }
        }
      }
    }
  `;

  return (
    <div className="w-1/2 flex flex-col gap-4">
      <Heading level={'h1'}>useReducer</Heading>
      <p>
        useReducer hook is an alternative to{' '}
        <Link className="text-blue-600 underline" to={'/use-state'}>
          useState
        </Link>{' '}
        hook to manage component state. Unlike useState, useReducer uses a
        reducer function to manage state updating logic according to dispatched
        action.
      </p>
      <CodeSnippet>{initializeReducerExample}</CodeSnippet>
      <p>
        The first argument useReducer accepts is the reducer function. This is
        the function that determines how the state gets updated. The reducer
        function must be a pure function that takes two arguments, the state and
        action, and it should return the next state.
      </p>
      <p>
        The second argument is called initialArg. This is the value the hook
        uses to calculate the initial state and can be of any type.
      </p>
      <p>
        The final init argument is optional. This initializer function is called
        with initialArg as a parameter to calculate the initial state. If
        initializer function is not provided, the initial state is set to
        initialArg.
      </p>
      <p>
        Similar to useState, useReducer returns an array with two values; the
        current state and the dispatch function which we use to update the
        state. Calling the dispatch function triggers a re-render.
      </p>
      <Heading level={'h3'}>The Reducer Function</Heading>
      <p>
        The reducer function is a regular JavaScript function that takes the
        state and action as arguments and returns the updated state according to
        the passed action. The function is commonly written with a switch
        statement to specify how to calculate the next state for each action
        case.
      </p>
      <CodeSnippet>{reducerFunctionExample}</CodeSnippet>
      <p>
        While action can be in any shape, commonly it is an object with type
        property that identifies the action.
      </p>
      <Heading level={'h3'}>The Dispatch Function</Heading>
      <p>
        The dispatch function is what lets us update the state when managing the
        state with useReducer. It takes the action as the only argument.
      </p>
      <p>
        When the dispatch function is called, React calls the reducer function
        with the current state and the action we have passed to the dispatch
        function, and then sets the next state to the return value of reducer
        function.
      </p>
      <p>
        The dispatch function will only update the state for the next render.
        Reading state in the same running code after updating it would give us
        the old state value.
      </p>
      <p className="text-3xl">
        state aynı değere setlenirse component ve childrenda re-render
        atlanacak. useState'e ve buraya ekle.
      </p>
      <p className="text-3xl">object ve array mutation ile ilgili kısmı ekle</p>
      <p className="text-3xl">
        useState counter örneği useReducer ile yazılabilir. mutation ile ilgili
        örnek eklenebilir.
      </p>
      <CounterWithReducer />
    </div>
  );
}

export default UseReducerPage;
