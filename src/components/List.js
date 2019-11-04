import React from 'react';
import '../App.css';
import CloseButton from  './CloseButton'

const List = (props)=>{
    return(
       <ul className='ul'>
           {
               props.items.map((item, index) => 
               <li className='li' key={index} >{item} <CloseButton /></li>
               
               )
           }
           
       </ul>
    )
}
export default List

