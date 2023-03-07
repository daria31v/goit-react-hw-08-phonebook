import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {selectIsLoggedIn} from '../../redux/auth/auth-selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  <nav>
    <NavLink to="/" exact>
      Main page
    </NavLink>
    {isLoggedIn && 
    (<NavLink to="/contacts" exact>
      {' '}
      List contacts{' '}
    </NavLink>)}
  </nav>;
};
