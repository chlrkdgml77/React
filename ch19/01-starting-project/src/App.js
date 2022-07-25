import {useSelector} from "react-redux"

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {

  const show = useSelector((state) => {return state.cart.showCart});

  return (
    <Layout>
      {show && <Cart />}
      <Products/>
    </Layout>
  );
}

export default App;
