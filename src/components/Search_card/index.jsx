import style from './style.module.css';
import useLike from "../../hooks/useLike.js";
import useCart from "../../hooks/useCart.js";
import useUser from '../../stores/user_store.js'


export default function Search_card({id, title, image, price, old_price, discount}) {
    const [isLike, toggleLike] = useLike();
    const [isCart, toggleCart] = useCart();
    const cartProduct = useUser(state => state.cart_product).find(card => card.id === id);

    return (
        <div className={style.card}>
            <img className={style.card__img} src={image} alt=""/>
            <div className={style.card__title_cont}>
                <span className={style.card__title}>{title}</span>
                {
                    discount ?
                        <>
                            <div className={style.price__conteiner}>
                                <span className={style.card__price}>{price}</span>
                                <span className={style.card__price_crossed}>{old_price}</span>
                                <span className={style.card__discount}>-{discount * 100}%</span>
                            </div>

                        </>
                        :
                        <span className={style.card__price}>{price}</span>
                }
            </div>
            <div className={style.btnCont}>
                <button className={style.like} onClick={() => toggleLike(id)}>
                    {
                        isLike(id) ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="red" stroke="black" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="1"
                                      d="M17 4c-3.2 0-5 2.667-5 4c0-1.333-1.8-4-5-4S3 6.667 3 8c0 7 9 12 9 12s9-5 9-12c0-1.333-.8-4-4-4"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="1"
                                      d="M17 4c-3.2 0-5 2.667-5 4c0-1.333-1.8-4-5-4S3 6.667 3 8c0 7 9 12 9 12s9-5 9-12c0-1.333-.8-4-4-4"/>
                            </svg>
                        )
                    }
                </button>
                <div className={style.cart}>
                    {
                        isCart(id) ?
                            <div className={style.card__btn}>
                                <button className={style.minus} onClick={() => toggleCart(id, 'minus')}>-</button>
                                <span className={style.inCart}>{cartProduct.count}</span>
                                <button className={style.plus} onClick={() => toggleCart(id, 'add')}>+</button>
                            </div>
                            :
                            <button className={style.card__btn} onClick={() => toggleCart(id, 'add')}>
                                Выбрать
                            </button>
                    }
                </div>
            </div>
        </div>
    )
}