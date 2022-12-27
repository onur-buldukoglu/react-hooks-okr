import PageWithLayout from '../components/PageWithLayout';
import CodeSnippet from '../components/ui/CodeSnippet';
import Heading from '../components/ui/Heading';

function UseInsertionEffectPage() {
  const initializeExample = `
  import { useInsertionEffect } from 'react';
  
  function useCSS(rule) {
    useInsertionEffect(() => {
      // <style> tags are inserted here
    });
  }
  `;

  const dependencyListExample = `
    // Effect will run for every render
    useEffect(() => {
      insertTags();
    });

    // Effect will run for the first render only
    useEffect(() => {
      insertTags();
    }, []);

    // Effect will run only when the dependency changes
    useEffect(() => {
      insertTags();
    }, [insertTags]);
  `;
  return (
    <PageWithLayout>
      <Heading level={'h2'}>useInsertionEffect</Heading>
      <p>
        useInsertionEffect is another version of useEffect that fires before the
        any DOM mutations. useInsertionEffect is aimed at CSS-in-JS library
        authors. In other cases using useEffect and useLayoutEffect is
        recommended.
      </p>
      <CodeSnippet>{initializeExample}</CodeSnippet>
      <p>
        useInsertionEffect hook takes the same parameters as the useEffect hook;
        a setup function that contains the Effect logic and a dependency list
        that contains all reactive values referenced in the setup function. The
        setup function will be run by React when the component is first added to
        the DOM. For the renders after the initial render, if any dependency in
        the dependency list changes, the setup function will run with new
        values. If a cleanup function is provided, it will be run before setup
        function is called with the new values. After the component is removed
        from the DOM, the cleanup function will be run one last time.
      </p>
      <CodeSnippet>{dependencyListExample}</CodeSnippet>
      <p>
        useInsertionEffect helps solving the problem of runtime injection of
        &lt;style&gt; tags by making the injections before any DOM mutations.
      </p>
      <p>
        useLayoutEffect and useEffect can also be used to insert styles but it
        will be extremely slow because the browser will recalculate the every
        frame while rendering the component tree. useInsertionEffect ensure that
        &lt;style&gt; tags are already been inserted before other Effects run in
        the components.
      </p>
    </PageWithLayout>
  );
}

export default UseInsertionEffectPage;
