import React, { PureComponent } from 'react'
import Button from 'react-bootstrap/Button'
class Lifecyclemethods extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            count:5,
            color:'red'
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({count:100})
            this.setState({color:'black'})
        },2000) // this function will be CALLED after 2 seconds
    }
    updatecount=()=>{
        this.setState({count:this.state.count+1})
    }
    componentDidUpdate(){
            console.log('updated state is: ' + this.state.count)
            console.log('updated color state is: ' + this.state.color)
    }
    getSnapshotBeforeUpdate(prevprops,prevstate){
        console.log('The previous state of color before updating was: ' + prevstate.color)
    }
    
    render() {
        return (
            <div><h1>life cycle methods</h1>
            <h4>{this.state.count}</h4>
            <Button variant='primary' onClick={this.updatecount}>+</Button>
            </div>
        )
    }
}

export default Lifecyclemethods