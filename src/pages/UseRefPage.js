import CodeSnippet from '../components/ui/CodeSnippet';
import Heading from '../components/ui/Heading';

function UseRefPage() {
  return (
    <div className="w-1/2 flex flex-col gap-4">
      <Heading level={'h1'}>useRef</Heading>

      <p>
        Usually when we want a component to remember some information, we create
        a component state. In the case that we want to avoid the re-renders that
        updating the state would trigger, using refs are the solution.
      </p>
      <CodeSnippet>'useRef example'</CodeSnippet>
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
    </div>
  );
}

export default UseRefPage;
