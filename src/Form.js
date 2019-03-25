import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
class Form extends Component {
  state = {
    redirect: false,
    firstName: "",
    lastName: "",
    heroName: "",
    email: "",
    gender: "",
    age: ""
  };
  handleInput = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  handleClick = () => {
    let obj = { ...this.state };
    for (let key in obj) {
      if (obj[key] === "") {
        alert("Please fill all fields before proceeding..");
        return;
      }
    }

    this.setState(
      prevState => {
        return {
          ...prevState,
          redirect: !prevState.redirect,
          key: Math.floor(Math.random() * 100000)
        };
      },
      () => this.props.add(this.state)
    );
  };
  goback = () => {
    this.setState(prevState => {
      return {
        redirect: !prevState.redirect
      };
    });
  };
  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container" style={{ width: "50%" }}>
        <h3>Add a Record</h3>

        <div className="form-group">
          <label for="firstName">First Name</label>
          <input
            id="firstName"
            className="form-control"
            placeholder="First Name"
            onChange={this.handleInput}
          />
        </div>
        <div className="form-group">
          <label for="lastName">Last Name</label>
          <input
            id="lastName"
            className="form-control"
            placeholder="Last Name"
            onChange={this.handleInput}
          />
        </div>

        <div className="form-group">
          <label for="heroName">Superhero Name</label>
          <input
            id="heroName"
            className="form-control"
            placeholder="Superhero Name"
            onChange={this.handleInput}
          />
        </div>
        <div className="form-group">
          <label for="email">Email</label>
          <input
            id="email"
            className="form-control"
            placeholder="Email"
            onChange={this.handleInput}
          />
        </div>
        <div className="form-group">
          <label for="gender">Gender</label>
          <input
            id="gender"
            className="form-control"
            placeholder="Gender"
            onChange={this.handleInput}
          />
        </div>
        <div className="form-group">
          <label for="age">Age</label>
          <input
            id="age"
            className="form-control"
            placeholder="Age"
            onChange={this.handleInput}
          />
        </div>
        <button onClick={this.handleClick} className="btn btn-primary">
          Add Data
        </button>
        <button
          onClick={this.goback}
          className="btn btn-primary"
          style={{ marginLeft: 10 }}
        >
          Go Back
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return { add: data => dispatch({ type: "ADD_DATA", data: data }) };
};

export default connect(
  null,
  mapDispatchToProps
)(Form);
