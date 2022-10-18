import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Admin from './pages/Admin/Admin';
import Products from './pages/Products/Products';
import Tutorial from './pages/Tutorial/Tutorial';
import Aform from './pages/AForm/AForm';
import Contact from './pages/Contact/Contact';
import Details from './pages/Details/Details';
import MyOrders from './pages/MyOrders/MyOrders';
import { ShoppingCartProvider } from './components/Context/ShoppingCartContext';
import SuccessPage from './pages/SuccessPage/SuccessPage';
import AuthList from './adminComponents/AuthList/AuthList';
import UserList from './adminComponents/UserList/UserList';
import EditCarrousel from './components/EditCarrousel/EditCarrousel';
import NewProduct from './components/NewProduct/NewProduct';
import ProductsList from './adminComponents/ProductsList/ProductsList';
import AdminOrders from './adminComponents/AdminOrders/AdminOrders';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const {isLoading} = useAuth0()

  if (isLoading) return <div></div>
  
  return (
    <ShoppingCartProvider>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/tutorial' element={<Tutorial />} />
        <Route path='/aform' element={<Aform />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/details/:ID' element={<Details />} />
        <Route path='/myOrders' element={<MyOrders/>}/>
        <Route path='/success' element={<SuccessPage/>}/>
        <Route path='/admin/' element={<Admin />}>
          <Route path="auth" element={<AuthList />}/>
          <Route path="users" element={<UserList/>}/>
          <Route path="carrousell" element={<EditCarrousel/>}/>
          <Route path="prods" element={<ProductsList/>}/>
          <Route path="newProd" element={<NewProduct/>}/>
          <Route path="sells" element={<AdminOrders/>}/>
        </Route>
      </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
