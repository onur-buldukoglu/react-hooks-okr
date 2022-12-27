import PageWithLayout from '../components/PageWithLayout';
import CodeSnippet from '../components/ui/CodeSnippet';
import Heading from '../components/ui/Heading';

function UseCallbackPage() {
  const initializeExample = `
  import { useCallback } from 'react';

  function TodoList({ todos }) {
    const addTodo = useCallback(
      (newTodo) => addNewTodo(newTodo),
      [addNewTodo]
    );
    // ...
  }
`;
  return (
    <PageWithLayout>
      <Heading level={'h2'}>useCallback</Heading>
      <p>
        We can cache a function definition between re-renders with useCallback.
      </p>
      <CodeSnippet>{initializeExample}</CodeSnippet>
      <p>
        We can pass two parameters to useCallback. First one is the function
        definition we want to cache between re-renders, and the second is a list
        of dependencies that includes every value we used in the function.
      </p>
      <p>
        Initially, the function returned from the hook is the function we pass.
        On every render after that, React with compare every value in the
        dependecy list, using Object.is, with their respective values from the
        previous render. If none of the values have changed, useCallback will
        return the memoized function. Otherwise, it will return the function we
        passed on this render.
      </p>
      <p>
        useCallback should only be used for performance optimization. It helps
        skipping unnecessary function declarations and re-renders.
      </p>
      <Heading level={'h3'}>Skipping Component Re-renders</Heading>
      <p>
        When a component re-renders, all of its children also re-render by
        default. Memo lets us skip these re-renders if the components props are
        the same. In the case of props being functions, even if the same
        function is created and passed as a prop, memoized component will still
        re-render. This is because in JavaScript, declaring a function will
        always create a different function.
      </p>
      <p>
        By wrapping the function we pass as the prop in useCallback, we ensure
        that it will not be recreated as long as the dependencies do not change.
        Because the prop value has not changed, the memoized component will not
        re-render, even in the case of value being a function.
      </p>
    </PageWithLayout>
  );
}

export default UseCallbackPage;
