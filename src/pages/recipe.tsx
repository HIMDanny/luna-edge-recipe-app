import styled from 'styled-components';
import { Button, IngredientsList } from '../components';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import {
  addRecipeToFavourites,
  removeRecipeFromFavourites,
} from '../store/favourites-slice';
import { useLoaderData, type LoaderFunction } from 'react-router-dom';
import { fetchRecipes } from '../axios';

const Recipe = () => {
  const recipe = useLoaderData() as Recipe;
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const isInFavourite = useSelector(
    (state: RootState) =>
      !!state.favourites.recipes.find(({ uri }) => uri === recipe.uri),
  );

  const dispatch = useDispatch();

  const [isCookingMode, setIsCookingMode] = useState(false);
  const [ingredients, setIngredients] = useState(
    recipe.ingredients.map((ingredient, index) => ({
      text: ingredient.text,
      id: index,
      completed: false,
    })),
  );

  const handleIngredientToggle = (ingredientId: number) => {
    const newIngredients = [...ingredients];
    const ingredientIndex = newIngredients.findIndex(
      ({ id }) => id === ingredientId,
    );

    newIngredients[ingredientIndex].completed =
      !newIngredients[ingredientIndex].completed;

    setIngredients(newIngredients);
  };

  const handleToggleCookingMode = () => {
    if (isCookingMode) {
      setIngredients(
        ingredients.map((ingredient, index) => ({
          text: ingredient.text,
          id: index,
          completed: false,
        })),
      );
    }

    setIsCookingMode((prevMode) => !prevMode);
  };

  const handleFavouriteChange = () => {
    if (isInFavourite) {
      dispatch(removeRecipeFromFavourites(recipe.uri));
    } else {
      dispatch(addRecipeToFavourites(recipe));
    }
  };

  const { label, images, source, url } = recipe;
  const imageSrc = images.REGULAR.url;

  return (
    <Wrapper className="page">
      <div className="recipe-header">
        <h2>{label}</h2>
        <img
          className="img"
          src={imageSrc}
          alt={label}
        />
        <div className="recipe-header-btns">
          {isLoggedIn && (
            <Button onClick={handleFavouriteChange}>
              {isInFavourite ? 'Remove from favourites' : 'Add to favourites'}
            </Button>
          )}
          <a
            href={url}
            target="_blank"
            className="source-link"
          >
            See full recipe on: {source}
          </a>
        </div>
      </div>
      <section className="section-center ingredients-section">
        <div className="section-title">
          <h3>Ingredients</h3>
          <span>{ingredients.length}</span>
        </div>
        <IngredientsList
          ingredients={ingredients}
          cookingMode={isCookingMode}
          onIngredientToggle={handleIngredientToggle}
        />
        {isLoggedIn && (
          <div className="btn-toggle-wrapper">
            <Button
              className="btn-toggle"
              onClick={handleToggleCookingMode}
            >
              {isCookingMode ? 'Stop' : 'Start'} Cooking
            </Button>
          </div>
        )}
      </section>
    </Wrapper>
  );
};
export default Recipe;

export const loader: LoaderFunction = async ({ params }) => {
  const { recipeId } = params as { recipeId: string };

  try {
    const { data } = await fetchRecipes.get(recipeId);

    return data.recipe;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const Wrapper = styled.main`
  h2 {
    margin-block: 0 1rem;
    grid-area: heading;
  }

  .recipe-header {
    max-width: 900px;
    margin-inline: auto;
  }

  .img {
    display: block;
    max-width: 300px;
    width: 100%;
    margin-inline: auto;
    grid-area: img;
  }

  .recipe-header-btns {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    grid-area: btns;
  }

  .source-link:hover {
    text-decoration: underline;
  }

  .section-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    h3 {
      margin-block: 0.5rem;
    }

    span {
      color: var(--clr-grey-4);
    }

    ::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: var(--clr-black);
    }
  }

  .btn-toggle-wrapper {
    margin-top: 1rem;
  }

  .btn-toggle {
    width: 100%;
  }

  @media (min-width: 800px) {
    .recipe-header {
      display: grid;
      column-gap: 1rem;
      grid-template-areas:
        'img heading'
        'img heading'
        'img btns';
      justify-items: center;
    }

    h2 {
      text-align: center;
      margin: 0;
    }

    .recipe-header-btns {
      margin: 0;
    }

    .ingredients-section {
      max-width: 650px;
    }

    .btn-toggle-wrapper {
      text-align: right;
    }

    .btn-toggle {
      width: fit-content;
    }
  }
`;
