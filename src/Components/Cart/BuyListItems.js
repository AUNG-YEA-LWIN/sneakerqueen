import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { removeFromCart, adjustQty } from '../../redux/Shopping/ShoppingActions';
import { connect } from 'react-redux'

function BuyListItems({ item, removeFromCart, adjustQty }) {

    const [input, setInput] = useState(item.qty)

    const onChangeHandler = (e) => {
        setInput(e.target.value);
        adjustQty(item.id, e.target.value)

    }

    return (
        <div className='div1'>
            <div className='child-one'><img src={item.image} className='item-image' /></div>
            <div className='child-two'>
                <p className='item-caption'>{item.caption}</p>
                <p className='item-description'>{item.description}</p>
                <p className='item-gender'>{item.gender}</p>
                <label className='qty-text'>Qty </label>
                <input min='1' max='30' type='number' value={input} name='qty' className='qty one' onChange={onChangeHandler} />
            </div>
            <div className='child-three'>
                <label className='qty-text one'>Qty </label>
                <input min='1' max='30' type='number' value={input} name='qty' className='qty' onChange={onChangeHandler} />
                <p className='item-price'>${item.price.toFixed(2)}</p>
                <button className='remove-btn' onClick={() => removeFromCart(item.id)}>
                    <FontAwesomeIcon icon={faTrash} color='orange' className='fa-trash' />
                </button>
            </div>
        </div>
    )
}

const mapDispthToProps = dispatch => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        adjustQty: (id, value) => dispatch(adjustQty(id, value))
    }
}
export default connect(null, mapDispthToProps)(BuyListItems)