import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store";

import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const dispatch = useDispatch();

  
  const { title, price, description, id } = props;
  
  const addItemHandler = () => {
    dispatch(cartAction.addItemToCart({
      id: id,
      title: title,
      price: price,
      description: description
    }));
  }
  return (
    <Fragment>
          <li className={classes.item}>
            <Card>
              <header>
                <h3>{title}</h3>
                <div className={classes.price}>${price.toFixed(2)}</div>
              </header>
              <p>{description}</p>
              <div className={classes.actions}>
                <button onClick={addItemHandler}>Add to Cart</button>
              </div>
            </Card>
          </li>
    </Fragment>
  );
};

export default ProductItem;
