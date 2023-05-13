// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
// import { logOut } from '../../redux/auth/auth-operations';
import { useSelector } from 'react-redux';
//  import { avatar } from '../UserMenu/dafaultAvatar';
// import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';
import { selectUser } from '../../redux/auth/auth-selectors';

export const ProfileForm = () => {
  const user = useSelector(selectUser);
  console.log(user);
  return (
    <Box sx={{ display: 'block'}}>
      <h2 >Welcome {user.name}</h2>
      <img src={user.avatarURL} alt="avatar" width="45px" style={{ marginTop: '15px', marginBottom: '15px'}}/>
      <p>Email: {user.email}</p>
      <p style={{ marginBottom: '15px'}}>Subscription: {user.subscription}</p>
      <Link to='/profile/edit' >Edit profile</Link>
    </Box>

  );
};

ProfileForm.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ),
}.isRequired;
