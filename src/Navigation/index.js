import React from "react";
import Navbar from "react-bootstrap/Navbar";

function Menu({ currentPage }) {
  return (
    <Navbar bg="dark" variant="ligth">
      <Navbar.Brand href="#home">{currentPage}</Navbar.Brand>
      <Navbar.Brand href="/">Home</Navbar.Brand>
    </Navbar>
  );
}
export default Menu;
