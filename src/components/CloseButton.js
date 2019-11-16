import React from 'react';
import '../App.css';



class CloseButton extends React.Component{
    
render(){
        return(
        <button onClick={this.props.handleClick}>X</button>
        )
    }
}
export default CloseButton;
