import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";

import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { Spinner } from "react-bootstrap";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [spacing, setSpacing] = React.useState(2);
  const { isLoading, setIsLoading } = useAuth();
  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;
  useEffect(() => {
    fetch("http://localhost:5000/products", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);
  return (
    <>
      {products.length === 0 ? (
        <div className="text-center">
          <Spinner animation="grow" variant="primary" />
        </div>
      ) : (
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4}>
              <Paper
                style={{ textAlign: "center" }}
                elevation={3}
                sx={{ py: 5 }}
              >
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
                <NavLink as={Link} to={`/purchase/${product._id}`}>
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
      )}
    </>
  );
};

export default Products;
