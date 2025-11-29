import style from "./style.module.css";
import Navigation_bar from "../../components/Navigation_bar";
import Catalog_card from '../../components/Catalog_card';
import useUser from "../../stores/user_store.js";
import useCatalog from "../../stores/catalog_store.js";

export default function Favorites_page() {
    const cards = [];
    const catalog = useCatalog(state => state.catalog)

    const likedProduct = useUser((state) => state.favorite_product);
    console.log('Liked: ', likedProduct)
    for (const product of catalog) {
        if (likedProduct.includes(product.id)) {
            const product_status = {
                discount: 0,
                isSale: 0,
                isHit: 0,
                isPremium: 0,
                isNew: 0,
            };

            if (product.old_price) {
                product_status.discount =
                    Math.floor((product.price / product.old_price) * 100) / 100;
            }

            for (const mark of product.marks) {
                switch (mark) {
                    case "new":
                        product_status.isNew = 1;
                        break;
                    case "sale":
                        product_status.isSale = 1;
                        break;
                    case "premium":
                        product_status.isPremium = 1;
                        break;
                    case "hit":
                        product_status.isHit = 1;
                        break;
                    default:
                        break;
                }
            }
            cards.push({
                id: product.id,
                title: product.name,
                image: product.images[0].Image_URL,
                price: product.price,
                old_price: product.old_price,
                status: product_status,
            });
            cards.map(card => console.log(card))
        }
    }
    return (
        <div className={style.page}>
            <div>
                <h2 className={style.page__title}>Избранные товары</h2>
            </div>
            {
                cards.length !== 0 ?
                    <div className={style.container}>
                        {
                            cards.map((card) => (
                                <Catalog_card
                                    key={card.id}
                                    id={card.id}
                                    image={card.image}
                                    name={card.title}
                                    price={card.price}
                                    oldPrice={card.old_price}
                                    discount={card.status.discount}
                                    isSale={card.status.isSale}
                                    isHit={card.status.isHit}
                                    isPremium={card.status.isPremium}
                                    isNew={card.status.isNew}
                                />
                            ))
                        }
                    </div>

                    :
                    <p className={style.empty}>У вес не избранных товаров</p>
            }
            <Navigation_bar></Navigation_bar>
        </div>
    );
}