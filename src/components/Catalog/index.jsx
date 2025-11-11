import style from './style.module.css';
import Catalog_card from '../Catalog_card';


export default function Catalog ({catalog_cards}) {

    const catalog_cards_filtered = catalog_cards.filter(product => product.images.length);

    const cards = [];

    for (const product of catalog_cards_filtered) {

        const product_status = {
            discount: 0,
            isSale: 0,
            isHit: 0,
            isPremium: 0,
            isNew: 0
        };

        if (product.old_price) {
            product_status.discount = Math.floor((product.price/product.old_price)*100)/100 
        };

        for (const mark of product.marks) {
            switch (mark) {
                case 'new':
                    product_status.isNew = 1;
                    break;
                case 'sale':
                    product_status.isSale = 1;
                    break;
                case 'premium':
                    product_status.isPremium = 1;
                    break;
                case 'hit':
                    product_status.isHit = 1;
                    break;
                default:
                    break;
            }
        }

        cards.push({
            id: product.id,
            title: product.name,
            image: product.images[0],
            price: product.price,
            old_price: product.old_price,
            status: product_status,
        })
    }


    return (
        <div className={style.catalog}>
            {
                cards.map((card) => (
                    <Catalog_card
                        key={card.id}
                        image={card.image}
                        name={card.title}
                        price={card.price}
                        oldPrice={card.oldPrice}
                        discount={card.status.discount}
                        isSale={card.status.isSale}
                        isHit={card.status.isHit}
                        isPremium={card.status.isPremium}
                        isNew={card.status.isNew}
                    />
                ))
            }
        </div>
    )
}