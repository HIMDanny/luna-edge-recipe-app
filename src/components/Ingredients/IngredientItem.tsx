import styled from 'styled-components';

export type IngredientItemProps = {
  id: number;
  text: string;
  completed: boolean;
  editable: boolean;
  onChange: () => void;
};

const IngredientItem: React.FC<IngredientItemProps> = ({
  id,
  text,
  editable,
  completed,
  onChange,
}) => {
  if (editable) {
    return (
      <ItemWrapper className="ingredient">
        <input
          type="checkbox"
          name={`ingredient-${id}`}
          id={`ingredient-${id}`}
          checked={completed}
          onChange={onChange}
        />
        <label htmlFor={`ingredient-${id}`}>{text}</label>
      </ItemWrapper>
    );
  }

  return <li className="ingredient">{text}</li>;
};
export default IngredientItem;

const ItemWrapper = styled.li`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: auto 1fr;

  label,
  input {
    cursor: pointer;
  }

  :has(input:checked) label {
    text-decoration: line-through;
  }
`;
