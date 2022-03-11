import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/Shopping/ShoppingActions';
import {useNavigate} from 'react-router-dom';
import './SingleItem.css'
 
function SingleItem(props) {

    const { addToCart, currentItem } = props

    const navigate = useNavigate()

    return (
        <div className='single-item'>
            <div className='main sg'>
                <div>
                <img src={currentItem.image} className='sgi-image' />
                </div>
                <div className='sg-txt' >
                <p className='company-name sg'>SNEAKER COMPANY</p>
                <h5 className='sg-caption'><i>Caption:</i> {currentItem.caption}</h5>
                <p><i>Description: </i>{currentItem.description}</p>
                <p><i>Gender:</i> {currentItem.gender}</p>
                <p><i>Price: </i> ${currentItem.price.toFixed(2)}</p>
                <div className='sg-btns'>
                    <button className='cart-btn' onClick={() => addToCart(currentItem.id)} >
                        <FontAwesomeIcon icon={faCartPlus} className='body-cart-icon' />
                        Add To Cart
                    </button>
                    <button className='back-btn' onClick={() => navigate(-1)}>Back</button>
                </div>
                </div>
            </div>
        </div>

    )
}

const mapStateToProps = state => {
    return {
        currentItem: state.shop.currentItem
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem)