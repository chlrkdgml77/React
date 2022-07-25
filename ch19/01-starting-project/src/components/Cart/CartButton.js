import { useDispatch, useSelector } from 'react-redux';
import { cartAction } from '../../store';

import classes from './CartButton.module.css';

const CartButton = (props) => {

  const dispatch = useDispatch();

  const showCartHandler = (event) => {
    event.preventDefault();
    dispatch(cartAction.isShowCart());
  }

  const itemAmount = useSelector((state) => {return state.cart.itemAmount});

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemAmount}</span>
    </button>
  );
};

export default CartButton;
