import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import "./todo.css";
function TodoForm() {
  const [newtodo, setNewTodo] = useState({
    title: "",
    completed: false,
  });
  const addNewTodo = (e) => {
    e.preventDefault();
    console.log(newtodo);
    fetch("http://localhost:3000/todos", {
      method: "POST",
      body: JSON.stringify(newtodo),
    }).then((res) => console.log(res.json()));
  };
  return (
    <div id="todoForm">
      <Form onSubmit={(e) => addNewTodo(e)}>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            id="totoTitle"
            placeholder="Do coding"
            onChange={(e) => setNewTodo({ ...newtodo, title: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="submit">
          <Form.Control type="submit" id="submitTodo" />
        </Form.Group>
      </Form>
    </div>
  );
}

export default TodoForm;
