import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Favourites, Home, Login, Recipe, RootLayout } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: ':recipeId', element: <Recipe /> },
      { path: 'login', element: <Login /> },
      { path: 'favourites', element: <Favourites /> },
      { path: 'sign-up', element: <div>Sign Up</div> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
