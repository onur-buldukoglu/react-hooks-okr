import CodeSnippet from '../components/ui/CodeSnippet';
import Heading from '../components/ui/Heading';

function UseTransitionPage() {
  return (
    <div className="w-1/2 flex flex-col gap-4">
      <Heading level={'h1'}>useTransition</Heading>
      <p>useTransition lets us update the state without blocking the UI.</p>
      <CodeSnippet>'useTransition example'</CodeSnippet>
      <p>
        useTransition takes no parameters and return an array with two items.
        The first one is isPending flag, which tells if there is a pending
        transition. The second is the startTransition function which lets us
        mark a state update as a transition.
      </p>
      <CodeSnippet>'useTransition marking state example'</CodeSnippet>
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
        <CodeSnippet>'pending visual state example'</CodeSnippet>
        isPending will return true while the marked state update is in
        transition, and will return false when the update is done.
      </p>
    </div>
  );
}

export default UseTransitionPage;
