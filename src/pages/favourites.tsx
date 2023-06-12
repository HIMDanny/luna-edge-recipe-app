import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { RecipesList } from '../components';

const Favourites = () => {
  const recipes = useSelector((state: RootState) => state.favourites.recipes);

  return (
    <main className="page">
      <RecipesList recipes={recipes} />
    </main>
  );
};
export default Favourites;
