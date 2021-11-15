import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const AllOrders = () => {
    
  const [all, setAllOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);
  return (
    <div className="container">
      <Table responsive>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Address</th>
            <th>phone</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {all.map((order) => (
            <tr>
              <td>{order.orderId}</td>
              <td>{order.name}</td>
              <td>{order.address}</td>
              <td>{order.phone}</td>
              <td>
                <Button className="btn btn-success me-2">Approve</Button>
                <Button className="btn btn-danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AllOrders;
