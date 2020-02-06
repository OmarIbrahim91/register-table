import React from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import Users from "./components/UsersList";
import uuid from "uuid";

class App extends React.Component {
  state = {
    users: [
  
    ]
  };

  addUser = stateObj => {
    const newUser = {
      firstName: stateObj.fname,
      lastName: stateObj.lname,
      dateofbirth: stateObj.dob,
      gender: stateObj.gender,
      id: uuid.v4()
    };
    this.state.users.push(newUser);
    //this.setState({ users: [...this.state.users, newUser] });
    this.forceUpdate();
    console.log("State:");
    console.log(this.state);
  };

  //delete users
  deleteUser = uid => {
    console.log(uid);
    delete this.state.users[uid];
    this.forceUpdate();
  };

  render() {
    return (
      <div className="App">
        <h3 className="welcome">Registration Form</h3>
        <AddUser add={this.addUser} />
        <table className="table container bg-secondary text-light ">
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>DOB</th>
              <th>Gender</th>
              
            </tr>
          </thead>
          <tbody className="bg-danger m-0">
            <Users user={this.state.users} del={this.deleteUser} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
