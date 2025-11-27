import style from './style.module.css';
import { useState } from 'react';
import Navigation_bar from '../../components/Navigation_bar'

export default function Cart_page() {

    return (
        <div className={style.page}>
            <Navigation_bar></Navigation_bar>
        </div>
    )
}