import React from "react";
import "./userHeader.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import logo from "../Images/img2.png";

function UserHeader() {
  const [showRight, setShowRight] = useState(false);

  const handleCloseRight = () => setShowRight(false);
  const handleShowRight = () => setShowRight(true);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <div className="top_nav" style={{ width: "100%" }}>
        <Row>
          <Col className="py-1">
            <div className="d-flex align-items-center h-100">
              <Link to={"/user-dashboard"} className="ms-3">
                <img
                  src={logo}
                  className="rounded-circle bg-dark object-fit-contain logo-container"
                  alt="logo"
                />
              </Link>
            </div>
          </Col>

          <Col className=" d-flex justify-content-end align-items-center py-1">
            <div className=" d-flex align-items-center justify-content-center me-3">
              <button type="button" className="btn" onClick={handleShowRight}>
                <h1 className=" text-dark me-2 ">
                  <i className="fa-solid fa-circle-user fa-lg"></i>
                </h1>
              </button>
            </div>
          </Col>
        </Row>
      </div>

      <Offcanvas show={showRight} onHide={handleCloseRight} placement="end">
        <Offcanvas.Header className="bg-dark d-flex" closeButton>
          <Offcanvas.Title className="text-white">User Profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="bg-dark">
          <div
            className="ms-5"
            style={{
              backgroundColor: "black",
              height: "400px",
              width: "300px",
              borderRadius: "5%",
            }}
          >
            <div className="d-flex align-items-center justify-content-center mt-4">
              <label htmlFor="admin_profile">
                <input
                  id="admin_profile"
                  type="file"
                  style={{ display: "none" }}
                />
                <img
                  className="mt-2"
                  src="https://tse3.mm.bing.net/th?id=OIP.2hAVCZRMcBjsE8AGQfWCVQHaHa&pid=Api&P=0&h=180"
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                  }}
                  alt="profile"
                />
              </label>
            </div>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <p className="text-white">ADD PICTURE</p>
            </div>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <TextField
                className="bg-white"
                id="filled-basic"
                type="email"
                label="email"
                variant="filled"
              />
            </div>

            <div className="d-flex align-items-center justify-content-center mt-2">
              <TextField
                className="bg-white"
                id="filled-basic"
                type="password"
                label="password"
                variant="filled"
              />
            </div>
            <div className="d-flex align-items-center justify-content-center mt-3">
              <button
                className="btn btn-info"
                style={{ borderStyle: "dotted" }}
              >
                Update Profile
              </button>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default UserHeader;
