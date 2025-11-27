import style from './style.module.css';
import { NavLink } from 'react-router';

export default function Navigation_bar () {
    return (
        <div className={style.bar}>
            <NavLink className={style.bar__element} to='/'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1" stroke-width="1" stroke="gray"/></svg>
            </NavLink>
            <NavLink className={style.bar__element} to='/categories'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M11 11V3H5c-1.1 0-2 .9-2 2v6zm2 0h8V5c0-1.1-.9-2-2-2h-6zm-2 2H3v6c0 1.1.9 2 2 2h6zm2 0v8h6c1.1 0 2-.9 2-2v-6z" stroke-width="1" stroke="gray"/></svg>
            </NavLink>
            <NavLink className={style.bar__element} to='/favorite'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z" stroke-width="1" stroke="gray"/></svg>
            </NavLink>
            <NavLink className={style.bar__element} to='/cart'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2M1 3c0 .55.45 1 1 1h1l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h11c.55 0 1-.45 1-1s-.45-1-1-1H7l1.1-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.67-1.43a.99.99 0 0 0-.9-.57H2c-.55 0-1 .45-1 1m16 15c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2" stroke-width="1" stroke="gray"/></svg>
            </NavLink>
            <NavLink className={style.bar__element} to='/profile'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58z" stroke-width="1" stroke="gray"/></svg>
            </NavLink>
        </div>
    )
}