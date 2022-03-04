import React from 'react';
import { connect } from 'react-redux';
import Items from '../Item/Items';

function boypage({ products }) {

  return (
    <div className='data-storage'>
      {products.map((product, index) => product.gender === 'Boy' ?
        <Items product={product} key={index} /> : null)}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    products: state.shop.products,
  }
}

export default connect(mapStateToProps)(boypage)
