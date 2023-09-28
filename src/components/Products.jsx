
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getProductsByCategory } from './API'


const Products = (categories, cart, addToCart ) => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([]);

  //console.log(products)
  useEffect(()=>{
    const getAllData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const results = await response.json()
        setProducts(results)
      } catch (err) {
        console.error(err)
      }
    }
    getAllData()

  },[])

   const  sortByPrice = async (direction) => {
    const sorted = direction === 'asc'? products.toSorted((a, b) => a.price - b.price) : products.toSorted((a, b) => b.price - a.price)
    Products(sorted)
  }

 

  return (
    <div>
      <h1>Products</h1>
      <div className='categories'>
        {categories.map(category => (
          <button
            key={category}
            onClick={async () => {
              const filtered = await getProductsByCategory(category)
              setProducts(filtered)
            }}
          >
            {category}
          </button>
      
        ))}
        <button onClick={() => location.reload()}>All Products</button>
      </div>

      <div className='sort-buttons'>
        <p>Sort by Price:</p>
        <button onClick={() => {sortByPrice('desc')}}>Low to High</button>
        <button onClick={() => {sortByPrice('asc')}}>High to Low</button>
      </div>

      {products.map(product => (
        <div
          key={product.id}
          onClick={() => navigate(`/products/${product.id}`)}
        >
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <img src={product.image} alt={product.title} />
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}

      {cart.length && (
        <>
          <h2>Cart</h2>
          <ul>
            {cart.map((product, index) => (
              <li key={index}>{product.title}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}


export default Products;