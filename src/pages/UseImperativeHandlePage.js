import CodeSnippet from '../components/ui/CodeSnippet';
import Heading from '../components/ui/Heading';

function UseImperativeHandlePage() {
  return (
    <div className="w-1/2 flex flex-col gap-4">
      <Heading level={'h1'}>useImperativeHandle</Heading>
      <p className="text-6xl">TODO</p>
      <CodeSnippet>'useImperativeHandle example'</CodeSnippet>
      <p>
        useRef hook takes an initial value as a parameter and returns a ref
        object. Initially 'current' property of the ref object will be set to
        the initial value we provided.
      </p>
      <CodeSnippet>'useRef create and provider example'</CodeSnippet>
      <p>
        ref.current can be set to something else later and unless it holds an
        object that is used for rendering, it is mutable. Changing ref object
        will not trigger any new renders.
      </p>
    </div>
  );
}

export default UseImperativeHandlePage;
