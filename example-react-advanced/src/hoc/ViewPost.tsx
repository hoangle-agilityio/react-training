import React, { Component } from "react";
import { DataSource } from "./DataSource";
import { withData } from "./HOC";

class ViewPost extends Component<any> {
  render() {
    return (
      <div>
        <p>ID: {this.props.data.id}</p>
        <p>Name: {this.props.data.name}</p>
        <p>Content: {this.props.data.content}</p>
      </div>
    );
  }
}

export default withData(ViewPost, () => DataSource.getPost(5));
