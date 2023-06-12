import styled from 'styled-components';
import { IngredientItem } from '..';

export type IngredientsListProps = {
  cookingMode: boolean;
  ingredients: {
    id: number;
    text: string;
    completed: boolean;
  }[];
  onIngredientToggle: (id: number) => void;
};

const IngredientsList: React.FC<IngredientsListProps> = ({
  ingredients,
  cookingMode,
  onIngredientToggle,
}) => {
  return (
    <ListWrapper className="ingredients">
      {ingredients.map((ingredient) => (
        <IngredientItem
          key={ingredient.id}
          editable={cookingMode}
          onChange={onIngredientToggle.bind(null, ingredient.id)}
          {...ingredient}
        />
      ))}
    </ListWrapper>
  );
};
export default IngredientsList;

const ListWrapper = styled.ul`
  margin-top: 0.5rem;
  display: grid;
  gap: 0.5rem;

  .ingredient {
    padding: 0.5rem 1rem;
    background-color: var(--clr-grey-10);
    border-radius: var(--border-radius);
    font-size: clamp(0.75rem, 3vw, 1rem);
  }
`;
