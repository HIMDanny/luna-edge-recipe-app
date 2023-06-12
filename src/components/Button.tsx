import styled from 'styled-components';

const Button = styled.button`
  background-color: var(--clr-primary-7);
  color: var(--clr-primary-3);
  transition: background-color 0.2s, color 0.2s;

  :hover {
    background-color: var(--clr-primary-5);
    color: var(--clr-primary-7);
  }
`;

export default Button;
