import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  var today = new Date();
  var date = today.getFullYear();
  return (
    <div className="bg-dark text-white p-2 mt-5">
      <Container className="pt-2 d-flex justify-content-between">
        <p className="textRes">
          ©<span className="text-secondary">BikesZone</span> , All rights
          reserved {date}. Designed by :-{" "}
          <a target="_blank" rel="noreferrer" href="https://shofoll.com/">
            shofol
          </a>{" "}
        </p>
        <div className="d-flex align-items-center ">
          <h4 className="ms-3 textHide">
            Bikes<span className="text-danger">Zone</span>
          </h4>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
