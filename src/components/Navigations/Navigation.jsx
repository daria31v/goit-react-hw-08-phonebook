import { useAuth } from '../../hooks/useAuth';
import { LinkPage } from './Navigation.styled';

export const Navigation = () => {
  const {isLoggedIn} = useAuth();

  return (
  <nav>
    <LinkPage to="/"> Home </LinkPage>

    {isLoggedIn && (
    <LinkPage to="/contacts" >
      Phonebook
    </LinkPage>)}
  
  </nav>)
};
