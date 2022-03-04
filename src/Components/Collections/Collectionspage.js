import React from 'react';
import { connect } from 'react-redux'
import Items from '../Item/Items';

function Collections({ products }) {

  return (
    <div className='data-storage'>
      {products.map((product, index) => <Items product={product} key={index} />)}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    products: state.shop.products,
  }
}

export default connect(mapStateToProps)(Collections)

