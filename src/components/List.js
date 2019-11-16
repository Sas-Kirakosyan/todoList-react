import React from 'react';
import '../App.css';
import CloseButton from  './CloseButton'

class List extends React.Component {
  
 render(){
        return(
            <ul className='ul'>
                {
                    this.props.items.map((item, index) => 
                    <li className='li' key={index} >{item} 
                    <CloseButton key={index} handleClick={(e)=>this.props.removeItem(index)} />
                </li>
                    )
                }
                
            </ul>
         )
    }
 
}
export default List


