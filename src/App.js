import React from 'react';
import './App.css';
 import List from './components/List'
 import CloseButton from './components/CloseButton'

class mainTodo extends React.Component{
constructor(props){
  super(props)
  this.state=({
    terms: '',
    items:[],
    close: ''
  })
}

handleInput =(e)=>{
this.setState({
  terms: e.target.value,
  
    })
}
submitHendle =(e)=>{
  e.preventDefault();
  this.setState({
     items: [...this.state.items, this.state.terms]
   
  })
}
render(){
  return(
  <div className='container'>
    <h1 className='h1'>My todo list</h1>
    <form className="App" onSubmit={this.submitHendle} >
     <input type="text" onChange={this.handleInput} value={this.state.terms} />
     <button>Add</button>
    </form>

    <List items={this.state.items} ><CloseButton /></List>
  </div>)
  }
}
export default mainTodo;

