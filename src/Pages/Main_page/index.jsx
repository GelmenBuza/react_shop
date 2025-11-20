import style from './style.module.css';
import { useState } from 'react';

import Search from '../../components/Search'
import Big_slider from '../../components/Big_slider'
import Small_slider from '../../components/Small_slider'
import Catalog from '../../components/Catalog'
import Navigation_bar from '../../components/Navigation_bar'

export default function Main_page({catalog, categories, fastSearchParam}) {
    const [searchQuery, setSearchQuery] = useState('');
    const [isFucused, setIsFocused] = useState(false);

    return (
        <div className={style.page}>
            <Search
                onWrite={(value) => setSearchQuery(value)}
                text={searchQuery}
                catalog={catalog}
                fastSearchParam={fastSearchParam}
                isFucused={isFucused}
                setIsFocused={setIsFocused}
                ></Search>
            {(!searchQuery && !isFucused) && (
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