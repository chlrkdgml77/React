import { useDispatch } from 'react-redux';
import { cartAction } from '../../store';

import classes from './CartButton.module.css';

const CartButton = (props) => {

  const dispatch = useDispatch();

  const showCartHandler = (event) => {
    event.preventDefault();
    dispatch(cartAction.isShowCart());
  }

  return (
    <button className={classes.button} onClick={showCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
