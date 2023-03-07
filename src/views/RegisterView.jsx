import { Helmet } from 'react-helmet';
import { RegisterForm } from '../components/RegistrationForm/RegistrationForm';

const RegisterView = () => {
  return (
    <div>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
};

export default RegisterView;
