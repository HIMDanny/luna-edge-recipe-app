import { RecipesList } from '../components';

import recipes from '../utils/recipes';

const formatedRecipes = recipes.hits.map((recipeObj) => recipeObj.recipe);

const Home = () => {
  return (
    <main className="page">
      <RecipesList recipes={formatedRecipes as Recipe[]} />
    </main>
  );
};
export default Home;
