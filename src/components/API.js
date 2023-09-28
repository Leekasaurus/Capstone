const API_URL = `https://fakestoreapi.com/`;

// fetch single product
export const getSingleProduct = async (id) => {
  try {
    const response = await fetch(`${API_URL}products/${id}`)
    const data = await response.json();
    return data;
  }
  catch(error){
    console.log(error)
  }
}



//get all products
export const getAllProducts = async () => {
  try {
    const response = await fetch(`${API_URL}products`)
    const data = await response.json();
    //console.log(data)
    return data;
  }
  catch(error){
    console.log(error)
  }
}

//sort the product

export const getSortProduct = async (sort = "asc") => {
  try {
    const response = await fetch(`${API_URL}products?sort=${sort}`)
    const data = await response.json();
    return data;
  }
  catch(error){
    console.log(error)
  }
}

export const getProduct = async (id) => {
  try {
    const response = await fetch(`${API_URL}products/${id}`)
    const data = await response.json();
    return data;
  }
  catch(error){
    console.log(error)
  }
}

//methods for categorization

export const getAllCategories = async () => {
  try {
    const response = await fetch(`${API_URL}products/categories`)
    const data = await response.json();
    return data;
  }
  catch(error){
    console.log(error)
  }
}

//specific category
export const getProductsByCategory = async (category) => {
  try {
    const response = await fetch(`${API_URL}products/category/${category}`)
    const data = await response.json();
    return data;
  }
  catch(error){
    console.log(error)
  }
}


// method of fetch for a new product

export const addNewProduct = async (product) => {
  try {
      const response = await fetch(`${API_URL}products`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(
              {
                  title: product.title,
                  price: product.price,
                  description: product.description,
                  category: product.category,
                  image: product.image
              }
          )
      });
      const data = await response.json();
      return data;
  }
  catch (error) {
      console.log(error);
  }
}

// delete product
export const deleteProduct = async (id) => {
  try {
    const response = await fetch(`${API_URL}products/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data;
  }
  catch (error) {
    console.log(error);
  }
}

//update products
export const updateProduct = async ({product}) => {
  try {
      const response = await fetch(`${API_URL}products`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(
              {
                  title: product.title,
                  price: product.price,
                  description: product.description,
                  category: product.category,
                  image: product.image
              }
          )
      });
      const data = await response.json();
      return data;
  }
  catch (error) {
      console.log(error);
  }
}
export const getAllUsers = async () => {
    try {
        const response = await fetch(`${API_URL}users`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

// Fetch method to get a single user
export const getUser = async (id) => {
    try {
        const response = await fetch(`${API_URL}users/${id}`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}
// Fetch method to update a user
export const updateUser = async (user) => {
    try {
        const response = await fetch(`${API_URL}users/${user.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: user.username,
                email: user.email,
                password: user.password,
                name:{
                    firstname: user.firstname,
                    lastname: user.lastname
                },
                address:{
                    street: user.street,
                    city: user.city,
                    zipcode: user.zipcode,
                    geo:{
                        lat: user.lat,
                        lng: user.lng
                    }
                },
                phone: user.phone,
            })
        });
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}


// Fetch method to limit results
export const getLimitedUsers = async (limit) => {
    try {
        const response = await fetch(`${API_URL}users?limit=${limit}`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

// Fetch method to limit results
export const getSortedUsers = async (sort) => {
    try {
        const response = await fetch(`${API_URL}users?sort=${sort}`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

// Fetch method to sort results
export const getSortedUsersByPrice = async (sort) => {
    try {
        const response = await fetch(`${API_URL}users?sort=${sort}`);
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.log(error);
    }
}

export const login = async (user) => {
  try {
    const response = await fetch(`${API_URL}auth/login`,{
      method:'POST',
      headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            username: user.username,
            password: user.password
          }),
    });
    const data = await response.json();
    return  data;
  }
  catch (error) {
    console.log(error);
  }
}