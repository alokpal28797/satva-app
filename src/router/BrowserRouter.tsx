import { createBrowserRouter } from 'react-router-dom'
import Register from '../pages/register';
import LogIn from '../pages/login';
import Settings from '../pages/settings';
import Dashboard from '../pages/dashBoard';

const router = createBrowserRouter([
    {
        path: "/",
        element : <Register/>
    },
    {
        path: "/login",
        element : <LogIn/>
    },
    {
        path: '/settings',
        element: <Settings/>,
      },
      {
        path: '/dashboard',
        element: <Dashboard/>,
      },
]);

export default router;