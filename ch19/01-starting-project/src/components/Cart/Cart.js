import { cartAction } from "../../store";
import { useSelector } from "react-redux";

import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  
  const amount = useSelector((state) => {
    return state.cart.amount;
  });
  const price = useSelector((state) => {
    return state.cart.amount * 10;
  });

  const show = useSelector((state) => {
    return state.cart.showShop;
  });

  const cartItems = useSelector((state) => {
    return state.cart.items;
  });

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {show &&
          cartItems.map((item) => (
            <CartItem item={{ title: item.name, quantity: item.amount, total: price, price: item.price }} />
          ))}
      </ul>
    </Card>
  );
};

export default Cart;
