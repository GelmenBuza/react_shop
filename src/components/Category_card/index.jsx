import style from './style.module.css';


export default function Catalog_card ({image, text, type}) {
    return (
            type !== 'big' ?
            (
            <div className={style.card}>
                <img src={image} alt="" className={style.card__img}/>
                <span className={style.card__title}>{text}</span>
            </div>
            )
            :
            (
            <div className={style.card_big}>
                <img src={image} alt="" className={style.card__img}/>
                <span className={style.card__title}>{text}</span>
            </div>
            )
    )
}