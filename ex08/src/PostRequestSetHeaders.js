import React, { Component } from "react";

export class PostRequestSetHeaders extends Component {
  constructor() {
    super();
    this.state = { articleId: null };
  }

  componentDidMount() {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer my-token",
        "My-Custom-Header": "foobar",
      },
      body: JSON.stringify({ title: "React POST Request Example" }),
    };
    fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ articleId: data.id }));
  }
  render() {
    const { articleId } = this.state;
    return (
      <div className="card text-center m-3">
        <h5 className="card-header">Post Request with Set Headers</h5>
        <div className="card-body">Article Id: {articleId}</div>
      </div>
    );
  }
}

export default PostRequestSetHeaders;
