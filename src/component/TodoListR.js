import React from "react";
import TodoItem from "./TodoItemR";
import { connect } from "react-redux";
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    console.log("props", this.props);
  }

  todoItem(todo, id) {
    return (
      <TodoItem
        key={id}
        index={todo.id}
        title={todo.title}
        completed={todo.completed}
      />
    );
  }
  render() {
    console.log("props", this.props.arr);
    const content = this.props.arr.map((todo, id) => {
      if (this.props.filter === "all") {
        return this.todoItem(todo, id);
      } else if (this.props.filter === "active" && !todo.completed) {
        return this.todoItem(todo, id);
      } else if (this.props.filter === "completed" && todo.completed) {
        return this.todoItem(todo, id);
      }
    });
    return (
      <section className="section">
        <ul className="ul">{content}</ul>
      </section>
    );
  }
}
function mapStateToProps(state) {
  const { arr, filter } = state.todos;
  return { arr, filter };
}
export default connect(mapStateToProps)(TodoList);
