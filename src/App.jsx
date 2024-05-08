import Products from './components/Products';
import Header from './components/Header';
import Nav from './components/Nav';
import useProducts from './hooks/useProducts';
import useFilter from './hooks/useFilter';
import { CartContextProvider } from './context/CartContext';

function App() {
  // From 'useProducts' custom hook im obtaining the products.
  const { products } = useProducts();
  // From 'useFilter' custom hook im obtaining the function to filter products.
  const { filterProducts } = useFilter();

  // Filtering products in order to passing it to components that need
  // products data.
  const filteredProducts = filterProducts(products);

  return (
    <>
      {/* 
        Wrapping all components with CartContextProvider so i can use all states and functions
      in that provider.
        Im wrapping all because the Component 'Products' need the function 'addToCart' 
      */}
      <CartContextProvider>
        {/* The cart is located in the Nav component. */}
        <Nav />

        <Header filteredProducts={filteredProducts} />

        <Products products={filteredProducts} />
      </CartContextProvider>
    </>
  );
}

export default App;
