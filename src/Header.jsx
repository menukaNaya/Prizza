import { use } from "react";
import { CartContext } from "./contexts";
import { Link } from "@tanstack/react-router";

export function Header() {
  const [cart] = use(CartContext);
  return (
    <nav>
      <Link to="/">
        <h1 className="logo">Prizza : Especially for Programmers</h1>
      </Link>
      <div className="nav-cart">
        🛒<span className="nav-cart-number">{cart.length}</span>
      </div>
    </nav>
  );
}
