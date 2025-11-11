import style from './style.module.css';

import Search from '../Search'
import Big_slider from '../Big_slider'
import Small_slider from '../Small_slider'
import Catalog from '../Catalog'
import Navigation_bar from '../Navigation_bar'

export default function Main_page({catalog, categoties}) {

    return (
        <div className={style.page}>
            <Search></Search>
            <Big_slider></Big_slider>
            <Small_slider categories_cards={categoties}></Small_slider>
            <Catalog catalog_cards={catalog}></Catalog>
            <Navigation_bar></Navigation_bar>
        </div>
    )
}