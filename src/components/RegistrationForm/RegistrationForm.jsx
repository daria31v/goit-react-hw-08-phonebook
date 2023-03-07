import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import {RegistForm, RegistLabel} from './RegistrationForm.styled'



export const RegistrationForm = () => {
  const dispatch = useDispatch();

  // const handleChange = ({target: {name,value}}) => {
  //     switch(name){
  //         case 'name':
  //         return setName(value);
  //         case 'email':
  //         return setEmail(value);
  //         case 'password':
  //         return setPassword(value);
  //         default:
  //             return;
  //     }
  // };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div>
      <RegistForm onSubmit={handleSubmit} autoComplete="off">
        <RegistLabel >
          Name
          <input type="text" name="name" />{' '}
        </RegistLabel>
        <RegistLabel >
          Email
          <input type="email" name="email" />{' '}
        </RegistLabel>
        <RegistLabel >
          Password
          <input type="password" name="password" />{' '}
        </RegistLabel>
        <button type="submit">Create profile</button>
      </RegistForm>
    </div>
  );
};
