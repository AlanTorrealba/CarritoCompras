import { useId } from "react";
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./icons";
import { useCart } from "../hook/useCart";
import "./Cart.css";

function CartItem({ thumbnail, price, title, quantity, addCart }) {
  return (
    <li >
      <img src={thumbnail} alt="cart" />
      <div>
        <strong>{title}</strong> -$
        {quantity == 1 ? price : price * quantity}
      </div>
      <footer>
        <small >{quantity}</small>
        <button onClick={addCart}>+ </button>
      </footer>
    </li>
  );
}

export function Car() {
  const cartCheckBoxId = useId();
  const { clearCart, cart, addCart } = useCart();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckBoxId}>
        <CartIcon />
      </label>
      <input id={cartCheckBoxId} type="checkbox" hidden />
      <aside className="cart">
        <ul>
          {cart.map((product) => (
            <CartItem
             key={product.id} 
             addCart={()=> addCart(product)}
             {...product} />
          ))}
        </ul>
        <button
          onClick={() => {
            clearCart();
          }}
        >
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}
