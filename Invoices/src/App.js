import { React, Component } from "react";
import "./Style/Style_App.css";
import Table_Invoices from "./components/Table_Invoices";
import Create_Invoices from "./components/Create_Invoices";
import ReactDOM from "react-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      isOpened: false,
    };
  }

  componentDidMount() {
    this.getLists();
  }//вызов функции во время загрузки страницы

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

  show() { // скрыть и показать блок который добавляет новые счета
    this.setState({ isOpened: true });
  }
  hide() {
    this.setState({ isOpened: false });
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
            <button onClick={() => this.show()} className="button_add">
              Add New
            </button>
          </div>

          <Table_Invoices
            upload={() => this.getLists()}// передача функции для обновления страницы
            data={this.state.data}// 
          />
          {this.state.isOpened ? (
            <Create_Invoices
              upload={() => this.getLists()}// передача функции для обновления страницы
              view={() => this.hide()}// скрыть и показать блок который добавляет новые счета
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
