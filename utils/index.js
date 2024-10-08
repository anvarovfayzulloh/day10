export const fetchProducts = async () => {
  try {
    const responce = await fetch('https://fakestoreapi.com/products');
    const data = await responce.json();
    return data
  }
  catch (err) {
    console.log(err)
  }
}

export const fetchDetailProducts = async (id) => {
  try {
    const responce = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await responce.json();
    return data
  }
  catch (err) {
    console.log(err)
  }
}
