import React, { Component } from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import $ from "jquery";
import { Redirect } from "react-router-dom";

export class Intro extends Component {
  componentDidMount() {
    window.localStorage.setItem("username", this.props.stat);

    $(".input").keyup(function(event) {
      // console.log(this);
      // this.submitid();
      if ($(".input").text !== "") {
        $(".butt").removeAttr("disabled");
      } else {
      }
    });
  }

  state = {
    username: ""
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  updatered = e => {
    this.props.update(this.state.username);
    //console.log(this.state.username);
  };

  userfunc = () => {
    if (this.props.stat !== "") {
      return this.props.stat;
    } else {
      return window.localStorage.getItem("username");
    }
  };
  renderRedirect = () => {
    if (this.props.sta === "") {
      return <Redirect to="/" />;
    }
  };

  render() {
    return (
      <React.Fragment>
        <div>{this.renderRedirect()}</div>

        <div className="container">
          <h6>
            "Hey, {this.userfunc()}, You're just minutes away from setting up
            your ARM account.
          </h6>
          <h6>
            You're nearing the end of the set-up process now, but this next part
            is really important.
          </h6>
          <h6>
            We're going to ask you some questions to find out how you feel about
            risk. This will help you understand how you feel about investment
            and risk.
          </h6>
          <h6>
            {" "}
            Don't worry, this doesn't mean the risk level for your investment
            will be fixed. You'll have a chance to review and change it if you
            want to.
          </h6>
          <h6>
            Please think carefully about each answer you give, so we can be sure
            we're providing you with a good indication of your risk appetite."
          </h6>
        </div>

        <br />
        <Link
          style={{ color: "white", textDecoration: "none" }}
          to="/questions"
          //to={` /${window.localStorage.getItem("name")}`}
        >
          <input
            name="submit"
            id="submit"
            className="btn butt"
            style={{ backgroundColor: "#2f2525", color: "white" }}
            type="button"
            value="Continue"
          />
        </Link>
      </React.Fragment>
    );
  }
}
export default Intro;
