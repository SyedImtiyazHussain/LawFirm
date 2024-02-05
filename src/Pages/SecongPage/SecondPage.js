import React from "react";
import Card from "../../Components/Card/Card";
import Img1 from "../../Assets/Img1.png";
import Img2 from "../../Assets/img2.png";
import Img3 from "../../Assets/img3.png";
import Img4 from "../../Assets/img4.png";
import Img5 from "../../Assets/img5.png";
import Img6 from "../../Assets/img6.png";



export default function SecondPage() {
  return (
    <>
      <div
        className="container-fluid text-white d-flex justify-content-around"
        style={{
          margin: "4rem",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "54px",
              width: "387px",
              height: "174px",
              fontWeight: "600",
            }}
          >
            Let's Introduce Ourself
          </h1>
        </div>
        <div
          style={{
            height: "100",
            width: "1px",
            backgroundColor: "white",
          }}
        ></div>
        <div>
          <div
            style={{
              marginRight: "10rem",
            }}
          >
            <h2
              style={{
                fontSize: "32px",
              }}
            >
              Criminal Lawyer
            </h2>
            <p
              style={{
                fontSize: "18px",
                color: "gray",
              }}
            >
              Amet minim mollit non deserunt ullamco est
              <br />
              sit aliqua dolor do amet sint. Velit officia consequatduis
              <br />
              enim velit mollit Exercitation.
            </p>
          </div>
        </div>
      </div>
      <h2
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          fontSize: "54px",
          fontWeight: "600",
          marginTop: "8rem",
        }}
      >
        Why Choose us?
      </h2>
      <div className="container-fluid d-flex justify-content-center">
        <Card
          title={"98% Success Rate"}
          description={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
          }
        />
        <Card title={"100% Success Rate"} description={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
          } />
        <Card title={"95% Success Rate"} description={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
          } />
      </div>
      <div style={{
        display:"flex",
        justifyContent:"center",
        marginTop:"8rem",
        color:"white",
      }}><h1>Area of Practices</h1></div>


      <div className="container-fluid d-flex justify-content-center">
      <div class="card bg-dark text-white" style={{
            width:"800px",
            height:"200px",
            margin:"1rem",
            marginTop:"4rem",
        }}>
        <img src={Img1} class="card-img" alt="Img1"  />
            <div class="card-img-overlay" style={{
                    display:"flex",
                    alignItems:"flex-end",
                    justifyContent:"center"}}>
                <p class="card-text">Business Law</p>
            </div>
        </div>

        <div class="card bg-dark text-white" style={{
            width:"300px",
            height:"365px",
            margin:"1rem",
            marginTop:"4rem"
        }}>
        <img src={Img2} class="card-img" alt="Img1"  />
            <div class="card-img-overlay" style={{
                    display:"flex",
                    alignItems:"flex-end",
                    justifyContent:"center"}}>
                <p class="card-text">Partnership Law</p>
            </div>
        </div>
        
      </div>

      <div className="container-fluid d-flex justify-content-center">
        <div class="card bg-dark text-white" style={{
            width:"300px",
            height:"365px",
            margin:"1rem",
        }}>
        <img src={Img3} class="card-img" alt="Img1"  />
            <div class="card-img-overlay" style={{
                    display:"flex",
                    alignItems:"flex-end",
                    justifyContent:"center"}}>
                <p class="card-text">Real Estate Law</p>
            </div>
        </div>

        <div class="card bg-dark text-white" style={{
            width:"800px",
            height:"340px",
            margin:"1rem",
        }}>
        <img src={Img4} class="card-img" alt="Img1"  />
            <div class="card-img-overlay" style={{
                    display:"flex",
                    alignItems:"flex-end",
                    justifyContent:"center"}}>
                <p class="card-text">Business Law</p>
            </div>
        </div>
        
      </div>

      <div className="container-fluid d-flex justify-content-center">
      <div class="card bg-dark text-white" style={{
            width:"800px",
            height:"340px",
            margin:"1rem",
        }}>
        <img src={Img5} class="card-img" alt="Img1"  />
            <div class="card-img-overlay" style={{
                    display:"flex",
                    alignItems:"flex-end",
                    justifyContent:"center"}}>
                <p class="card-text">Landlord Disputes</p>
            </div>
        </div>

        <div class="card bg-dark text-white" style={{
            width:"300px",
            height:"365px",
            margin:"1rem",
        }}>
        <img src={Img6} class="card-img" alt="Img1"  />
            <div class="card-img-overlay" style={{
                    display:"flex",
                    alignItems:"flex-end",
                    justifyContent:"center"}}>
                <p class="card-text">Elder Abuse</p>
            </div>
        </div>
        
      </div>

      
    </>
  );
}
