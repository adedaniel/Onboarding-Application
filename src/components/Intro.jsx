import React, { Component } from "react";
import { Link } from "react-router-dom";
import Typed from "react-typed";
import $ from "jquery";

export class Intro extends Component {
  componentDidMount() {
    window.localStorage.setItem("name", this.props.sta);

    $(".input").keyup(function(event) {
      // console.log(this);
      // this.submitid();
      if ($(".input").text !== "") {
        $(".butt").removeAttr("disabled");
      } else {
      }
    });

    //   <div ng-app="">
    //   <div>
    //     <form action="#" class="custom-form">
    //       <h3 class="text-center">Animated Form</h3>
    //       <div class="form-group" ng-class="{'not-empty': userName.length}">
    //         <input type="text" class="form-control" name="user"  id="user" ng-model="userName"/>
    //         <label for="user" class="animated-label">Username</label>
    //       </div>
    //       <div class="form-group" ng-class="{'not-empty': passWord.length}">
    //         <input type="password" class="form-control" name="pass"  id="pass" ng-model="passWord"/>
    //         <label for="pass" class="animated-label">Password</label>
    //       </div>
    //       <div class="submit">
    //         <button class="btn btn-primary btn-block" disabled>Send</button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  }

  state = {
    username: "",
    email: ""
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  updatered = e => {
    this.props.update(this.state.username, this.state.email);
    //console.log(this.state.username);
  };
  render() {
    return (
      <React.Fragment>
        <div style={{ marginBottom: "60px", marginTop: "100px" }}>
          <h3>
            <Typed
              strings={[
                "Hi, I'm " +
                  window.localStorage.getItem("name") +
                  ", I'll be guiding you through the process"
              ]}
              typeSpeed={10}
            />
          </h3>

          <h4>What should I call you?</h4>
        </div>
        <form onSubmit>
          <input
            type="text"
            style={{ width: "340px" }}
            placeholder="Your Name"
            name="username"
            className="input"
            value={this.state.username}
            onChange={this.onChange}
            onKeyUp={this.updatered}
            required
          />
          <br />
          <input
            style={{ marginTop: "40px" }}
            type="email"
            placeholder="E-mail"
            name="email"
            className="input"
            value={this.state.email}
            onChange={this.onChange}
            onKeyUp={this.updatered}
            required
          />

          <br />
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="/info"
            //to={` /${window.localStorage.getItem("name")}`}
          >
            <input
              name="submit"
              id="submit"
              className="btn butt"
              style={{
                backgroundColor: "#2f2525",
                color: "white",
                marginTop: "40px"
              }}
              type="submit"
              value="Continue"
              disabled
            />
          </Link>
        </form>
      </React.Fragment>
    );
  }
}
export default Intro;
