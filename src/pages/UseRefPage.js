import PageWithLayout from '../components/PageWithLayout';
import TextInputWithRef from '../components/TextInputWithRef';
import CodeSnippet from '../components/ui/CodeSnippet';
import Heading from '../components/ui/Heading';

function UseRefPage() {
  const initializeExample = `
  import { useRef } from 'react';

  function MyComponent() {
    const intervalRef = useRef(0);
    const inputRef = useRef(null);
    
    // ...
  }
  `;

  return (
    <PageWithLayout>
      <Heading level={'h2'}>useRef</Heading>
      <p>
        Usually when we want a component to remember some information, we create
        a component state. In the case that we want to avoid the re-renders that
        updating the state would trigger, using refs are the solution.
      </p>
      <CodeSnippet>{initializeExample}</CodeSnippet>
      <p>
        useRef hook takes an initial value as a parameter and returns a ref
        object. Initially 'current' property of the ref object will be set to
        the initial value we provided.
      </p>
      <p>
        ref.current can be set to something else later and unless it holds an
        object that is used for rendering, it is mutable. Changing ref object
        will not trigger any new renders.
      </p>
      <Heading level={'h3'}>Manipulating the DOM with a ref</Heading>
      <p>
        DOM nodes can be manipulated by declaring a ref object with the inital
        value of null and then passing this object to the node as the ref
        attribute. When this DOM node is created and put on the screen, current
        property of the ref object will be set to the node, and it will be
        accessible in our code. Current property will be set to null again when
        the node is removed from the screen.
      </p>
      <p className="pt-4 border-t border-neutral-400 text-xs">
        Below is an example making use of useRef hook to focus an input element
        on a click event. Code for the component can be found in the project
        files with the name given.
      </p>
      <TextInputWithRef />
    </PageWithLayout>
  );
}

export default UseRefPage;
