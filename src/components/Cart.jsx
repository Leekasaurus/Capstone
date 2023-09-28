import PropTypes from 'prop-types'

Cart.propTypes = {
  cart: PropTypes.object,
  setCart: PropTypes.func
}



function Cart( Cart , setCart) {
    const deleteFromCart = (product) => {
        const newCart = cart.filter((item) => item.id !== product.id)
        setCart(newCart)
    }
    
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((product, index) => (
          <li key={index}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <img src={product.image} alt={product.title} />
            <button onClick={() => deleteFromCart(product)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;