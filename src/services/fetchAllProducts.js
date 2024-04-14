const productsEndpoint = 'https://dummyjson.com/products';

async function fetchAllProducts() {
  try {
    const response = await fetch(productsEndpoint);
    const data = await response.json();
    const productsRes = data.products;
    return productsRes
      ? productsRes.map(
          ({ id, title, description, price, brand, category, thumbnail }) => ({
            id,
            title,
            description,
            price,
            brand,
            category,
            thumbnail,
          })
        )
      : [];
  } catch (error) {
    console.log('Error when fetching data: ', error);
  }
}

export default fetchAllProducts;
