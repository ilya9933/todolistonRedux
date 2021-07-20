import React from "react";
import AddTodo from "./component/AddTodo";
import Footer from "./component/FooterR";
import TodoList from "./component/TodoListR";

export class App extends React.Component {
  render() {
    return (
      <>
        <AddTodo />
        <TodoList />
        <Footer />
      </>
    );
  }
}

export default App;
