import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { RecipesList } from '../components';

const Favourites = () => {
  const recipes = useSelector((state: RootState) => state.favourites.recipes);

  return (
    <main className="page page-screen">
      {recipes.length > 0 ? (
        <RecipesList recipes={recipes} />
      ) : (
        <h2>You have no favourites yet</h2>
      )}
    </main>
  );
};
export default Favourites;
