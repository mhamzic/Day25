import React, { Component } from "react";

export class DeleteRequest extends Component {
  constructor() {
    super();
    this.state = { status: null };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1", { method: "DELETE" }).then(() => this.setState({ status: "Delete successful" }));
  }

  render() {
    const { status } = this.state;
    return (
      <div className="card text-center m-3">
        <h5 className="card-header">Simple DELETE Request</h5>
        <div className="card-body">Status: {status}</div>
      </div>
    );
  }
}

export default DeleteRequest;
