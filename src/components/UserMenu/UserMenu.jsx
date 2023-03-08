import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import {logOut} from '../../redux/auth/auth-operations';
import {useAuth} from '../../hooks/useAuth';
import {avatar} from './dafaultAvatar';

const styles = {
    container:{
        dislpay: "flex",
        alignItems: "center",
    },
    avatar: {
        marginRight: 4,
    },
    name: {
        fontWeight: 700,
        marginRigth: 12,
    },
};

export const UserMenu = () => {
    const dispatch = useDispatch();
    const {user} = useAuth();
    
    return(
        <div style={styles.container}>
            <img src={avatar} alt='' width='30' style={styles.avatar}/>
            <span style={styles.name}>Welcome, {user.name}</span>
            <button type="button" onClick={(()=> dispatch(logOut()))}>
                LogOut
            </button>
        </div>
    );
}

UserMenu.propTypes = {
    user: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired
      })
    ),
  }.isRequired