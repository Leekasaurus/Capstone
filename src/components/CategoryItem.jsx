import { useState, useEffect } from 'react';
//import Home from './Home';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from './API';

function CategoryItem() {

  const [fetchedProducts, setFetchedProducts] = useState([])
  const categoryId = useParams();

  useEffect(()=>{
    async function fetchedProducts(){
      const products = await getProductsByCategory(categoryId);
      setFetchedProducts(products);
    }
    fetchedProducts();
  },[categoryId])

  return (
    fetchedProducts.map((product) => {
      <div>
        <h2>{product.title}</h2>
      </div>
    })
  );
}


export default CategoryItem;
