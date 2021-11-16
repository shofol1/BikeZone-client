import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";
import Button from "react-bootstrap/Button";
const MyOrders = () => {
  const { user } = useAuth();
  const [allOrders, setAllorders] = useState([]);
  const [myOrders, setMyOrders] = useState([]);
  useEffect(() => {
    fetch("https://secure-lowlands-55193.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setAllorders(data));
  }, [allOrders]);

  useEffect(() => {
    const result = allOrders.filter((order) => order.email === user.email);
    setMyOrders(result);
  }, [allOrders]);
  const handleDelete = (id) => {
    fetch(`https://secure-lowlands-55193.herokuapp.com/orders/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Are You Sure that You want to cancel?");
        }
      });
  };
  return (
    <div>
      {allOrders.length == 0 ? (
        <div>
          <Spinner animation="grow" variant="primary" />
        </div>
      ) : (
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
            {myOrders.map((myOrder) => (
              <tr>
                <td>{myOrder.orderId}</td>
                <td>{myOrder.name}</td>
                <td>{myOrder.address}</td>
                <td>{myOrder.phone}</td>
                <td>
                  <Button onClick={() => handleDelete(myOrder._id)}>
                    Cancel
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default MyOrders;
