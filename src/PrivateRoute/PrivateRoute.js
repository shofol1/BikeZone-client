import React from 'react';
import { CircularProgress } from "@mui/material";
import useAuth from '../Hooks/useAuth';
import { Redirect, Route } from 'react-router';
const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
      return <CircularProgress></CircularProgress>;
    }
    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;