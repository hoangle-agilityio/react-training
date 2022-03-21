import React, { Component } from "react";

export function withData(WrappedComponent: any, selectData: any) {
  return class extends Component {
    state: any;

    constructor(props: any) {
      super(props);
      this.state = {
        data: {}
      }
    }

    componentDidMount() {
      this.setState({
        data: selectData(this.props)
      })
    }

    render(): any {
      return <WrappedComponent data={this.state.data} {...this.props} />
    }
  }
}
