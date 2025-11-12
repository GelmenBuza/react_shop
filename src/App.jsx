import Main_page from './components/Main_page'
import './App.css'
import { useEffect, useState } from 'react'
import reservData from '../data.json';



function App() {
  const [catalogCards, setCatalogCards] = useState([])
  const [categoriesCards, setCategoriesCards] = useState([])
  const [fastSearch, setFastSearch] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('https://noxer-test.ru/webapp/api/products/on_main');
        const resp = await res.json();
        console.log(resp)
        setCatalogCards(resp.products);
        setCategoriesCards(resp.categories);
        setFastSearch(resp.special_project_parameters_json.fast_search_strings.parameters_list);
      } catch (e) {
        console.log('Api not connect, data from reserve')
        const resp = reservData;
        setCatalogCards(resp.products);
        setCategoriesCards(resp.categories);
        setFastSearch(resp.special_project_parameters_json.fast_search_strings.parameters_list);
        throw new Error(e);
      }
    };
    load();
  }, [])

  console.log(catalogCards, categoriesCards, fastSearch);

  return (
    <>
      <Main_page catalog={catalogCards} categories={categoriesCards} fastSearchParam={fastSearch}></Main_page>
    </>
  )
}

export default App;