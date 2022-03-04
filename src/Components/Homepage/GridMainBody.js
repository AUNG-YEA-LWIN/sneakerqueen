import React, { useState } from 'react';
import './MainBody.css';
import largeProductOne from '../../images/image-product-1.jpg';
import largeProductTwo from '../../images/image-product-2.jpg';
import largeProductThree from '../../images/image-product-3.jpg';
import largeProductFour from '../../images/image-product-4.jpg';
import smallProductOne from '../../images/product-1.jpg';
import smallProductTwo from '../../images/product-2.jpg';
import smallProductThree from '../../images/product-3.jpg';
import smallProductFour from '../../images/product-4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function GridMainBody() {

    const [image, setImage] = useState(largeProductOne)

    const navigate = useNavigate()

    return (
        <div className='home'>
            <div className='main-body'>
                <div className='body-one'>
                    <div className='main-item-photo'><img src={image} className='lg-photo' /></div>
                    <div className='items'>
                        <div className='item-photo' onClick={() => setImage(largeProductTwo)}><img src={smallProductTwo} className='sm-photo' /></div>
                        <div className='item-photo' onClick={() => setImage(largeProductThree)}><img src={smallProductThree} className='sm-photo' /></div>
                        <div className='item-photo' onClick={() => setImage(largeProductFour)}><img src={smallProductFour} className='sm-photo' /></div>
                        <div className='item-photo' onClick={() => setImage(largeProductOne)}><img src={smallProductOne} className='sm-photo' /></div>
                    </div>
                </div>
                <div className='body-two'>
                    <div className='text-body'>
                        <p className='company-name'>SNEAKER COMPANY</p>
                        <h1>Fall Limited Edition Sneakers</h1>
                        <p>  These low-profile sneakers are your perfect casual wear
                            companion.Featuring a durable rubber outer sole,they'll
                            withstand everything the weather can offer.</p>
                        <div className='price'>
                            <h2 className='price-value'>$125.00</h2><h2 className='ds-btn'>50%</h2>
                        </div>
                        <div className='btn-gp'>
                            <div>
                                <button className='cart-btn home' onClick={() => navigate('/collections')}>
                                    <FontAwesomeIcon icon={faCartPlus} className='body-cart-icon' />
                                    Click Here To Shop Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GridMainBody;
