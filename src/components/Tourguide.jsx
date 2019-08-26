import React, { Component } from "react";
import Image from "../images/1516943362Superman-Logo-PNG-HD-Transparent-Background.png";
import $ from "jquery";
import "./Tourguide.css";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";

export class Tourguide extends Component {
  componentDidMount = () => {
    $(".card").click(function(event) {
      // console.log(this);
      // this.submitid();
      $(".butt").removeAttr("disabled");
      console.log();

      window.localStorage.removeItem("name");
      let send = $(this).attr("id");

      window.localStorage.setItem("name", send);
      //.state.send = send;

      $(".card")
        .not(this)
        .css("color", "black")
        .css("backgroundColor", "white");
      $(this).css("backgroundColor", "#585158");
      $(this).css("color", "white");

      // alert("mounted");
    });
    // this.props.name(send);
  };

  submitid = () => {
    //  let namm = window.localStorage.getItem("name");
    //alert(namm);
    let namm = window.localStorage.getItem("name");
    this.props.name(namm);
    //console.log("hiii");
  };
  render() {
    return (
      <div>
        <div>
          <h1>Welcome to ARM</h1>

          <h3>
            <Typed
              strings={["Choose Your Tour Bot"]}
              startDelay={1000}
              typeSpeed={20}
            />
          </h3>
        </div>

        <div style={{ marginTop: 50, textAlign: "center" }}>
          <div className="container">
            <div className="row" style={{ marginTop: "30px" }}>
              <div className="col-md-3">
                <a href="#" style={{ textDecoration: "none", color: "black" }}>
                  <div
                    className="panel panel-default card-view card"
                    id="Marilyn"
                    onClick={this.submitid}
                    style={{ paddingBottom: 7 }}
                  >
                    <div>
                      <div className="hov">
                        <img className="card-img-top" src={Image} alt="" />
                      </div>
                      <div className="card-body">
                        <h3>Marilyn</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-3">
                <a href="#" style={{ textDecoration: "none", color: "black" }}>
                  <div
                    className="panel panel-default card-view card"
                    style={{ paddingBottom: 7 }}
                    id="Jerry"
                    onClick={this.submitid}
                  >
                    <div>
                      <div className="hov">
                        <img className="card-img-top" src={Image} alt="" />
                      </div>
                      <div className="card-body">
                        <h3>Jerry</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-3">
                <a href="#" style={{ textDecoration: "none", color: "black" }}>
                  <div
                    className="panel panel-default card-view card"
                    id="Adeola"
                    style={{ paddingBottom: 7 }}
                    onClick={this.submitid}
                  >
                    <div>
                      <div className="hov">
                        <img className="card-img-top" src={Image} alt="" />
                      </div>
                      <div className="card-body">
                        <h3>Adeola</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-3">
                <a href="#" style={{ textDecoration: "none", color: "black" }}>
                  <div
                    className="panel panel-default card-view card"
                    id="Simeon"
                    style={{ paddingBottom: 7 }}
                    onClick={this.submitid}
                  >
                    <div>
                      <div className="hov">
                        <img className="card-img-top" src={Image} alt="" />
                      </div>
                      <div className="card-body">
                        <h3>Simeon</h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/intro"
            //to={` /${window.localStorage.getItem("name")}`}
          >
            <input
              name="submit"
              id="submit"
              className="btn butt"
              style={{ backgroundColor: "#2f2525", color: "white" }}
              type="button"
              value="Continue"
              disabled
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default Tourguide;
