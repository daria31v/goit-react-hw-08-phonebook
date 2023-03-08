import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { logOut } from '../../redux/auth/auth-operations';
import { useAuth } from '../../hooks/useAuth';
import { avatar } from './dafaultAvatar';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box sx={{ display: 'flex', justifyItems: 'end', alignItems: 'center' }}>
      <img src={avatar} alt="" width="45px" />
      <Typography
        sx={{ width: '100%', marginLeft: '10px', marginRight: '10px' }}
      >
        <b>Welcome, {user.name}</b>{' '}
      </Typography>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button type="button" onClick={() => dispatch(logOut())}>
          LogOut
        </Button>
      </ButtonGroup>
    </Box>
  );
};

UserMenu.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ),
}.isRequired;
