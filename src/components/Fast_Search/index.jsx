import style from './style.module.css';
import Fast_Search_card from '../Fast_Search_card'

export default function Fast_Search({params}) {
    console.log('parap',params)
    return (
        <div className={style.fast_search}>
            <h2 className={style.fast_search__title}>Часто ищут</h2>
            {
            params.map((param) => (
                <Fast_Search_card value={param}></Fast_Search_card>
            ))
            }
        </div>
    )
}