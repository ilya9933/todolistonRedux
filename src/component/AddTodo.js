import React from "react";
import { connect } from "react-redux";
import { addTodo, toggleAllTodo } from "../Redux/actions";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  handleChange = (event) => {
    if (event.keyCode === 13) {
      this.props.addTodo(this.state.text);
      event.preventDefault();
      this.setState({ text: "" });
    }
  };

  handleTextChange = (text) => {
    this.setState({ text });
  };

  clickOnButtonCompleted = (e) => {
    e.preventDefault();
    this.props.toggleAllTodo();
  };

  render() {
    return (
      <header className="header">
        <h1 className="h1">Todos</h1>
        <div className="header__input">
          <button
            className="togel-all"
            onClick={(e) => this.clickOnButtonCompleted(e)}
          >
            &radic;
          </button>
          <form className="form">
            <input
              className="new-todo"
              placeholder="New Todo"
              autoFocus
              onChange={(e) => this.handleTextChange(e.target.value)}
              onKeyDown={this.handleChange}
              value={this.state.text}
            />
          </form>
        </div>
      </header>
    );
  }
}

const mapDispatchToProps = {
  addTodo,
  toggleAllTodo,
};

export default connect(null, mapDispatchToProps)(AddTodo);
