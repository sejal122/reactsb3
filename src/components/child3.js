import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement } from '../store/counterSlice'
function Child3(props) {
    //useselector is used to access the state in the store
    const counter=useSelector((state)=>state)
    const dispatch=useDispatch()
    //useDispatch  is to trigger funtions / reducers inside slices

    console.log(counter)
    const inc =()=>{
        dispatch(increment())
    }
    const dec =()=>{
        dispatch(decrement())
    }
    return (
        <>
        <h4>COUNTER : {counter.counter.counter}</h4>
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
        </>
    )
}

export default Child3
