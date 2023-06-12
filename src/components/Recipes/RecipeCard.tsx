import { Link } from 'react-router-dom';
import styled from 'styled-components';

export type RecipeCardProps = {
  uri: string;
  label: string;
  image: string;
  ingredients: Ingredient[];
};

const RecipeCard: React.FC<RecipeCardProps> = ({
  uri,
  label,
  image,
  ingredients,
}) => {
  const recipeId = uri.split('#')[1];

  return (
    <CardWrapper>
      <Link to={recipeId}>
        <img
          className="img"
          src={image}
          alt={label}
        />
        <div className="recipe-info">
          <h3>{label}</h3>
          <div className="ingredients-list">
            <span className="ingredients-list-title">Ingredients: </span>
            {ingredients.map(({ foodId, food }, index) => (
              <span key={`${foodId}-${index}`}>
                {food}
                {index < ingredients.length - 1 ? ', ' : ''}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </CardWrapper>
  );
};
export default RecipeCard;

const CardWrapper = styled.article`
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
  border-radius: var(--border-radius);
  transition: box-shadow 0.2s;

  .img {
    display: block;
    width: 100%;
    height: 15rem;
    object-fit: cover;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .recipe-info {
    padding: 0.5rem;
    margin-bottom: 0.5rem;
  }

  h3 {
    margin-block: 0.25rem;
    font-size: 1.2rem;
  }

  .ingredients-list-title {
    font-weight: 700;
  }

  :hover {
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
  }
`;
