import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const AllOrders = () => {
  const [all, setAllOrders] = useState([]);
  useEffect(() => {
    fetch("https://secure-lowlands-55193.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [all]);
  return (
    <div className="container">
      <Table responsive>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Address</th>
            <th>phone</th>
          </tr>
        </thead>
        <tbody>
          {all.map((order) => (
            <tr>
              <td>{order.orderId}</td>
              <td>{order.name}</td>
              <td>{order.address}</td>
              <td>{order.phone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AllOrders;
