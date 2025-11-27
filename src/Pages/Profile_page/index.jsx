import style from './style.module.css';
import Navigation_bar from '../../components/Navigation_bar'
import useUser from '../../stores/user_store.js';

export default function Profile_page() {
    const user = useUser((state) => state.user);
    const logout = useUser((state) => state.logout);

    return (
        <div className={style.page}>
            <span>Email: {user.email}</span>
            <button onClick={() => logout()}>Logout</button>
            <Navigation_bar></Navigation_bar>
        </div>
    )
}