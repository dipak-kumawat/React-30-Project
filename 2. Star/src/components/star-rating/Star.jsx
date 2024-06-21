import { FaStar } from "react-icons/fa";
import React, { useState } from "react";
import './star.css'

export default function Star({ noOfStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    console.log(getCurrentIndex);
    setRating(getCurrentIndex)
  }

  function handleMouseEnter(getCurrentIndex) {
    console.log(getCurrentIndex);
    setHover(getCurrentIndex)
  }

  function handleMouseLeave(getCurrentIndex) {
    console.log(getCurrentIndex);
    setHover(rating)
  }

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1
        return (
          <FaStar
            key={index}
            className={`'star'${ index <= (hover || rating) ? 'active' : 'inactive'}`}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          />
        );
      })}
    </div>
  );
}
