import style from './style.module.css';


export default function Search_card({title, image, price, old_price, discount}) {

    return (
        <div className={style.card}>
            <img className={style.card__img} src={image} alt="" />
            <div className={style.card__title_cont}>
                <span className={style.card__title}>{title}</span>
                {
                    discount ?
                    <>
                        <div className={style.price__conteiner}>
                            <span className={style.card__price}>{price}</span>
                            <span className={style.card__price_crossed}>{old_price}</span>
                            <span className={style.card__discount}>-{discount*100}%</span>
                        </div>

                    </>
                    :
                    <span className={style.card__price}>{price}</span>
                }
            </div>
        </div>
    )
}