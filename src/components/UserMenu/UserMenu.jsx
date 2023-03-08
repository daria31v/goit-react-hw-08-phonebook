import { useDispatch } from 'react-redux';
import {logOut} from '../../redux/auth/auth-operations';
import {useAuth} from '../../hooks/useAuth';
// import {defaultAvatar} from './defaultAvatar.jpg';

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
    const avatar = 'https://hindistatusnow.com/wp-content/uploads/2023/01/Smile-Whatsapp-DP-Images-16-1024x1024.jpg';
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

// export default UserMenu;