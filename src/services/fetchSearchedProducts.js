const productsSearchEndpoint = 'https://dummyjson.com/products/search?q=';

async function fetchSearchedProducts(productToSearch) {
  if (!productToSearch) return;

  const searchProductCall = productsSearchEndpoint + productToSearch;

  try {
    const response = await fetch(searchProductCall);
    const data = await response.json();
    const searchProductsRes = data.products;

    return searchProductsRes
      ? searchProductsRes.map(
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
    console.log(`Error searching product ${productToSearch}: `, error);
  }
}

export default fetchSearchedProducts;
