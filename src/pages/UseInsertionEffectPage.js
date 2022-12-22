import CodeSnippet from '../components/ui/CodeSnippet';
import Heading from '../components/ui/Heading';

function UseInsertionEffectPage() {
  return (
    <div className="w-1/2 flex flex-col gap-4">
      <Heading level={'h1'}>useInsertionEffect</Heading>
      <p>
        useInsertionEffect is another version of useEffect that fires before the
        any DOM mutations. useInsertionEffect is aimed at CSS-in-JS library
        authors. In other cases using useEffect and useLayoutEffect is
        recommended.
      </p>
      <CodeSnippet>'useInsertionEffect example'</CodeSnippet>
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
      <CodeSnippet>'useInsertionEffect dependency list example'</CodeSnippet>
      <p>
        useInsertionEffect helps solving the problem of runtime injection of
        &lt;style&gt; tags by making in injections before any DOM mutations.
      </p>
      <CodeSnippet>'useInsertionEffect implement example'</CodeSnippet>
      <p>
        Usually, a component's position and size are calculated by the browser
        from the JSX and CSS that the component returns. In some cases, a
        component may need to know its Insertion on the screen before browser
        paints the screen. For example, a component may need to be placed on the
        top or bottom of another component depending on the space available.
        useInsertionEffect helps us by rendering one extra time and measuring
        the component before the other re-render triggers.
      </p>
      <p>
        useLayoutEffect and useEffect can also be used to insert styles but it
        will be extremely slow because the browser will recalculate the every
        frame while rendering the component tree. useInsertionEffect ensure that
        &lt;style&gt; tags are already been inserted before other Effects run in
        the components.
      </p>
    </div>
  );
}

export default UseInsertionEffectPage;
