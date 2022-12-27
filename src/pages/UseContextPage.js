import FormWithContext from '../components/FormWithContext';
import PageWithLayout from '../components/PageWithLayout';
import CodeSnippet from '../components/ui/CodeSnippet';
import Heading from '../components/ui/Heading';

function UseContextPage() {
  const initializeExample = `
  import { useContext } from 'react';

  function MyComponent() {
    const theme = useContext(ThemeContext);
    // ...
  }
`;

  const providerExample = `
  import { createContext, useContext } from 'react';

  const ThemeContext = createContext(null);

  function MyPage() {
    return (
      <ThemeContext.Provider value="dark">
        <Form />
      </ThemeContext.Provider>
    );
  }
`;

  return (
    <PageWithLayout>
      <Heading level={'h2'}>useContext</Heading>
      <p>
        Context is what we use to pass information from a component to any
        component in the tree below it, without passing it through every single
        component as a prop. useContext hook lets us subscribe a component to
        context.
      </p>
      <CodeSnippet>{initializeExample}</CodeSnippet>
      <p>
        useContext hook takes context as the only parameter, and returns the
        context value. For React to find context value, that context needs to be
        created and the components that we want give access to context must be
        wrapped in a context provider. To determine the context value, React
        will then search for the closest context provider above that component.
        A provider in the same component will not be considered by React.
      </p>
      <CodeSnippet>{providerExample}</CodeSnippet>
      <p className="pt-4 border-t border-neutral-400 text-xs">
        Below is an example making use of useContext hook to pass data for text
        color without prop drilling. Code for the component can be found in the
        project files with the name given.
      </p>
      <FormWithContext />
    </PageWithLayout>
  );
}

export default UseContextPage;
