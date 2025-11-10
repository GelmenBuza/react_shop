import style from './style.module.css';
import Catalog_card from '../Catalog_card';

import card_img_1 from '../../assets/images/catalog_card/card_1.svg';
import card_img_2 from '../../assets/images/catalog_card/card_2.svg';
import card_img_3 from '../../assets/images/catalog_card/card_3.svg';
import card_img_4 from '../../assets/images/catalog_card/card_4.svg';
import card_img_5 from '../../assets/images/catalog_card/card_5.svg';
import card_img_6 from '../../assets/images/catalog_card/card_6.svg';

const card_title = ['Футболка мужская Комары', 'Свитшот женский укороченный Yamal est.2017', 'Шапка Yamal комбинация с бумбономапша', 'Брелок фирменный «Созвездие»', 'Шорты мужские Yamal', 'Сертификат Yamal 10000']

export default function Catalog () {
    return (
        <div className={style.catalog}>
            <Catalog_card image={card_img_1} name={card_title[0]} price={3500} discount={0.2} isSale={1} isHit={1} isPremium={0} isNew={0}></Catalog_card>
            <Catalog_card image={card_img_2} name={card_title[1]} price={2700} discount={0.1} isSale={0} isHit={0} isPremium={1} isNew={0}></Catalog_card>
            <Catalog_card image={card_img_3} name={card_title[2]} price={1550} discount={0} isSale={0} isHit={0} isPremium={0} isNew={1}></Catalog_card>
            <Catalog_card image={card_img_4} name={card_title[3]} price={640} discount={0.2} isSale={1} isHit={0} isPremium={0} isNew={0}></Catalog_card>
            <Catalog_card image={card_img_5} name={card_title[4]} price={3850} discount={0} isSale={0} isHit={0} isPremium={0} isNew={1}></Catalog_card>
            <Catalog_card image={card_img_6} name={card_title[5]} price={10000} discount={0} isSale={0} isHit={0} isPremium={1} isNew={0}></Catalog_card>
            <Catalog_card image={card_img_6} name={card_title[5]} price={10000} discount={0} isSale={0} isHit={0} isPremium={1} isNew={0}></Catalog_card>
            <Catalog_card image={card_img_6} name={card_title[5]} price={10000} discount={0} isSale={0} isHit={0} isPremium={1} isNew={0}></Catalog_card>
            <Catalog_card image={card_img_6} name={card_title[5]} price={10000} discount={0} isSale={0} isHit={0} isPremium={1} isNew={0}></Catalog_card>
        </div>
    )
}