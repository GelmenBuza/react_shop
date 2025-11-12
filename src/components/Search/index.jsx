import Search_card from '../Search_card';
import style from './style.module.css';
import Fast_Search from '../Fast_Search';


export default function Search ({ onWrite, text, catalog, fastSearchParam, isFucused, setIsFocused}) {


    const validProducts = catalog.filter(product => product.images.length);
    const cards = [];

    for (const product of validProducts) {

        let discount; 

        if (product.old_price) {
            discount = Math.floor((product.price/product.old_price)*100)/100 
        };

        cards.push({
            id: product.id,
            title: product.name,
            image: product.images[0].Image_URL,
            price: product.price,
            old_price: product.old_price,
            discount
        })
    }

    const filteredCards = text ?
        cards.filter(card =>card.title.toLowerCase().includes(text.toLowerCase())
    )
    : 
    [];



    return (
        <div className={text ? style.search_cont_full : style.search_cont}>
            <label className={style.search}>
                <input 
                    type="text" 
                    name="search"
                    placeholder="Найти товары"
                    value={text}
                    onChange={(e) => {
                        onWrite(e.target.value);
                        setIsFocused(true);
                    }}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => 
                        setTimeout(() => setIsFocused(false), 200)
                    }
                    className={style.search__input}
                />
            </label>
            {isFucused && (
                <div className={style.searchDropdown}>
                    {text ? (
                        filteredCards.length > 0 ? (
                        <div className={style.cards_container}>
                            {
                                filteredCards.map((card)=> (
                                    <Search_card
                                        key={card.id}
                                        title={card.title}
                                        image={card.image}
                                        price={card.price}
                                        old_price={card.old_price}
                                        discount={card.discount}
                                    />
                                ))}
                        </div>
                        ) : (
                            <div className={style.noResults}>Ничего не найдено</div>
                        )
                    ) : (
                        <Fast_Search params={fastSearchParam} />
                    )}
                </div>
            )}
        </div>
    )
}