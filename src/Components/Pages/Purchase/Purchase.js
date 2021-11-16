import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Header from "../../Header/Header";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router";
import { TextField } from "@mui/material";
import useAuth from "../../../Hooks/useAuth";
const Purchase = () => {
  const { pid } = useParams();
  const { saveOrder, user, isLoading, setIsLoading } = useAuth();
  const [singleProduct, setSignleProduct] = useState([]);
  const [orders, setOrders] = useState({});
  useEffect(() => {
    fetch(`https://secure-lowlands-55193.herokuapp.com/products/${pid}`)
      .then((res) => res.json())
      .then((data) => setSignleProduct(data));
  }, []);
  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newOrder = { ...orders };
    newOrder[field] = value;
    console.log(newOrder);
    setOrders(newOrder);
  };
  const handleOrder = (e) => {
    const name = orders.name;
    const email = orders.email;
    const phone = orders.phone;
    const address = orders.address;
    const orderId = orders.orderId;
    saveOrder(name, email, phone, address, orderId);
    e.preventDefault();
  };

  return (
    <div>
      <Header></Header>
      <Row className="container pt-5 mx-auto">
        <Col xm={12} md={6}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={singleProduct.picture} />
            <Card.Body>
              <Card.Title>{singleProduct.name}</Card.Title>
              <Card.Title>{singleProduct.price} tk</Card.Title>
              <Card.Text>{singleProduct.des}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xm={12} md={6}>
          <h2>Confirm Order</h2>
          <form onSubmit={handleOrder}>
            <input
              onBlur={handleBlur}
              name="orderId"
              className="w-50"
              value={singleProduct._id}
            />{" "}
            <br />
            <br />
            <input onBlur={handleBlur} name="email" value={user.email} /> <br />
            <br />
            <br />
            <br />
            <TextField
              name="name"
              onBlur={handleBlur}
              id="outlined-basic"
              label="Name"
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              name="phone"
              onBlur={handleBlur}
              id="outlined-basic"
              label="Phone"
              variant="outlined"
            />
            <br />
            <br />
            <TextField
              onBlur={handleBlur}
              name="address"
              id="outlined-basic"
              label="Address"
              variant="outlined"
            />
            <br />
            <br />
            <Button type="submit"> Order now</Button>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default Purchase;
