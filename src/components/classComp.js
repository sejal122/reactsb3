import react, { PureComponent } from 'react'

class ClassComp extends PureComponent{

    constructor(props){
        super(props); // to invoke parentCLass's constructor
        this.name='Riya'
        this.state={
            score:0,
            firstname:''
        }
        // this.inc=this.inc.bind(this)
    }
    inc=()=>{
     this.setState({
        score:this.state.score+1
     })
    }
    dec=()=>{
        this.setState({
            score:this.state.score-1
         })
    }
     printName=(e)=>{
        console.log(e)
       this.setState({
        firstname:e.target.value
       })
        }
    render(){
        return <div>
             <h1>YOUR SCORE IS -- {this.state.score}</h1>
        <button onClick={this.inc}>+</button> <button onClick={this.dec}>-</button>
            <h1>Hi from class component</h1>
            <h4>Data from parent = {this.props.myname} </h4>
            <h5>Age from parent = {this.props.myage}</h5>

            <input onChange={(e)=>this.printName(e)} type='text' id='nameInput'></input>
            <h4> USER = {this.state.firstname} </h4>
            </div>
    }
}
export default ClassComp