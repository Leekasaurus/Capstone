import {useState, useEffect} from 'react';
import { getProduct } from './API';
import {  useParams } from 'react-router-dom';


const Product =  (addToCart) => {
    const id = useParams()?.id;
    const [product, setProduct] = useState(null);
    
    useEffect(() => {
        const getSingleProduct = async () => {
            const res = await getProduct(id)
            console.log(res)
            setProduct(res)
        }
        getSingleProduct();
    }, [product, id])
    return (
        <div>
        { product && <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <img src={product.image} alt={product.title} />
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
            }
        </div>
    );
}

export default Product;