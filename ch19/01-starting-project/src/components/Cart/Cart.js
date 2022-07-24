import { cartAction } from '../../store';
import { useSelector } from 'react-redux';

import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {

  const amount = useSelector((state) => {return state.cart.amount})
  const price = useSelector((state) => {return state.cart.amount * 6})

  const show = useSelector((state) => {return state.cart.showShop});

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {show && <CartItem
          item={
            { title: 'Test Item', quantity: amount, total: price, price: 6 }
          }
        />}
      </ul>
    </Card>
  );
};

export default Cart;
