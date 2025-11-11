import style from './style.module.css';
import Category_card from '../Category_card';



export default function Small_slider ({categories_cards}) {

    const categories_card = []; 

    const categories = categories_cards.filter(category => category.Category_Image);



    for (const category of categories) {
        categories_card.push({
            id: category.Category_ID,
            image: category.Category_Image,
            name: category.Category_Name
        })
    }

    return (
        <div className={style.slider}>
            {
                categories_card.map((category) => (
                    <Category_card
                        key={category.id}
                        image={category.image}
                        text={category.name}
                    />
                ))
            }
        </div>
    )
}