import CodeSnippet from '../components/ui/CodeSnippet';
import Heading from '../components/ui/Heading';

function UseIdPage() {
  return (
    <div className="w-1/2 flex flex-col gap-4">
      <Heading level={'h1'}>useId</Heading>
      <p>
        useId is used to generate unique IDs to be passed to accessibility
        attributes.
      </p>
      <CodeSnippet>'useId example'</CodeSnippet>
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
        used.
      </p>
      <CodeSnippet>
        'useId accessibility attributes hardcoded example'
      </CodeSnippet>
      <p>
        The problem with using hardcoded values for these attributes is that
        more than one of the same component may be rendered on a page. For such
        cases using useId hook to generate a unique ID for each component is a
        better practice.
      </p>
      <CodeSnippet>'useId accessibility attributes example'</CodeSnippet>
      <p>
        In the case that we need to give IDs to multiple related elements, it is
        better to use suffixes with the same unique ID generated from one useId
        hook, rather than generating unique IDs for each elements.
      </p>
      <CodeSnippet>'useId suffix example'</CodeSnippet>
    </div>
  );
}

export default UseIdPage;
