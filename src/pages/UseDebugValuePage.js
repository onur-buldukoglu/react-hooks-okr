import CodeSnippet from '../components/ui/CodeSnippet';
import Heading from '../components/ui/Heading';

function UseDebugValuePage() {
  return (
    <div className="w-1/2 flex flex-col gap-4">
      <Heading level={'h1'}>useDebugValue</Heading>
      <p>
        React has a useful tool for debugging, called React Developer Tools. One
        of the things we can see in this tool is which hooks are used in a
        component. useDebugValue hook lets us add a label to a custom hook to be
        displayed in React Developer Tools.
      </p>
      <CodeSnippet>'useDebugValue example'</CodeSnippet>
      <p>
        useDebugValue takes the value we want to display in React Developer
        Tools as the first parameter. It also takes an optional format
        parameter, which is a formatting function that will be used when the
        component is inspected in React Developer Tools. The formatting function
        will take the value and return a formatted value when called.
        useDebugValue hook does not return anything.
      </p>
      <CodeSnippet>'useDebugValue add label example'</CodeSnippet>
      <p>
        Calling useDebugValue hook in a custom hook will add the label to that
        hook in React Developer Tools.
      </p>
    </div>
  );
}

export default UseDebugValuePage;
