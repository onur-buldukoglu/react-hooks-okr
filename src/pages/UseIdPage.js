import PageWithLayout from '../components/PageWithLayout';
import TextInputWithId from '../components/TextInputWithId';
import CodeSnippet from '../components/ui/CodeSnippet';
import Heading from '../components/ui/Heading';

function UseIdPage() {
  const initializeExample = `
  import { useId } from 'react';

  function PasswordField() {
    const passwordId = useId();
    
    // ...
  }
  `;

  const accessibilityAttributeExample = `
  import { useId } from 'react';

  function PasswordField() {
    const passwordId = useId();
    return (
      <>
        <label>
          Password:
          <input
            type="password"
            aria-describedby={passwordHintId}
          />
        </label>
        <p id={passwordHintId}>
          The password should contain at least 18 characters
        </p>
      </>
    )
  }
  `;

  const suffixExample = `
  import { useId } from 'react';

  function Form() {
    const id = useId();

    return (
      <form>
        <label htmlFor={id + '-firstName'}>First Name:</label>
        <input id={id + '-firstName'} type="text" />
        
        <label htmlFor={id + '-lastName'}>Last Name:</label>
        <input id={id + '-lastName'} type="text" />
      </form>
    );
  }
  `;

  return (
    <PageWithLayout>
      <Heading level={'h2'}>useId</Heading>
      <p>
        useId is used to generate unique IDs to be passed to accessibility
        attributes.
      </p>
      <CodeSnippet>{initializeExample}</CodeSnippet>
      <p>
        useId does not take any parameters and returns a unique ID string
        associated with the particular useID call in the particular component.
      </p>
      <Heading level={'h3'}>
        Generating Unique IDs for Accessibility Attributes
      </Heading>
      <p>
        To make two tags related to each other, for example an input and a
        paragraph tag, HTML accessibility attributes like 'aria-describedby' are
        used. Using hardcoded values for these attributes may be a problem
        because more than one of the same component may be rendered on a page.
        For such cases using useId hook to generate a unique ID for each
        component is a better practice.
      </p>
      <CodeSnippet>{accessibilityAttributeExample}</CodeSnippet>
      <p>
        In the case that we need to give IDs to multiple related elements, it is
        better to use suffixes with the same unique ID generated from one useId
        hook, rather than generating unique IDs for each elements.
      </p>
      <CodeSnippet>{suffixExample}</CodeSnippet>
      <p className="pt-4 border-t border-neutral-400 text-xs">
        Below is an example making use of useId hook. Code for the component can
        be found in the project files with the name given.
      </p>
      <div className="w-fit flex flex-col gap-4 border rounded p-4 bg-white">
        <div className="text-xs border-b w-full text-neutral-400 italic">
          <p>FormWithContext.js</p>
        </div>
        <TextInputWithId />
        <TextInputWithId />
      </div>
    </PageWithLayout>
  );
}

export default UseIdPage;
