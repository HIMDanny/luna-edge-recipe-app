import styled from 'styled-components';
import { links } from '../utils/constants';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { signOut } from '../store/user-slice';

const Navbar = () => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  return (
    <NavWrapper>
      <nav className="nav">
        <h1 className="logo">
          <Link to="/">Recipes</Link>
        </h1>
        <ul className="nav-links">
          {links.map(({ id, path, text }) => (
            <li
              key={id}
              className="link"
            >
              <Link to={path}>{text}</Link>
            </li>
          ))}
          <li className="link">
            {isLoggedIn ? (
              <button onClick={() => dispatch(signOut())}>Log out</button>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </li>
        </ul>
      </nav>
    </NavWrapper>
  );
};

export default Navbar;

const NavWrapper = styled.header`
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);

  .nav {
    max-width: var(--max-width);
    margin-inline: auto;
    padding-inline: var(--side-padding);

    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    font-size: 1.5rem;
    color: var(--clr-primary-6);

    a {
      color: inherit;
    }
  }
  .btn-toggle {
    background-color: transparent;
    padding: 0.5rem;

    svg {
      display: block;
    }
  }
  .nav-links {
    display: flex;
    align-items: center;
    gap: 1rem;
    text-transform: capitalize;
  }

  .link {
    color: var(--clr-black);

    a {
      color: inherit;

      :hover {
        color: var(--clr-primary-5);
      }
    }
  }

  @media (min-width: 768px) {
    .btn-toggle {
      display: none;
    }

    .nav {
      gap: 4rem;
    }
  }
`;
