import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import "./todo.css";
function Todo() {
  const [task, setTask] = useState(null);

  //we make async calls in useEffect
  //callback is a function passed as an argument to another function
  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((response) => response.json())
      .then((data) => {
        setTask(data);
        console.log(data);
      });
  }, []);

  const deleteTodo = (id) => {
    console.log(id);
    //http://localhost:3000/50
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    }).then((response) => console.log(response));
  };
const updateStatus =(id,status)=>{
fetch(`http://localhost:3000/todos/${id}`,{
  method:'PATCH',
  body:JSON.stringify({completed:!status})
})
window.location.reload();
}
//   fetch('url/id' , {
//     method:'DELETE'
//   })
  return (
    <div>
        <div id='addTodo'><Link to='/newTodo'>   <FontAwesomeIcon id='addIcon' icon={faPlus} />  </Link>  </div>

      <div className="container-fluid" id="containerTodo">
        {task?.map((todo) => {
          return (
            <Card id="Todocard" style={{ width: "18rem" }} className={todo.completed?'done':'pendingg'}>
              <Card.Body>
                <Card.Title> {todo.title} </Card.Title>
                <hr />
                <Card.Subtitle className="mb-2 text-muted">
                  Status: {todo.completed ? "Completed" : "Pending"}
                </Card.Subtitle>
                <Card.Link href="#" onClick={()=>{updateStatus(todo.id,todo.completed)}}>
                  {todo.completed ? "Mark Incomplete" : "Mark Completed"}
                </Card.Link>
                <Card.Link href="#" onClick={()=>deleteTodo(todo.id)}> Delete</Card.Link>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Todo;

// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then((response)=>response.json())
//     .then((data)=>{ setTask(data);console.log(data)})
