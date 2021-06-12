import { React, Component } from "react";
import "./Style/Style_App.css";
import Table_Invoices from "./components/Table_Invoices";
import Create_Invoices from "./components/Create_Invoices";
import Popup from "reactjs-popup";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.getLists();
  } //вызов функции во время загрузки страницы

  getLists() {
    try {
      fetch("http://localhost:3000/invoices")
        .then((res) => res.json())
        .then((result) =>
          this.setState({
            data: result,
          })
        );
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="app">
          <div className="header_invoices">
            <p> Invoices</p>
          </div>
          <div className="add_new">
            <span>Actions</span>
            <br />

            <Popup
              trigger={<button className="button_add"> Add New</button>}
            >
              <Create_Invoices
                upload={() => this.getLists()} // передача функции для обновления страницы
              />
            </Popup>
          </div>

          <Table_Invoices
            upload={() => this.getLists()} // передача функции для обновления страницы
            data={this.state.data} //
          />
          {/*  {this.state.isOpened ? (
            <Create_Invoices
              upload={() => this.getLists()}// передача функции для обновления страницы
              view={() => this.hide()}// скрыть и показать блок который добавляет новые счета
            />
          ) : null} */}
        </div>
      </div>
    );
  }
}

export default App;
