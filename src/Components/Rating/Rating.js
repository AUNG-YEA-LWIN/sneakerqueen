import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './Rating.css'

function Rating() {
  const [rating, setRating] = useState(null)
  const [hover, setHover] = useState(null)

  return (
    <div className='star-div'>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <input type='radio'
              name='rating'
              className='star-rating'
              value={ratingValue}
              onClick={() => setRating(ratingValue)} />
            <FontAwesomeIcon
              icon={faHeart}
              className='star-icon'
              color={ratingValue <= (hover || rating) ? 'red' : 'lightgrey'}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)} />
          </label>)
      })}
    </div>
  )
}

export default Rating