import React, { Component, Profiler } from "react";
import { DataSource } from "./DataSource";
import { withData } from "./HOC";

class ViewCategory extends Component<any> {
  render() {
    return (
      <Profiler id="StockChart" onRender={this.logTimes}>
        <div>
          <p>ID: {this.props.data.id}</p>
          <p>Name: {this.props.data.name}</p>
        </div>
      </Profiler>
    );
  }

  logTimes = (id: any, phase: any, actualTime: any, baseTime: any, startTime: any, commitTime: any) => {
    console.log(`${id}'s ${phase} phase:`);
    console.log(`Actual time: ${actualTime}`);
    console.log(`Base time: ${baseTime}`);
    console.log(`Start time: ${startTime}`);
    console.log(`Commit time: ${commitTime}`);
  };
}

export default withData(ViewCategory, () => DataSource.getCategory(10));
