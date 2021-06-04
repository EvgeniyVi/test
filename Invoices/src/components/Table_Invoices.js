import "../Style/Style_Table_Invoices.css";
import { React, Component } from "react";

class Table_Invoices extends Component {
  constructor() {
    super();
    this.deleted = this.deleted.bind(this);
  }

  async deleted(e) {
    await fetch("http://localhost:3000/invoices/" + e.target.id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    this.props.upload();
  }

  render() {
    return (
      <div>
        <div className="invoices">
          <p>Invoices</p>
          <table>
            <tbody className="tbody">
              <tr>
                <th className="th">Create</th>
                <th className="th">No</th>
                <th className="th">Supply</th>
                <th className="th">Comment</th>
                <th className="th">Actions</th>
              </tr>
            </tbody>
            {this.props.data.map((item, i) => {
              return (
                <tbody key={i}>
                  <tr>
                    <td className="td">{item.date_created}</td>
                    <td className="td">{item.number}</td>
                    <td className="td">{item.date_supplied}</td>
                    <td className="td">{item.comment}</td>
                    <td>
                      <button onClick={this.deleted} id={item.id}>
                        Deleted
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    );
  }
}

export default Table_Invoices;
