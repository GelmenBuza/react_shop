import style from './style.module.css';
import { useState } from 'react';

import Search from '../Search'
import Big_slider from '../Big_slider'
import Small_slider from '../Small_slider'
import Catalog from '../Catalog'
import Navigation_bar from '../Navigation_bar'
import Fast_Search from '../Fast_Search';

export default function Main_page({catalog, categories, fastSearchParam}) {
    const [inputStatus, setInputStatus] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');


    const toggleInput = () => {
        setInputStatus(!inputStatus);
    }



    return (
        <div className={style.page}>
            <Search onClick={() => toggleInput()} onWrite={(value) => setSearchQuery(value)} text={searchQuery}></Search>
            {
                inputStatus ?
                <>
                <Fast_Search params={fastSearchParam} setOften={(value) => setSearchQuery(value)}></Fast_Search>
                </>
                :
                <>
                <Big_slider></Big_slider>
                <Small_slider categories_cards={categories}></Small_slider>
                <Catalog catalog_cards={catalog}></Catalog>
                <Navigation_bar></Navigation_bar>
                </>
            }

        </div>
    )
}