import PageWithLayout from '../components/PageWithLayout';
import CodeSnippet from '../components/ui/CodeSnippet';
import Heading from '../components/ui/Heading';

function UseSyncExternalStorePage() {
  const initializeExample = `
  import { useSyncExternalStore } from 'react';

  function TodosApp() {
    const todos = useSyncExternalStore(todosStore.subscribe, todosStore.getSnapshot);
    // ...
  }
  `;

  const subscribeFnExample = `
  function subscribe(callback) {
    window.addEventListener('online', callback);
    window.addEventListener('offline', callback);
    return () => {
      window.removeEventListener('online', callback);
      window.removeEventListener('offline', callback);
    };
  }
  `;

  const getSnapshotExample = `
  function getSnapshot() {
    return navigator.onLine;
  }
  `;

  const subscribeToBrowserAPIExample = `
  import { useSyncExternalStore } from 'react';

  function ChatIndicator() {
    const isOnline = useSyncExternalStore(subscribe,getSnapshot);
  }
  `;

  const customHookExample = `
  import { useSyncExternalStore } from 'react';

  export function useOnlineStatus() {
    const isOnline = useSyncExternalStore(subscribe, getSnapshot);
    return isOnline;
  }

  function getSnapshot() {
    return navigator.onLine;
  }

  function subscribe(callback) {
    window.addEventListener('online', callback);
    window.addEventListener('offline', callback);
    return () => {
      window.removeEventListener('online', callback);
      window.removeEventListener('offline', callback);
    };
  }
  `;

  return (
    <PageWithLayout>
      <Heading level={'h2'}>useSyncExternalStorePage</Heading>
      <p>
        UseSyncExternalStore hook lets us read data from a store outside of
        React. This outside store can be a third-party state management library
        or a browser API that expose a mutable value and events to subscribe to
        that value's changes.
      </p>
      <CodeSnippet>{initializeExample}</CodeSnippet>
      <p>
        UseSyncExternalStore hook takes a subscribe function that should
        subscribe to a store and should return a function that unsubcribes from
        that store. It also takes a getSnapshot function that should read a
        snapshot of the data from the store. These two function are used to
        subscribe the component to the store, and to trigger re-renders on
        changes.
      </p>
      <p>
        If our app is fully built with React, it is recommended to use useState
        and useReducer hooks to manage state and re-renders instead.
      </p>
      <Heading level={'h3'}>Subscribing to a Browser API</Heading>
      <p>
        In the case that our component needs to know a value that is managed by
        the browser, we can use UseSyncExternalStore hook to subscribe to a
        browser API. getSnapshot function can be used to read the current value
        form the API, and we also need to implement the subscribe function in a
        way to track changes according to the API we have subscribed to, for
        example through event listeners listening the events fired by the
        browser.
      </p>
      <CodeSnippet>{subscribeFnExample}</CodeSnippet>
      <CodeSnippet>{getSnapshotExample}</CodeSnippet>
      <CodeSnippet>{subscribeToBrowserAPIExample}</CodeSnippet>
      <Heading level={'h3'}>Moving the Logic to a Custom Hook</Heading>
      <p>
        It is good practice to call UseSyncExternalStorePage hook in a custom
        hook to give the same external store reusability.
      </p>
      <CodeSnippet>{customHookExample}</CodeSnippet>
      <Heading level={'h3'}>Server Rendering Support</Heading>
      <p>
        Using UseSyncExternalStore with server rendering creates problems. For
        connecting to a third-party store, data needs to match between the
        server and client. And connecting to a browser API won't work because it
        does not exist on the server. The optional third parameter
        getServerSnapshot function solves these issues by running on the server
        when generating the HTML and on the client during when React takes the
      </p>
    </PageWithLayout>
  );
}

export default UseSyncExternalStorePage;
