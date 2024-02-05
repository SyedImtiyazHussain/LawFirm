import React from "react";
import Icon from "../../Assets/card.png";

export default function Card(props) {
  return (
    <div
      className="card"
      style={{
        width: "400px",
        height: "400px",
        margin: "1rem",
        marginTop: "8rem",
        backgroundColor: "#2E2E2E",
      }}
    >
      <img
        src={Icon}
        class="card-img-top"
        alt="..."
        style={{
          position: "relative",
          width: "100px",
          height: "100px",
          margin: "1rem",
        }}
      />
      <div class="card-body">
        <h5
          class="card-title text-white"
          style={{
            fontSize: "24px",
            fontWeight: "600",
            marginTop: "1rem",
          }}
        >
          {props.title}
        </h5>
        <p
          class="card-text"
          style={{
            fontSize: "14px",
            fontWeight: "500",
            marginTop: "1.5rem",
            color: "gray",
          }}
        >{props.description}
        </p>
        <a href="/" class="btn btn-warning btn-lg" style={{
            borderRadius:"25px",
            marginTop:"2rem"
        }}>
          Read More
        </a>
      </div>
    </div>
  );
}
