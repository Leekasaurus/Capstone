import { useState,useEffect } from 'react'
import Login from './components/Login'
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { getAllCategories } from "./components/API";
import Directory from './components/Directory'
import Cart from './components/Cart'
import Home from './components/Home'
import Product from './components/Product';
import Products from './components/Products';
import CategoryItem from './components/CategoryItem';
import './style.css'


function App() {

    const [categories, setCategories] = useState([])
    const [login, setLogin] = useState(false)
    const [cart, setCart] = useState([])
  

    useEffect(() => {
      async function getCategories () {
        try {
          const categoriesData = await getAllCategories()
          setCategories(categoriesData)
        } catch (error) {
          console.error('Error fetching products:', error)
        }
      }
      getCategories()
    }, [])
  

  
    const logout = () => {
      setLogin(false)
    }
  
    const addToCart = product => {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  
    return (
      <Router>
        <div id='app'>
          <div className='navbar'>
            {login ? (
              <Link to='/account/login'>
                <button className='link' onClick={logout}>
                  Logout
                </button>
              </Link>
            ) : (
              <Link to='/account/login'>Login</Link>
            )}
            <Link to='/cart'>Cart ({cart.length})</Link>
            <Link to='/products'>Products</Link>
            <Link to='/'>Home</Link>
          </div>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/products'
            element={
              <Products
                categories={categories}
                cart={cart}
                addToCart={addToCart}
              />
            }
          />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
          <Route
            path='/directory'
            element={<Directory categories={categories} />}
          />
          <Route path='/directory/:categoryId' element={<CategoryItem />} />
          <Route path='/account/login' element={<Login setLogin={setLogin} />} />
          <Route
            path='/products/:id'
            element={<Product addToCart={addToCart} />}
          />
        </Routes>
      </Router>
    )
}
export default App