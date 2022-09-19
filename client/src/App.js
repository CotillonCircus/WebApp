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
import { ShoppingCartProvider } from './components/Context/ShoppingCartContext';
import Test from './components/test';

function App() {
  return (
    <ShoppingCartProvider>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/tutorial' element={<Tutorial />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/aform' element={<Aform />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/details/:ID' element={<Details />} />
        <Route path='/details/:ID' element={<Details />} />
        <Route path='/test' element={<Test/>} />
      </Routes>
    </ShoppingCartProvider>
  );
}

export default App;
