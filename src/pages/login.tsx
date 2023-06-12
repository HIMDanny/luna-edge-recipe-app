import styled from 'styled-components';
import { Button } from '../components';
import { useDispatch } from 'react-redux';
import { login } from '../store/user-slice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const name = formData.get('name');
    const password = formData.get('password');

    if (!name || !password) {
      toast.error('Fields should not be empty!');
      return;
    }

    dispatch(login());
    navigate('/');
    toast.success('You successfully loged in!');
  };

  return (
    <Wrapper className="page">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Username</label>
          <input
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
          />
        </div>
        <Button type="submit">Log in</Button>
      </form>
    </Wrapper>
  );
};
export default Login;

const Wrapper = styled.main`
  min-height: 70vh;

  display: grid;
  place-items: center;

  form {
    max-width: 500px;
    width: 100%;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
    padding: 1rem;
    border-radius: var(--border-radius);

    display: grid;
    gap: 1rem;
  }

  .form-control {
    display: grid;
    gap: 0.25rem;
  }
`;
