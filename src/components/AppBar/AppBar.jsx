import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/auth-selectors';
import { Navigation } from '../Navigations/Navigation';
import { AuthNav } from '../Navigations/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
