import React, { useState, useEffect } from 'react';
import './GridNav.css';
import MenuItems from './MenuItems';
import logoimage from '../../images/logo.png';
import myacc from '../../images/image-avatar.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux'


function GridNavigation(props) {

    const { countCartItems, cart } = props;

    const navigate = useNavigate()

    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        let count = 0;
        cart.forEach(item => {
            count += item.qty
        });

        setCartCount(count);
    }, [cart, cartCount])

    var a;
    const showHide = () => {

        if(a==1){
            document.getElementById('ph-navi').style.display = 'block';
            return a=0;
        }else {
            document.getElementById('ph-navi').style.display = 'none';
            return a=1;
        }
    }
    return (
        <div>
        <div className='grid-navigation'>
            <div className='bars'>
                <FontAwesomeIcon icon={faBars} size='2x' color='grey' className='bars-icon' onClick={showHide} />
            </div>
            <div className='logo-image'>
                <Link to='/'><img src={logoimage} alt='logoimage' /></Link>
            </div>
            <MenuItems />

            {/* Start Buy Products Section */}

            <div className='added-cart'> 

                    <FontAwesomeIcon icon={faCartPlus} size='2x' color='grey' className='cart-icon' onClick={() => navigate('mycart')} />

                <div className='cart-num'><span>{cartCount}</span></div>

                {/* Start Dynamic Items Lists Section */}

                <div className='buy-menu' id='buy-menu'>
                    <div className='parent-a'>
                        <p className='title'>Cart Lists</p>
                    </div>
                    <hr className='hr' />
                    {/* Start Dynamic Items Come in Here */}

                    {cart.length === 0 && <div className='text-empty'>Cart is Empty</div>}
                    <div className='item-list'>
                        {cart.map((item) => (
                            <div key={item.id} className='row'>
                                <div><img src={item.image} className='item-image' /></div>
                                <div className='item-genders'>{item.gender}</div>
                                <div className='item-qty'>
                                    {item.qty} x ${item.price.toFixed(2)}
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* End Dynamic Items Come in Here */}

                    {/* Start Dynamic Calculate Total Price Section */}
                    {/* <hr className='hr' /> */}

                    <div className='total-amount'>
                        {/* {cartItems.length !== 0 && (
                            <span>Total Amount = $ {itemPrice.toFixed(2)}</span>
                        )} */}
                    </div>

                    {/* End Dynamic Calculate Total Price Section */}

                </div>
                {/* End Dynamic Items Lists Section */}
            </div>
            {/* End Buy Products Section */}
            <div className='my-account'>
                <Link to='/profile'><img src={myacc} alt='myavatar' className='avatar' /></Link>
            </div>
        </div>
        <div className='phone-navigation' id='ph-navi'>
            <MenuItems />
        </div>
    </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(GridNavigation);
