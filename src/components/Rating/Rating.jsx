import React from 'react';
import Star from '../Star/Star';
import "./style.scss";

const Rating = ({ activeStars = 0 }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(<Star key={i} color={i < activeStars ? '#FF6060' : '#E3E3E3'} />);
  }

  return (
    <div className='rating-box'>
      {stars}
    </div>
  );
}

export default Rating;
