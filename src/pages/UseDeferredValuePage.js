import PageWithLayout from '../components/PageWithLayout';
import CodeSnippet from '../components/ui/CodeSnippet';
import Heading from '../components/ui/Heading';

function UseDeferredValuePage() {
  const initializeExample = `
  import { useDeferredValue, useState } from 'react';

  function SearchPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const deferredSearchQuery = useDeferredValue(searchQuery);
    // ...
  }
`;
  const passingPropExample = `
  import { useDeferredValue, useState } from 'react';

  const ResultList = memo(function ResultList({ searchQuery }))

  function SearchPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const deferredSearchQuery = useDeferredValue(searchQuery);
    
    return (
      <>
        <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} />
        <ResultList searchQuery={deferredSearchQuery} />
      </>
    );
  }
`;
  return (
    <PageWithLayout>
      <Heading level={'h2'}>useDeferredValue</Heading>
      <p>
        useDeferredValue lets us defer updating a part of the UI. By doing that,
        we can show stale content while fresh content is loading.
      </p>
      <CodeSnippet>{initializeExample}</CodeSnippet>
      <p>
        useDeferredValue takes the value to be deferred as the only parameter
        and returns the deferred value. Initially, the returned value will be
        the value we provided to the hook. On every update after that, React
        will first try to re-render with the old value and then try another
        re-render in background with the new value to make the returned value
        match the updated value.
      </p>
      <CodeSnippet>{passingPropExample}</CodeSnippet>
      <p>
        If the deferred value is being passed as a prop to a component, that
        component needs to be wrapped in memo in order the optimization to work.
        If not wrapped in memo, the component will not be able to skip the
        re-render in which React tries to keep the old value.
      </p>
    </PageWithLayout>
  );
}

export default UseDeferredValuePage;
