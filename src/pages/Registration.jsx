import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from 'redux/auth/operations';

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
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <input label="Name"  name="name" type="text" />
        <input label="Email"  name="email" type="text" />
        <input
          label="Passwordl"
          
          name="password"
          type="password"
        />
        <button variant="contained"  type="submit">
          SignUP
        </button>
      </form>
    </div>
  );
}
