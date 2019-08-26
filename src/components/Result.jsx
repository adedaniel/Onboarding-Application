/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import "./Tourguide.css";
import { Redirect } from "react-router-dom";

import $ from "jquery";

export class Intro extends Component {
  componentDidMount() {
    window.localStorage.setItem("username", this.props.stat);

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
        .css("backgroundColor", "white")
        .css("color", "black");
      $(this).css("backgroundColor", "#585158");
      $(this).css("color", "white");

      // alert("mounted");
    });

    $(".butt").click(function(event) {
      // console.log(this);
      // this.submitid();
      //  $(".next").val("Finish");

      $(".card")
        .css("backgroundColor", "white")
        .css("color", "black");
    });
  }
  componentDidUpdate() {
    console.log("update");
  }
  // state = {
  //   answered: 0,

  //   questions: [
  //     "When I invest my money, my primary goal is to",
  //     "Volatility means how much an investment will fall or rise within a particular time frame. More volatile investments generally offer greater growth potential in the long term than less volatile investments, but they may produce greater losses. How much volatility are you comfortable with?",
  //     "Investments in which the principal is '100% safe' sometimes earn less than the inflation rate. This means that, while no money is lost, there could be a loss of purchasing power. With respect to your investment goals, which of the following is most true? "
  //   ],
  //   options: [
  //     [
  //       "Preserve my investment. I want to minimize the risk of my investment losing value",
  //       "Emphasize current income. My investments should be relatively safe",
  //       "Generate current income. However, I would also like the value of my investments to grow over time. I am also willing to expose my investments to a slight level of risk",
  //       "Have the value of my investments grow over time. However, I would like to generate some current income. I am willing to expose my investment to a moderate level of risk",
  //       "Have the value of my investments grow substantially above inflation over time. I do not need to generate current income. I am willing to expose my investments to a considerable level of risk to achieve high returns."
  //     ],
  //     [
  //       "As little as possible. My focus is on current income and stability of value even if it means that my total returns are relatively small",
  //       "Some. I am willing to accept the occasional losses in value as long as my investments have some potential for growth over time",
  //       "Moderate. I am willing to take moderate risk as long as my investments have a greater potential for growth over time",
  //       "A considerable amount. I am willing to take substantial risk in pursuit of significantly higher total returns"
  //     ],
  //     [
  //       "My money should be '100% safe', even if it means my returns do not keep up with inflation",
  //       "It is important that the value of my investments keep pace with inflation. I am willing to risk an occasional depreciation in value so that my investments may grow at par with inflation over time",
  //       "My investment should grow somewhat faster than inflation. I am willing to accept some risk in order to achieve this goal. ",
  //       "It is important that my investments grow faster than inflation. I am willing to accept a considerable amount of risk in order to achieve this"
  //     ]
  //   ]
  // };
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
  increment = () => {
    // let inc =
    this.state.answered++;

    //this.setState({ inc });
    //this.state.answered++;
    // console.log(this.state.answered);
  };
  classer = i => {
    if (this.state.options[this.props.setnum][i]) {
      return "panel panel-default card-view card stuff";
    }
  };

  state = {
    redirect: false
  };
  setRedirect = () => {
    // this.setState({
    //   redirect: !this.state.redirect
    // });
  };
  renderRedirect = () => {
    if (this.props.score === 0) {
      return <Redirect to="/info" />;
    }
  };

  render() {
    return (
      <React.Fragment>
        <h1>Your Risk score is</h1>
        <h1>{this.props.score}</h1>
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
            // onClick={this.props.reset}
            style={{ backgroundColor: "#2f2525", color: "white" }}
            type="button"
            value="Retake Questions"
          />
        </Link>

        <div>{this.renderRedirect()}</div>
      </React.Fragment>
    );
  }
}
export default Intro;
