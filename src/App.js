import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './componant/footer/Footer';
import Header from './componant/header/Header';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import Cartpage from './pages/cart/CartPage';
import AuthorPage from './pages/author/AuthorPage';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import ContactPage from './pages/contact/ContactPage';
import BookPage from './pages/book/BookPage';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/cart' element={<Cartpage/>}/>
      <Route path='/author' element={<AuthorPage/>}/>
      <Route path='/contact' element={<ContactPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/book/:id' element={<BookPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
