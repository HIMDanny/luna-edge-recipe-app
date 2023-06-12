import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Favourites, Home, Login, Recipe, RootLayout } from './pages';
import { loader as recipeLoader } from './pages/recipe';
import { loader as homeLoader } from './pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, loader: homeLoader, element: <Home /> },
      { path: ':recipeId', loader: recipeLoader, element: <Recipe /> },
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
