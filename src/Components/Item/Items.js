import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { addToCart, loadCurrentItem } from '../../redux/Shopping/ShoppingActions';
import { Link } from 'react-router-dom'

function Items(props) {

    const { addToCart, product, loadCurrentItem } = props

    return (

        <div className='main' onClick={() => loadCurrentItem(product)}>
            <Link to={`/collections/${product.id}`} >
                <img src={product.image} className='collection-image' />
            </Link>
            <p className='ds-title1'>Gender: {product.gender}</p>
            <p className='ds-title2'>Price: ${product.price.toFixed(2)}</p>
            <div>
                <button className='cart-btn' onClick={() => addToCart(product.id)} >
                    <FontAwesomeIcon icon={faCartPlus} className='body-cart-icon' />
                    Add To Cart
                </button>
            </div>
        </div>

    )
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    }
}
export default connect(null, mapDispatchToProps)(Items)