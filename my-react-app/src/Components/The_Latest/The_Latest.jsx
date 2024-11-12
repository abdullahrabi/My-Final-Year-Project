import React from 'react'
import './The_Latest.css'
import Item from "../Item/Item"
import The_Latest_Data from '../Assests/data/The_Latest'
export const The_Latest = () => {
  return (
    <div className='new-collections'>
      <h1>Our Latest Items</h1>
      <hr/>
      <div className='collections'>
        {The_Latest_Data.map ((item,i)=>{
              return <Item key ={i} id={item.id} name ={item.name} image ={item.image} new_price={item.new_price} old_price={item.old_price}/>




        })}
        
      </div>
      
      
      
      </div>
  )
}
export default The_Latest;