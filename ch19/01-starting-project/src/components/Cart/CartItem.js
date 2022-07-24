import { useDispatch } from 'react-redux';
import { cartAction } from '../../store';

import classes from './CartItem.module.css';

const CartItem = (props) => {

  const dispatch = useDispatch();

  const increaseHandler = (event) => {
    event.preventDefault();
    dispatch(cartAction.increse());
  }
  const decreaseHandler = (event) => {
    event.preventDefault();
    dispatch(cartAction.decrese());
  }

  const { title, quantity, total, price } = props.item;

  return (


    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseHandler}>-</button>
          <button onClick={increaseHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
