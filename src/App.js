import "./App.css";
import Header from "./My Components/Header";
import Todos from "./My Components/Todos";
import Footer from "./My Components/Footer";
import AddTodo from "./AddTodo";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./My Components/About";
function App() {
  let initTodo = [];
  if (localStorage.getItem("todos") !== null) {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  function addTodo(title, desc) {
    var sno;
    if (todos.length === 0) sno = 0;
    else sno = todos[todos.length - 1].sno + 1;
    const item = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, item]);
  }
  function onDelete(e) {
    setTodos(todos.filter((todo) => e !== todo));
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={true} />

        <Switch>
          <Route exact path="/">
            <>
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
