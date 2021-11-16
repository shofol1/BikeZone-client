import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
const AllReviews = () => {
  const [allReviews, setAllReviews] = useState([]);
  useEffect(() => {
    fetch("https://secure-lowlands-55193.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setAllReviews(data));
  }, []);
  return (
    <div className="container mt-5 bg-secondary mb-5">
      <h4 className="text-center text-white p-4 mb-3">All Reviews</h4>
      {allReviews.map((review) => (
        <Card className="text-center mb-4">
          <Card.Header>{review.comment}</Card.Header>
          <Card.Body>
            <Card.Title>Stars</Card.Title>
            <Card.Text>{review.rating}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default AllReviews;
