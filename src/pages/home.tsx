import {
  LoaderFunction,
  useLoaderData,
  useRevalidator,
} from 'react-router-dom';
import { Button, RecipesList } from '../components';
import { fetchRecipes } from '../axios';
import styled from 'styled-components';

const Home = () => {
  const recipes = useLoaderData() as Recipe[];
  const revalidator = useRevalidator();

  const handleChangeRecipes = () => {
    revalidator.revalidate();
  };

  return (
    <main className="page">
      <ButtonWrapper className="section-center">
        <Button onClick={handleChangeRecipes}>Change recipes</Button>
      </ButtonWrapper>
      <RecipesList recipes={recipes} />
    </main>
  );
};
export default Home;

export const loader: LoaderFunction = async () => {
  try {
    const { data } = await fetchRecipes(
      '?time=0%2B&random=true&field=uri&field=label&field=images&field=source&field=url&field=shareAs&field=ingredientLines&field=ingredients&field=totalTime&field=cuisineType&field=mealType&field=dishType',
    );
    const { hits } = data as { hits: { recipe: Recipe }[] };
    const recipes = hits.map((recipesData) => recipesData.recipe);

    return recipes;
  } catch (error) {
    console.error(error);
  }
};

const ButtonWrapper = styled.div`
  margin-block: 1rem;
  text-align: right;
`;
