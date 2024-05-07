import Products from './components/Products';
import Header from './components/Header';
import Nav from './components/Nav';
import useProducts from './hooks/useProducts';
import useFilter from './hooks/useFilter';
import { CartContextProvider } from './context/CartContext';

function App() {
  const { products } = useProducts();
  const { filterProducts } = useFilter();

  const filteredProducts = filterProducts(products);

  return (
    <>
      <CartContextProvider>
        <Nav />

        <Header filteredProducts={filteredProducts} />

        <Products products={filteredProducts} />
      </CartContextProvider>
    </>
  );
}

export default App;
