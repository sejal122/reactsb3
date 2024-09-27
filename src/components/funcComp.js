import React ,{useState} from 'react';
import Greetuser from './greetuser';
import Greetguest from './greetguest';
function FuncComp(props){
const [score , setScore]=useState(10);
const [firstname , setName]=useState('');
let {name,age}=props
let messages=['mesaage1'];
const [isLoggedIn,setIsLoggedIn]=useState(false)
function printName(e){
// console.log(e)
setName(e.target.value)
}

// function greetuser(){
//     return <h1>Welcome back user!</h1>
// }
// function greetGuest(){
//     return <h1>Welcome guest!</h1>
// }
function greet(){
    if(isLoggedIn){
        return <Greetuser/>
    }else{
        return <Greetguest/>
    }
}
    return <div>
        <h1>YOUR SCORE IS -- {score}</h1>
        <button onClick={()=> setScore((score)=>score+1)}>+</button> <button onClick={()=> setScore((score)=>score-1)}>-</button>
        <h1>Hi from function component</h1>
        <h3>Data from parent = {name}</h3>
        <h4>Age from parent ={age} </h4>
        <button onClick={(e)=>console.log(e)}>Click for event</button>

        <input onChange={(e)=>printName(e)} type='text' id='nameInput'></input>


        <h4> USER = {firstname} </h4>
    {
     isLoggedIn?<Greetuser/>:<Greetguest/>
    //  isLoggedIn?greetuser():greetguest()
    }
        {
            messages.length>0 && 
            <h2>You have {messages.length} new message/s!</h2>

        }
        {
            greet()
        }
    </div>

}
export default FuncComp;