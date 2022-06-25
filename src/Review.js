import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const next = () => {
    if (index === people.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const previous = () => {
    if (index === 0) {
      setIndex(people.length - 1);
    } else {
      setIndex(index - 1);
    }
  };
  const suprise = () => {
    const number = Math.floor(Math.random() * people.length);
    setIndex(number);
  };
  return (
    <div className='section'>
      <article className='review'>
        <div className='img-container'>
          <img className='person-img' src={image} alt='' />
          <FaQuoteRight className='quote-icon' />
        </div>
        <h4 className='authour'>{name}</h4>
        <h4 className='job'>{job}</h4>
        <p className='info'>{text}</p>
        <div className='footer'>
          <div className='prev-btn' onClick={previous}>
            <FaChevronLeft />
          </div>
          <div className='next-btn' onClick={next}>
            <FaChevronRight />
          </div>
        </div>
        <button className='random-btn' onClick={suprise}>
          suprise me
        </button>
      </article>
    </div>
  );
};

export default Review;
