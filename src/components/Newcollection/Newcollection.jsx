import React, { useEffect, useState } from 'react'
import './Newcollection.css'

import Item from '../Items/Item'
const Newcollection = () => {
  
  const [new_collection,setNew_collection] = useState([]);
   
   useEffect(()=>{
    fetch('http://localhost:4000/newcollections')
    .then((response)=>response.json())
    .then((data)=>setNew_collection(data))
   },[])
  return (
    <div className='new-collection'>
      <h1>NEW COLLECTION</h1>
      <hr/>
      <div className="collection">
        { new_collection.map((item,i)=>{
            return (<Item
            key={i}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
            );
        })}

      </div>
    </div>
  )
}

export default Newcollection
