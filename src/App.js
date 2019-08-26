import React, { Component } from "react";
import Tourguide from "./components/Tourguide.jsx";
import Intro from "./components/Intro.jsx";
import Info from "./components/Info.jsx";
import Questions from "./components/Questions.jsx";
import Result from "./components/Result.jsx";
import $ from "jquery";

import { BrowserRouter as Router, Route } from "react-router-dom";

//import uuid from "uuid";
import "./App.css";
//import Axios from "axios";
class App extends Component {
  state = {
    tourguide: "",
    username: "",
    email: "",
    answered: 0,
    totalscore: 0,

    options: {
      1: 0,
      2: 0,
      3: 0
    }
  };

  tourguide = tourguidename => {
    this.state.tourguide = tourguidename;

    //console.log(this.state.tourguide);
    // console.log(name);
  };
  retnam = (username, email) => {
    //console.log(username);
    this.state.username = username;
    this.state.email = email;
    console.log(this.state.email);
    //console.log(this.state.username);
    //console.log(this.state.tourguide);
    // console.log(name);
  };
  // retquest = () => {
  //   this.state.questions.one = "FE";
  //   console.log(this.state.questions.one);
  // };

  increm = () => {
    if (this.state.answered >= 3) {
      for (let i = 1; i >= 5; i++) {
        this.state.options[i] = 0;
      }

      this.state.answered = 0;
      let counters = this.state.answered;

      counters++;
      this.setState({ answered: counters });
    } else {
      let counters = this.state.answered;

      counters++;
      this.setState({ answered: counters });
    }
    //this.state.answered++;
    //console.log(this.state.answered);

    // return this.state.answered;
  };
  decrem = () => {
    if (this.state.answered === 0) {
    } else {
      let counters = this.state.answered;

      counters--;
      this.setState({ answered: counters });

      //this.state.answered++;
      // console.log(this.state.answered);
    }

    // console.log("Thank You God");
  };

  increme = () => {
    if (this.state.answered > 2) {
      return 0;
    } else {
      return this.state.answered;
    }
    //  return 1;
  };

  pageckecker = () => {
    if (this.state.answered === 2) {
      // console.log(this.state.answered);
      // $(".next").attr("value", "Thank God VERY MUCH");
      //console.log($(".next").attr("value"));
      return "/result";
    } else {
      //  console.log(this.state.answered);

      return "#";
    }
  };
  settex = () => {
    if (this.state.answered === 2) {
      return "Finish";
    } else {
      //console.log(this.state.answered);

      return "Next";
    }
  };
  setoption1 = () => {
    //let owt = this.state.answered;

    if (this.state.answered >= 3) {
      for (let i = 1; i >= 5; i++) {
        this.state.options[i] = 0;
      }

      this.state.answered = 0;
      let counters = this.state.answered;

      counters++;
      this.setState({ answered: counters });
    } else {
      let counters = this.state.answered;

      counters++;
      this.setState({ answered: counters });
    }
    this.state.options[this.state.answered + 1] = 1;

    //  console.log(this.state.options[1]);
  };
  setoption2 = () => {
    if (this.state.answered >= 3) {
      for (let i = 1; i >= 5; i++) {
        this.state.options[i] = 0;
      }

      this.state.answered = 0;
      let counters = this.state.answered;

      counters++;
      this.setState({ answered: counters });
    } else {
      let counters = this.state.answered;

      counters++;
      this.setState({ answered: counters });
    }
    this.state.options[this.state.answered + 1] = 2;
  };
  setoption3 = () => {
    if (this.state.answered >= 3) {
      for (let i = 1; i >= 5; i++) {
        this.state.options[i] = 0;
      }

      this.state.answered = 0;
      let counters = this.state.answered;

      counters++;
      this.setState({ answered: counters });
    } else {
      let counters = this.state.answered;

      counters++;
      this.setState({ answered: counters });
    }
    this.state.options[this.state.answered + 1] = 3;
  };
  setoption4 = () => {
    if (this.state.answered >= 3) {
      for (let i = 1; i >= 5; i++) {
        this.state.options[i] = 0;
      }

      this.state.answered = 0;
      let counters = this.state.answered;

      counters++;
      this.setState({ answered: counters });
    } else {
      let counters = this.state.answered;

      counters++;
      this.setState({ answered: counters });
    }
    this.state.options[this.state.answered + 1] = 4;
  };
  setoption5 = () => {
    if (this.state.answered >= 3) {
      for (let i = 1; i >= 5; i++) {
        this.state.options[i] = 0;
      }

      this.state.answered = 0;
      let counters = this.state.answered;

      counters++;
      this.setState({ answered: counters });
    } else {
      let counters = this.state.answered;

      counters++;
      this.setState({ answered: counters });
    }
    this.state.options[this.state.answered + 1] = 5;
  };

  totalscore = () => {
    let sum = 0;
    for (let key in this.state.options) {
      sum += this.state.options[key];
    }

    return sum;
  };

  setbutt = () => {
    // if (this.state.options[this.state.answered + 1] === 0) {
    //   console.log(this.state.options[this.state.answered + 1]);
    //   return true;
    // } else {
    //   return false;
    // }
  };

  setbuttb = () => {
    if (this.state.answered === 0 || this.state.answered === 3) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <div>
                  <Tourguide name={this.tourguide} />
                </div>
              </React.Fragment>
            )}
          />
          <Route
            //exact
            path="/intro"
            // component={Intro}
            render={props => (
              <Intro
                {...props}
                sta={this.state.tourguide}
                update={this.retnam}
              />
            )}
            // render={() => <div>sfvfv</div>}
          />
          <Route
            //exact
            path="/info"
            // component={Intro}
            render={props => (
              <Info
                {...props}
                sta={this.state.tourguide}
                stat={this.state.username}
                update={this.retnam}
              />
            )}
            // render={() => <div>sfvfv</div>}
          />

          <Route
            //exact
            path="/questions"
            // component={Intro}
            render={props => (
              <Questions
                {...props}
                sta={this.state.tourguide}
                stat={this.state.username}
                update={this.retnam}
                increment={this.increm}
                decrement={this.decrem}
                setnum={this.increme()}
                pagechecker={this.pageckecker()}
                settex={this.settex()}
                setopt1={this.setoption1}
                setopt2={this.setoption2}
                setopt3={this.setoption3}
                setopt4={this.setoption4}
                setopt5={this.setoption5}
                setbutt={this.setbutt()}
                setbuttb={this.setbuttb()}
                //  quest={this.state.questions[0]}
              />
            )}
            // render={() => <div>sfvfv</div>}
          />

          <Route
            //exact
            path="/result"
            // component={Intro}
            render={props => (
              <Result
                {...props}
                sta={this.state.tourguide}
                stat={this.state.username}
                update={this.retnam}
                increment={this.increm}
                decrement={this.decrem}
                setnum={this.increme()}
                pagechecker={this.pageckecker()}
                settex={this.settex()}
                score={this.totalscore()}
                //  quest={this.state.questions[0]}
              />
            )}
            // render={() => <div>sfvfv</div>}
          />
        </div>
      </Router>
    );
  }
}
export default App;
