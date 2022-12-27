import PageWithLayout from '../components/PageWithLayout';
import CodeSnippet from '../components/ui/CodeSnippet';
import Heading from '../components/ui/Heading';

function UseImperativeHandlePage() {
  const initializeExample = `
  import { forwardRef, useImperativeHandle } from 'react';
  
  const MyInput = forwardRef(function MyInput(props, ref) {
    useImperativeHandle(ref, () => {
      return {
        // ... the methods we want to expose ...
      }
    } ,[]);
    
    // ...
  })
  `;

  const forwardRefExample = `
  import { forwardRef, useRef, useImperativeHandle } from 'react';
  
  const MyInput = forwardRef(function MyInput(props, ref) {
    const inputRef = useRef(null);

    useImperativeHandle(ref, () => {
      return {
        focus() {
          inputRef.current.focus();
        },
        scrollIntoView() {
          inputRef.current.scrollIntoView();
        },
      };
    }, []);

    return <input {...props} ref={inputRef} />;
  });
  `;

  return (
    <PageWithLayout>
      <Heading level={'h2'}>useImperativeHandle</Heading>
      <p>
        Parent components are given access to DOM nodes through forwardRef. For
        the cases that a custom value is needed to be exposed instead of the DOM
        node, useImperativeHandle can be used.
      </p>
      <CodeSnippet>{initializeExample}</CodeSnippet>
      <p>
        The first parameter useImperativeHandle hook takes is the ref we are
        overriding, the second parameter is a function that returns the new
        value we want to expose. The third parameter is the optinial dependency
        list which will be used to trigger re-renders when the values in the
        list change. The returned value from the hook is undefined.
      </p>
      <CodeSnippet>{forwardRefExample}</CodeSnippet>
      <p>
        The methods provided in the hook will be available to the parent
        component instead of the entire DOM node itself.
      </p>
      <p>
        refs should only be used for behaviours that can't be expressed as
        props, for example scrolling to a node, triggering an animation or
        selecting text. If the behaviour can be expressed as a prop, it is
        always better to avoid using refs and instead managing it with the help
        of Effects.
      </p>
    </PageWithLayout>
  );
}

export default UseImperativeHandlePage;
