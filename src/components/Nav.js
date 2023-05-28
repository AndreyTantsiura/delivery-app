import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="nav">
      <Link to="/shop">Shop</Link>
      <span>|</span>
      <Link to="/shopping-cart">Shopping Cart</Link>
    </div>
  );
};
