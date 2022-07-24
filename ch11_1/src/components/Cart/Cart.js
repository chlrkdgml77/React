import React from 'react'
import Modal from '../UI/Modal'
import styles from "./Cart.module.css"

const Cart = (props) => {


  return (
    <Modal onConfirm={props.onConfirm}>
      <div className={styles.cart}>
        <div>Total Price</div>
        <div>40</div>
      </div>
      <div className={styles.button}>
        <button className={styles.btn1} onClick={props.onConfirm}>Close</button>
        <button className={styles.btn2} onClick={props.onConfirm}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart