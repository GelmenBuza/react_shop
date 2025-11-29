import useCart from '../../hooks/useCart';
import useLike from '../../hooks/useLike';
import style from './style.module.css';
import useUser from '../../stores/user_store.js'

export default function Catalog_card({ id, image, name, price, oldPrice, discount, isSale, isHit, isPremium, isNew }) {

    const [isLike, toggleLike] = useLike();
    const [isCart, toggleCart] = useCart()

    const cartProduct = useUser(state => state.cart_product).find(card => card.id === id);

    return (
        <div className={style.card}>
            <img src={image} alt="" className={style.card__img} />
            <button className={style.card__like} onClick={() => toggleLike(id)}>
                {
                    isLike(id) ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="red" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 4c-3.2 0-5 2.667-5 4c0-1.333-1.8-4-5-4S3 6.667 3 8c0 7 9 12 9 12s9-5 9-12c0-1.333-.8-4-4-4" /></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 4c-3.2 0-5 2.667-5 4c0-1.333-1.8-4-5-4S3 6.667 3 8c0 7 9 12 9 12s9-5 9-12c0-1.333-.8-4-4-4" /></svg>
                    )
                }
            </button>
            <div className={style.card__status}>
                {isHit === 1 && (
                    <div className={style.hit}>
                        <span>ХИТ</span>
                    </div>
                )}
                {isSale === 1 && (
                    <div className={style.sale}>
                        <span>SALE</span>
                    </div>
                )}
                {isPremium === 1 && (
                    <div className={style.prem}>
                        <span>ПРЕМИУМ</span>
                    </div>
                )}
                {isNew === 1 && (
                    <div className={style.new}>
                        <span>NEW</span>
                    </div>
                )}
            </div>
            <div className={style.card__desc}>
                <div className={style.price_name}>
                    {discount !== 0 ? (
                        <div className={style.card__price}>
                            <span>{price}₽</span>
                            <span className={style.crossed}>{oldPrice}₽</span>
                            <span className={style.discount}>-{discount * 100}%</span>
                        </div>
                    ) : (
                        <div className={style.card__price}>
                            <span>{price}₽</span>
                        </div>
                    )}
                    <span className={style.card__name}>{name}</span>
                </div>
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
    )
}