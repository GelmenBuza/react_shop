import Main_page from './Pages/Main_page'
import './App.css'
import { useEffect, useState } from 'react'
import reservData from '../data.json';
import { BrowserRouter, Routes, Route } from "react-router";
import Profile_page from './Pages/Profile_page';
import Auth_page from './Pages/Auth_page';

const getInitialEmail = () => {
    try {
        const data = localStorage.getItem('user');
        return data ? JSON.parse(data).email : '';
    } catch {
        return '';
    }
};

const getInitialPassword = () => {
    try {
        const data = localStorage.getItem('user');
        return data ? JSON.parse(data).password : '';
    } catch {
        return '';
    }
};

function App() {
  const [catalogCards, setCatalogCards] = useState([])
  const [categoriesCards, setCategoriesCards] = useState([])
  const [fastSearch, setFastSearch] = useState([]);
  const [email, setEmail] = useState(getInitialEmail);
  const [password, setPassword] = useState(getInitialPassword);

  useEffect(() => {
    console.log('Email:',email, 'Password:',password);
    localStorage.setItem('user', JSON.stringify({email, password}));
  }, [email, password]);
  const isSignIn = email && password;
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

  const auth = (email, password) => {
    setEmail(email);
    setPassword(password);
  }

  console.log(email, password)

  const logout = () => {
    setEmail('');
    setPassword('');
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isSignIn ? 
          <Main_page catalog={catalogCards} categories={categoriesCards} fastSearchParam={fastSearch}></Main_page>
          :
          <Auth_page auth={auth}/>
          } />
        <Route path="/profile" element={
          isSignIn ?
          <Profile_page email={email} logout={logout}></Profile_page>
          :
          <Auth_page auth={auth}/>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;