import Main_page from './components/Main_page'
import './App.css'
import { useEffect, useState } from 'react'





function App() {
  const [catalogCards, setCatalogCards] = useState([])
  const [categoriesCards, setCategoriesCards] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('https://noxer-test.ru/webapp/api/products/on_main');
        const resp = await res.json();
        console.log(resp)
        setCatalogCards(resp.products);
        setCategoriesCards(resp.categories);
      } catch (e) {
        throw(new Error(e));
      }
    };
    load();
  }, [])
  console.log(catalogCards, categoriesCards)
  return (
    <>
      <Main_page catalog={catalogCards} categories={categoriesCards}></Main_page>
    </>
  )
}

export default App; 