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
      // this.props.setopt();
      $(".butt").removeAttr("disabled");
      //console.log();

      // window.localStorage.removeItem("name");
      // let send = $(this).attr("id");

      // window.localStorage.setItem("name", send);
      //.state.send = send;

      // $(".card")
      //   .not(this)
      //   .css("backgroundColor", "white")
      //   .css("color", "black");
      // $(this).css("backgroundColor", "#585158");
      // $(this).css("color", "white");

      // alert("mounted");
    });

    $(".butt").click(function(event) {
      // console.log(this);
      // this.props.setopt();
      //  $(".next").val("Finish");

      $(".card")
        .css("backgroundColor", "white")
        .css("color", "black");
    });
  }
  componentDidUpdate() {
    console.log("update");
  }
  state = {
    questions: [
      "When I invest my money, my primary goal is to",
      "Volatility means how much an investment will rise or fall within a particular time frame. More volatile investments generally offer greater growth potential in the long term than less volatile investments, but they may produce greater losses. How much volatility are you comfortable with?",
      "Investments in which the principal is '100% safe' sometimes earn less than the inflation rate. This means that, while no money is lost, there could be a loss of purchasing power. With respect to your investment goals, which of the following is most true? "
    ],
    options: [
      [
        "Preserve my investment. I want to minimize the risk of my investment losing value",
        "Emphasize current income. My investments should be relatively safe",
        "Generate current income. However, I would also like the value of my investments to grow over time. I am also willing to expose my investments to a slight level of risk",
        "Have the value of my investments grow over time. However, I would like to generate some current income. I am willing to expose my investment to a moderate level of risk",
        "Have the value of my investments grow substantially above inflation over time. I do not need to generate current income. I am willing to expose my investments to a considerable level of risk to achieve high returns."
      ],
      [
        "As little as possible. My focus is on current income and stability of value even if it means that my total returns are relatively small",
        "Some. I am willing to accept the occasional losses in value as long as my investments have some potential for growth over time",
        "Moderate. I am willing to take moderate risk as long as my investments have a greater potential for growth over time",
        "A considerable amount. I am willing to take substantial risk in pursuit of significantly higher total returns"
      ],
      [
        "My money should be '100% safe', even if it means my returns do not keep up with inflation",
        "It is important that the value of my investments keep pace with inflation. I am willing to risk an occasional depreciation in value so that my investments may grow at par with inflation over time",
        "My investment should grow somewhat faster than inflation. I am willing to accept some risk in order to achieve this goal. ",
        "It is important that my investments grow faster than inflation. I am willing to accept a considerable amount of risk in order to achieve this"
      ]
    ]
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

  renderRedirect = () => {
    if (this.props.stat === "") {
      console.log(this.props.stat);
      return <Redirect to="/info" />;
    }
  };

  render() {
    return (
      <React.Fragment>
        <div>{this.renderRedirect()}</div>
        <div
        //style={{ backgroundColor: "lightgrey" }}
        >
          <div className="container">
            <div
              className="progress"
              style={{ marginTop: "20px", marginBottom: "20px" }}
            >
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: (this.props.setnum / 3) * 100 + "%" }}
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              />
            </div>
            <h6> Question {this.props.setnum + 1} </h6>
            <h5 style={{ fontSize: "14px" }}>
              {this.state.questions[this.props.setnum]}
            </h5>
            <br />
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to={this.props.pagechecker}
              //to={` /${window.localStorage.getItem("name")}`}
            >
              <div
                className={this.classer(0)}
                //              className="panel panel-default card-view card"
                id="Marilyn"
                onClick={this.props.setopt1}
              >
                {this.state.options[this.props.setnum][0]}
              </div>

              <div
                className={this.classer(1)}
                //              className="panel panel-default card-view card"
                id="Marilyn"
                onClick={this.props.setopt2}
              >
                {this.state.options[this.props.setnum][1]}
              </div>

              <div
                className={this.classer(2)}
                //              className="panel panel-default card-view card"
                id="Marilyn"
                onClick={this.props.setopt3}
              >
                {this.state.options[this.props.setnum][2]}
              </div>

              <div
                className={this.classer(3)}
                //              className="panel panel-default card-view card"
                id="Marilyn"
                onClick={this.props.setopt4}
              >
                {this.state.options[this.props.setnum][3]}
              </div>

              <div
                className={this.classer(4)}
                //              className="panel panel-default card-view card"
                id="Marilyn"
                onClick={this.props.setopt5}
              >
                {this.state.options[this.props.setnum][4]}
              </div>
            </Link>
            <span>
              <input
                name="submit"
                id="submit"
                className="btn butt"
                onClick={this.props.decrement}
                style={{
                  backgroundColor: "#2f2525",
                  color: "white",
                  float: "left",
                  width: "250px"
                }}
                type="button"
                // disabled
                value="Back"
                disabled={this.props.setbuttb}
              />
            </span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Intro;
