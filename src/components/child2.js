import React from 'react'
import Child3 from './child3'

function Child2(props) {
    return (
        <>
        <Child3 age={props.age}/>
        </>
    )
}

export default Child2
