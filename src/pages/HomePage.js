import Heading from '../components/ui/Heading';

function HomePage() {
  return (
    <div className="border rounded p-4 m-8 flex flex-col gap-4 w-1/2">
      <Heading level={'h1'}>React Hooks</Heading>
      <div className="flex flex-col gap-2">
        <Heading level={'h4'}>What are hooks?</Heading>
        <p>
          Hooks are functions that allow us to use React features, such as state
          and lifecycle methods, in functional components. While class
          components were always able to use these features, they have some
          downsides. They need more code than functional components, like a
          constructor to initialize state and to bind methods, and with
          different lifecycle methods component can grow even bigger and the
          logic spread over these different methods can be hard to follow. With
          the introduction of hooks in React 16.8, functional components can use
          the same React features in a more readable and leaner way.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <Heading level={'h4'}>Rules of Hooks</Heading>
        <p>There are two rules to be followed when using React hooks.</p>
        <div>
          <Heading level={'h3'}>
            Hooks should only be called at the top level
          </Heading>
          <p>
            React implements hooks as a queue of nodes with every node having a
            reference to the next one. This means React relies on the order in
            which hooks are called to be able to preserve the state of hooks
            between calls. Not calling hooks in loops, conditions or nested
            functions will ensure React can keep this order to know what piece
            of data corresponds to which hook call, therefore avoiding bugs.
          </p>
        </div>
        <div>
          <Heading level={'h3'}>
            Hooks should only be called from React functions
          </Heading>
          <p>
            To ensure that all stateful logic in a component is clearly visible
            from its source code, hooks should always be called in either a
            React function component or a custom hook we can write ourselves,
            and never should be called in a regular JavaScript function.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
