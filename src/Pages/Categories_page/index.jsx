import style from "./style.module.css";
import Navigation_bar from "../../components/Navigation_bar";
import useCategory from "../../stores/category_store.js";
import Category_card from "../../components/Category_card";

export default function Categories_page() {
    const CategoryCards = useCategory((state) => state.categories);
    const categories_card = [];

    const categories = CategoryCards.filter(
        (category) => category.Category_Image
    );
    for (const category of categories) {
        categories_card.push({
            id: category.Category_ID,
            image: category.Category_Image,
            name: category.Category_Name,
        });
    }

    return (
        <div className={style.page}>
            <h2 className={style.pageTitle}>Категории</h2>
            <div className={style.card_container}>
                {categories_card.map((category) => (
                    <Category_card
                        key={category.id}
                        image={category.image}
                        text={category.name}
                        type="big"
                    />
                ))}
            </div>
            <Navigation_bar></Navigation_bar>
        </div>
    );
}
