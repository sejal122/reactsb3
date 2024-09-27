import React from 'react'
import {Link} from 'react-router-dom'
function Navigation() {
    return (
        <div>
            <ul>
                <li style={{listStyle:'none',padding:'10px',margin:'5px',backgroundColor:'purple',Color:'white',textDecoration:'none'}}>   <Link to={'/'}>Dashboard</Link></li>  
                <li>  <Link to={'/ourservices'}>    Our services   </Link></li> 
                <li>  <Link to={'/todos'}>   TODOs  </Link></li> 
                
                {/* url should change to '/ourservices'  on click*/}
            </ul>
        </div>
    )
}

export default Navigation
