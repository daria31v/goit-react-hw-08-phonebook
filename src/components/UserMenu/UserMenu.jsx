import { useDispatch, useSelector } from 'react-redux';
import {logOut} from '../../redux/auth/auth-operations';
import {selectUser} from '../../redux/auth/auth-selectors';
// import {defaultAvatar} from '../UserMenu/defaultAvatar.jpg';

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
    const name = useSelector(selectUser);
    // const avatar = defaultAvatar;

    return(
        <div style={styles.container}>
            <img src={''} alt='' width='30' style={styles.avatar}/>
            <span style={styles.name}>Welcom {name}</span>
            <button type="button" onClick={(()=> dispatch(logOut()))}>
                LogOut
            </button>
        </div>
    );
}
