import { useState } from 'react';

import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_ITEM = [
  {id: "p1", price: 10, title: "messi", description: "barcelona1"},
  {id: "p2", price: 8, title: "pedri", description: "barcelona2"},
  {id: "p3", price: 6, title: "dejong", description: "barcelona3"},
]

const Products = (props) => {

  const [items, setItems] = useState(DUMMY_ITEM);

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_ITEM.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
        />
        ))}
      
      </ul>
    </section>
  );
};

export default Products;

// key={item.id}
// id={item.id}
// title={item.title}
// price={item.price}
// description={item.description}
