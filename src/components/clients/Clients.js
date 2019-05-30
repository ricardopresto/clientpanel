import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Clients extends Component {
  render() {
    const clients = [
      {
        id: "43434343",
        firstName: "Kevin",
        lastName: "Smith",
        email: "kev@gmail.com",
        phone: "555-555-5555",
        balance: "30"
      },
      {
        id: "34343434",
        firstName: "Arse",
        lastName: "Face",
        email: "arseface@gmail.com",
        phone: "666-666-6666",
        balance: "3600"
      }
    ];

    if (clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                {" "}
                <i className="fas fa-users" /> Clients{" "}
              </h2>
            </div>
            <div className="col-md-6" />
          </div>
          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td>
                    {client.firstName} {client.lastName}
                  </td>
                  <td>{client.email}</td>
                  <td>€{parseFloat(client.balance).toFixed(2)}</td>
                  <td>
                    <Link
                      to={`/client/${client.id}`}
                      className="btn-secondary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right" /> Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}
