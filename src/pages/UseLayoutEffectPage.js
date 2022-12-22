import CodeSnippet from '../components/ui/CodeSnippet';
import Heading from '../components/ui/Heading';

function UseLayoutEffectPage() {
  return (
    <div className="w-1/2 flex flex-col gap-4">
      <Heading level={'h1'}>useLayoutEffect</Heading>
      <p>
        useLayoutEffect is another version of useEffect that fires before the
        browser changes the screen. Because useLayoutEffect can lower the
        performance, useEffect should be prefered when possible.
      </p>
      <CodeSnippet>'useLayoutEffect example'</CodeSnippet>
      <p>
        useLayoutEffect hook takes the same parameters as the useEffect hook; a
        setup function that contains the Effect logic and a dependency list that
        contains all reactive values referenced in the setup function. The setup
        function will be run by React when the component is first added to the
        DOM. For the renders after the initial render, if any dependency in the
        dependency list changes, the setup function will run with new values. If
        a cleanup function is provided, it will be run before setup function is
        called with the new values. After the component is removed from the DOM,
        the cleanup function will be run one last time.
      </p>
      <CodeSnippet>'useEffect dependency list example'</CodeSnippet>
      <p>
        The dependency list is optional and contains all reactive values
        referenced in the setup code. These reactive values can be props, state
        and the variables and functions declared in the component body. If no
        dependency list is provided Effects will run for every re-render of the
        component. Also, if the Effect does not use any reactive values, the
        dependency list should be empty. In this case the Effect will only run
        once when the component mounts.
      </p>
      <CodeSnippet>'useEffect changing state from state example'</CodeSnippet>
      <p>
        Usually, a component's position and size are calculated by the browser
        from the JSX and CSS that the component returns. In some cases, a
        component may need to know its layout on the screen before browser
        paints the screen. For example, a component may need to be placed on the
        top or bottom of another component depending on the space available.
        useLayoutEffect helps us by rendering one extra time and measuring the
        component before the other re-render triggers.
      </p>
      <p>
        Because all updates from useLayoutEffect block the browser from
        repainting the screen, our app could become very slow in excessive use.
      </p>
    </div>
  );
}

export default UseLayoutEffectPage;
