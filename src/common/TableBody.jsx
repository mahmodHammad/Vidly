import React, { Component } from "react";
import _ from "lodash";

export class tableBody extends Component {
  getCellContent = (item, column) => {
    if (column.content) return column.content(item);
    else return _.get(item, column.lable);
  };
  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            {columns.map(col => (
              <td key={item.id + (col.lable || col.key)}>
                {this.getCellContent(item, col)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default tableBody;
