import style from './style.module.css';


export default function Search () {
    return (
        <label className={style.search}>
            <input type="search" name='search' placeholder='Найти товары' className={style.search__input} />
        </label>
    )
}