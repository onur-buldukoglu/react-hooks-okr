import PageWithLayout from '../components/PageWithLayout';
import CodeSnippet from '../components/ui/CodeSnippet';
import Heading from '../components/ui/Heading';

function UseTransitionPage() {
  const initializeExample = `
    import { useTransition } from 'react';

    function TabContainer() {
      const [isPending, startTransition] = useTransition();
      // ...
    }
  `;

  const markingStateExample = `
  import { useTransition, useState } from 'react';

  function TabContainer() {
    const [isPending, startTransition] = useTransition();
    const [tab, setTab] = useState('about');

    function selectTab(nextTab) {
      startTransition(() => {
        setTab(nextTab);
      });
    }
    // ...
  }
`;

  const pendingStateExample = `
import { useTransition } from 'react';

function TabButton({isActive, onClick, children}) {
  const [isPending, startTransition] = useTransition();
  // ...

  if (isPending) {
    return <p className="pending">{children}</p>
  }
}
`;

  return (
    <PageWithLayout>
      <Heading level={'h2'}>useTransition</Heading>
      <p>useTransition lets us update the state without blocking the UI.</p>
      <CodeSnippet>{initializeExample}</CodeSnippet>
      <p>
        useTransition takes no parameters and return an array with two items.
        The first one is isPending flag, which tells if there is a pending
        transition. The second is the startTransition function which lets us
        mark a state update as a transition.
      </p>
      <CodeSnippet>{markingStateExample}</CodeSnippet>
      <p>
        Marking a state update as a transition means that the UI is still
        responsive before a re-render is completed. This will let users on slow
        devices to change their mind and take a state changing action without
        waiting for their previous action's result.
      </p>
      <Heading level={'h3'}>Pending State During the Transition</Heading>
      <p>
        isPending boolean value returned from useTransition can be used to
        display a pending visual state.
        <CodeSnippet>{pendingStateExample}</CodeSnippet>
        isPending will return true while the marked state update is in
        transition, and will return false when the update is done.
      </p>
    </PageWithLayout>
  );
}

export default UseTransitionPage;
