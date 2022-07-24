import React, { Fragment, useState } from 'react'
import Header from './components/Header/Header'
import CurrentPlayer from './components/Barcelona/CurrentPlayer'
import Cart from './components/Cart/Cart'

const App = () => {

  const hideCartHandler = () => {
    setIsShowCart(false);
  }
  const showCartHandler = () => {
    setIsShowCart(true);
  }

  const [isShowCart, setIsShowCart] = useState(false);

  return (
    <Fragment>
      {isShowCart && <Cart onConfirm={hideCartHandler}></Cart>}
      <Header></Header>
      <CurrentPlayer onConfirm={showCartHandler}></CurrentPlayer>
    </Fragment>
  )
}

export default App