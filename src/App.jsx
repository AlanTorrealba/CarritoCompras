import {Products} from '../src/components/Products'
import {products} from './mocks/products.json'
function App() {

  return (
    <>
     <Products products={products}/>
    </>
  )
} 

export default App
