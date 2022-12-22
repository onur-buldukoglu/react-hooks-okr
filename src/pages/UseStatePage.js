import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import Counter from '../components/Counter';
import CodeSnippet from '../components/ui/CodeSnippet';
import Heading from '../components/ui/Heading';
import {
  initializeStateExample,
  setStateFunctionExample,
  updatingObjectExample,
} from '../libs/codeSnippets/useStateExamples';

function UseStatePage() {
  return (
    <div className="w-1/2 flex flex-col gap-4">
      <Heading level={'h1'}>useState</Heading>
      <p>
        State is what makes it possible for the component to remember
        information. Normally, variables declared in a function will not be
        available after the function exits, but declaring them as state
        variables lets React to preserve them.
      </p>
      <p>One way to declare a state variable is calling the useState hook.</p>
      <CodeSnippet>{initializeStateExample}</CodeSnippet>
      <p>
        useState hook accepts only one argument, the initial value for the
        state. This value can be of any type, but for functions there are
        special rules. The initializer function should be a pure function that
        takes no arguments, and returns a value of any type. When an initializer
        function is passed to useState hook, React will store the return value
        from the function as the initial state. It should be noted to avoid
        recreating the initial state on every render that we are not calling the
        initializer function here, we are passing the function itself.
      </p>
      <p>
        Return value for useState hook is an array with two items. The first is
        the current value of the state, initially the initial value we passed to
        the hook as the only argument, and the second is a set function to let
        us change the state's value. Calling this set function causes the
        component to re-render.
      </p>
      <Heading level={'h3'}>Updating State</Heading>
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {setStateFunctionExample}
      </SyntaxHighlighter>
      <p>
        The new state value can be given to the set function either directly or
        through a function which calculates it from the previous state. This
        function must accept only one argument, the pending state value, be pure
        and return the next state value.
      </p>
      <p>
        When the set function is called, state will only be updated at the next
        render. This means that if we read the state after updating it in the
        same running code, we will not get the updated state.
      </p>
      <Heading level={'h4'}>Updating Objects and Arrays</Heading>
      <p>
        If we are updating a state that is an object or an array, we should
        always replace it with a new one instead of mutating the existing one.
      </p>
      <SyntaxHighlighter language="javascript" style={a11yDark}>
        {updatingObjectExample}
      </SyntaxHighlighter>
      <p>
        For React to know that the state has changed, set function needs to be
        called. So when we change the state through mutation, React will not
        know that the state has changed and will not trigger a re-render. This
        will cause UI not to change as intended in our state change.
      </p>
      <p>
        Calling set function with the mutated object will also not work because
        React determines if the state has changed by making an Object.is
        comparison. For React not to ignore this update, we should call the set
        function with a new object.
      </p>
      <Counter />
    </div>
  );
}

export default UseStatePage;
