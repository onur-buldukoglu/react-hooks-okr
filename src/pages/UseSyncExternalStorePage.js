import CodeSnippet from '../components/ui/CodeSnippet';
import Heading from '../components/ui/Heading';

function UseSyncExternalStorePage() {
  return (
    <div className="w-1/2 flex flex-col gap-4">
      <Heading level={'h1'}>UseSyncExternalStorePage</Heading>
      <p>
        UseSyncExternalStore hook lets us read data from a store outside of
        React. This outside store can be a third-party state management library
        or a browser API that expose a mutable value and events to subscribe to
        that value's changes.
      </p>
      <CodeSnippet>'UseSyncExternalStorePage example'</CodeSnippet>
      <p>
        UseSyncExternalStore hook takes a subscribe function that should
        subscribe to a store and should return a function that unsubcribes from
        that store. It also takes a getSnapshot function that should read a
        snapshot of the data from the store. These two function are used to
        subscribe the component to the store, and to trigger re-renders on
        changes.
      </p>
      <CodeSnippet>'UseSyncExternalStorePage subscribe example'</CodeSnippet>
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
      <CodeSnippet>'UseSyncExternalStore API example</CodeSnippet>
      <Heading level={'h3'}>Moving the Logic to a Custom Hook</Heading>
      <p>
        It is a good practice to call UseSyncExternalStorePage hook in a custom
        hook to give the same external store reusability.
      </p>
      <CodeSnippet>'UseSyncExternalStore custom hook example</CodeSnippet>
      <Heading level={'h3'}>Server Rendering Support</Heading>
      <p>
        Using UseSyncExternalStore with server rendering creates problems. For
        connecting to a third-party store, data needs to match between the
        server and client. And connecting to a browser API won't work because it
        does not exist on the server. The optional third parameter
        getServerSnapshot function solves these issues by running on the server
        when generating the HTML and on the client during when React takes the
      </p>
    </div>
  );
}

export default UseSyncExternalStorePage;
