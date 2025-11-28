import Main_page from './Pages/Main_page'
import './App.css'
import { useEffect, useState } from 'react'
import reservData from '../data.json';
import { BrowserRouter, Routes, Route } from "react-router";
import Profile_page from './Pages/Profile_page';
import Auth_page from './Pages/Auth_page';
import useCatalog from './stores/catalog_store.js';
import useCategory from './stores/category_store.js';
import useUser from './stores/user_store.js';
import Favorites_page from './Pages/Favorites_page';
import Categories_page from './Pages/Categories_page';
import Cart_page from './Pages/Cart_page';
import placeholder from './assets/images/placeholder.png'

function normalizeCards(cards, type = 'catalog') {
  if (type === 'catalog') {
    const normalizedCards = [];
    for (const card of cards) {
      if (!card.images.length) {
        card.images = [{
          Image_ID: -1,
          Image_URL: placeholder,
        }]
      }
      normalizedCards.push(card);
    }
    return normalizedCards;
  } else {
    const normalizedCards = [];
    for (const card of cards) {
      if (!card.Category_Image) {
        card.Category_Image = placeholder;
      }
      normalizedCards.push(card);
    }
    return normalizedCards;
  }

}

function App() {
  const [fastSearch, setFastSearch] = useState([]);
  const CatalogCards = useCatalog(state => state.catalog);
  const SetCatalogCards = useCatalog(state => state.setCatalog);
  const CategoryCards = useCategory(state => state.categories);
  const SetCategoryCards = useCategory(state => state.setCategories);
  const user = useUser(state => state.user);


  useEffect(() => {
    console.log('Email:', user.email, 'Password:', user.password);
    localStorage.setItem('user', JSON.stringify(user));
  }, [user.email, user.password]);
  const isSignIn = user.email && user.password;
  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('http://noxer-test.ru/webapp/api/products/on_main');
        const resp = await res.json();
        console.log(resp)
        SetCatalogCards(normalizeCards(resp.products));
        SetCategoryCards(resp.categories);
        setFastSearch(resp.special_project_parameters_json.fast_search_strings.parameters_list);
      } catch (e) {
        console.log('Api not connect, data from reserve')
        const resp = reservData;
        SetCatalogCards(normalizeCards(resp.products));
        SetCategoryCards(normalizeCards(resp.categories, 'categories'));
        setFastSearch(resp.special_project_parameters_json.fast_search_strings.parameters_list);
        throw new Error(e);
      }
    };
    load();
  }, [])

  // SetCatalogCards(normalizedCard)
  // const normalizedCard = CatalogCards.map((card) => {
  //   !card.catalog.images.length && card.catalog.images.push(placeholder)
  // });
  // SetCatalogCards(normalizedCard)
  // console.log(CatalogCards, CategoryCards, fastSearch);

  // console.log(user.email, user.password)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isSignIn ?
          <Main_page fastSearchParam={fastSearch}></Main_page>
          :
          <Auth_page />
        } />
        <Route path="/categories" element={
          isSignIn ?
            <Categories_page></Categories_page>
            :
            <Auth_page />
        } />
        <Route path="/favorite" element={
          isSignIn ?
            <Favorites_page></Favorites_page>
            :
            <Auth_page />
        } />
        <Route path="/cart" element={
          isSignIn ?
            <Cart_page></Cart_page>
            :
            <Auth_page />
        } />
        <Route path="/profile" element={
          isSignIn ?
            <Profile_page></Profile_page>
            :
            <Auth_page />
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;