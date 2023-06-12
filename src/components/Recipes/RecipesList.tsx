import styled from 'styled-components';
import { RecipeCard } from '..';

export type RecipesListProps = {
  recipes: { recipe: Recipe }[];
};

const RecipesList: React.FC<RecipesListProps> = ({ recipes }) => {
  return (
    <ListWrapper className="section-center">
      {recipes.map(({ recipe }) => {
        const { label, uri, images, ingredients } = recipe;

        return (
          <RecipeCard
            key={uri}
            uri={uri}
            label={label}
            image={images.REGULAR.url}
            ingredients={ingredients}
          />
        );
      })}
    </ListWrapper>
  );
};

export default RecipesList;

const ListWrapper = styled.section`
  display: grid;
  gap: 0.75rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
`;
