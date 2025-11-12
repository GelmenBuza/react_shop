import style from './style.module.css';


export default function Search ({onClick, onWrite, text}) {
    return (
        <label className={style.search} onClick={onClick}>
            <input 
                type="text" 
                name="search"
                placeholder="Найти товары"
                value={text}
                onChange={(e) => onWrite(e.target.value)}
                className={style.search__input}
            />
        </label>
    )
}