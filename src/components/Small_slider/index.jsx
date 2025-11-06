import style from './style.module.css';
import Category_card from '../Category_card';
import category_card_1 from "../../assets/images/category_card/category_card_1.svg";
import category_card_2 from '../../assets/images/category_card/category_card_2.svg';
import category_card_3 from '../../assets/images/category_card/category_card_3.svg';
import category_card_4 from '../../assets/images/category_card/category_card_4.svg';
import category_card_5 from '../../assets/images/category_card/category_card_5.svg';
import category_card_6 from '../../assets/images/category_card/category_card_6.svg';

export default function Small_slider () {
    return (
        <div className={style.slider}>
            <Category_card image={category_card_1} text="Аксессуары"></Category_card>
            <Category_card image={category_card_2} text="Футболки"></Category_card>
            <Category_card image={category_card_3} text="Толстовки"></Category_card>
            <Category_card image={category_card_4} text="Куртки"></Category_card>
            <Category_card image={category_card_5} text="Штаны"></Category_card>
            <Category_card image={category_card_6} text="Сертификаты"></Category_card>
        </div>
    )
}