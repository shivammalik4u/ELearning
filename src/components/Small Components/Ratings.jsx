import React from 'react'

const Ratings = ({ rating }) => {
    const starCount = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
  
    
    const stars = Array.from({ length: starCount }, (_, index) => {
      if (index < fullStars) {
        return <i key={index} className="bi bi-star-fill text-warning"></i>;
      } else if (hasHalfStar && index === fullStars) {
        return <i key={index} className="bi bi-star-half text-warning"></i>;
      } else {
        return <i key={index} className="bi bi-star text-warning"></i>;
      }
    });
  
    return(
        <span>{stars} {rating}</span>
    ) 
  };

export default Ratings;