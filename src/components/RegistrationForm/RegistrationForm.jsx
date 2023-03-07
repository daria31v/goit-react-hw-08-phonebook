
import {useDispatch} from 'react-redux';
import {register} from '../../redux/auth/auth-operations';

const styles = {
    form:{
        width: 320,
    },
    label: {
        display:'flex',
        flexDirection: 'column',
        marginBottom: 15,
    },
};

export const RegisterForm = () => {
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

    return(
    <div>
       
        <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
            <lable style={styles.label}>
                Name
            <input type = "text" name="name" /> </lable>
            <lable style={styles.label}>
                Email
            <input type = "email" name="email" /> </lable>
            <lable style={styles.label}>
                Password
            <input type = "password" name="password" /> </lable>
            <button type='submit'>Create profile</button>
        </form>
    </div>
    )
}