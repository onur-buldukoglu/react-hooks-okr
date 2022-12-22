import CodeSnippet from '../components/ui/CodeSnippet';
import Heading from '../components/ui/Heading';

function UseContextPage() {
  return (
    <div className="w-1/2 flex flex-col gap-4">
      <Heading level={'h1'}>useContext</Heading>
      <p>
        Context is what we use to pass information from a component to any
        component in the tree below it, without passing it through every single
        component as a prop. useContext hook lets us subscribe a component to
        context.
      </p>
      <CodeSnippet>'useContext example'</CodeSnippet>
      <p>
        useContext hook takes context as the only parameter, and returns the
        context value. For React to find context value, that context needs to be
        created and the components that we want give access to context must be
        wrapped in a context provider. To determine the context value, React
        will then search for the closest context provider above that component.
        A provider in the same component will not be considered by React.
      </p>
      <CodeSnippet>'useContext create and provider example'</CodeSnippet>
      <p></p>
    </div>
  );
}

export default UseContextPage;
