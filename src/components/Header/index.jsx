import React, { useState } from "react";
import {
  Button,
  ButtonDropdown,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Row,
} from "reactstrap";
import "./Header.scss";

Header.propTypes = {};

function Header() {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <div className="header">
      <Container>
        <Row className="justify-content-between">
          <Col>
            <h1>NỘP BÀI TẬP</h1>
          </Col>

          <Col>
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret color="primary">
                Info
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem disabled>Action</DropdownItem>
                <DropdownItem>Another Action</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Another Action</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Header;
