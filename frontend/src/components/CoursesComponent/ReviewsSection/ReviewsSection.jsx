import React from 'react';
import './ReviewsSection.css';

const ReviewsSection = (props) => {
  const { reviews } = props;

  return (
    <div className="reviews-section">
      <h2>Reviews</h2>
      <div className="review-list">
        {reviews.map((review, index) => (
          <div className="review" key={index}>
            <div className="review-header">
              <span>{review.userName}</span>
              <span>Rating: {review.rating}</span>
            </div>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
