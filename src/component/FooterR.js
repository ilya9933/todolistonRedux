import React from "react";
import { connect } from "react-redux";
import { toggleFilter, clearCompleted } from "../Redux/actions";

class Footer extends React.Component {
  itemsLeft() {
    let itemsLeft = this.props.arr.filter((item) => item.completed === false);

    return itemsLeft;
  }
  clickOnButton = (id) => {
    this.props.toggleFilter(id);
  };
  clickOnButtonClear = (e) => {
    e.preventDefault();
    this.props.clearCompleted();
  };
  render() {
    return (
      <footer className="Footer">
        <div>{this.itemsLeft().length} items left</div>
        <div>
          <button
            id="all"
            onClick={(e) => this.clickOnButton(e.target.id)}
            className={this.props.filter === "all" ? "border" : ""}
          >
            all
          </button>
          <button
            id="active"
            onClick={(e) => this.clickOnButton(e.target.id)}
            className={this.props.filter === "active" ? "border" : ""}
          >
            active
          </button>
          <button
            id="completed"
            onClick={(e) => this.clickOnButton(e.target.id)}
            className={this.props.filter === "completed" ? "border" : ""}
          >
            completed
          </button>
        </div>
        <button onClick={(e) => this.clickOnButtonClear(e)}>clear</button>
      </footer>
    );
  }
}

function mapStateToProps(state) {
  const { arr } = state.todos;
  const { filter } = state.todos;
  return { arr, filter };
}

const mapDispatchToProps = {
  toggleFilter,
  clearCompleted,
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
