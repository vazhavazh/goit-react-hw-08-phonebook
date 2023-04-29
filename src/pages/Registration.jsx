import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from 'redux/auth/operations';
import {
  RegistrationWrapper,
  Form,
  Button,
  InputContainers,
  LabelStyled,
  InputStyled,
} from './pagesStyled';

export default function Registration() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    dispatch(register({ name, email, password }))
      .unwrap()
      .then(() => navigate('/'))
      .catch(() => {
        alert(`Oops something wrong`);
      });
  };

  return (
    <RegistrationWrapper>
      <h1>Registration</h1>
      <Form onSubmit={handleSubmit}>
        <InputContainers>
          <LabelStyled>Name</LabelStyled>
          <InputStyled
            name="name"
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <LabelStyled>Email</LabelStyled>
          <InputStyled name="email" type="text" required />
          <LabelStyled>Password</LabelStyled>
          <InputStyled name="password" type="password" required />
        </InputContainers>
        <Button type="submit">SignUp</Button>
      </Form>
    </RegistrationWrapper>
  );
}
