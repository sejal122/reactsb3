import React, { useEffect } from 'react'
import { UseSelector,useDispatch, useSelector } from 'react-redux'
import { getAllItems,getSelectedItem } from '../store/itemsSlice'
function ReduxDashboard() {
    const dispatch=useDispatch()
    const items=useSelector(state=>state.itemsSlice)
    useEffect(()=>{
        //dispatch(getAllItems())
        console.log(items.items)
    },[])
    const search =()=>{
        const inputfield= document.getElementById('inputText')
        const id=inputfield.value
        console.log(id)
       const result= dispatch(getSelectedItem(id))
       console.log(result)
        //dispatch(getSelectedItem([id , name ]))
    }
    return (
        <div>
            <input type='text' id='inputText' ></input>
            <button onClick={search}>Search</button>
        </div>
    )
}

export default ReduxDashboard
