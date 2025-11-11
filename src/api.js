
import card_img_1 from '../../assets/images/catalog_card/card_1.svg';
import card_img_2 from '../../assets/images/catalog_card/card_2.svg';
import card_img_3 from '../../assets/images/catalog_card/card_3.svg';
import card_img_4 from '../../assets/images/catalog_card/card_4.svg';
import card_img_5 from '../../assets/images/catalog_card/card_5.svg';
import card_img_6 from '../../assets/images/catalog_card/card_6.svg';

const card_title = ['Футболка мужская Комары', 'Свитшот женский укороченный Yamal est.2017', 'Шапка Yamal комбинация с бумбономапша', 'Брелок фирменный «Созвездие»', 'Шорты мужские Yamal', 'Сертификат Yamal 10000']
const card_img = [card_img_1, card_img_2, card_img_3, card_img_4, card_img_5, card_img_6]
const card_price = [3500, 2700, 1550, 640, 3850, 10000]
const card_status = [
    {discount:0.2, isSale:1, isHit:1, isPremium:0, isNew:0},
    {discount:0.1, isSale:0, isHit:0, isPremium:1, isNew:0},
    {discount:0, isSale:0, isHit:0, isPremium:0, isNew:1},
    {discount:0.2, isSale:1, isHit:0, isPremium:0, isNew:0},
    {discount:0, isSale:0, isHit:0, isPremium:0, isNew:1},
    {discount:0, isSale:0, isHit:0, isPremium:1, isNew:0},
]

const cards = []

for (let i = 0; i < card_title.length; i += 1) {
    cards.push({
        card_title: card_title[i],
        card_img: card_img[i],
        card_price: card_price[i],
        card_status: card_status[i]
    })
}
