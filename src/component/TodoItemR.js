import React from "react";
import { connect } from "react-redux";
import { toggleTodo, remuveButton } from "../Redux/actions";

class TodoItem extends React.Component {
  handleRemove = (e, id) => {
    e.preventDefault();

    this.props.remuveButton(id);
  };

  handleCompleted = (e) => {
    this.props.toggleTodo(this.props.index);
    console.log("Change value");
  };

  render() {
    const { index, completed, title } = this.props;
    console.log("item", completed);

    return (
      <li className="li">
        <label className={completed ? "text-completed" : "text"}>
          <input
            type="checkbox"
            checked={completed}
            name={title}
            onChange={this.handleCompleted}
          />
          {title}
        </label>
        <button
          className="button-clear"
          onClick={(e) => this.handleRemove(e, index)}
        >
          &times;
        </button>
      </li>
    );
  }
}

const mapDispatchToProps = {
  toggleTodo,
  remuveButton,
};

export default connect(null, mapDispatchToProps)(TodoItem);
