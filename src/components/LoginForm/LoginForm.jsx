import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/auth-operations';
import {Label, Form} from './LoginForm.styled'



export const LoginForm = () => {
  const dispatch = useDispatch();

  // const handleChange = ({ target: { name, value } }) => {
  //   switch (name) {
  //     case 'email':
  //       return setEmail(value);
  //     case 'password':
  //       return setPassword(value);
  //     default:
  //       return;
  //   }
  // };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <>
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label >
        Email
        <input type="email" name="email" />
      </Label>
      <Label >
        Password
        <input type="password" name="password" />
      </Label>
      <button type="submit">Log In</button>
    </Form>
    </>
  );
};
