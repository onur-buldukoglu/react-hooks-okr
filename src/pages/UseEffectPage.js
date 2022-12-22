import CodeSnippet from '../components/ui/CodeSnippet';
import Heading from '../components/ui/Heading';

function UseEffectPage() {
  return (
    <div className="w-1/2 flex flex-col gap-4">
      <Heading level={'h1'}>useEffect</Heading>
      <p>
        useEffect hook lets us manage effects in React components by
        synchronizing the component with external systems. Effects are what let
        us specify side effects that are caused by rendering, rather than by a
        event. While some actions like sending a message is an event, because it
        is caused by the user clicking a specific button, other actions like
        setting up a server connection is an Effect because it happens
        regardless of any interaction on the component. Effects run at the end
        of the rendering process after the screen updates.
      </p>
      <CodeSnippet>'useEffect example'</CodeSnippet>
      <p>
        useEffect takes two parameters, a setup function and a list of
        dependencies. The setup function contains our Effect's logic. It may
        also return a cleanup function. The setup function will be run by React
        when the component is first added to the DOM. For the renders after the
        initial render, if any dependency in the dependency list changes, the
        setup function will run with new values. If a cleanup function is
        provided, it will be run before setup function is called with the new
        values. After the component is removed from the DOM, the cleanup
        function will be run one last time.
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
      <Heading level={'h3'}>Avoiding Unnecessary Effects</Heading>
      <p>
        Effects should synchornize components with external systems that are not
        a part of React. In the cases like updating a state according to another
        state change should not require for Effects to be used. It is better not
        to put something that can be calculated from a state or prop value in a
        state and to make the calculation during rendering.
      </p>
      <CodeSnippet>'useEffect changing state from state example'</CodeSnippet>
      <p>
        If we want to reset a component's state when a prop change, using an
        Effect could seem like a good option, but it is an inefficient solution
        because the component and all of its children will render before the
        Effect fires, and then render all again. Instead we can differentiate
        same components from each other by passing explicit keys. React would
        normally preserve state if same components are rendered in the same
        spot. Using keys will tell React that these components should be treated
        as different components and not to preserve the state.
      </p>
      <CodeSnippet>'useEffect reset state with key example'</CodeSnippet>
    </div>
  );
}

export default UseEffectPage;
