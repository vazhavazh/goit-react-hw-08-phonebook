import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import {
  RegistrationWrapper,
  Form,
  Button,
  InputContainers,
  LabelStyled,
  InputStyled,
} from './pagesStyled';

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    dispatch(logIn({ email, password }))
      .unwrap()
      .then(() => navigate('/contacts'))
      .catch(() => {
        alert(`please enter valid date`);
      });

    form.reset();
  };

  return (
    <RegistrationWrapper>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <InputContainers>
          <LabelStyled>Email</LabelStyled>
          <InputStyled name="email" type="text" required />
          <LabelStyled>Password</LabelStyled>
          <InputStyled name="password" type="password" required />
        </InputContainers>

        <Button type="submit">Log In</Button>
      </Form>
    </RegistrationWrapper>
  );
}

