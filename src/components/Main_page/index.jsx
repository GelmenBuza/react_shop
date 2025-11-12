import style from './style.module.css';
import { useState } from 'react';

import Search from '../Search'
import Big_slider from '../Big_slider'
import Small_slider from '../Small_slider'
import Catalog from '../Catalog'
import Navigation_bar from '../Navigation_bar'
import Fast_Search from '../Fast_Search';

export default function Main_page({catalog, categories, fastSearchParam}) {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <div className={style.page}>
            <Search onWrite={(value) => setSearchQuery(value)} text={searchQuery} catalog={catalog} fastSearchParam={fastSearchParam}></Search>
            {!searchQuery && (
                <>
                    {/* <Fast_Search params={fastSearchParam}></Fast_Search> */}
                    <Big_slider></Big_slider>
                    <Small_slider categories_cards={categories}></Small_slider>
                    <Catalog catalog_cards={catalog}></Catalog>
                    <Navigation_bar></Navigation_bar>
                </>
            )}

        </div>
    )
}