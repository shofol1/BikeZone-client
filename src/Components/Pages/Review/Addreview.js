import { jsonEval } from "@firebase/util";
import { TextField, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Container, Spinner, Table } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";

const Addreview = () => {
  const { saveReviews } = useAuth();
  const [review, setReview] = useState({});
  const [reviewCard, setReviewCard] = useState([]);
  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newReview = { ...review };
    newReview[field] = value;
    setReview(newReview);
  };
  const handleReview = (e) => {
    const comments = review.comment;
    const ratings = review.rating;
    saveReviews(comments, ratings);
    e.preventDefault();
  };

  useEffect(() => {
    fetch("https://secure-lowlands-55193.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviewCard(data));
  }, [review]);
  return (
    <div>
      <form>
        <TextField
          id="outlined-basic"
          name="comment"
          onBlur={handleBlur}
          type="text"
          label="Add a Comment"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          onBlur={handleBlur}
          className="ms-2"
          name="rating"
          type="text"
          label="Rating"
          variant="outlined"
        />
        <Button
          className="ms-2"
          type="submit"
          onClick={handleReview}
          variant="contained"
        >
          Submit
        </Button>
      </form>

      {reviewCard.length == 0 ? (
        <div>
          <Spinner animation="grow" variant="primary" />
        </div>
      ) : (
        <Container>
          <Table responsive>
            <thead>
              <tr>
                <th>id</th>
                <th>Comment</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {reviewCard.map((rview) => (
                <tr>
                  <td>{rview._id}</td>
                  <td>{rview.comment}</td>
                  <td>{rview.rating}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      )}
    </div>
  );
};

export default Addreview;
