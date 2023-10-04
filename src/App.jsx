import { Products } from "../src/components/Products";
import { products as initialProducts } from "./mocks/products.json";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { IS_DEVELOPMENT } from "./config";
import { useFilters } from "./hook/useFilters.js";
import { Car } from "./components/Car";
import { CartProvider } from "./context/cart";
function App() {
  const { filter, filterProducts } = useFilters();
  const filteredProducts = filterProducts(initialProducts);
  return (
    <CartProvider>
      <Header />
      <Car/>
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer filters={filter}></Footer>}
    </CartProvider>
  );
}

export default App;
