import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <section>
      <h1>Products</h1>
      <ul>
        <li><Link to="/products/p1">item1</Link></li>
        <li><Link to="/products/p2">item2</Link></li>
        <li><Link to="/products/p3">item3</Link></li>
      </ul>
    </section>
  )
}

export default Products