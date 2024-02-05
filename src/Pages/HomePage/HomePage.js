import React from "react";
import Hero from "../../Assets/HeroImg.png";
import Icon from "../../Assets/icon.png"
// import styles from "./HomePage.module.css";

export default function Pages() {
  return (
    <div className="container-fluid d-flex justify-content-around align-items-center"style={{ backgroundColor: 'black' }}>
      <div>
        <h1 className="text-white" style={{
          marginTop:"1rem",
        }}>
          You don’t have to <br />
          <h1 className="fw-bolder text-white" style={{
            marginTop:"1rem"
          }}>Fight them Alone.</h1>
        </h1>
        <p style={{
          color:"gray",
          marginTop:"2rem",
          marginBottom:"3rem"
        }}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
          <br /> curabitur sodales conubia ut inceptos faucibus himenaeos tortor{" "}
          <br /> eget, hac massa gravida arcu interdum proin curae.
        </p>
        <div className="input-group mb-3">
          <input
            className="form-control"
            placeholder="Enter your email address"
            style={{
              borderRadius: "25px 0px 0px 25px",
              height: "74px",
              backgroundColor: "gray",
              color: "black",
              border:"black",
            }}
          />
          <button
            style={{
              width:"100px",
              borderRadius: "0px 25px 25px 0px",
              height: "74px",
              backgroundColor: "#E3B748",
              color: "black",
              fontWeight:"bold",
              border:"black",
            }}
            className="input-group-text"
          >
            Let's Talk
          </button>
        </div>
      </div>
      <img src={Hero} alt="Hero" />
    </div>
  );
}
