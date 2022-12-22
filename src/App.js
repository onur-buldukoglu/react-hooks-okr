import { RouterProvider } from 'react-router-dom';

import { router } from './libs/router';

function App() {
  return (
    <RouterProvider router={router}>
      <div />
    </RouterProvider>
  );
}

export default App;
