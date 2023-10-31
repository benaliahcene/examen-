import React from "react";
import { Container, Button } from "react-bootstrap";
import { FaHome, FaUsers, FaGlobe } from "react-icons/fa";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const menuStyle = {
  position: "sticky",
  top: "0",
  zIndex: "1000"
};

const Menu = (props) => (
  <Container fluid className="p-5 mb-2 bg-light text-dark" style={menuStyle}>
    
    <Link to="/summary">
      <Button variant="primary" className="m-2">
        <FaHome /> Summary
      </Button>
    </Link>

    <Link to="/users">
      <Button variant="primary" className="m-2">
        <FaUsers /> Users
      </Button>
    </Link>

    <Link to="/countries">
      <Button variant="primary" className="m-2">
        <FaGlobe /> Countries
      </Button>
    </Link>
  </Container>
);

export default Menu;
