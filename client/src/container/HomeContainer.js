import React, { Component } from "react";
import TableComponent from "../component/TableComponent";

export default class HomeContainer extends Component {
  render() {
    return (
      <div>
        <TableComponent players={this.props.players} />
      </div>
    );
  }
}
