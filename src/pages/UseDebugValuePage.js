import PageWithLayout from '../components/PageWithLayout';
import CodeSnippet from '../components/ui/CodeSnippet';
import Heading from '../components/ui/Heading';
import useExampleWithDebugValue from '../libs/hooks/useExampleWithDebugValue';
import useExampleWithoutDebugValue from '../libs/hooks/useExampleWithoutDebugValue';

function UseDebugValuePage() {
  const initializeExample = `
  import { useDebugValue } from 'react';

  function useOnlineStatus() {
    // ...
    useDebugValue(isOnline ? 'Online' : 'Offline');
    // ...
  }
  `;

  useExampleWithDebugValue();
  useExampleWithoutDebugValue();

  return (
    <PageWithLayout>
      <Heading level={'h2'}>useDebugValue</Heading>
      <p>
        React has a useful tool for debugging, called React Developer Tools. One
        of the things we can see in this tool is which hooks are used in a
        component. useDebugValue hook lets us add a label to a custom hook to be
        displayed in React Developer Tools.
      </p>
      <CodeSnippet>{initializeExample}</CodeSnippet>
      <p>
        useDebugValue takes the value we want to display in React Developer
        Tools as the first parameter. It also takes an optional format
        parameter, which is a formatting function that will be used when the
        component is inspected in React Developer Tools. The formatting function
        will take the value and return a formatted value when called.
        useDebugValue hook does not return anything.
      </p>
      <p className="pt-4 border-t border-neutral-200 text-xs">
        Open React Developer Tools on this page to see an example for
        useDebugValue
      </p>
    </PageWithLayout>
  );
}

export default UseDebugValuePage;
