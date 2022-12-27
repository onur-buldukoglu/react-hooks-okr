import { createBrowserRouter } from 'react-router-dom';

import Home from '../../pages/HomePage';
import UseCallbackPage from '../../pages/UseCallbackPage';
import UseContextPage from '../../pages/UseContextPage';
import UseDebugValuePage from '../../pages/UseDebugValuePage';
import UseDeferredValuePage from '../../pages/UseDeferredValuePage';
import UseEffectPage from '../../pages/UseEffectPage';
import UseIdPage from '../../pages/UseIdPage';
import UseImperativeHandlePage from '../../pages/UseImperativeHandlePage';
import UseInsertionEffectPage from '../../pages/UseInsertionEffectPage';
import UseLayoutEffectPage from '../../pages/UseLayoutEffectPage';
import UseMemoPage from '../../pages/UseMemoPage';
import UseReducerPage from '../../pages/UseReducerPage';
import UseRefPage from '../../pages/UseRefPage';
import UseStatePage from '../../pages/UseStatePage';
import UseSyncExternalStorePage from '../../pages/UseSyncExternalStorePage';
import UseTransitionPage from '../../pages/UseTransitionPage';

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'use-state',
    element: <UseStatePage />,
  },
  {
    path: 'use-reducer',
    element: <UseReducerPage />,
  },
  {
    path: 'use-memo',
    element: <UseMemoPage />,
  },
  {
    path: 'use-callback',
    element: <UseCallbackPage />,
  },
  { path: 'use-transition', element: <UseTransitionPage /> },
  { path: 'use-deferred-value', element: <UseDeferredValuePage /> },
  { path: 'use-context', element: <UseContextPage /> },
  { path: 'use-ref', element: <UseRefPage /> },
  { path: 'use-imperative-handle', element: <UseImperativeHandlePage /> },
  { path: 'use-id', element: <UseIdPage /> },
  { path: 'use-debug-value', element: <UseDebugValuePage /> },
  { path: 'use-sync-external-store', element: <UseSyncExternalStorePage /> },
  { path: 'use-effect', element: <UseEffectPage /> },
  { path: 'use-layout-effect', element: <UseLayoutEffectPage /> },
  { path: 'use-insertion-effect', element: <UseInsertionEffectPage /> },
];

export const router = createBrowserRouter(routes);
