import {
  Link,
  Route,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import Home from './pages/Home';
import UseStatePage from './pages/UseState';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'use-state',
    element: <UseStatePage />,
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <div />
    </RouterProvider>
  );
}

export default App;
