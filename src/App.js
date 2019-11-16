import React from 'react';
import './App.css';
 import List from './components/List'




class mainTodo extends React.Component{
constructor(props){
  super(props)
  this.state=({
 
    text: '',
  listItems:[],
    check: false,
    })
}
handleInput =(e)=>{
this.setState({
  text: e.target.value,
  })
}
submitHendle =(e)=>{
  console.log(e)
  let text = this.state.text;
  let id = this.state.id;
  let listItem = this.state.listItems
 e.preventDefault();
  this.setState({
   listItems: [...listItem, text]
   
   })
  
}
removeItem=(e)=>{
 this.setState({
   listItem: this.state.listItems.splice(e, 1)
 })
 
}

render(){
  return(
  <div className='container'>
    <h1 className='h1'>My todo list app</h1>
   <form className="App">
       <input type="text" onChange={this.handleInput} value={this.state.text} />
       <button onClick={this.submitHendle}>Add</button>
    </form>
  {/* pastoreyn onsubmit@ formi mej poxarinum a buttoni meji onclickin */}
    <List removeItem={this.removeItem} items={this.state.listItems} >
  </List>
  </div>)
  }
}
export default mainTodo;
