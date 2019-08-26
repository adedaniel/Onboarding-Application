import React, { Component } from "react";

export class List extends Component {
  render() {
    return (
      <div>
        <a href="#" style={{ textDecoration: "none", color: "black" }}>
          <div
            className="panel panel-default card-view card"
            id="Marilyn"
            onClick={this.submitid}
            style={{
              //paddingBottom: 7,
              marginBottom: "10px",
              textAlign: "left"
            }}
          >
            <div className="card-body">
              <h6 />
            </div>
          </div>
        </a>

        <a href="#" style={{ textDecoration: "none", color: "black" }}>
          <div
            className="panel panel-default card-view card"
            id="Marilyn"
            onClick={this.submitid}
            style={{
              // paddingBottom: 7,
              marginBottom: "10px",
              textAlign: "left"
            }}
          >
            <div className="card-body">
              <h6 />
            </div>
          </div>
        </a>

        <a href="#" style={{ textDecoration: "none", color: "black" }}>
          <div
            className="panel panel-default card-view card"
            id="Marilyn"
            onClick={this.submitid}
            style={{
              // paddingBottom: 7,
              marginBottom: "10px",
              textAlign: "left"
            }}
          >
            <div className="card-body">
              <h6 />
            </div>
          </div>
        </a>

        <a href="#" style={{ textDecoration: "none", color: "black" }}>
          <div
            className="panel panel-default card-view card"
            id="Marilyn"
            onClick={this.submitid}
            style={{
              //  paddingBottom: 7,
              marginBottom: "10px",
              textAlign: "left"
            }}
          >
            <div className="card-body">
              <h6 />
            </div>
          </div>
        </a>

        <button
          name="submit"
          id="submit"
          //disabled
          onClick={this.props.increment}
          className="btn butt next"
          style={{
            backgroundColor: "#2f2525",
            color: "white",
            float: "right"
          }}
          disabled={this.props.setbutt}
          type="button"
          //value="Next"
        >
          {this.props.settex}
        </button>
      </div>
    );
  }
}

export default List;
