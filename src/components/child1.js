import React from 'react'
import Child2 from './child2'

function Child1(props) {
    return (
        <>
        <Child2 age={props.age}/>
        </>
    )
}

export default Child1
