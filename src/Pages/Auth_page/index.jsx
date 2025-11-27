import style from './style.module.css';
import { useState } from 'react';
import useUser from '../../stores/user_store.js';

export default function Auth_page() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const setUserEmail = useUser((state) => state.setUserEmail);
    const setUserPassword = useUser((state) => state.setUserPassword);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            setUserEmail(email);
            setUserPassword(password);
        }
    }

    return (
        <div className={style.page}>
            <form className={style.form} onSubmit={handleSubmit}>
                <label className={style.input}>
                    <input 
                        type="email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        placeholder='Введите почту...'
                        required
                    />
                </label>
                <label className={style.input}>
                    <input 
                        type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        placeholder='Введите пароль...'
                        required
                    />
                </label>
                <button className={style.submit_btn}>Подтвердить</button>
            </form>
        </div>
    )
}