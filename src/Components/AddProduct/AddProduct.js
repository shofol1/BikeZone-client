import { TextField } from "@mui/material";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
const AddProduct = () => {
  const [products, setProducts] = useState([]);
  const handleBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...products };
    newLoginData[field] = value;
    setProducts(newLoginData);
  };
  const handleProduct = (e) => {
    const name = products.name;
    const price = products.price;
    const des = products.des;
    const picture = products.picture;
    saveProducts(name, price, des, picture);

    e.preventDefault();
  };
  const saveProducts = (name, price, des, picture) => {
    const productsInfo = { name, price, des, picture };
    console.log(productsInfo);
    fetch("https://secure-lowlands-55193.herokuapp.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(productsInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("inserted Successfully");
        }
      });
  };
  return (
    <div>
      <h1>Add A Product</h1>
      <form onSubmit={handleProduct}>
        <TextField
          sx={{ width: "75%", m: 1 }}
          onBlur={handleBlur}
          type="text"
          id="standard-basic"
          label="Product  Name"
          name="name"
          variant="standard"
        />
        <TextField
          sx={{ width: "75%", m: 1 }}
          onBlur={handleBlur}
          type="text"
          id="standard-basic"
          label="Product  Price"
          name="price"
          variant="standard"
        />
        <TextField
          sx={{ width: "75%", m: 1 }}
          onBlur={handleBlur}
          type="text"
          id="standard-basic"
          label="Product  Description"
          name="des"
          variant="standard"
        />
        <TextField
          sx={{ width: "75%", m: 1 }}
          onBlur={handleBlur}
          type="text"
          id="standard-basic"
          label="Product  Image"
          name="picture"
          variant="standard"
        />
        <br />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default AddProduct;
