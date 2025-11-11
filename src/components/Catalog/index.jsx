import style from './style.module.css';
import Catalog_card from '../Catalog_card';
import cards from '../../api.js'


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