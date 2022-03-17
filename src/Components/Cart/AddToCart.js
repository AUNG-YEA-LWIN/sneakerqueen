import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import BuyListItems from './BuyListItems';
import './Cart.css'

function AddToCart({ cart }) {

  const [totalPrice, setTotalPrice] = useState(0)
  const [totalItems, setTotalItems] = useState(0)

  useEffect(() => {

    let items = 0;
    let price = 0;

    cart.forEach(item => {
      items += item.qty;
      price += item.qty * item.price
    })

    setTotalPrice(price)
    setTotalItems(items)

  }, [cart, totalPrice, totalItems, setTotalItems, setTotalPrice])


  return (
    <div className='cart-page'>
    <div className='check-body'>
        <p className='check-header'>Cart CheckList</p>
        {totalItems === 0 ? <div className='text-empty'>Your cart is empty</div> : <div>
          <p className='check-item'>Total items  : {totalItems === 1 ? totalItems + ' item' : totalItems + ' items'} </p>
          <p className='check-item'>Total price : $ {totalPrice.toFixed(2)}</p>
          <button className='check-btn'>CheckOut Now!!!</button></div>
        }
      </div>

      <div className='item-storage'>
        {cart.map(item =>
          <div className='cart-item' key={item.id}>
            <BuyListItems item={item} />
          </div>)}
      </div>

    <div className='check-body mobile'>
        <p className='check-header'>Cart CheckList</p>
        {totalItems === 0 ? <div className='text-empty'>Your cart is empty</div> : <div>
          <p className='check-item'>Total items  : {totalItems === 1 ? totalItems + ' item' : totalItems + ' items'} </p>
          <p className='check-item'>Total price : $ {totalPrice.toFixed(2)}</p>
          <button className='check-btn'>CheckOut Now!!!</button></div>
        }
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    cart: state.shop.cart
  }
}

export default connect(mapStateToProps)(AddToCart)