import { React, Component } from "react";
import "../Style/Style_Create_Invoinices.css";

class Create_Invoices extends Component {
  constructor() {
    super();
    this.state = {
      number: "",
      date_created: "",
      date_supplied: "",
      comment: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: event.target.value,
    });
  }

  handleClick(e) { // Проверка что в поле number будут вводиться только числа
    if (e.target.value.match(/[^0-9]/g)) {
      e.target.value = e.target.value.replace(/[^0-9]/g, "");
    }
  }

  onFocus(e) {//для изменения типа inut на тип дата
    e.target.type = "date";
  }
  onBlur(e) {
    e.target.type = "text";
  }

  async createList(e) {

    if (
      this.state.number == "" &&
      this.state.date_created == "" &&
      this.state.date_supplied == "" &&
      this.state.comment == ""
    ) {
      alert("Заполните все поля");
    } else if (this.state.number.length < 3) {
      alert("Введите больше трех чисел в поле Number");
    } else {
      await fetch("http://localhost:3000/invoices", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          number: this.state.number,
          date_created: this.state.date_created,
          date_supplied: this.state.date_supplied,
          comment: this.state.comment,
        }),
      });
    
      this.props.upload();//обновление страницы после изменения файла db.json
    }
  }

  render() {
    return (
      <div className="create_invoices">
        <p>Create Invoices</p>
        <div className="form">
          <div className="wrapper">
            <div className="inline_block">
              <div className="number">
                <label>Number:</label>
                <br />
                <input
                  type="text"
                  onInput={this.handleClick}
                  minLength={3}
                  placeholder="Number"
                  name="number"
                  id="number"
                  value={this.state.number}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="date_created">
                <label>Invoice_Date:</label>
                <br />
                <input
                  type="text"
                  onFocus={this.onFocus}
                  onBlur={this.onBlur}
                  placeholder="Select date"
                  name="date_created"
                  id="date_created"
                  value={this.state.date_created}
                  onChange={this.handleInputChange}
                />
              </div>
            </div>

            <div className="supplied_date">
              <label>Supply_Date:</label>
              <br />
              <input
                type="text"
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                placeholder="Select date"
                name="date_supplied"
                id="supplied_date"
                value={this.state.date_supplied}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="comment">
              <label>Comment:</label>
              <br />
              <input
                type="text"
                placeholder="Comment"
                name="comment"
                id="comment"
                value={this.state.comment}
                maxLength={160}
                onChange={this.handleInputChange}
              />
            </div>

            <button onClick={() => this.createList()}  className="button_send">
              Send
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Create_Invoices;
