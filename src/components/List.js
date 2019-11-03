import React from 'react';
import '../App.css';

const List = (props)=>{
    return(
       <ul className='ul'>
           {
               props.items.map((item, index) => 
               <li className='li' key={index} >{item}</li>
               )
           }
           
       </ul>
    )
}
export default List

