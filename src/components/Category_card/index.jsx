import style from './style.module.css';


export default function Catalog_card ({image, text}) {
    return (
        <div className={style.card}>
            <img src={image} alt="" className={style.card__img}/>
            <span className={style.card__title}>{text}</span>
        </div>
    )
}