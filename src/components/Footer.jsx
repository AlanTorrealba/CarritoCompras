import "./Footer.css";
import {useFilters} from '../hook/useFilters'
import { useCart } from "../hook/useCart";
export function Footer() {
// const {filter} = useFilters()
// const {cart} = useCart()
  return (
    <footer className="footer">
      {/* {JSON.stringify(filter, null, 2)} */}
      {/* {JSON.stringify(cart)} */}
      <h4>
        Prueba react *-<span>@Alan</span>
      </h4>
      <h5>Shopping car con useContext & useReducer</h5>
    
    </footer>
  );
}
