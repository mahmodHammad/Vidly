import React, { Component } from "react";
import "../App.css";
// sortcoulumn , onSort ,columns
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";

export class TabelHeader extends Component {
  raiseSort = cloumn => {
    const sortcoulumn = { ...this.props.sortcoulumn };
    if (sortcoulumn.path === cloumn) {
      sortcoulumn.order = sortcoulumn.order === "asc" ? "desc" : "asc";
    } else {
      sortcoulumn.path = cloumn;
      sortcoulumn.order = "asc";
    }
    this.props.onSort(sortcoulumn);
  };

  renderSortIcon = Col => {
    const { sortcoulumn } = this.props;
    if (sortcoulumn.path === Col.lable) {
      if (sortcoulumn.order === "asc") {
        return (
          <FontAwesomeIcon
            color={"gray"}
            icon={faSortUp}
            style={{ cursor: "pointer" }}
          ></FontAwesomeIcon>
        );
      } else if (sortcoulumn.order === "desc") {
        return (
          <FontAwesomeIcon
            color={"gray"}
            icon={faSortDown}
            style={{ cursor: "pointer" }}
          ></FontAwesomeIcon>
        );
      }
    }
    
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(col => (
            <th
              className="clickable"
              key={col.title || col.key}
              onClick={() => this.raiseSort(col.lable)}
              scope="col"
            >
              {col.title} {this.renderSortIcon(col)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TabelHeader;
