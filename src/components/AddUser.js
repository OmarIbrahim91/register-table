import React, { Component } from "react";

export class AddUser extends Component {
  state = {
    fname: "",
    lname: "",
    dob: "",
    gender: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.add(this.state);
    this.setState({
      fname: "",
      lname: "",
      dob: "",
      gender: ""
    });
  };


  handleFormChanges = e => {
    const formElem = e.target.name;
    const elemValue = e.target.value;
    this.setState({
      [formElem]: elemValue
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="container bg-danger text-light rounded-top">
        <form onSubmit={this.onSubmit}>
          <div className="form-inline row p-3">
            <label className="col-md-2">FirstName:</label>
            <input
              type="text"
              name="fname"
              id="fn"
              className="col-md-4 form-control"
              value={this.state.fname}
              onChange={this.handleFormChanges}
            />
            <label className="col-md-2">LastName:</label>
            <input
              type="text"
              name="lname"
              id="ln"
              className="col-md-4 form-control"
              value={this.state.lname}
              onChange={this.handleFormChanges}
            />
          </div>
          <div className="form-inline row mx-auto pt-3">
            <label className="col-md-2">Date Of Birth:</label>
            <input
              type="Date"
              name="dob"
              id="dob"
              className="col-md-4 form-control"
              value={this.state.dob}
              onChange={this.handleFormChanges}
            />
            <label className="col-md-2">Gender:</label> Male
            <input
              type="radio"
              name="gender"
              id="gender"
              value="male"
              className="ml-1"
              onClick={this.handleFormChanges}
            />
            <label className="ml-5">Female</label>
            <input
              type="radio"
              name="gender"
              id="gender"
              value="female"
              className="ml-1"
              onClick={this.handleFormChanges}
            />
          </div>
          <center>
            <input
              type="submit"
              value="Register"
              className="btn btn-outline-dark btn-light m-3 mt-5 pl-5 pr-5"
            />
          </center>
        </form>
      </div>
    );
  }
}

export default AddUser;
