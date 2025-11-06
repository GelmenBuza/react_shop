import style from './style.module.css';

import discount from "../../assets/images/discount.svg";
import dot from "../../assets/icon/dot.svg";


export default function Big_slider () {
    return (
        <div className={style.slider}>
            <img src={discount} alt="" className={style.slider__img}/>
            <div className={style.dots}>
                <img src={dot} alt="" className={[style.dots__dot, style.active].join()}/>
                <img src={dot} alt="" className={style.dots__dot}/>
                <img src={dot} alt="" className={style.dots__dot}/>
            </div>
        </div>
    )
}