import React, { Component } from "react";

export class Users extends Component {
  deleteU = e => {
    e.preventDefault();
    const userId = e.target.id;
    this.props.del(userId);
  };
  render() {
    return this.props.user.map((u, index) => (
      <tr key={u.id}>
        <td className="p-0">
          <center>{index + 1}</center>
        </td>
        <td>{u.firstName}</td>
        <td>{u.lastName}</td>
        <td>{u.dateofbirth}</td>
        <td>{u.gender}</td>
        <td>
          <button
            className="btn btn-light"
            onClick={this.deleteU}
            id={index}
          >
            x
          </button>
        </td>
      </tr>
    ));
  }
}

export default Users;
