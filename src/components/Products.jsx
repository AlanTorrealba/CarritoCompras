import React from "react";
import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./icons";
import { useCart } from "../hook/useCart";
export function Products({ products }) {
  const { addCart, cart, removeFromCart } = useCart();
  const checkProductinCart = (products) => {
    return cart.some((item) => item.id === products.id);
  };
  return (
    <main className="products">
      <ul>
        {products.slice(0, 10).map((product) => {
          const isProductInCart = checkProductinCart(product);
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> - $ {product.price}
              </div>
              <div>
                <button
                  style={{ backgroundColor: isProductInCart ? "red" : "#09f" }}
                  onClick={() =>
                    isProductInCart ? removeFromCart(product) : addCart(product)
                  }
                >
                  {isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
