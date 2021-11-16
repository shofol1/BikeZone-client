import { Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

import Header from "../../Header/Header";
import { Link, NavLink } from "react-router-dom";
import Footer from "../../Footer/Footer";
const Explore = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    fetch("https://secure-lowlands-55193.herokuapp.com/allproducts", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  return (
    <div>
      <Header></Header>
      <Grid container spacing={2}>
        {allProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{ py: 5 }}>
              <img
                className="img-fluid"
                style={{ width: "400px", height: "300px" }}
                src={product.picture}
                alt=""
              />
              <Typography variant={"h5"}>{product.name}</Typography>
              <Typography variant={"h5"}>{product.price}</Typography>
              <Typography variant={"h6"}>{}</Typography>

              <Typography variant="caption" display="block" gutterBottom>
                <p>{product.des}</p>
              </Typography>
              <NavLink as={Link} to="/purchase">
                <Button
                  variant={"contained"}
                  sx={{ backgroundColor: "#5CE7ED" }}
                >
                  Buy Now
                </Button>
              </NavLink>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Footer></Footer>
    </div>
  );
};

export default Explore;
