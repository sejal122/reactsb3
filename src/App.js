
import './App.css';
import Errorpage from './components/Errorpage';
import ClassComp from './components/classComp';
import Dashboard from './components/dashboard';
import FuncComp from './components/funcComp';
import Lifecyclemethods from './components/lifecyclemethods';
import LoginExample from './components/loginExample';
import Navigation from './components/navigation';
import Ourservices from './components/ourservices';
import RenderList from './components/renderList';
import {Button} from 'react-bootstrap'
import {Route , Routes} from 'react-router-dom'
import Todo from './components/todo';
import TodoForm from './components/todoForm';
import Child1 from './components/child1';
import ReduxDashboard from './components/reduxDashboard';
function App() {
  let name ='Rahul'
  let age=40;
  return (

    <div className="App">
      <Navigation/>
      <Child1 age={age}/>
      <Routes>
         <Route path='/'  Component={ReduxDashboard}/>
         <Route path='/ourservices' Component={Ourservices}/>
         <Route path='/todos' Component={Todo}/>
         <Route path='/newTodo' Component={TodoForm}/>
         <Route path='*' Component={Errorpage}/>
      </Routes>










      {/* <LoginExample/>
      <RenderList/> */}
      {/* <Lifecyclemethods/>
      <Button  variant="primary">
    Button as link
  </Button> */}
     {/* <h1 id='h1'>Welcome to react</h1>
     <h3>h3</h3>
     <ClassComp myname={name}  myage={age} ></ClassComp>
     <hr/>
     <FuncComp  name={name} age={age}/> */}
    </div>

  );
}

export default App;
