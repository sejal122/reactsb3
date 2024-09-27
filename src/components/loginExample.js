import React, { useState } from 'react'
import Greetuser from './greetuser'
import Greetguest from './greetguest'
import Button from 'react-bootstrap/Button'
function LoginExample() {
    const [isLoggedin,setIsLoggedin]=useState(false)
    const [text,setText]=useState('Login')
    const handleClick=()=>{
        setIsLoggedin(!isLoggedin)
        if(isLoggedin){
            setText('Login')
        }else{
            setText('Logout')
        }
        
    }
    return (
        <div>
            {isLoggedin?<Greetuser/>:<Greetguest/>}
            <button className='btn btn-primary' onClick={handleClick}>{text}</button>
        </div>
    )
}

export default LoginExample
