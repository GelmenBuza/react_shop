import style from './style.module.css';
import Navigation_bar from '../../components/Navigation_bar'

export default function Profile_page({email, logout}) {


    return (
        <div className={style.page}>
            <span>Email: {email}</span>
            <button onClick={() => logout()}>Logout</button>
            <Navigation_bar></Navigation_bar>
        </div>
    )
}