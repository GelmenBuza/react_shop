import style from './style.module.css';
import { useState } from 'react';

export default function Auth_page({auth}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            auth(email, password)
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
                <button className={style.submit_btn} >Подтвердить</button>
            </form>
        </div>
    )
}